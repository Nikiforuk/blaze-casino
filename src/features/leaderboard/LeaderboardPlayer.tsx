import Image from 'next/image';

import styles from './LeaderboardPlayer.module.scss';
import { LeaderboardPlayer as LeaderboardPlayerType } from './types';
import firstPlace from '../../assets/icons/1st-place.svg';
import secondPlace from '../../assets/icons/2nd-place.svg';
import thirdPlace from '../../assets/icons/3rd-place.svg';
import dollar from '../../assets/icons/dollar.svg';

interface LeaderboardPlayerProps {
  player: LeaderboardPlayerType;
  isCurrentUser: boolean;
}

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return firstPlace;
    case 2:
      return secondPlace;
    case 3:
      return thirdPlace;
    default:
      return null;
  }
}

export function LeaderboardPlayer({ player, isCurrentUser }: LeaderboardPlayerProps) {
  const rankIcon = getRankIcon(player.rank);

  return (
    <div className={`${styles.container} ${isCurrentUser ? styles.currentUser : ''}`}>
      {rankIcon ? (
        <Image className={styles.place} src={rankIcon} width={32} height={32} alt="place-image" />
      ) : (
        <b className={styles.placeNum}>{player.rank}</b>
      )}
      <div className={styles.content}>
        <div className={styles.infoContent}>
          <div className={styles.usernameWrapper}>
            <h3 className={styles.infoContent_title}>{player.username}</h3>
            {isCurrentUser && <span className={styles.youLabel}>(you)</span>}
          </div>
          <div className={styles.balance}>
            <Image
              src={dollar}
              width={16}
              height={16}
              alt="dollar-image"
              className={styles.balance_icon}
            />
            <p className={styles.balance_sum}>{player.totalWagered.toLocaleString()}</p>
          </div>
        </div>
        <div className={styles.infoContent}>
          <p className={styles.infoContent_text}>{player.gamesPlayed} games</p>
          <p className={styles.infoContent_percentOfWin}>{player.winRate}% win</p>
        </div>
      </div>
    </div>
  );
}

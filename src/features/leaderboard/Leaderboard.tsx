import Image from 'next/image';

import styles from './Leaderboard.module.scss';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardPlayers from './LeaderboardPlayers';
import goldCup from '../../assets/icons/gold-cup.svg';

export default function Leaderboard() {
  return (
    <div className={styles.container}>
      <LeaderboardHeader />
      <LeaderboardPlayers />
      <Image
        className={styles.goldCup}
        src={goldCup}
        width={120}
        height={120}
        alt="gold-cup-image"
      />
    </div>
  );
}

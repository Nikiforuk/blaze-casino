'use client';

import Image from 'next/image';

import { useLeaderboard } from './hooks';
import styles from './Leaderboard.module.scss';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardLoader from './LeaderboardLoader';
import LeaderboardPlayers from './LeaderboardPlayers';
import goldCup from '../../assets/icons/gold-cup.svg';

export default function Leaderboard() {
  const { data, isLoading, isError } = useLeaderboard();

  return (
    <div className={styles.container}>
      <LeaderboardHeader />
      {isLoading && <LeaderboardLoader />}
      {isError && <p className={styles.error}>Failed to load leaderboard</p>}
      {data && <LeaderboardPlayers players={data.players} currentUser={data.currentUser} />}
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

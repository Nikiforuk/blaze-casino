import styles from './LeaderboardHeader.module.scss';

export default function LeaderboardHeader() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Leaderboard</h4>
      <p className={styles.subtitle}>Top players</p>
    </div>
  );
}

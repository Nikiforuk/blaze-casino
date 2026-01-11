import { LeaderboardPlayer } from './LeaderboardPlayer';
import styles from './LeaderboardPlayers.module.scss';

export default function LeaderboardPlayers() {
  return (
    <div className={styles.container}>
      <LeaderboardPlayer />
      <LeaderboardPlayer />
      <LeaderboardPlayer />
      <LeaderboardPlayer />
      <LeaderboardPlayer />
      <LeaderboardPlayer />
      <LeaderboardPlayer />
      <LeaderboardPlayer />
    </div>
  );
}

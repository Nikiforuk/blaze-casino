import styles from './Dashboard.module.scss';
import Leaderboard from '../leaderboard/Leaderboard';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Leaderboard />
    </div>
  );
}

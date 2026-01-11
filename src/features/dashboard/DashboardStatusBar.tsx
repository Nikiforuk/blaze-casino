import styles from './DashboardStatusBar.module.scss';

interface DashboardStatusBarProps {
  statusBar?: string;
}

export default function DashboardStatusBar({ statusBar }: DashboardStatusBarProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{statusBar}</p>
    </div>
  );
}

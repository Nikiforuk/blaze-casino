import styles from './UserStatus.module.scss';

interface UserStatusProps {
  level: string;
}

export default function UserStatus({ level }: UserStatusProps) {
  return (
    <div className={styles.container}>
      <b className={styles.level}>V{level}</b>
    </div>
  );
}

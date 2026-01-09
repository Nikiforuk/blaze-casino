'use client';

import { AuthGuard, useAuthStore, useLogout } from '@/features/auth';
import PrimaryButton from '@/ui/PrimaryButton';

import styles from './page.module.scss';

function DashboardContent() {
  const { user } = useAuthStore();
  const { mutate: logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.userInfo}>Welcome, {user?.userName || 'User'}!</p>
        <p className={styles.userInfo}>User ID: {user?.userId}</p>
        <div className={styles.logoutButton}>
          <PrimaryButton
            text={isPending ? 'Logging out...' : 'Logout'}
            type="button"
            disabled={isPending}
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  );
}

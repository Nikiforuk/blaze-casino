import { AuthGuard } from '@/features/auth';
import Dashboard from '@/features/dashboard/Dashboard';
import Header from '@/shared/layout/Header';

import styles from './page.module.scss';

export default function Home() {
  return (
    <AuthGuard>
      <Header />
      <main className={styles.container}>
        <Dashboard />
      </main>
    </AuthGuard>
  );
}

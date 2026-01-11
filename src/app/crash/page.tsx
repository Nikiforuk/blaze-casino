'use client';
import PageTransition from '@/features/dashboard/animations/PageTransition';

import styles from './page.module.scss';

export default function CrashPage() {
  return (
    <PageTransition>
      <div className={styles.container}>CrashGame</div>
    </PageTransition>
  );
}

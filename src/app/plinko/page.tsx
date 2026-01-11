'use client';
import PageTransition from '@/features/dashboard/animations/PageTransition';

import styles from './page.module.scss';

export default function PlinkoPage() {
  return (
    <PageTransition>
      <div className={styles.container}>PlinkoGame</div>
    </PageTransition>
  );
}

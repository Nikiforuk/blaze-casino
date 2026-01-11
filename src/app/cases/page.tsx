'use client';
import PageTransition from '@/features/dashboard/animations/PageTransition';

import styles from './page.module.scss';

export default function CasesPage() {
  return (
    <PageTransition>
      <div className={styles.container}>CasesGame</div>
    </PageTransition>
  );
}

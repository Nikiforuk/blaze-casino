'use client';
import PageTransition from '@/features/dashboard/animations/PageTransition';

import styles from './page.module.scss';

export default function MinesPage() {
  return (
    <PageTransition>
      <div className={styles.container}>MinesGame</div>
    </PageTransition>
  );
}

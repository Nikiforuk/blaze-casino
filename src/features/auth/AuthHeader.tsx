import Logo from '@/ui/Logo';

import styles from './AuthHeader.module.scss';

export default function AuthHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.welcome}>
        <h1 className={styles.welcome_title}>Blaze Casino</h1>
        <h2 className={styles.welcome_subtitle}>Welcome back!</h2>
      </div>
    </div>
  );
}

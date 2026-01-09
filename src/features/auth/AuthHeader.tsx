'use client';

import Image from 'next/image';

import ShimmerMotion from './animations/ShimmerMotion';
import styles from './AuthHeader.module.scss';
import logo from '../../assets/icons/logo.svg';

export default function AuthHeader() {
  return (
    <div className={styles.container}>
      <ShimmerMotion className={styles.logo}>
        <Image src={logo} width={40} height={40} alt="logo-image" />
      </ShimmerMotion>
      <div className={styles.welcome}>
        <h1 className={styles.welcome_title}>Blaze Casino</h1>
        <h2 className={styles.welcome_subtitle}>Welcome back!</h2>
      </div>
    </div>
  );
}

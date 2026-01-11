import Image from 'next/image';

import styles from './Logo.module.scss';
import logo from '../assets/icons/logo.svg';

export default function Logo() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logoText}
        src={logo}
        width={40}
        height={40}
        alt="logo-image"
        priority
      />
    </div>
  );
}

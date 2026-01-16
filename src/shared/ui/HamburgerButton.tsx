import Image from 'next/image';

import styles from './HamburgerButton.module.scss';
import hamburger from '../../assets/icons/hamburger.svg';

export default function HamburgerButton() {
  return (
    <button className={styles.button} type="button">
      <Image src={hamburger} width={24} height={24} alt="hamburger-image" />
    </button>
  );
}

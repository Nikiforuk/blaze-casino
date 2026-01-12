import Image from 'next/image';

import styles from './HamburgerButton.module.scss';
import hamburger from '../../assets/icons/hamburger.svg';

interface HamburgerButtonProps {
  onClick?: () => void;
}

export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <Image src={hamburger} width={24} height={24} alt="hamburger-image" />
    </button>
  );
}

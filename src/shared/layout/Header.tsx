'use client';
import Image from 'next/image';

import { useLogout } from '@/features/auth';

import styles from './Header.module.scss';
import avatar from '../../assets/icons/avatar.svg';
import loginOutline from '../../assets/icons/login-outline.svg';
import logo from '../../assets/icons/logo-main.svg';
import Balance from '../ui/Balance';
import SecondaryButton from '../ui/SecondaryButton';
import SettingsButton from '../ui/SettingsButton';

export default function Header() {
  const { mutate: logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={styles.container}>
      <div className={styles.leftSide}>
        <h4 className={styles.leftSide_title}>Blaze</h4>
        <Image src={logo} width={40} height={40} alt="logo-main-image" />
        <h4 className={styles.leftSide_title}>Casino</h4>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.rightSide_box}>
          <Balance />
          <Image src={avatar} width={32} height={32} alt="avatar-image" />
        </div>
        <div className={styles.rightSide_box}>
          <SettingsButton />
          <SecondaryButton
            icon={loginOutline}
            iconWidth={24}
            iconHeight={24}
            text={isPending ? 'Loading...' : 'Log out'}
            type="button"
            height="42px"
            width="118px"
            onClick={handleLogout}
          />
        </div>
      </div>
    </header>
  );
}

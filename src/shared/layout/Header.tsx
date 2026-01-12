'use client';
import { useState } from 'react';

import Image from 'next/image';

import { useLogout } from '@/features/auth';

import styles from './Header.module.scss';
import SideBar from './SideBar';
import avatar from '../../assets/icons/avatar.svg';
import loginOutline from '../../assets/icons/login-outline.svg';
import logo from '../../assets/icons/logo-main.svg';
import Balance from '../ui/Balance';
import HamburgerButton from '../ui/HamburgerButton';
import SecondaryButton from '../ui/SecondaryButton';
import SettingsButton from '../ui/SettingsButton';

export default function Header() {
  const { mutate: logout, isPending } = useLogout();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className={styles.container}>
        <div className={styles.mobileLayout}>
          <div className={styles.mobileLayout_hamburger}>
            <HamburgerButton onClick={handleOpenSidebar} />
          </div>
          <div className={styles.mobileLayout_balance}>
            <Balance />
          </div>
          <div className={styles.mobileLayout_avatar}>
            <Image src={avatar} width={32} height={32} alt="avatar-image" />
          </div>
        </div>
        <div className={styles.brand}>
          <h4 className={styles.brand_title}>Blaze</h4>
          <Image src={logo} width={40} height={40} alt="logo-main-image" />
          <h4 className={styles.brand_title}>Casino</h4>
        </div>
        <div className={styles.actions}>
          <div className={styles.actions_userInfo}>
            <Balance />
            <Image src={avatar} width={32} height={32} alt="avatar-image" />
          </div>
          <div className={styles.actions_controls}>
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
      <SideBar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
}

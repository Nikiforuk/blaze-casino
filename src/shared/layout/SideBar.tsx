'use client';
import Image from 'next/image';

import { useLogout } from '@/features/auth';

import styles from './Sidebar.module.scss';
import invertory from '../../assets/icons/invertory.svg';
import loginOutline from '../../assets/icons/login-outline.svg';
import logo from '../../assets/icons/logo-main.svg';
import settings from '../../assets/icons/settings.svg';
import MenuItem from '../ui/MenuItem';
import SecondaryButton from '../ui/SecondaryButton';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideBar({ isOpen, onClose }: SideBarProps) {
  const { mutate: logout, isPending } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={onClose}>
      <div
        className={`${styles.container} ${isOpen ? styles.containerOpen : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.inner}>
          <div className={styles.topContent}>
            <h1 className={styles.logo}>Blaze</h1>
            <Image src={logo} width={40} height={40} alt="logo-image" />
            <h1 className={styles.logo}>Casino</h1>
          </div>
          <div className={styles.menuItems}>
            <div className={styles.menuTop}>
              <MenuItem icon={invertory} text="Invertory" />
              <MenuItem icon={settings} text="Settings" />
            </div>
            <div className={styles.menuBottom}>
              <SecondaryButton
                text={isPending ? 'Loading...' : 'Log out'}
                icon={loginOutline}
                iconLayout="inline"
                iconWidth={24}
                iconHeight={24}
                type="button"
                height="44px"
                width="189px"
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

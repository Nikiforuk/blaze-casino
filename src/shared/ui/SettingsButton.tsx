import Image from 'next/image';

import styles from './SettingsButton.module.scss';
import settings from '../../assets/icons/settings.svg';

export default function SettingsButton() {
  return (
    <button className={styles.button} type="button">
      <Image
        className={styles.icon}
        src={settings}
        width={40}
        height={40}
        alt="settings-image"
        priority
      />
    </button>
  );
}

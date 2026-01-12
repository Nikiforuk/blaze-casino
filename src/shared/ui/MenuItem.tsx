import Image, { StaticImageData } from 'next/image';

import styles from './MenuItem.module.scss';

interface MenuItemProps {
  icon: StaticImageData;
  text?: string;
}

export default function MenuItem({ icon, text }: MenuItemProps) {
  return (
    <div className={styles.container}>
      <Image src={icon} width={18} height={18} alt="menu-item-image" />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

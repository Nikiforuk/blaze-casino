import Image from 'next/image';

import styles from './PrimaryButton.module.scss';

interface PrimaryButtonProps {
  icon?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  text?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export default function PrimaryButton({
  icon,
  type,
  text,
  iconWidth,
  iconHeight,
}: PrimaryButtonProps) {
  return (
    <button type={type} className={styles.button}>
      {text}
      {icon && (
        <Image
          className={styles.icon}
          src={icon}
          width={iconWidth}
          height={iconHeight}
          alt="primary-button-image"
        />
      )}
    </button>
  );
}

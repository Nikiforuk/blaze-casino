'use client';

import Image from 'next/image';

import styles from './SecondaryButton.module.scss';

interface SecondaryButtonProps {
  icon?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  text?: string;
  iconWidth?: number;
  iconHeight?: number;
  disabled?: boolean;
  onClick?: () => void;
  height: string;
  width: string;
}

export default function SecondaryButton({
  icon,
  type,
  text,
  iconWidth,
  iconHeight,
  disabled,
  onClick,
  height,
  width,
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      onClick={onClick}
      style={{ height, width }}
    >
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

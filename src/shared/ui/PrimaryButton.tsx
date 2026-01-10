'use client';

import Image from 'next/image';

import styles from './PrimaryButton.module.scss';

interface PrimaryButtonProps {
  icon?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  text?: string;
  iconWidth?: number;
  iconHeight?: number;
  disabled?: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({
  icon,
  type,
  text,
  iconWidth,
  iconHeight,
  disabled,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      onClick={onClick}
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

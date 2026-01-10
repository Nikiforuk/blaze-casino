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
  iconLayout?: 'absolute' | 'inline';
}

export default function PrimaryButton({
  icon,
  type,
  text,
  iconWidth,
  iconHeight,
  disabled,
  onClick,
  iconLayout = 'absolute',
}: PrimaryButtonProps) {
  const buttonClass = `${styles.button} ${disabled ? styles.disabled : ''} ${iconLayout === 'inline' ? styles.inline : ''}`;
  const iconClass =
    iconLayout === 'absolute' ? `${styles.icon} ${styles.icon_absolute}` : styles.icon;

  return (
    <button type={type} className={buttonClass} disabled={disabled} onClick={onClick}>
      {text}
      {icon && (
        <Image
          className={iconClass}
          src={icon}
          width={iconWidth}
          height={iconHeight}
          alt="primary-button-image"
          priority
        />
      )}
    </button>
  );
}

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
  iconLayout?: 'absolute' | 'inline';
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
  iconLayout = 'inline',
}: SecondaryButtonProps) {
  const buttonClass = `${styles.button} ${disabled ? styles.disabled : ''} ${iconLayout === 'absolute' ? styles.absolute : ''}`;
  const iconClass =
    iconLayout === 'absolute' ? `${styles.icon} ${styles.icon_absolute}` : styles.icon;

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      style={{ height, width }}
    >
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

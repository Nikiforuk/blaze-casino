import Image from 'next/image';

import styles from './LiveChatSendButton.module.scss';
import arrowUp from '../../assets/icons/arrow-up.svg';

interface LiveChatSendButtonProps {
  onClick: () => void;
}

export default function LiveChatSendButton({ onClick }: LiveChatSendButtonProps) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <Image src={arrowUp} width={24} height={24} alt="arrow-up-image" />
    </button>
  );
}

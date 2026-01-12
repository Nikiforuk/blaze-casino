import Image from 'next/image';

import styles from './ChatButton.module.scss';
import chat from '../../assets/icons/chat.svg';

interface ChatButtonProps {
  onClick?: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <Image src={chat} width={24} height={24} alt="chat-image" />
    </button>
  );
}

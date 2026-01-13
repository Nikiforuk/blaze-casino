import Image from 'next/image';

import UserStatus from '@/shared/ui/UserStatus';

import styles from './LiveChatMessage.module.scss';
import avatar from '../../assets/images/avatar-chat.png';

interface LiveChatMessageProps {
  username?: string;
  time?: string;
  message?: string;
  type?: 'chat' | 'join' | 'leave';
  level?: string;
}

export default function LiveChatMessage({
  username,
  time,
  message,
  type = 'chat',
  level = '1',
}: LiveChatMessageProps) {
  if (type === 'join' || type === 'leave') {
    return (
      <div className={styles.systemMessage}>
        <span className={styles.systemMessage_text}>
          {username} {type === 'join' ? 'joined the chat' : 'left the chat'}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <Image
          className={styles.imageBox_avatar}
          src={avatar}
          width={42}
          height={42}
          alt="avatar-image"
        />
      </div>
      <div className={styles.topContent}>
        <div className={styles.topContent_userInfo}>
          <UserStatus level={level} />
          <h3 className={styles.topContent_userInfo_title}>{username}</h3>
        </div>
        <time className={styles.topContent_userInfo_time}>{time}</time>
      </div>
      <div className={styles.line} />
      <div className={styles.messageBox}>
        <p className={styles.messageBox_message}>{message}</p>
      </div>
    </div>
  );
}

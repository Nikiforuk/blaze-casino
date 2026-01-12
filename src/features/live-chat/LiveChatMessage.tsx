import Image, { StaticImageData } from 'next/image';

import UserStatus from '@/shared/ui/UserStatus';

import styles from './LiveChatMessage.module.scss';

interface LiveChatMessageProps {
  avatar: StaticImageData;
  level: string;
  username?: string;
  time?: string;
  message?: string;
}

export default function LiveChatMessage({
  avatar,
  level,
  username,
  time,
  message,
}: LiveChatMessageProps) {
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

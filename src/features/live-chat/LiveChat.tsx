import styles from './LiveChat.module.scss';
import LiveChatHeader from './LiveChatHeader';
import LiveChatInput from './LiveChatInput';
import LiveChatMessage from './LiveChatMessage';
import LiveChatSendButton from './LiveChatSendButton';
import avatar from '../../assets/images/avatar-chat.png';

interface LiveChatProps {
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function LiveChat({ isModal = false, isOpen = false, onClose }: LiveChatProps) {
  if (isModal) {
    return (
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={onClose}>
        <div
          className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <LiveChatHeader />
          <div className={styles.messages}>
            <LiveChatMessage
              avatar={avatar}
              level="1"
              username="Mia Shtorm"
              time="15.35"
              message="Hello! Is the live roulette available right now? It says 'connecting'"
            />
            <LiveChatMessage
              avatar={avatar}
              level="1"
              username="Mia Shtorm"
              time="15.35"
              message="Hello! Is the live roulette available right now? It says 'connecting'"
            />
            <LiveChatMessage
              avatar={avatar}
              level="1"
              username="Mia Shtorm"
              time="15.35"
              message="Hello! Is the live roulette available right now? It says 'connecting'"
            />
          </div>
          <div className={styles.formElements}>
            <LiveChatInput />
            <LiveChatSendButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <LiveChatHeader />
      <div className={styles.messages}>
        <LiveChatMessage
          avatar={avatar}
          level="1"
          username="Mia Shtorm"
          time="15.35"
          message="Hello! Is the live roulette available right now? It says 'connecting'"
        />
        <LiveChatMessage
          avatar={avatar}
          level="1"
          username="Mia Shtorm"
          time="15.35"
          message="Hello! Is the live roulette available right now? It says 'connecting'"
        />
        <LiveChatMessage
          avatar={avatar}
          level="1"
          username="Mia Shtorm"
          time="15.35"
          message="Hello! Is the live roulette available right now? It says 'connecting'"
        />
      </div>
      <div className={styles.formElements}>
        <LiveChatInput />
        <LiveChatSendButton />
      </div>
    </div>
  );
}

import styles from './LiveChat.module.scss';
import LiveChatHeader from './LiveChatHeader';
import LiveChatInput from './LiveChatInput';
import LiveChatMessage from './LiveChatMessage';
import LiveChatSendButton from './LiveChatSendButton';
import avatar from '../../assets/images/avatar-chat.png';

export default function LiveChat() {
  return (
    <div className={styles.container}>
      <LiveChatHeader />
      <div className={styles.messages}>
        <LiveChatMessage
          avatar={avatar}
          level="1"
          username="Mia Shtorm"
          time="15.35"
          message="Hello! Is the live roulette available right now? It says “connecting”"
        />
        <LiveChatMessage
          avatar={avatar}
          level="1"
          username="Mia Shtorm"
          time="15.35"
          message="Hello! Is the live roulette available right now? It says “connecting”"
        />
        <LiveChatMessage
          avatar={avatar}
          level="1"
          username="Mia Shtorm"
          time="15.35"
          message="Hello! Is the live roulette available right now? It says “connecting”"
        />
      </div>
      <div className={styles.formElements}>
        <LiveChatInput />
        <LiveChatSendButton />
      </div>
    </div>
  );
}

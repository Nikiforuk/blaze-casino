import Image from 'next/image';

import styles from './LiveChatSendButton.module.scss';
import arrowUp from '../../assets/icons/arrow-up.svg';

export default function LiveChatSendButton() {
  return (
    <button className={styles.button} type="submit">
      <Image src={arrowUp} width={24} height={24} alt="arrow-up-image" />
    </button>
  );
}

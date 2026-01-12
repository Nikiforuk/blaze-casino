import styles from './LiveChatInput.module.scss';

export default function LiveChatInput() {
  return (
    <input
      className={styles.input}
      name="message"
      type="text"
      placeholder="Write a message..."
      autoComplete="text"
    />
  );
}

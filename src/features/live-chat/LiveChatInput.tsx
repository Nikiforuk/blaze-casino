import styles from './LiveChatInput.module.scss';

interface LiveChatInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function LiveChatInput({ value, onChange }: LiveChatInputProps) {
  return (
    <input
      className={styles.input}
      name="message"
      type="text"
      placeholder="Write a message..."
      autoComplete="off"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

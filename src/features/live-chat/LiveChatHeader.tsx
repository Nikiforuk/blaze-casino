import styles from './LiveChatHeader.module.scss';

export default function LiveChatHeader() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>
        L<span className={styles.title_letter}>i</span>ve Chat
      </h4>
      <div className={styles.line} />
      <div className={styles.groupLabels}>
        <p className={styles.groupLabels_text}>250 online</p>
        <p className={styles.groupLabels_text}>48 friends</p>
        <p className={styles.groupLabels_text}>54 playing</p>
      </div>
    </div>
  );
}

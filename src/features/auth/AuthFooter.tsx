import styles from './AuthFooter.module.scss';

interface AuthFooterProps {
  link?: string;
  text?: string;
}

export default function AuthFooter({ link, text }: AuthFooterProps) {
  return (
    <div className={styles.container}>
      <a href={link} className={styles.link}>
        {text}
      </a>
      <div className={styles.line} />
      <p className={styles.subtext}>Your account data is stored locally in your browser</p>
    </div>
  );
}

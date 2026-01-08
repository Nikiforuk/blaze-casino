import styles from './AuthInput.module.scss';

interface AuthInputProps {
  id?: string;
  label?: boolean;
  labelText?: string;
  name?: string;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
}

export default function AuthInput({
  id,
  label = true,
  labelText,
  placeholder,
  autoComplete,
  type,
}: AuthInputProps) {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {labelText}
        </label>
      )}
      <input
        id={id}
        className={styles.input}
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
      />
    </div>
  );
}

import SigninForm from '@/features/auth/forms/SigninForm';

import styles from './page.module.scss';

export default function SigninPage() {
  return (
    <div className={styles.container}>
      <SigninForm />
    </div>
  );
}

import PrimaryButton from '@/ui/PrimaryButton';

import loginOutline from '../../../assets/icons/login-outline.svg';
import AuthFooter from '../AuthFooter';
import AuthHeader from '../AuthHeader';
import AuthInput from '../AuthInput';
import styles from './AuthForms.module.scss';

export default function SigninForm() {
  return (
    <form name="signup" className={styles.container}>
      <AuthHeader />
      <div className={styles.fields}>
        <AuthInput
          id="email"
          type="email"
          labelText="Email"
          placeholder="Enter email"
          name="email"
          autoComplete="email"
        />
        <AuthInput
          id="password"
          labelText="Password"
          placeholder="Enter password"
          name="password"
          autoComplete="current-password"
          type="password"
        />
      </div>
      <div className={styles.logIn}>
        <PrimaryButton
          text="Log in"
          type="submit"
          icon={loginOutline}
          iconWidth={24}
          iconHeight={24}
        />
      </div>
      <AuthFooter link="signup" text={`Don't have an account? Register`} />
    </form>
  );
}

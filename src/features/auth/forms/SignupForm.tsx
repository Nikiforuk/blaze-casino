import PrimaryButton from '@/ui/PrimaryButton';

import AuthFooter from '../AuthFooter';
import AuthHeader from '../AuthHeader';
import AuthInput from '../AuthInput';
import styles from './AuthForms.module.scss';

export default function SigninForm() {
  return (
    <form name="signin" className={styles.container}>
      <AuthHeader />
      <div className={styles.fields}>
        <AuthInput
          id="username"
          labelText="Username"
          placeholder="Enter username"
          name="username"
          type="text"
          autoComplete="username"
        />
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
        <PrimaryButton text="Sign up" type="submit" />
      </div>
      <AuthFooter link="signin" text={`Already have an account? Login`} />
    </form>
  );
}

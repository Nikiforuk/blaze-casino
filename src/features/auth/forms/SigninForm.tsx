'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import PrimaryButton from '@/shared/ui/PrimaryButton';

import loginOutline from '../../../assets/icons/login-outline.svg';
import FormMotion from '../animations/FormMotion';
import AuthFooter from '../AuthFooter';
import AuthHeader from '../AuthHeader';
import AuthInput from '../AuthInput';
import { useLogin } from '../hooks';
import styles from './AuthForms.module.scss';
import { signinSchema, SigninFormData } from '../schemas/auth';

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  const { mutate: login, isPending, error, isSuccess } = useLogin();

  const onSubmit = (data: SigninFormData) => {
    login(data);
  };

  const getErrorMessage = (): string | undefined => {
    if (!error) return undefined;
    const status = error.response?.status;
    if (status === 401) return 'Invalid email or password';
    if (status === 400) return 'Invalid data format';
    return 'Something went wrong. Please try again.';
  };

  return (
    <FormMotion name="signin" onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <AuthHeader />
      <div className={styles.fields}>
        <AuthInput
          id="email"
          type="email"
          labelText="Email"
          placeholder="Enter email"
          autoComplete="email"
          register={register('email')}
          error={errors.email?.message}
          isSuccess={isSuccess && !errors.email && dirtyFields.email}
        />
        <AuthInput
          id="password"
          labelText="Password"
          placeholder="Enter password"
          autoComplete="current-password"
          type="password"
          register={register('password')}
          error={errors.password?.message}
          isSuccess={isSuccess && !errors.password && dirtyFields.password}
        />
        {error && <p className={styles.error}>{getErrorMessage()}</p>}
      </div>
      <div className={styles.logIn}>
        <PrimaryButton
          text={isPending ? 'Logging in...' : 'Log in'}
          type="submit"
          icon={loginOutline}
          iconWidth={24}
          iconHeight={24}
          disabled={isPending}
        />
      </div>
      <AuthFooter link="signup" text={`Don't have an account? Register`} />
    </FormMotion>
  );
}

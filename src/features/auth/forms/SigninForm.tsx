'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import PrimaryButton from '@/ui/PrimaryButton';

import loginOutline from '../../../assets/icons/login-outline.svg';
import AuthFooter from '../AuthFooter';
import AuthHeader from '../AuthHeader';
import AuthInput from '../AuthInput';
import styles from './AuthForms.module.scss';
import { signinSchema, SigninFormData } from '../schemas/auth';

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, dirtyFields },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = (data: SigninFormData) => {
    console.log(data);
  };

  return (
    <form name="signup" className={styles.container} onSubmit={handleSubmit(onSubmit)}>
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
          isSuccess={isSubmitSuccessful && !errors.email && dirtyFields.email}
        />
        <AuthInput
          id="password"
          labelText="Password"
          placeholder="Enter password"
          autoComplete="current-password"
          type="password"
          register={register('password')}
          error={errors.password?.message}
          isSuccess={isSubmitSuccessful && !errors.password && dirtyFields.password}
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

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import PrimaryButton from '@/ui/PrimaryButton';

import AuthFooter from '../AuthFooter';
import AuthHeader from '../AuthHeader';
import AuthInput from '../AuthInput';
import styles from './AuthForms.module.scss';
import { signupSchema, SignupFormData } from '../schemas/auth';

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, dirtyFields },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <form name="signin" className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <AuthHeader />
      <div className={styles.fields}>
        <AuthInput
          id="username"
          labelText="Username"
          placeholder="Enter username"
          type="text"
          autoComplete="username"
          register={register('username')}
          error={errors.username?.message}
          isSuccess={isSubmitSuccessful && !errors.username && dirtyFields.username}
        />
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
        <PrimaryButton text="Sign up" type="submit" />
      </div>
      <AuthFooter link="signin" text={`Already have an account? Login`} />
    </form>
  );
}

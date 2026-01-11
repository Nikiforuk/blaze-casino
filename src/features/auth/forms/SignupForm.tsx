'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import PrimaryButton from '@/ui/PrimaryButton';

import FormMotion from '../animations/FormMotion';
import AuthFooter from '../AuthFooter';
import AuthHeader from '../AuthHeader';
import AuthInput from '../AuthInput';
import { useRegister } from '../hooks';
import styles from './AuthForms.module.scss';
import { signupSchema, SignupFormData } from '../schemas/auth';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const { mutate: registerUser, isPending, error, isSuccess } = useRegister();

  const onSubmit = (data: SignupFormData) => {
    registerUser(data);
  };

  const getErrorMessage = (): string | undefined => {
    if (!error) return undefined;
    const status = error.response?.status;
    if (status === 409) return 'Email already exists';
    if (status === 400) return 'Invalid data format';
    return 'Something went wrong. Please try again.';
  };

  return (
    <FormMotion name="signup" onSubmit={handleSubmit(onSubmit)} className={styles.container}>
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
          isSuccess={isSuccess && !errors.username && dirtyFields.username}
        />
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
          autoComplete="new-password"
          type="password"
          register={register('password')}
          error={errors.password?.message}
          isSuccess={isSuccess && !errors.password && dirtyFields.password}
        />
        {error && <p className={styles.error}>{getErrorMessage()}</p>}
        {isSuccess && (
          <p className={styles.success}>Registration successful! Redirecting to login...</p>
        )}
      </div>
      <div className={styles.logIn}>
        <PrimaryButton
          text={isPending ? 'Signing up...' : 'Sign up'}
          type="submit"
          disabled={isPending}
        />
      </div>
      <AuthFooter link="signin" text={`Already have an account? Login`} />
    </FormMotion>
  );
}

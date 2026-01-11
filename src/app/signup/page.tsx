'use client';

import { GuestGuard } from '@/features/auth';
import SignupForm from '@/features/auth/forms/SignupForm';

import styles from './page.module.scss';

export default function SignupPage() {
  return (
    <GuestGuard>
      <div className={styles.container}>
        <SignupForm />
      </div>
    </GuestGuard>
  );
}

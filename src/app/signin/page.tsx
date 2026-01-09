'use client';

import { GuestGuard } from '@/features/auth';
import SigninForm from '@/features/auth/forms/SigninForm';

import styles from './page.module.scss';

export default function SigninPage() {
  return (
    <GuestGuard>
      <div className={styles.container}>
        <SigninForm />
      </div>
    </GuestGuard>
  );
}

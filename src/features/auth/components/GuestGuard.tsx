'use client';

import { useEffect, useSyncExternalStore } from 'react';

import { useRouter } from 'next/navigation';

import { useAuthStore } from '../store';

interface GuestGuardProps {
  children: React.ReactNode;
}

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function GuestGuard({ children }: GuestGuardProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const isHydrated = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    if (isHydrated && isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isHydrated, router]);

  if (!isHydrated) {
    return null;
  }

  if (isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}

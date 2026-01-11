import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { authService } from '../services';
import { useAuthStore } from '../store';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  LogoutResponse,
  ApiError,
} from '../types';

export const AUTH_QUERY_KEYS = {
  user: ['user'] as const,
  session: ['session'] as const,
};

export function useLogin() {
  const router = useRouter();
  const { login, setLoading } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, AxiosError<ApiError>, LoginRequest>({
    mutationFn: (data) => authService.login(data),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      login(data);
      queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEYS.user });
      router.push('/');
    },
    onError: () => {
      setLoading(false);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
}

export function useRegister() {
  const router = useRouter();
  const { setLoading } = useAuthStore();

  return useMutation<RegisterResponse, AxiosError<ApiError>, RegisterRequest>({
    mutationFn: (data) => authService.register(data),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      router.push('/signin');
    },
    onError: () => {
      setLoading(false);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
}

export function useLogout() {
  const { logout, setLoading } = useAuthStore();
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<LogoutResponse, AxiosError<ApiError>>({
    mutationFn: () => authService.logout(),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      logout();
      queryClient.clear();
      router.push('/signin');
    },
    onError: () => {
      logout();
      queryClient.clear();
      router.push('/signin');
    },
    onSettled: () => {
      setLoading(false);
    },
  });
}

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { AuthStore, LoginResponse, User } from '../types';

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,

      setTokens: (accessToken: string, refreshToken: string) => {
        set({ accessToken, refreshToken });
      },

      setUser: (user: User) => {
        set({ user });
      },

      login: (response: LoginResponse) => {
        const user: User = {
          userId: response.userId,
          userName: response.userName,
        };
        set({
          user,
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      logout: () => {
        set(initialState);
      },

      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },

      refreshTokens: (accessToken: string, refreshToken: string, userId: string) => {
        set((state) => ({
          accessToken,
          refreshToken,
          user: state.user ? { ...state.user, userId } : null,
        }));
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);

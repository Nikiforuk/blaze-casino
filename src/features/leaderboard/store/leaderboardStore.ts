import { create } from 'zustand';

import { LeaderboardPlayer } from '../types';

interface LeaderboardState {
  players: LeaderboardPlayer[];
  currentUser: LeaderboardPlayer | null;
  isLoading: boolean;
  error: string | null;
}

interface LeaderboardActions {
  setLeaderboardData: (players: LeaderboardPlayer[], currentUser: LeaderboardPlayer) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

type LeaderboardStore = LeaderboardState & LeaderboardActions;

const initialState: LeaderboardState = {
  players: [],
  currentUser: null,
  isLoading: false,
  error: null,
};

export const useLeaderboardStore = create<LeaderboardStore>()((set) => ({
  ...initialState,

  setLeaderboardData: (players: LeaderboardPlayer[], currentUser: LeaderboardPlayer) => {
    set({ players, currentUser });
  },

  setLoading: (isLoading: boolean) => {
    set({ isLoading });
  },

  setError: (error: string | null) => {
    set({ error });
  },

  reset: () => {
    set(initialState);
  },
}));

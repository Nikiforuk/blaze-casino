'use client';

import { useQuery } from '@tanstack/react-query';

import { leaderboardService } from '../api';
import { useLeaderboardStore } from '../store';

export const LEADERBOARD_QUERY_KEYS = {
  all: ['leaderboard'] as const,
  list: () => [...LEADERBOARD_QUERY_KEYS.all, 'list'] as const,
};

export function useLeaderboard() {
  const { setLeaderboardData, setLoading, setError } = useLeaderboardStore();

  return useQuery({
    queryKey: LEADERBOARD_QUERY_KEYS.list(),
    queryFn: async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await leaderboardService.getLeaderboard({ period: 'all' });
        setLeaderboardData(data.players, data.currentUser);
        return data;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch leaderboard';
        setError(errorMessage);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    staleTime: 60 * 1000,
  });
}

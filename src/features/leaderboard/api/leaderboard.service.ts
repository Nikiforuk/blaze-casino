import { apiClient } from '../../auth/api';
import { LeaderboardResponse, LeaderboardParams } from '../types';

class LeaderboardService {
  private static instance: LeaderboardService;

  private constructor() {}

  public static getInstance(): LeaderboardService {
    if (!LeaderboardService.instance) {
      LeaderboardService.instance = new LeaderboardService();
    }
    return LeaderboardService.instance;
  }

  public async getLeaderboard(
    params: LeaderboardParams = { period: 'all' },
  ): Promise<LeaderboardResponse> {
    return apiClient.get<LeaderboardResponse>(`/leaderboard?period=${params.period}`);
  }
}

export const leaderboardService = LeaderboardService.getInstance();

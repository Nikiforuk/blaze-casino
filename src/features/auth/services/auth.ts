import { apiClient } from '../api';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  RefreshRequest,
  RefreshResponse,
  LogoutResponse,
} from '../types';

class AuthService {
  private static instance: AuthService;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async register(data: RegisterRequest): Promise<RegisterResponse> {
    return apiClient.post<RegisterResponse>('/auth/register', data);
  }

  public async login(data: LoginRequest): Promise<LoginResponse> {
    return apiClient.post<LoginResponse>('/auth/login', data);
  }

  public async refresh(data: RefreshRequest): Promise<RefreshResponse> {
    return apiClient.post<RefreshResponse>('/auth/refresh', data);
  }

  public async logout(): Promise<LogoutResponse> {
    return apiClient.post<LogoutResponse>('/auth/logout');
  }
}

export const authService = AuthService.getInstance();

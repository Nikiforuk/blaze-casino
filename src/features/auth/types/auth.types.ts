export interface User {
  userId: string;
  userName: string;
  email?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userId: string;
  userName: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  username: string;
  email: string;
}

export interface RefreshRequest {
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
  userId: string;
}

export interface LogoutResponse {
  message: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthActions {
  setTokens: (accessToken: string, refreshToken: string) => void;
  setUser: (user: User) => void;
  login: (response: LoginResponse) => void;
  logout: () => void;
  setLoading: (isLoading: boolean) => void;
  refreshTokens: (accessToken: string, refreshToken: string, userId: string) => void;
}

export type AuthStore = AuthState & AuthActions;

export interface ApiError {
  message: string;
  statusCode: number;
}

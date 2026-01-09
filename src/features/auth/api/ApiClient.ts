import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';

import { useAuthStore } from '../store';
import { RefreshResponse } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

interface FailedRequest {
  resolve: (token: string) => void;
  reject: (error: Error) => void;
}

class ApiClient {
  private static instance: ApiClient;
  private axiosInstance: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: FailedRequest[] = [];

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  private processQueue(error: Error | null, token: string | null = null): void {
    this.failedQueue.forEach((request) => {
      if (error) {
        request.reject(error);
      } else if (token) {
        request.resolve(token);
      }
    });
    this.failedQueue = [];
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const { accessToken } = useAuthStore.getState();
        if (accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
          _retry?: boolean;
        };

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({
                resolve: (token: string) => {
                  if (originalRequest.headers) {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                  }
                  resolve(this.axiosInstance(originalRequest));
                },
                reject,
              });
            });
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          const { refreshToken, logout, refreshTokens } = useAuthStore.getState();

          if (!refreshToken) {
            logout();
            return Promise.reject(error);
          }

          try {
            const response = await axios.post<RefreshResponse>(`${API_BASE_URL}/auth/refresh`, {
              refreshToken,
            });

            const {
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
              userId,
            } = response.data;

            refreshTokens(newAccessToken, newRefreshToken, userId);
            this.processQueue(null, newAccessToken);

            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            }

            return this.axiosInstance(originalRequest);
          } catch (refreshError) {
            this.processQueue(refreshError as Error, null);
            logout();
            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }

        return Promise.reject(error);
      },
    );
  }

  public get client(): AxiosInstance {
    return this.axiosInstance;
  }

  public async get<T>(url: string, config?: object): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: object, config?: object): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: object, config?: object): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: object): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}

export const apiClient = ApiClient.getInstance();

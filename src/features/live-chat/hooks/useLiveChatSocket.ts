import { useEffect } from 'react';

import { useAuthStore } from '@/features/auth/store';

import { socketService } from '../services';
import { useLiveChatStore } from '../store';

export function useLiveChatSocket() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const userId = useAuthStore((state) => state.user?.userId);
  const setCurrentUserId = useLiveChatStore((state) => state.setCurrentUserId);

  useEffect(() => {
    if (!accessToken) return;

    if (userId) {
      setCurrentUserId(userId);
    }

    socketService.connect(accessToken);

    return () => {
      socketService.disconnect();
    };
  }, [accessToken, userId, setCurrentUserId]);
}

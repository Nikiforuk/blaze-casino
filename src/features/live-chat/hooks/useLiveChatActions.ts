import { useCallback } from 'react';

import { socketService } from '../services';

export function useLiveChatActions() {
  const sendMessage = useCallback((message: string) => {
    if (message.trim()) {
      socketService.sendMessage(message.trim());
    }
  }, []);

  const joinRoom = useCallback((roomId: string) => {
    socketService.joinRoom(roomId);
  }, []);

  const leaveRoom = useCallback((roomId: string) => {
    socketService.leaveRoom(roomId);
  }, []);

  return {
    sendMessage,
    joinRoom,
    leaveRoom,
  };
}

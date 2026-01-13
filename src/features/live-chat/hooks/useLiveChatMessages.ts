import { useLiveChatStore } from '../store';

export function useLiveChatMessages() {
  const messages = useLiveChatStore((state) => state.messages);
  const isConnected = useLiveChatStore((state) => state.isConnected);
  const isConnecting = useLiveChatStore((state) => state.isConnecting);
  const connectionError = useLiveChatStore((state) => state.connectionError);
  const activeRoom = useLiveChatStore((state) => state.activeRoom);

  return {
    messages,
    isConnected,
    isConnecting,
    connectionError,
    activeRoom,
  };
}

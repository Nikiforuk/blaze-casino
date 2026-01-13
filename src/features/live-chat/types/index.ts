export interface Message {
  _id: string;
  roomId: string;
  userId: string;
  username: string;
  text: string;
  time: string;
  createdAt: string;
  type?: 'chat' | 'join' | 'leave';
}

export interface ChatHistoryResponse {
  roomId: string;
  messages: Message[];
}

export interface Room {
  id: string;
  name: string;
  userCount?: number;
}

export interface LiveChatState {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string | null;
  rooms: Room[];
  activeRoom: string | null;
  messages: Message[];
  messageIds: Set<string>;
  currentUserId: string | null;
}

export interface LiveChatActions {
  setConnected: (connected: boolean) => void;
  setConnecting: (connecting: boolean) => void;
  setConnectionError: (error: string | null) => void;
  setRooms: (rooms: Room[]) => void;
  setActiveRoom: (roomId: string | null) => void;
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  setCurrentUserId: (userId: string | null) => void;
  reset: () => void;
}

export type LiveChatStore = LiveChatState & LiveChatActions;

export interface SendMessagePayload {
  roomId: string;
  message: string;
}

export interface JoinRoomPayload {
  roomId: string;
}

export interface LeaveRoomPayload {
  roomId: string;
}

export const SocketEvents = {
  // Client -> Server
  CHAT_JOIN: 'chat:join',
  CHAT_LEAVE: 'chat:leave',
  CHAT_MESSAGE: 'chat:message',

  // Server -> Client
  CHAT_ROOMS: 'chat:rooms',
  CHAT_HISTORY: 'chat:history',
  CHAT_ERROR: 'chat:error',
  MESSAGE: 'message',
} as const;

import { io, Socket } from 'socket.io-client';

import { useAuthStore } from '@/features/auth/store';

import { useLiveChatStore } from '../store';
import { Message, Room, SocketEvents, ChatHistoryResponse } from '../types';

const SOCKET_URL = 'https://backend-internship-js-hw-03-blaze-casino.onrender.com';

const DEFAULT_ROOM = 'general';

class SocketService {
  private static instance: SocketService;
  private socket: Socket | null = null;

  private constructor() {}

  public static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    return SocketService.instance;
  }

  public connect(token: string): void {
    // Prevent duplicate connections
    if (this.socket?.connected) {
      console.warn('Socket already connected');
      return;
    }

    // If socket exists but disconnected, clean up first
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket = null;
    }

    useLiveChatStore.getState().setConnecting(true);

    this.socket = io(SOCKET_URL, {
      auth: { token },
      transports: ['polling', 'websocket'],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    });

    this.setupListeners();
  }

  public disconnect(): void {
    if (this.socket) {
      const activeRoom = useLiveChatStore.getState().activeRoom;
      if (activeRoom) {
        this.leaveRoom(activeRoom);
      }

      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = null;
    }
    useLiveChatStore.getState().reset();
  }

  public joinRoom(roomId: string): void {
    if (!this.socket?.connected) {
      console.warn('Socket not connected');
      return;
    }

    const currentRoom = useLiveChatStore.getState().activeRoom;

    // Leave current room if different
    if (currentRoom && currentRoom !== roomId) {
      this.leaveRoom(currentRoom);
    }

    useLiveChatStore.getState().clearMessages();
    useLiveChatStore.getState().setActiveRoom(roomId);

    this.socket.emit(SocketEvents.CHAT_JOIN, { roomId });
  }

  public leaveRoom(roomId: string): void {
    if (!this.socket?.connected) {
      return;
    }

    this.socket.emit(SocketEvents.CHAT_LEAVE, { roomId });
  }

  public sendMessage(message: string): void {
    if (!this.socket?.connected) {
      console.warn('Socket not connected');
      return;
    }

    const activeRoom = useLiveChatStore.getState().activeRoom;
    if (!activeRoom) {
      console.warn('No active room');
      return;
    }

    const authState = useAuthStore.getState();
    const payload = {
      roomId: activeRoom,
      message,
      username: authState.user?.userName || 'Anonymous',
      userId: authState.user?.userId || '',
    };

    this.socket.emit(SocketEvents.CHAT_MESSAGE, payload);
  }

  public isConnected(): boolean {
    return this.socket?.connected ?? false;
  }

  private setupListeners(): void {
    if (!this.socket) return;

    // Connection events
    this.socket.on('connect', () => {
      useLiveChatStore.getState().setConnected(true);
      useLiveChatStore.getState().setConnecting(false);
      useLiveChatStore.getState().setConnectionError(null);

      // Join active room on reconnect, or default room on first connect
      const activeRoom = useLiveChatStore.getState().activeRoom;
      if (activeRoom) {
        this.joinRoom(activeRoom);
      } else {
        // Always join default room if no active room
        this.joinRoom(DEFAULT_ROOM);
      }
    });

    this.socket.on('disconnect', (reason) => {
      useLiveChatStore.getState().setConnected(false);
      if (reason === 'io server disconnect') {
        useLiveChatStore.getState().setConnectionError('Disconnected by server');
      }
    });

    this.socket.on('connect_error', (error) => {
      useLiveChatStore.getState().setConnecting(false);
      useLiveChatStore.getState().setConnectionError(error.message);
    });

    // Chat events
    this.socket.on(SocketEvents.CHAT_ROOMS, (rooms: Room[]) => {
      useLiveChatStore.getState().setRooms(rooms);
    });

    this.socket.on(SocketEvents.CHAT_HISTORY, (data: ChatHistoryResponse) => {
      useLiveChatStore.getState().setMessages(data.messages);
    });

    this.socket.on(SocketEvents.MESSAGE, (message: Message) => {
      const { currentUserId, addMessage } = useLiveChatStore.getState();

      // Filter out own join/leave messages
      if (message.type === 'join' || message.type === 'leave') {
        if (message.userId === currentUserId) {
          return;
        }
      }

      addMessage(message);
    });

    this.socket.on(SocketEvents.CHAT_ERROR, (error: { message: string }) => {
      useLiveChatStore.getState().setConnectionError(error.message);
    });
  }
}

export const socketService = SocketService.getInstance();

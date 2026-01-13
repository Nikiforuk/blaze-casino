import { create } from 'zustand';

import { LiveChatStore, Message, Room } from '../types';

const initialState = {
  isConnected: false,
  isConnecting: false,
  connectionError: null,
  rooms: [] as Room[],
  activeRoom: null,
  messages: [] as Message[],
  messageIds: new Set<string>(),
  currentUserId: null,
};

export const useLiveChatStore = create<LiveChatStore>((set) => ({
  ...initialState,

  setConnected: (connected: boolean) => {
    set({ isConnected: connected });
  },

  setConnecting: (connecting: boolean) => {
    set({ isConnecting: connecting });
  },

  setConnectionError: (error: string | null) => {
    set({ connectionError: error });
  },

  setRooms: (rooms: Room[]) => {
    set({ rooms });
  },

  setActiveRoom: (roomId: string | null) => {
    set({ activeRoom: roomId });
  },

  setMessages: (messages: Message[]) => {
    const uniqueMessages: Message[] = [];
    const ids = new Set<string>();

    for (const msg of messages) {
      if (!ids.has(msg._id)) {
        ids.add(msg._id);
        uniqueMessages.push(msg);
      }
    }

    set({
      messages: uniqueMessages,
      messageIds: ids,
    });
  },

  addMessage: (message: Message) => {
    set((state) => {
      if (state.messageIds.has(message._id)) {
        return state;
      }

      const newMessages = [...state.messages, message];
      const newIds = new Set([...state.messageIds, message._id]);

      // Keep only last 100 messages
      if (newMessages.length > 100) {
        const removed = newMessages.shift();
        if (removed) newIds.delete(removed._id);
      }

      return { messages: newMessages, messageIds: newIds };
    });
  },

  clearMessages: () => {
    set({ messages: [], messageIds: new Set<string>() });
  },

  setCurrentUserId: (userId: string | null) => {
    set({ currentUserId: userId });
  },

  reset: () => {
    set(initialState);
  },
}));

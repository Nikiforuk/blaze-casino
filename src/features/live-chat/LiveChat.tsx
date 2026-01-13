'use client';

import { useState, useRef, useEffect } from 'react';

import { useLiveChatSocket, useLiveChatMessages, useLiveChatActions } from './hooks';
import styles from './LiveChat.module.scss';
import LiveChatHeader from './LiveChatHeader';
import LiveChatInput from './LiveChatInput';
import LiveChatMessage from './LiveChatMessage';
import LiveChatSendButton from './LiveChatSendButton';

interface LiveChatProps {
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function LiveChat({ isModal = false, isOpen = false, onClose }: LiveChatProps) {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useLiveChatSocket();

  const { messages, isConnecting, connectionError } = useLiveChatMessages();
  const { sendMessage } = useLiveChatActions();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendClick = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const renderMessages = () => {
    if (isConnecting) {
      return <div className={styles.status}>Connecting...</div>;
    }

    if (connectionError) {
      return <div className={styles.error}>{connectionError}</div>;
    }

    if (messages.length === 0) {
      return <div className={styles.status}>No messages yet</div>;
    }

    return (
      <>
        {messages.map((msg) => (
          <LiveChatMessage
            key={msg._id}
            username={msg.username}
            time={msg.time}
            message={msg.text}
            type={msg.type}
          />
        ))}
        <div ref={messagesEndRef} />
      </>
    );
  };

  if (isModal) {
    return (
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={onClose}>
        <div
          className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <LiveChatHeader />
          <div className={styles.messages}>{renderMessages()}</div>
          <div className={styles.formElements}>
            <LiveChatInput value={inputValue} onChange={setInputValue} />
            <LiveChatSendButton onClick={handleSendClick} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <LiveChatHeader />
      <div className={styles.messages}>{renderMessages()}</div>
      <div className={styles.formElements}>
        <LiveChatInput value={inputValue} onChange={setInputValue} />
        <LiveChatSendButton onClick={handleSendClick} />
      </div>
    </div>
  );
}

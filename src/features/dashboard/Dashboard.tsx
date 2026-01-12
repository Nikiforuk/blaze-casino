'use client';
import { useState } from 'react';

import { motion } from 'framer-motion';

import ChatButton from '@/shared/ui/ChatButton';

import { dashboardContainerVariants } from './animations';
import styles from './Dashboard.module.scss';
import DashboardGameList from './DashboardGameList';
import Leaderboard from '../leaderboard/Leaderboard';
import LiveChat from '../live-chat/LiveChat';

export default function Dashboard() {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

  const handleOpenLiveChat = () => {
    setIsLiveChatOpen(true);
  };

  const handleCloseLiveChat = () => {
    setIsLiveChatOpen(false);
  };

  return (
    <motion.div
      className={styles.container}
      variants={dashboardContainerVariants}
      initial="initial"
      animate="animate"
    >
      <Leaderboard />
      <DashboardGameList />
      <div className={styles.liveChat}>
        <LiveChat />
      </div>
      <div className={styles.liveChatBtn}>
        <ChatButton onClick={handleOpenLiveChat} />
      </div>
      <LiveChat isModal isOpen={isLiveChatOpen} onClose={handleCloseLiveChat} />
    </motion.div>
  );
}

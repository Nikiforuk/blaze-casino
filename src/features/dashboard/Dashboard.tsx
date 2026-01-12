'use client';
import { motion } from 'framer-motion';

import { dashboardContainerVariants } from './animations';
import styles from './Dashboard.module.scss';
import DashboardGameList from './DashboardGameList';
import Leaderboard from '../leaderboard/Leaderboard';
import LiveChat from '../live-chat/LiveChat';

export default function Dashboard() {
  return (
    <motion.div
      className={styles.container}
      variants={dashboardContainerVariants}
      initial="initial"
      animate="animate"
    >
      <Leaderboard />
      <DashboardGameList />
      <LiveChat />
    </motion.div>
  );
}

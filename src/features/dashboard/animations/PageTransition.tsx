'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

import { pageTransitionVariants } from '.';

interface PageTransitionProps {
  className?: string;
}

export default function PageTransition({
  className,
  children,
}: PropsWithChildren<PageTransitionProps>) {
  return (
    <motion.div
      className={className}
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

import { cardContainerVariants } from '.';

interface ContainerMotionProps {
  className?: string;
}

export default function ContainerMotion({
  className,
  children,
}: PropsWithChildren<ContainerMotionProps>) {
  return (
    <motion.div
      className={className}
      variants={cardContainerVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}

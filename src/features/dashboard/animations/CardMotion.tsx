'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

import { cardBreathingVariants, cardItemVariants } from '.';

interface CardMotionProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function CardMotion({
  className,
  style,
  children,
  onClick,
}: PropsWithChildren<CardMotionProps>) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={cardItemVariants}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
        }}
        variants={cardBreathingVariants}
        animate="animate"
      />
      {children}
    </motion.div>
  );
}

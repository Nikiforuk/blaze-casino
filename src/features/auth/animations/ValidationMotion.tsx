'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

import { validationVariants } from '.';

interface ValidationProps {
  className?: string;
}

export default function FormMotion({ className, children }: PropsWithChildren<ValidationProps>) {
  return (
    <motion.span
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
      variants={validationVariants}
    >
      {children}
    </motion.span>
  );
}

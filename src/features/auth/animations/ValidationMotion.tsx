'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

import { validationVariants } from '.';

interface ValidationProps {
  key: string;
  className?: string;
}

export default function FormMotion({
  key,
  className,
  children,
}: PropsWithChildren<ValidationProps>) {
  return (
    <motion.span
      key={key}
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

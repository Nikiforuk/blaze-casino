'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

import { formVariants } from '.';

interface FormMotionProps {
  name: string;
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export default function FormMotion({
  name,
  className,
  children,
  onSubmit,
}: PropsWithChildren<FormMotionProps>) {
  return (
    <motion.form
      name={name}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
      variants={formVariants}
      onSubmit={onSubmit}
    >
      {children}
    </motion.form>
  );
}

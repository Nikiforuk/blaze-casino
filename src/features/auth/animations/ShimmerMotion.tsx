'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

import { logoShimmerVariants } from '.';

export default function ShimmerMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div className={className} variants={logoShimmerVariants} animate="animate">
      {children}
    </motion.div>
  );
}

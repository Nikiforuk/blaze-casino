import { Variants } from 'framer-motion';

export const logoShimmerVariants: Variants = {
  animate: {
    boxShadow: [
      '0px 0px 24px 0px rgba(255, 77, 109, 0.5)',
      '0px 0px 32px 0px rgba(255, 120, 140, 0.6)',
      '0px 0px 24px 0px rgba(255, 77, 109, 0.5)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const formVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

export const validationVariants: Variants = {
  initial: {
    opacity: 0,
    height: 0,
    marginTop: 0,
  },
  animate: {
    opacity: 1,
    height: 'auto',
    marginTop: 4,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.15,
      ease: 'easeIn',
    },
  },
};

import React, { useMemo, useContext } from 'react';

import { IntersectionContext } from '../intersection-observer';
import { motion } from 'framer-motion';

export const MotionBox = ({
  children,
  delayOrder, // order of appearance
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
}: any) => {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder / 5,
      staggerChildren: 2,
      ease: easing,
    }),
    [duration, delayOrder, easing]
  );

  const variants = {
    hidden: {
      opacity: 0,
      transition,
    },
    show: {
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={variants}
      exit="hidden"
      positionTransition
    >
      {children}
    </motion.div>
  );
};

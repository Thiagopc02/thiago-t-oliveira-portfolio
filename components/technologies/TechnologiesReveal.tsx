"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type TechnologiesRevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function TechnologiesReveal({
  children,
  delay = 0,
}: TechnologiesRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
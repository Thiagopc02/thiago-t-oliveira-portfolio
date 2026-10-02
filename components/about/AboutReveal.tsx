"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AboutRevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function AboutReveal({
  children,
  delay = 0,
}: AboutRevealProps) {
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
        amount: 0.2,
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
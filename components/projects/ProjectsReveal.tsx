"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ProjectsRevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function ProjectsReveal({
  children,
  delay = 0,
}: ProjectsRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
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
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
      className="
        relative
        w-full
        pointer-events-auto
      "
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
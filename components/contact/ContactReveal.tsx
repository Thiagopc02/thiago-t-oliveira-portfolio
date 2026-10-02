"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ContactRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function ContactReveal({
  children,
  delay = 0,
  className = "",
}: ContactRevealProps) {
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
      className={className}
    >
      {children}
    </motion.div>
  );
}
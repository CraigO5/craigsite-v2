"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function CellReveal({
  children,
  index = 0,
  className,
  axis = "y",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  axis?: "x" | "y";
}) {
  const initial =
    axis === "x" ? { opacity: 0, x: -24 } : { opacity: 0, y: 24 };
  const target = axis === "x" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={target}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

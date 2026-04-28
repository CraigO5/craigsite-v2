"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.1 },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

function Line({ text }: { text: string }) {
  return (
    <span style={{ display: "block" }}>
      {[...text].map((ch, i) => (
        <motion.span
          key={i}
          variants={letter}
          style={{ display: "inline-block" }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeadlineStagger({
  lines,
  suffix,
}: {
  lines: string[];
  suffix?: ReactNode;
}) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {lines.map((line, idx) => (
        <Line key={idx} text={line} />
      ))}
      {suffix && (
        <motion.span variants={letter} style={{ display: "inline-block" }}>
          {suffix}
        </motion.span>
      )}
    </motion.span>
  );
}

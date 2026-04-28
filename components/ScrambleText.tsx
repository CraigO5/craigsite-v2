"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

type QueueItem = {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
};

export default function ScrambleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number | null>(null);
  const queueRef = useRef<QueueItem[]>([]);
  const tickRef = useRef(0);

  useEffect(() => {
    setDisplay(text);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [text]);

  const update = () => {
    let output = "";
    let complete = 0;
    const queue = queueRef.current;
    const tick = tickRef.current;

    for (let i = 0; i < queue.length; i++) {
      const { from, to, start, end } = queue[i];
      if (tick >= end) {
        complete++;
        output += to;
      } else if (tick >= start) {
        if (!queue[i].char || Math.random() < 0.28) {
          queue[i].char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        output += queue[i].char;
      } else {
        output += from;
      }
    }

    setDisplay(output);

    if (complete < queue.length) {
      tickRef.current = tick + 1;
      frameRef.current = requestAnimationFrame(update);
    } else {
      frameRef.current = null;
    }
  };

  const scramble = () => {
    const oldText = display;
    const newText = text;
    const length = Math.max(oldText.length, newText.length);
    const queue: QueueItem[] = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20) + 5;
      queue.push({ from, to, start, end });
    }
    queueRef.current = queue;
    tickRef.current = 0;
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(update);
    }
  };

  return (
    <span
      className={className}
      onMouseEnter={scramble}
      style={{ display: "inline-block" }}
    >
      {display}
    </span>
  );
}

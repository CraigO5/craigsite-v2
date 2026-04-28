"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      const node = target?.closest?.("[data-cursor]") as HTMLElement | null;
      setLabel(node ? node.getAttribute("data-cursor") : null);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="rounded-full bg-[#f4eee5] mix-blend-difference"
        style={{
          width: label ? 8 : 6,
          height: label ? 8 : 6,
          transition: "width 150ms ease, height 150ms ease",
        }}
      />
      {label && (
        <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#f4eee5] px-2.5 py-1 text-[10px] font-bold tracking-[0.25em] text-[#1a1a1a] mix-blend-difference">
          {label}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function LiveClock({
  timezone = "America/Chicago",
  label = "CST",
  className = "",
}: {
  timezone?: string;
  label?: string;
  className?: string;
}) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, [timezone]);

  return (
    <span
      suppressHydrationWarning
      className={`text-[11px] font-bold tracking-[0.25em] tabular-nums text-[#888] ${className}`}
    >
      [{time ?? "—:—"} {label}]
    </span>
  );
}

"use client";

import { useEffect, useState } from "react";
import { GitCommit } from "lucide-react";

const GITHUB_REPO = "CraigO5/craigsite-v2";

function formatAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  if (!isFinite(diff) || diff < 0) return "just now";
  const sec = Math.floor(diff / 1000);
  if (sec < 60) return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  if (day < 30) return `${day}d ago`;
  const mo = Math.floor(day / 30);
  if (mo < 12) return `${mo}mo ago`;
  const yr = Math.floor(day / 365);
  return `${yr}y ago`;
}

export default function BuildFooter() {
  const sha = process.env.NEXT_PUBLIC_BUILD_SHA || "dev";
  const time = process.env.NEXT_PUBLIC_BUILD_TIME || "";
  const [ago, setAgo] = useState<string>("");

  useEffect(() => {
    if (!time) return;
    setAgo(formatAgo(time));
    const id = setInterval(() => setAgo(formatAgo(time)), 60_000);
    return () => clearInterval(id);
  }, [time]);

  if (!ago) return null;

  const commitHref =
    sha && sha !== "dev"
      ? `https://github.com/${GITHUB_REPO}/commit/${sha}`
      : undefined;

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-20 hidden sm:block">
      <a
        href={commitHref}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-3 py-1.5 text-[11px] text-white/50 backdrop-blur-md transition-colors duration-150 hover:border-accent/30 hover:text-white/80"
        aria-label={`Deployed from commit ${sha}`}
      >
        <GitCommit size={11} className="text-accent" />
        <span className="font-mono">{sha}</span>
        <span className="text-white/30">·</span>
        <span>deployed {ago}</span>
      </a>
    </div>
  );
}

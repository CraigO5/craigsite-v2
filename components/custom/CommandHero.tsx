"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { openPalette } from "@/lib/palette";

export default function CommandHero() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(
      typeof navigator !== "undefined" &&
        /Mac|iPhone|iPad|iPod/.test(navigator.platform),
    );
  }, []);

  return (
    <button
      onClick={openPalette}
      className="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-surface/60 px-4 py-3.5 text-left backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:bg-surface"
      aria-label="Open command palette"
    >
      <Search size={16} className="text-white/40 group-hover:text-accent" />
      <span className="flex-1 text-sm text-white/50">
        Search the site, switch themes, jump to work…
      </span>
      <kbd className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60 sm:flex">
        <span className="text-sm">{isMac ? "⌘" : "Ctrl"}</span>
        <span>K</span>
      </kbd>
    </button>
  );
}

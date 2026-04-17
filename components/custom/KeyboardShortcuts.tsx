"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { CHEATSHEET_OPEN, openCheatsheet } from "@/lib/palette";

// g-prefix leader shortcuts (vim-style)
const GO_MAP: Record<string, string> = {
  h: "/",
  w: "/work",
  p: "/profile",
  b: "/achievements",
  u: "/uses",
  l: "/changelog",
  c: "/contact",
  s: "/settings",
};

const isTypingTarget = (el: EventTarget | null) => {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    el.isContentEditable
  );
};

export default function KeyboardShortcuts() {
  const router = useRouter();
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    let leader = false;
    let leaderTimer: ReturnType<typeof setTimeout> | null = null;

    const clearLeader = () => {
      leader = false;
      if (leaderTimer) clearTimeout(leaderTimer);
    };

    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTypingTarget(e.target)) return;

      // ? opens cheatsheet
      if (e.key === "?") {
        e.preventDefault();
        openCheatsheet();
        return;
      }

      // g then <key> navigates
      if (!leader && e.key === "g") {
        leader = true;
        if (leaderTimer) clearTimeout(leaderTimer);
        leaderTimer = setTimeout(clearLeader, 900);
        return;
      }

      if (leader) {
        const dest = GO_MAP[e.key.toLowerCase()];
        clearLeader();
        if (dest) {
          e.preventDefault();
          router.push(dest);
        }
      }
    };

    const openSheet = () => setSheetOpen(true);

    window.addEventListener("keydown", handler);
    window.addEventListener(CHEATSHEET_OPEN, openSheet);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener(CHEATSHEET_OPEN, openSheet);
      if (leaderTimer) clearTimeout(leaderTimer);
    };
  }, [router]);

  // Allow Esc to close the cheatsheet
  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSheetOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sheetOpen]);

  if (!sheetOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      onClick={() => setSheetOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-background/95 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
          <h3 className="text-sm font-bold">Keyboard shortcuts</h3>
          <button
            aria-label="Close shortcuts"
            onClick={() => setSheetOpen(false)}
            className="text-white/50 transition-colors hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
        <div className="divide-y divide-white/5">
          <Row combo={["⌘", "K"]} alt={["Ctrl", "K"]} label="Open command palette" />
          <Row combo={["?"]} label="Show this cheatsheet" />
          <SectionLabel label="Navigate" />
          <Row combo={["g", "h"]} label="Home" />
          <Row combo={["g", "w"]} label="Work" />
          <Row combo={["g", "p"]} label="Profile" />
          <Row combo={["g", "b"]} label="Highlights" />
          <Row combo={["g", "u"]} label="Uses" />
          <Row combo={["g", "l"]} label="Changelog" />
          <Row combo={["g", "c"]} label="Contact" />
          <Row combo={["g", "s"]} label="Settings" />
        </div>
        <p className="px-5 py-3 text-center text-[11px] text-white/30">
          Press <span className="text-white/60">Esc</span> to close.
        </p>
      </div>
    </div>
  );
}

function Row({
  combo,
  alt,
  label,
}: {
  combo: string[];
  alt?: string[];
  label: string;
}) {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <p className="text-sm text-white/80">{label}</p>
      <div className="flex items-center gap-2">
        {alt && (
          <>
            <Keys keys={alt} />
            <span className="text-[10px] text-white/30">or</span>
          </>
        )}
        <Keys keys={combo} />
      </div>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="px-5 pt-3 pb-1 text-[10px] font-semibold tracking-wider text-white/30 uppercase">
      {label}
    </p>
  );
}

function Keys({ keys }: { keys: string[] }) {
  return (
    <span className="flex items-center gap-1">
      {keys.map((k, i) => (
        <kbd
          key={i}
          className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px] text-white/70"
        >
          {k}
        </kbd>
      ))}
    </span>
  );
}

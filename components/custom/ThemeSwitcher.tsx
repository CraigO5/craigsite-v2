"use client";

import { useState, useEffect, useRef } from "react";
import { Palette, Check } from "lucide-react";
import { themes } from "@/lib/themes";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white"
        aria-label="Change theme"
      >
        <Palette size={14} />
      </button>

      {open && (
        <div className="animate-fade-in absolute top-full right-0 z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl backdrop-blur-xl">
          <div className="border-b border-white/5 px-4 py-3">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Theme
            </p>
          </div>
          <div className="p-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors duration-150 hover:bg-white/5"
              >
                <div className="relative flex h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white/10">
                  <div
                    className="h-full w-1/2"
                    style={{ background: t.swatch.bg }}
                  />
                  <div
                    className="h-full w-1/2"
                    style={{
                      background: `linear-gradient(135deg, ${t.swatch.accent} 0%, ${t.swatch.warm} 100%)`,
                    }}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.tagline}</p>
                </div>
                {theme === t.id && (
                  <Check size={14} className="text-accent" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

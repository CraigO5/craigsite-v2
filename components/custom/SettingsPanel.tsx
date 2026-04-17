"use client";

import { Check, Monitor, Paintbrush, Info, ExternalLink } from "lucide-react";
import Link from "next/link";
import { themes } from "@/lib/themes";
import { useTheme } from "./ThemeProvider";

export default function SettingsPanel() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      {/* Appearance */}
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <header className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
          <Paintbrush size={16} className="text-accent" />
          <h3 className="text-base font-bold">Appearance</h3>
        </header>
        <div className="p-2">
          {themes.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition-colors duration-150 hover:bg-white/5 ${
                i > 0 ? "border-t border-white/5 rounded-none" : ""
              }`}
            >
              <div className="relative flex h-8 w-8 flex-shrink-0 overflow-hidden rounded-full border border-white/10">
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
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-white/50">{t.tagline}</p>
              </div>
              {theme === t.id && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
                  <Check size={12} />
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Display */}
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <header className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
          <Monitor size={16} className="text-accent" />
          <h3 className="text-base font-bold">Display</h3>
        </header>
        <div className="divide-y divide-white/5">
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="font-medium">Mode</p>
              <p className="text-sm text-white/50">Dark only — for now</p>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
              Dark
            </span>
          </div>
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="font-medium">Motion</p>
              <p className="text-sm text-white/50">
                Respects your system reduce-motion setting
              </p>
            </div>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs text-accent">
              Auto
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <header className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
          <Info size={16} className="text-accent" />
          <h3 className="text-base font-bold">About</h3>
        </header>
        <div className="divide-y divide-white/5">
          <div className="flex items-center justify-between px-5 py-4">
            <p className="font-medium">Version</p>
            <span className="text-sm text-white/60">v2.0</span>
          </div>
          <div className="flex items-center justify-between px-5 py-4">
            <p className="font-medium">Built with</p>
            <span className="text-sm text-white/60">
              Next.js · Tailwind · ❤
            </span>
          </div>
          <Link
            href="/work/euno"
            className="flex items-center justify-between px-5 py-4 transition-colors duration-150 hover:bg-white/5"
          >
            <div>
              <p className="font-medium">Inspired by Euno</p>
              <p className="text-sm text-white/50">
                Craig's AI assistant — the real one
              </p>
            </div>
            <ExternalLink size={14} className="text-white/40" />
          </Link>
        </div>
      </section>

      <p className="text-center text-xs text-white/30">
        All settings are stored locally on your device.
      </p>
    </div>
  );
}

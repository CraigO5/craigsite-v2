"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Github,
  Home,
  Mail,
  Paintbrush,
  Search,
  Settings,
  Trophy,
  User,
  Wrench,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { themes, type ThemeId } from "@/lib/themes";
import { caseStudies } from "@/lib/case-studies";
import { PALETTE_OPEN } from "@/lib/palette";

type Action = {
  id: string;
  label: string;
  hint?: string;
  keywords?: string;
  group: "Navigate" | "Work" | "Theme" | "External";
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  run: () => void;
};

const navItems: {
  label: string;
  href: string;
  icon: Action["icon"];
}[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Highlights", href: "/achievements", icon: Trophy },
  { label: "Uses", href: "/uses", icon: Wrench },
  { label: "Changelog", href: "/changelog", icon: FileText },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function CommandPalette() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  const pickTheme = (id: ThemeId) => {
    setTheme(id);
    setOpen(false);
  };

  const external = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const actions: Action[] = useMemo(() => {
    const nav: Action[] = navItems.map((n) => ({
      id: `nav:${n.href}`,
      label: n.label,
      hint: n.href,
      group: "Navigate",
      icon: n.icon,
      run: () => go(n.href),
    }));

    const work: Action[] = caseStudies.map((cs) => ({
      id: `work:${cs.slug}`,
      label: cs.title,
      hint: cs.tagline,
      keywords: cs.stack.join(" "),
      group: "Work",
      icon: Briefcase,
      run: () => go(`/work/${cs.slug}`),
    }));

    const theme: Action[] = themes.map((t) => ({
      id: `theme:${t.id}`,
      label: `Theme · ${t.name}`,
      hint: t.tagline,
      group: "Theme",
      icon: Paintbrush,
      run: () => pickTheme(t.id),
    }));

    const ext: Action[] = [
      {
        id: "ext:github",
        label: "GitHub",
        hint: "github.com/CraigO5",
        group: "External",
        icon: Github,
        run: () => external("https://github.com/CraigO5"),
      },
      {
        id: "ext:email",
        label: "Email Craig",
        hint: "craig.brdt505@gmail.com",
        group: "External",
        icon: Mail,
        run: () => external("mailto:craig.brdt505@gmail.com"),
      },
    ];

    return [...nav, ...work, ...theme, ...ext];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => {
      const hay = `${a.label} ${a.hint ?? ""} ${a.keywords ?? ""} ${a.group}`
        .toLowerCase();
      return hay.includes(q);
    });
  }, [actions, query]);

  // Group filtered results in display order
  const grouped = useMemo(() => {
    const order: Action["group"][] = ["Navigate", "Work", "Theme", "External"];
    return order
      .map((g) => ({
        group: g,
        items: filtered.filter((a) => a.group === g),
      }))
      .filter((s) => s.items.length > 0);
  }, [filtered]);

  // Flat order used for keyboard navigation
  const flat = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

  useEffect(() => {
    const handleOpenEvent = () => setOpen(true);
    window.addEventListener(PALETTE_OPEN, handleOpenEvent);

    const handleKey = (e: KeyboardEvent) => {
      // Cmd/Ctrl+K toggles
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener(PALETTE_OPEN, handleOpenEvent);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Focus + reset when opening
  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  // Keep selection in bounds
  useEffect(() => {
    if (selected >= flat.length) setSelected(Math.max(0, flat.length - 1));
  }, [flat.length, selected]);

  if (!open) return null;

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(flat.length - 1, s + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      flat[selected]?.run();
    }
  };

  let cursor = -1;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-background/95 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
          <Search size={16} className="text-white/40" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search nav, work, themes…"
            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
          />
          <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/50">
            esc
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {flat.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-white/40">
              No matches.
            </p>
          )}
          {grouped.map((section) => (
            <div key={section.group} className="mb-1">
              <p className="px-3 pt-2 pb-1 text-[10px] font-semibold tracking-wider text-white/30 uppercase">
                {section.group}
              </p>
              {section.items.map((a) => {
                cursor += 1;
                const active = cursor === selected;
                const Icon = a.icon;
                return (
                  <button
                    key={a.id}
                    onMouseEnter={() => setSelected(cursor)}
                    onClick={() => a.run()}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors duration-75 ${
                      active ? "bg-accent/15 text-white" : "text-white/80"
                    }`}
                  >
                    <Icon
                      size={14}
                      className={active ? "text-accent" : "text-white/50"}
                    />
                    <span className="flex-1 text-sm">{a.label}</span>
                    {a.hint && (
                      <span className="truncate text-xs text-white/40">
                        {a.hint}
                      </span>
                    )}
                    <ArrowRight
                      size={12}
                      className={active ? "text-accent" : "text-transparent"}
                    />
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 text-[11px] text-white/40">
          <span className="flex items-center gap-2">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            to navigate
          </span>
          <span className="flex items-center gap-2">
            <Kbd>↵</Kbd>
            to select
          </span>
          <span className="flex items-center gap-2">
            <Kbd>?</Kbd>
            shortcuts
          </span>
        </div>
      </div>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60">
      {children}
    </kbd>
  );
}

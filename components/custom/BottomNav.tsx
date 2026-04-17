"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, User, Trophy, Settings } from "lucide-react";

type Item = {
  label: string;
  href: string;
  icon: typeof Home;
  match: (path: string) => boolean;
};

const items: Item[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    match: (p) => p === "/",
  },
  {
    label: "Work",
    href: "/work",
    icon: Briefcase,
    match: (p) => p === "/work" || p.startsWith("/work/"),
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
    match: (p) => p === "/profile",
  },
  {
    label: "Badges",
    href: "/achievements",
    icon: Trophy,
    match: (p) => p === "/achievements",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    match: (p) => p === "/settings",
  },
];

export default function BottomNav() {
  const pathname = usePathname() || "/";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      aria-label="App navigation"
      className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2"
    >
      <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-background/80 p-1.5 shadow-2xl backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.match(pathname);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex h-10 items-center gap-2 rounded-full px-3 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={16} />
                <span
                  className={`hidden sm:inline ${isActive ? "inline" : ""}`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

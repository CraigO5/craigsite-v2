import type { ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  User,
  Trophy,
  Mail,
  ArrowUpRight,
  Settings,
  Wrench,
  FileText,
} from "lucide-react";
import CommandHero from "./CommandHero";
import ActivityFeed from "./ActivityFeed";

type IconEl = ComponentType<{ size?: number | string; className?: string }>;

type Tile = {
  label: string;
  sub: string;
  href: string;
  icon: IconEl;
  tone: "accent" | "warm" | "neutral";
};

const tiles: Tile[] = [
  {
    label: "Work",
    sub: "Case studies",
    href: "/work",
    icon: Briefcase,
    tone: "accent",
  },
  {
    label: "Profile",
    sub: "Background & stack",
    href: "/profile",
    icon: User,
    tone: "neutral",
  },
  {
    label: "Uses",
    sub: "The daily stack",
    href: "/uses",
    icon: Wrench,
    tone: "warm",
  },
  {
    label: "Changelog",
    sub: "Site history",
    href: "/changelog",
    icon: FileText,
    tone: "neutral",
  },
  {
    label: "Highlights",
    sub: "Wins & milestones",
    href: "/achievements",
    icon: Trophy,
    tone: "warm",
  },
  {
    label: "Contact",
    sub: "Say hi",
    href: "/contact",
    icon: Mail,
    tone: "neutral",
  },
  {
    label: "Settings",
    sub: "Themes & more",
    href: "/settings",
    icon: Settings,
    tone: "neutral",
  },
];

const toneStyles: Record<Tile["tone"], string> = {
  accent:
    "border-accent/30 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent hover:border-accent/60",
  warm: "border-warm/30 bg-gradient-to-br from-warm/15 via-warm/5 to-transparent hover:border-warm/60",
  neutral:
    "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]",
};

const toneIcon: Record<Tile["tone"], string> = {
  accent: "text-accent",
  warm: "text-warm",
  neutral: "text-white/70",
};

export default function AppHome() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 md:pt-32">
      {/* Identity hero */}
      <div className="mb-8 flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <Image
            alt="Craig"
            src="/craig.jpg"
            width={96}
            height={96}
            className="h-16 w-16 rounded-2xl object-cover md:h-20 md:w-20"
          />
          <span className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-accent">
            <span className="block h-2 w-2 rounded-full bg-white" />
          </span>
        </div>
        <div className="flex-1">
          <p className="text-sm text-accent">Available for work</p>
          <h1 className="text-2xl font-bold md:text-3xl">Craig Ondevilla</h1>
          <p className="text-sm text-white/60 md:text-base">
            Software engineer — encrypted, AI-backed mobile &amp; web systems.
          </p>
        </div>
      </div>

      {/* Command palette hero — looks like an input, opens the palette */}
      <div className="mb-10">
        <CommandHero />
      </div>

      {/* Quick navigation dock */}
      <div className="mb-12">
        <p className="mb-3 text-sm text-white/50">Jump to</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {tiles.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.label}
                href={t.href}
                className={`group relative flex flex-col gap-3 rounded-2xl border p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 ${toneStyles[t.tone]}`}
              >
                <div
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-background/60 ${toneIcon[t.tone]}`}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold">{t.label}</p>
                  <p className="text-xs text-white/50">{t.sub}</p>
                </div>
                <ArrowUpRight
                  size={12}
                  className="absolute top-3 right-3 text-white/20 transition-all duration-200 group-hover:text-white/60"
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Activity feed */}
      <div className="mb-12">
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="text-xl font-bold md:text-2xl">Recent activity</h2>
          <span className="text-sm text-white/40">straight from GitHub</span>
        </div>
        <ActivityFeed limit={8} />
      </div>
    </section>
  );
}

import type { ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import {
  Briefcase,
  User,
  Layers,
  Trophy,
  MessageCircle,
  Mail,
  ArrowUpRight,
  FileText,
  Clock,
  Rocket,
  Sparkles,
  Palette,
  Gamepad2,
  Code2,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

type IconEl = ComponentType<{ size?: number | string; className?: string }>;

type Tile = {
  label: string;
  sub: string;
  href: string;
  icon: IconEl;
  tone: "accent" | "warm" | "neutral";
  external?: boolean;
};

const primary: Tile[] = [
  {
    label: "My work",
    sub: "Case studies & projects",
    href: "/work",
    icon: Briefcase,
    tone: "accent",
  },
  {
    label: "About me",
    sub: "Who I am",
    href: "/profile",
    icon: User,
    tone: "neutral",
  },
  {
    label: "My toolkit",
    sub: "What I build with",
    href: "/profile#stack",
    icon: Layers,
    tone: "neutral",
  },
  {
    label: "Highlights",
    sub: "Things I'm proud of",
    href: "/achievements",
    icon: Trophy,
    tone: "warm",
  },
  {
    label: "Ask me",
    sub: "Quick Q&A",
    href: "/ask",
    icon: MessageCircle,
    tone: "accent",
  },
  {
    label: "Say hi",
    sub: "Get in touch",
    href: "/contact",
    icon: Mail,
    tone: "neutral",
  },
];

type Shortcut = {
  label: string;
  href: string;
  icon: IconEl;
  tone: "accent" | "warm" | "neutral" | "blue" | "green" | "pink";
  external?: boolean;
};

const shortcuts: Shortcut[] = [
  { label: "Euno", href: "/work/euno", icon: Rocket, tone: "accent" },
  {
    label: "CoverMe",
    href: "https://coverme.craigo.live",
    icon: Sparkles,
    tone: "warm",
    external: true,
  },
  {
    label: "Timeline",
    href: "/profile#experience",
    icon: Clock,
    tone: "neutral",
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
    tone: "neutral",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/craigsterr",
    icon: SiGithub,
    tone: "neutral",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/craig-ondevilla-8106b4191",
    icon: SiLinkedin,
    tone: "blue",
    external: true,
  },
  { label: "Art", href: "/ask", icon: Palette, tone: "pink" },
  { label: "Games", href: "/ask", icon: Gamepad2, tone: "green" },
  {
    label: "Source",
    href: "https://github.com/craigsterr",
    icon: Code2,
    tone: "neutral",
    external: true,
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

const shortcutTones: Record<Shortcut["tone"], string> = {
  accent: "bg-accent/15 text-accent ring-accent/30",
  warm: "bg-warm/15 text-warm ring-warm/30",
  neutral: "bg-white/5 text-white/70 ring-white/10",
  blue: "bg-sky-500/15 text-sky-400 ring-sky-500/30",
  green: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30",
  pink: "bg-pink-500/15 text-pink-400 ring-pink-500/30",
};

export default function AppHome() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 pb-16 md:pt-36">
      {/* Greeting with avatar */}
      <div className="mb-12 flex items-start gap-5 md:gap-6">
        <div className="relative flex-shrink-0">
          <Image
            alt="Craig"
            src="/craig.jpg"
            width={96}
            height={96}
            className="h-16 w-16 rounded-2xl object-cover md:h-20 md:w-20"
          />
          <span className="border-background bg-accent absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border-2">
            <span className="block h-2 w-2 rounded-full bg-white" />
          </span>
        </div>
        <div className="flex-1 pt-1">
          <p className="text-accent mb-1 text-base">Software Engineer</p>
          <h1 className="font-bold">Welcome back, Craig.</h1>
        </div>
      </div>

      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
        What would you like to explore today?
      </p>

      {/* Now-shipping widget */}
      <Link
        href="/work/euno"
        className="group border-accent/20 from-accent/10 via-surface to-surface hover:border-accent/50 mb-12 block overflow-hidden rounded-3xl border bg-gradient-to-br p-6 transition-all duration-200 hover:-translate-y-0.5 md:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-accent mb-2 flex items-center gap-2 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full" />
                <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
              </span>
              Currently building
            </p>
            <h3 className="mb-2 text-2xl font-bold md:text-3xl">Euno</h3>
            <p className="text-base leading-relaxed text-white/70">
              A personal AI assistant for self-reflection. I'm building it solo
              — from the mobile app to the servers.
            </p>
          </div>
          <ArrowUpRight
            size={20}
            className="group-hover:text-accent mt-1 flex-shrink-0 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </Link>

      {/* Primary tile grid */}
      <h2 className="mb-5 text-xl font-bold md:text-2xl">Explore</h2>
      <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-3">
        {primary.map((t) => {
          const Icon = t.icon;
          return (
            <Link
              key={t.label}
              href={t.href}
              className={`group relative flex flex-col justify-between rounded-2xl border p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 ${toneStyles[t.tone]}`}
            >
              <div
                className={`bg-background/60 mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl ${toneIcon[t.tone]}`}
              >
                <Icon size={18} />
              </div>
              <div>
                <p className="text-base font-bold">{t.label}</p>
                <p className="text-xs text-white/50">{t.sub}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="absolute top-4 right-4 text-white/20 transition-all duration-200 group-hover:text-white/60"
              />
            </Link>
          );
        })}
      </div>

      {/* Featured work — image-rich cards */}
      <div className="mb-12">
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="text-xl font-bold md:text-2xl">Recent work</h2>
          <Link
            href="/work"
            className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
          >
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:border-accent/40 overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="bg-surface-raised relative aspect-[16/10] overflow-hidden">
                <Image
                  alt={p.title}
                  src={p.image}
                  width={640}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <h3 className="font-bold">{p.title}</h3>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:text-accent flex-shrink-0 text-white/30 transition-colors duration-200"
                  />
                </div>
                <p className="line-clamp-2 text-sm leading-relaxed text-white/60">
                  {p.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Shortcut grid (smaller icons) */}
      <h2 className="mb-5 text-xl font-bold md:text-2xl">Shortcuts</h2>
      <div className="mb-12 grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-9">
        {shortcuts.map((s) => {
          const Icon = s.icon;
          const content = (
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-all duration-200 group-hover:scale-105 ${shortcutTones[s.tone]}`}
              >
                <Icon size={20} />
              </div>
              <span className="text-[10px] font-medium text-white/60 group-hover:text-white">
                {s.label}
              </span>
            </div>
          );

          if (s.external) {
            return (
              <a
                key={s.label + s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={s.label + s.href}
              href={s.href}
              className="group flex flex-col items-center"
            >
              {content}
            </Link>
          );
        })}
      </div>

      {/* Dock-style social row */}
      <div className="flex flex-wrap items-center gap-2">
        <a
          href="mailto:craig.brdt505@gmail.com"
          className="border-accent/30 bg-accent/10 text-accent hover:border-accent/60 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-all duration-200"
        >
          <Mail size={14} /> craig.brdt505@gmail.com
        </a>
      </div>
    </section>
  );
}

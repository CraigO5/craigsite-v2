export type ActivityKind =
  | "shipped"
  | "win"
  | "milestone"
  | "role"
  | "education"
  | "side";

export type ActivityEntry = {
  // ISO-ish — YYYY-MM — used for sorting only
  date: string;
  // human-friendly date shown in UI
  display: string;
  kind: ActivityKind;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
};

// Reverse-chronological feed. Add new entries at the top.
export const activity: ActivityEntry[] = [
  {
    date: "2026-01",
    display: "Jan 2026",
    kind: "shipped",
    title: "Composite semantic ranking in Euno",
    description:
      "pgvector search that weighs cosine × 30-day recency decay × type (portrait 1.3 → gap 0.7). IVFFlat-indexed, runs as a single Postgres RPC.",
    href: "/work/euno",
  },
  {
    date: "2025-12",
    display: "Dec 2025",
    kind: "milestone",
    title: "Built Euno's social layer",
    description:
      "Designed friends, feed, comments, and profile for Euno. 1000+ tested interactions.",
    href: "/work/euno",
  },
  {
    date: "2025-11",
    display: "Nov 2025",
    kind: "shipped",
    title: "Shipped AES-GCM encryption across Euno",
    description:
      "Field-level encryption with per-record random IVs, biometric gate (Face ID / Touch ID), and a production key-validation startup check.",
    href: "/work/euno",
  },
  {
    date: "2025-11",
    display: "Nov 2025",
    kind: "milestone",
    title: "Rearchitected Euno's backend",
    description:
      "Replaced client-side schedulers with a NestJS 23-module service + Upstash QStash heartbeat loop — 56 services, timezone-aware hourly cron, Postgres-backed user locks.",
    href: "/work/euno",
  },
  {
    date: "2025-10",
    display: "Oct 2025",
    kind: "shipped",
    title: "Migrated Euno mobile app to React Native",
    description:
      "Rebuilt the Swift codebase in Expo + TypeScript. Same app, now cross-platform and faster to iterate on.",
    href: "/work/euno",
  },
  {
    date: "2025-10",
    display: "Oct 2025",
    kind: "role",
    title: "Started building Euno solo",
    description:
      "Took on Euno as sole engineer — mobile, backend, encryption, AI pipelines, infra.",
    href: "/work/euno",
  },
  {
    date: "2025-09",
    display: "Sep 2025",
    kind: "win",
    title: "Won Kapwa Codefest 2025",
    description:
      "First place with the Pisayian Data Cleaner — cut manual CSV normalization time by 95%.",
    href: "https://csv-umber.vercel.app/",
    external: true,
  },
  {
    date: "2025-09",
    display: "Sep 2025",
    kind: "role",
    title: "React Native work at OurFreedom.ai",
    description:
      "Contributed to a RN rebuild. Four months, Sep 2025 – Jan 2026.",
    href: "https://ourfreedom.ai/",
    external: true,
  },
  {
    date: "2025-07",
    display: "Jul 2025",
    kind: "side",
    title: "CoverMe hit 500+ users",
    description:
      "AI cover-letter generator I ship myself — 1000+ letters generated since launch.",
    href: "https://coverme.craigo.live",
    external: true,
  },
  {
    date: "2025-07",
    display: "Jul 2025",
    kind: "role",
    title: "Full-stack internship at Elaview",
    description:
      "Built a Visibility Score system from Census + Overpass + Gemini data. Jul – Sep 2025.",
    href: "https://www.elaview.com/",
    external: true,
  },
  {
    date: "2025-05",
    display: "May 2025",
    kind: "education",
    title: "Graduated UIUC",
    description:
      "BS in Computer Science with Honors. GPA 3.69. Go Illini.",
  },
  {
    date: "2025-01",
    display: "Jan 2025",
    kind: "side",
    title: "Co-founded Camelia",
    description:
      "Two-person web studio. Built client sites and an offline-capable inventory tracker.",
    href: "https://camelia.work",
    external: true,
  },
];

export const kindLabel: Record<ActivityKind, string> = {
  shipped: "Shipped",
  win: "Win",
  milestone: "Milestone",
  role: "New role",
  education: "Education",
  side: "Side project",
};

export const kindTone: Record<ActivityKind, string> = {
  shipped: "bg-accent/15 text-accent",
  win: "bg-warm/15 text-warm",
  milestone: "bg-accent/10 text-accent",
  role: "bg-white/10 text-white/70",
  education: "bg-white/10 text-white/70",
  side: "bg-warm/10 text-warm",
};

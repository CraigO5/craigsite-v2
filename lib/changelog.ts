export type ChangelogEntry = {
  version: string;
  date: string; // ISO-ish "YYYY-MM-DD"
  display: string; // human-readable
  headline: string;
  bullets: string[];
};

// Newest first. Treat the portfolio itself as a shipped product.
export const changelog: ChangelogEntry[] = [
  {
    version: "v2.1",
    date: "2026-04-16",
    display: "April 16, 2026",
    headline: "Developer dashboard pass.",
    bullets: [
      "Added a ⌘K command palette for fuzzy nav, theme switching, and jumping into case studies.",
      "Shipped vim-style g-prefix shortcuts (g h, g w, g p, g b, g u, g l, g c, g s) plus a `?` cheatsheet.",
      "Activity feed now pulls real commits from the GitHub API at build time instead of a hand-curated list.",
      "Build footer shows the deployed commit SHA and relative deploy time.",
      "Added /uses (opinionated stack) and /changelog (this page).",
      "Removed the scripted chatbot — felt more novelty than signal.",
    ],
  },
  {
    version: "v2.0",
    date: "2026-04-10",
    display: "April 10, 2026",
    headline: "Euno-shaped app rebuild.",
    bullets: [
      "Restructured the whole site to feel like a mobile app — bottom nav, tile dock, per-tab routes.",
      "New routes: /profile, /work, /work/[slug], /achievements, /contact, /settings.",
      "Switched default theme to Midnight (blue) and added 5 themes with live swatches.",
      "Pre-hydration script prevents theme flash on load.",
      "Swapped the logo for a face photo.",
    ],
  },
  {
    version: "v1.2",
    date: "2025-12-01",
    display: "December 2025",
    headline: "New case studies + design polish.",
    bullets: [
      "Added Euno, CoverMe, and Kapwa Codefest to the work list.",
      "Overflow protection across mobile breakpoints.",
      "Removed the old favicon, updated typography.",
    ],
  },
  {
    version: "v1.0",
    date: "2025-06-01",
    display: "June 2025",
    headline: "First public version.",
    bullets: [
      "Launched the portfolio on Next.js + Tailwind.",
      "Home, projects, and contact sections.",
    ],
  },
];

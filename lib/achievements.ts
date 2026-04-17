export type Achievement = {
  id: string;
  icon: string; // emoji or short string — render as-is
  title: string;
  description: string;
  metric?: string;
  unlocked: boolean;
  date?: string;
};

export const achievements: Achievement[] = [
  {
    id: "solo-shipper",
    icon: "🚢",
    title: "Solo Shipper",
    description:
      "Built and shipped Euno end-to-end as the sole engineer — mobile, backend, AI, encryption.",
    metric: "1 engineer · 1 product",
    unlocked: true,
    date: "Oct 2025",
  },
  {
    id: "codefest-champion",
    icon: "🏆",
    title: "Codefest Champion",
    description:
      "First place at Kapwa Codefest 2025 for the Pisayian Data Cleaner.",
    metric: "95% cleanup time reduction",
    unlocked: true,
    date: "Sep 2025",
  },
  {
    id: "aes-wizard",
    title: "AES Wizard",
    icon: "🔐",
    description: "Shipped biometric-gated field-level encryption across Euno.",
    metric: "AES-GCM · Face ID",
    unlocked: true,
    date: "Nov 2025",
  },
  {
    id: "migration-master",
    icon: "🔄",
    title: "Migration Master",
    description:
      "Rebuilt the Euno mobile app from Swift to React Native (Expo) + TypeScript.",
    metric: "Swift → RN",
    unlocked: true,
    date: "Oct 2025",
  },
  {
    id: "thousand-served",
    icon: "💌",
    title: "Thousand Served",
    description:
      "1,000+ cover letters generated through CoverMe for 500+ users.",
    metric: "500+ users · 1000+ letters",
    unlocked: true,
    date: "Jul 2025 → now",
  },
  {
    id: "queue-architect",
    icon: "⚙️",
    title: "Heartbeat Architect",
    description:
      "Replaced client-side schedulers with a server-side AI loop — continuous per-user processing that runs whether the app is open or not.",
    metric: "NestJS · QStash",
    unlocked: true,
    date: "Nov 2025",
  },
  {
    id: "vector-search",
    icon: "🧭",
    title: "Personality-Aware RAG",
    description:
      "Built a retrieval layer that factors in a user's personality profile — surfaces what's relevant to the person, not just what's close in vector space.",
    metric: "pgvector · RAG · personality model",
    unlocked: true,
    date: "Jan 2026",
  },
  {
    id: "uiuc-grad",
    icon: "🎓",
    title: "UIUC Computer Scientist",
    description:
      "BS in Computer Science, University of Illinois Urbana-Champaign. Graduated with honors.",
    metric: "GPA 3.69",
    unlocked: true,
    date: "May 2025",
  },
  {
    id: "thousand-interactions",
    icon: "🕸️",
    title: "Social System Builder",
    description:
      "Architected Euno's full social graph — friends, feed, comments, profile. 1000+ tested interactions.",
    metric: "1000+ interactions",
    unlocked: true,
    date: "Dec 2025",
  },
  {
    id: "first-post",
    icon: "✍️",
    title: "First Real Blog Post",
    description: "Write and publish a technical deep-dive.",
    unlocked: false,
  },
];

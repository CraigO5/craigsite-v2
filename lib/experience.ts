export type Experience = {
  role: string;
  company: string;
  url?: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Euno",
    url: "https://euno.app",
    dates: "October 2025 – Present",
    location: "Remote",
    bullets: [
      "Implemented AES-GCM encryption, biometric authentication, and semantic vector search across 25+ serverless functions.",
      "Rebuilt and deployed Euno mobile app from Swift to React Native (Expo) and TypeScript with a Supabase backend, enabling 50+ concurrent users and turning user conversations into a structured, queryable psychological knowledge base.",
      "Built a containerized NestJS backend service with BullMQ job queues for continuous per-user AI agent processing, replacing client-side schedulers with a reliable server-side heartbeat loop.",
      "Architected and implemented a social system including friend management, feed, comments, and profile handling, fully integrated across frontend, backend, and AI pipelines, handling 1000+ tested interactions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "OurFreedom.ai",
    url: "https://ourfreedom.ai",
    dates: "September 2025 – January 2026",
    location: "Remote",
    bullets: [
      "Diagnosed and rebuilt broken frontend architecture in React Native, resolving systemic bugs across social interaction features including comments, likes, and posts.",
      "Refactored UI and backend integration patterns to improve platform stability and consistency across 500+ posts.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Elaview",
    url: "https://www.elaview.com",
    dates: "July 2025 – September 2025",
    location: "Remote",
    bullets: [
      "Designed and deployed a full-stack Visibility Score system (0–100) integrating Census, Overpass API, and Google Gemini data, providing actionable geographic insights for ad placement.",
      "Built backend scoring logic in JavaScript with Prisma ORM and deployed on Railway, delivering real-time interactive visualizations.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Camelia",
    url: "https://camelia.work",
    dates: "January 2025 – October 2025",
    location: "Chicago, IL",
    bullets: [
      "Built offline-capable inventory tracker with local storage and Excel export, managing 1,000+ items across multiple international branches.",
    ],
  },
];

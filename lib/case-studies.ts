export type CaseStudySection = {
  heading: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  dates: string;
  status: "Ongoing" | "Shipped" | "Archived";
  url?: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  summary: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "euno",
    title: "Euno",
    tagline:
      "Turning user conversations into a structured, queryable psychological knowledge base.",
    role: "Software Engineer (solo)",
    dates: "October 2025 – Present",
    status: "Ongoing",
    url: "https://euno.app",
    stack: [
      "React Native (Expo)",
      "TypeScript",
      "Supabase",
      "NestJS",
      "BullMQ",
      "Docker",
      "AES-GCM / Web Crypto",
      "pgvector",
    ],
    metrics: [
      { label: "Concurrent users", value: "50+" },
      { label: "Serverless functions", value: "25+" },
      { label: "Tested social interactions", value: "1000+" },
      { label: "Migration", value: "Swift → RN" },
    ],
    summary:
      "I'm rebuilding Euno end-to-end — migrating the mobile app from Swift to React Native, replacing client-side schedulers with a server-side heartbeat loop, and architecting the encryption, search, and social layers on top of Supabase.",
    sections: [
      {
        heading: "The problem",
        body: "TODO — describe the state of Euno when I took it over, what the Swift app couldn't do, and the why behind the rebuild.",
      },
      {
        heading: "Architecture",
        body: "TODO — expand on the client / serverless function / NestJS worker / Supabase / AI pipeline split. Include a diagram.",
      },
      {
        heading: "Encryption: AES-GCM + biometrics",
        body: "TODO — write up the decision to use AES-GCM over alternatives, the key flow, how biometric auth gates access, and the mistakes I made on the way.",
      },
      {
        heading: "Search: semantic vectors over user memory",
        body: "TODO — embedding pipeline, pgvector schema, how queries turn conversations into retrieval inputs.",
      },
      {
        heading: "From client schedulers to a server heartbeat",
        body: "TODO — why the old client-side scheduler failed, how the NestJS + BullMQ heartbeat loop replaced it, and what the per-user AI agent loop looks like in practice.",
      },
      {
        heading: "Social system",
        body: "TODO — friend graph, feed composition, comments, profile handling, and how this integrates with the AI pipeline.",
      },
      {
        heading: "What I got wrong",
        body: "TODO — the honest failures and what I learned.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

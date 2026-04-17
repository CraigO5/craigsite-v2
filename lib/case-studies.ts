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
    role: "Lead Software Engineer",
    dates: "October 2025 – Present",
    status: "Ongoing",
    url: "https://euno.life",
    stack: [
      "React Native (Expo 54)",
      "TypeScript",
      "NestJS 11",
      "Supabase (PostgreSQL + pgvector)",
      "QStash (Upstash)",
      "Anthropic + OpenAI SDKs",
      "AES-GCM (Web Crypto + @noble/ciphers)",
      "expo-local-authentication (Face ID / Touch ID)",
      "Stripe",
      "HealthKit",
      "Sentry + LangFuse",
    ],
    metrics: [
      { label: "Concurrent users", value: "50+" },
      { label: "Backend LOC", value: "~22k" },
      { label: "Test files", value: "30" },
      { label: "Migration", value: "Swift → RN" },
    ],
    summary:
      "Started as the sole engineer and now lead the team building Euno. I rebuilt the product end-to-end — mobile app, backend, encryption, retrieval, and AI pipelines — and now own the technical direction. The product turns user conversations into a structured, queryable knowledge base that drives a personalized AI loop running continuously in the background.",
    sections: [
      {
        heading: "Starting point",
        body: "Euno was a Swift iOS app with client-side scheduling and no real backend AI loop. It couldn't run on Android, state was trapped on-device, and scaling to a social layer or persistent AI was architecturally off the table. I took it over solo and rebuilt everything without pausing shipping.",
      },
      {
        heading: "What I built",
        body: "A cross-platform React Native app (migrated from Swift) with biometric-gated field-level encryption, offline-first caching, and HealthKit sync. A modular NestJS backend handling auth, AI generation, semantic retrieval, social features, billing, and notifications — with full test coverage and production-grade error handling. A background AI loop that runs continuously per-user, surfacing insights from conversation history without requiring the app to be open.",
      },
      {
        heading: "The hard parts",
        body: "Encryption that's actually correct at the field level, not just in transit. A background AI pipeline that degrades gracefully and can't wedge itself on a bad user. Timezone-correct global notifications. And the core retrieval problem: standard semantic search returns what's closest in vector space — Euno needs to surface what's most relevant to *this specific user's* personality and psychological state. I built a RAG retrieval layer that factors in a user's evolving personality profile when deciding what to retrieve, so the AI isn't just pattern-matching on text — it's reasoning over a model of the person. Each of these is a solved problem individually. Owning all of them at once, without a team, is the actual challenge.",
      },
      {
        heading: "What I'd do differently",
        body: "I was aggressive about production safety early — startup validation, rate limiting, RLS, generic error responses — and I'd do that again. The one architectural call I'd revisit is the job queue choice. I switched queues mid-build when requirements became clearer, and that pivot cost time in the lock and retry logic. Picking the queue first and designing the distributed state around it would've been cleaner.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

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
      { label: "Backend services", value: "56" },
      { label: "NestJS modules", value: "23" },
      { label: "API controllers", value: "14" },
      { label: "Backend LOC", value: "~22k" },
      { label: "Mobile TS files", value: "~1.5k" },
      { label: "pgvector tables", value: "3" },
      { label: "Test files", value: "30" },
      { label: "Concurrent heartbeat users", value: "5 / batch" },
    ],
    summary:
      "I rebuilt Euno end-to-end as the sole engineer: migrated the mobile app from Swift to React Native, replaced client-side schedulers with a server-side heartbeat loop, and architected the encryption, retrieval, and AI-agent layers on top of Supabase. The backend is a 23-module NestJS service talking to Postgres + pgvector, coordinated by Upstash QStash and fed by Anthropic and OpenAI. The mobile app ships biometric-gated, field-level AES-GCM encryption, offline-first caching, and HealthKit sync.",
    sections: [
      {
        heading: "Starting point",
        body: "Euno was a Swift iOS app with client-side scheduling, no server-side AI loop, and encryption that couldn't survive production. The app couldn't run on Android, state was trapped on the device, and adding a social layer or background AI was architecturally impossible. I took it over solo and committed to rebuilding the mobile app, backend, encryption, retrieval, and AI pipelines without pausing shipping.",
      },
      {
        heading: "Architecture at a glance",
        body: "Expo / React Native client → NestJS 11 API (23 modules, 14 controllers, 56 services) → Supabase Postgres with pgvector and RLS. Long-running work runs on a timezone-aware hourly cron that dispatches through Upstash QStash, so I get serverless task semantics without operating Redis myself. Anthropic + OpenAI SDKs sit behind a thin service abstraction that logs every call (model, tokens, userId) to Supabase and LangFuse. Sentry handles frontend errors; a global NestJS HttpExceptionFilter makes sure the API never leaks schema info on error.",
      },
      {
        heading: "AES-GCM field-level encryption",
        body: "Every encrypted field gets a fresh 12-byte random IV, concatenated with the ciphertext, and stored base64. Keys are per-user and derived on the client behind a biometric gate (expo-local-authentication + expo-secure-store). The server enforces ENCRYPTION_ENABLED=true and validates the key at startup in production — no silent fallback. In dev, a logged plaintext fallback keeps the iteration loop fast without hiding bugs in prod.",
      },
      {
        heading: "Heartbeat loop: a distributed state machine in Postgres",
        body: "The core of Euno's AI is a hourly loop that decides, per user, whether to generate a new insight. An @Cron job pulls active users from notification_preferences, batches them 5 at a time, and for each user acquires a Postgres-backed lock (a small state machine in Supabase that behaves like a Redis SETNX). If the lock is free, it runs the pipeline: a Decider checks whether new sessions or gaps arrived since last run, a Gap Analyzer finds tension candidates, a Tension Analyzer matches them via pgvector, a Generator drafts a thought with Anthropic or OpenAI, and a Delivery service schedules the notification. Every step logs to LangFuse and degrades to an empty result on failure so one bad user can't wedge the loop.",
      },
      {
        heading: "Semantic search with composite scoring",
        body: "User memory lives in a unified user_search_chunks table (snapshots, tensions, facts, portraits, thoughts, gaps, summaries) plus two typed embedding tables, all indexed with IVFFlat (lists=100) over pgvector. The search_user RPC doesn't just sort by cosine similarity — it multiplies cosine × exponential recency decay (30-day half-life) × a type weight (portrait 1.3, tension 1.2, fact/summary 1.1, snapshot 1.0, thought 0.8, gap 0.7). The result is recall that matches human intuition: 'the important stuff, lately' instead of 'whatever was closest in vector space'. A separate match_tensions RPC surfaces semantically similar open tensions without any LLM call.",
      },
      {
        heading: "Timezone-correct global cron",
        body: "Daily recaps have to arrive at 9 PM in the user's timezone, across DST, without drifting. Rather than compute offsets in application code, the hourly cron asks Postgres 'is it 21:00 local for this user right now?' using the user's timezone string. Application code never touches offsets and DST transitions are correct for free.",
      },
      {
        heading: "What I'd do differently",
        body: "I was aggressive about production safety (startup checks, generic error responses, rate limiting, RLS, locked heartbeats) and honest about what wasn't ready — a COMPLIANCE_AUDIT.md in the repo tracks HIPAA gaps that I've been closing on a schedule. One call I'd revisit: I initially planned BullMQ + Redis for the job queue and ended up switching to Upstash QStash mid-build. QStash's HTTP semantics were the right fit for a serverless-friendly deploy, but I paid for the pivot in the heartbeat locking code. I'd pick the queue earlier and design the lock primitive around it.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

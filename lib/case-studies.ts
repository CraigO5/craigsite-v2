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
      "Founding engineer of three production repos. AI agent pipeline, encryption, retrieval, and the longitudinal data model behind it.",
    role: "Founding Software Engineer",
    dates: "October 2025 – Present",
    status: "Ongoing",
    url: "https://euno.life",
    stack: [
      "React Native (Expo 54)",
      "TypeScript",
      "NestJS 11",
      "Supabase (PostgreSQL + pgvector)",
      "Upstash QStash",
      "Anthropic SDK (Claude Haiku 4.5)",
      "OpenAI SDK (GPT-4o-mini)",
      "AES-GCM (Web Crypto + @noble/ciphers)",
      "expo-local-authentication (Face ID / Touch ID)",
      "Stripe",
      "HealthKit",
      "Vite + React + Tailwind + shadcn/ui",
      "Langfuse",
      "Sentry",
    ],
    metrics: [
      { label: "Commits", value: "518" },
      { label: "Production repos", value: "3" },
      { label: "Months", value: "6" },
      { label: "Integration tests", value: "22" },
    ],
    summary:
      "Sole engineer of three production repos — React Native iOS, NestJS backend, Vite web — owning architecture, deployment, and on-call. The product turns user conversations into a structured, queryable knowledge base that drives a personalized AI loop running continuously in the background.",
    sections: [
      {
        heading: "The problem",
        body: "Euno was a Swift iOS app with client-side scheduling and no real backend AI loop. It couldn't run on Android, state was trapped on-device, and scaling to a social layer or persistent AI was architecturally off the table. I took it over solo and rebuilt everything without pausing shipping.",
      },
      {
        heading: "What I built",
        body: "Three production repos, all in TypeScript:\n\n— A cross-platform React Native app (migrated from Swift) with biometric-gated field-level encryption, offline-first caching, and HealthKit sync.\n\n— A modular NestJS 11 backend handling auth, AI generation, semantic retrieval, social features, billing, and notifications, with full test coverage and production-grade error handling.\n\n— A Vite + React + Tailwind + shadcn/ui web app (243 files, 15 Supabase migrations) for end-users and licensed providers, with live Stripe billing, dual auth contexts, and two AI-powered Supabase edge functions.",
      },
      {
        heading: "The 7-step AI agent pipeline",
        body: "The core of Euno is a deterministic 7-step pipeline (NestJS, 40 files, 15 services) that runs continuously per-user — snapshot extraction, gap/tension analysis, and personalized thought generation, all with cost-aware step gating and 22 behavioral integration tests. The data model is longitudinal: raw chat history compresses into encrypted snapshots → tensions → versioned portraits, which serve as substrate for every downstream step. By holding per-call LLM context under ~1,250 tokens, the pipeline runs cheaply enough to schedule on a heartbeat instead of on-demand.",
      },
      {
        heading: "LLM cost optimization",
        body: "First production version of the pipeline ran two analysis LLM calls per user-tick plus a separate gate model. I collapsed the two analysis calls into one unified GPT-4o-mini call, removed the redundant gate, and switched the chat layer to Claude Haiku 4.5. Then I instrumented Langfuse for per-feature token tracking so I could see which step was leaking spend. The result: lower bill, fewer moving parts, faster response times.",
      },
      {
        heading: "BullMQ → QStash migration",
        body: "The first job queue was BullMQ on Redis. It worked, but Redis was a long-lived dependency that needed monitoring, and the worker model didn't match the bursty serverless shape of the rest of the stack. I replaced it with Upstash QStash — HTTP-triggered, durable retries, no Redis to operate. The migration unlocked variable-ratio scheduling: timezone-aware morning/evening anchors with jitter, which tested out as more engaging than fixed cron times.",
      },
      {
        heading: "Privacy architecture",
        body: "Field-level AES-GCM encryption across every user-content table. Per-record random IVs. Biometric gate (Face ID / Touch ID) for key access. Production startup validation that fails the boot if keys aren't loaded correctly. On top of that: Supabase JWT migration and 7 RLS / security-hardening migrations to unblock the social product pivot. The point is that I can't read your data, and the system enforces that even if I tried.",
      },
      {
        heading: "What I'd do differently",
        body: "I was aggressive about production safety early — startup validation, rate limiting, RLS, generic error responses — and I'd do that again. The one architectural call I'd revisit is the job queue choice. I switched queues mid-build when requirements became clearer, and that pivot cost time in the lock and retry logic. Picking the queue first and designing the distributed state around it would've been cleaner.",
      },
    ],
  },
  {
    slug: "coverme",
    title: "CoverMe",
    tagline:
      "AI cover letter generator. 500+ users, 1,000+ letters, sub-5-second responses.",
    role: "Solo developer",
    dates: "July 2025 – Present",
    status: "Shipped",
    url: "https://coverme.craigo.live/",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Vercel"],
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Letters generated", value: "1,000+" },
      { label: "Time to letter", value: "<5s" },
      { label: "Build", value: "Solo" },
    ],
    summary:
      "Bulk job description input, tailored cover letter output in under five seconds. Built solo as a tool for myself, opened to the public. The interesting work was on the prompt and the input flow, not the framework choice.",
    sections: [
      {
        heading: "The problem",
        body: "Cover letters are repetitive, time-consuming, and high-stakes. Job seekers write 10–20 letters per week — each tailored to a different role, each demanding the same dance of relevant-but-not-canned. The honest version is that most people copy-paste an old letter and change the company name. The result reads like exactly that. CoverMe started as a tool for me: bulk job descriptions in, distinct tailored letters out, in under five seconds.",
      },
      {
        heading: "What I built",
        body: "A Next.js + TypeScript app on Vercel with a single-screen flow: paste a resume once, paste a job description, get a letter. The OpenAI integration runs with streamed responses so the first words land in under a second, and full letters arrive in under five. No login required for the free tier — the goal was to remove every barrier to first-use. The app has crossed 500+ users and 1,000+ generated letters.",
      },
      {
        heading: "Prompt engineering iteration",
        body: "The first prompt was naive: \"write a cover letter for this resume and this job.\" The output was generic, hedging, and full of phrases like \"I am writing to express my interest.\" Iteration two anchored the model in three structural beats — opening hook, two specific resume-to-job bridges, and a forward-looking close — and the output got noticeably tighter. The bigger unlock was teaching the model to *not* repeat the resume. The final prompt instructs it to assume the resume is already attached and write the version that adds, rather than restates, value.",
      },
      {
        heading: "What I'd do differently",
        body: "I'd ship a voice-calibration step. Right now CoverMe writes in a competent but neutral register; users with strong personal voice get letters that sound less like them than their old hand-written ones. Next iteration: a quick onboarding where the user pastes a sample of their writing and the model adopts the tone.",
      },
    ],
  },
  {
    slug: "pisayian",
    title: "Pisayian Data Cleaner",
    tagline:
      "1st place, Kapwa Codefest 2025. CSV → 3 normalized tables. 95% manual-cleanup reduction.",
    role: "Frontend lead (team of 4)",
    dates: "September 2025",
    status: "Shipped",
    url: "https://csv-umber.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind", "PapaParse", "fflate"],
    metrics: [
      { label: "Result", value: "1st place" },
      { label: "Event", value: "Kapwa Codefest 2025" },
      { label: "Build time", value: "36 hours" },
      { label: "Cleanup reduction", value: "95%" },
    ],
    summary:
      "Built in 36 hours for the PSHS International Alumni Foundation — a web tool that converts SPECTRA CSV exports into three relational tables, replacing 10+ hours of volunteer cleanup with a few clicks.",
    sections: [
      {
        heading: "The problem",
        body: "PSHS International Alumni Foundation maintains a directory of alumni from the Philippine Science High School system, exported quarterly from a legacy SPECTRA database. The export comes out as a single denormalized CSV with every record's history collapsed into a wide row — multiple addresses, multiple employers, multiple education entries, all comma-separated within cells. Volunteers were spending 10+ hours per export turning this into anything queryable. We had 36 hours at Kapwa Codefest to fix it.",
      },
      {
        heading: "What I built",
        body: "A web tool that takes the SPECTRA export and produces three normalized tables — alumni, contacts, education — ready to import into a relational database. The hard part wasn't parsing CSV (PapaParse handles that); it was building a UI that makes the cleanup *visible*. Rows that fail validation get flagged with the specific reason. Volunteers can edit inline, see counts update in real time, and download a zipped bundle (fflate) of the three CSVs once the dataset is clean. We placed first.",
      },
      {
        heading: "What I learned",
        body: "Hackathon work is mostly about scoping. We had 36 hours and ten ideas. The version that won wasn't the most ambitious one — it was the one we could finish and demo on stage. I'd been on hackathon teams before that built impressive prototypes that broke 30 seconds into the demo. This time we cut features aggressively (no auth, no DB, no deploy pipeline beyond Vercel preview) and spent the saved time on UX polish. The lesson is the same one every senior engineer eventually learns about deadlines — but feeling it under pressure is different from reading it.",
      },
    ],
  },
  {
    slug: "spyfall",
    title: "Spyfall Unlimited",
    tagline:
      "Browser-based multiplayer social deduction. Built solo to learn realtime systems.",
    role: "Solo developer",
    dates: "June – July 2025",
    status: "Shipped",
    url: "https://github.com/CraigO5/spyfall",
    stack: ["Next.js", "TypeScript", "Supabase Realtime", "Tailwind"],
    metrics: [
      { label: "Architecture", value: "Realtime channels" },
      { label: "State model", value: "Postgres session" },
      { label: "Build", value: "Solo" },
      { label: "Status", value: "Shipped" },
    ],
    summary:
      "A browser-based multiplayer social deduction game. Built solo to learn realtime systems with Supabase channels and a PostgreSQL session model.",
    sections: [
      {
        heading: "Building real-time multiplayer with Supabase channels",
        body: "Spyfall is a 4–8 player social deduction game where one player is the spy and everyone else shares a secret location. The game state — players, roles, votes — has to be in sync across every client within ~200ms or the experience falls apart. I built the realtime layer on Supabase channels, with PostgreSQL as the source of truth. Each game session is a row, with player state in a child table; channel subscriptions broadcast row changes to every connected client. No custom WebSocket server — the database is the server.",
      },
      {
        heading: "Designing the role-assignment algorithm",
        body: "The naive role assignment is `roles = shuffle([spy, civilian, civilian, ...])`. Easy. The actual constraint is that players need to feel like the spy assignment is random *across rounds* — if the same person is the spy three rounds in a row, the game becomes a joke. I added a session-level memory that tracks recent spy assignments and weights against repeats, while preserving the surface randomness. A small change with an outsized effect on how the game plays.",
      },
      {
        heading: "What I learned about latency",
        body: "Realtime games are unforgiving about latency. A 300ms delay between \"player votes\" and \"player sees the vote\" breaks the social rhythm — you can feel the lag in the room. I learned to measure round-trip time per channel event, not per HTTP request, and to render local state changes optimistically before server confirmation. The instinct from web apps — wait for the server, then update — produces a worse experience here than just trusting local state and reconciling on conflict.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

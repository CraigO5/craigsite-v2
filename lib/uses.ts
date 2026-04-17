export type UsesItem = {
  name: string;
  role: string;
  why: string;
  href?: string;
};

export type UsesCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: UsesItem[];
};

export const usesData: UsesCategory[] = [
  {
    id: "languages",
    title: "Languages",
    subtitle: "What I reach for first.",
    items: [
      {
        name: "TypeScript",
        role: "Default for everything",
        why: "The single biggest productivity multiplier. Strict mode on, `any` is a smell.",
      },
      {
        name: "Python",
        role: "Scripts, data, ML glue",
        why: "When something needs to happen once, or there's a pandas dataframe in the way.",
      },
      {
        name: "C / C++",
        role: "When I need to understand the machine",
        why: "Mostly reading, occasionally writing. Keeps the mental model honest.",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Mobile",
    subtitle: "Where visitors actually meet the product.",
    items: [
      {
        name: "React Native (Expo)",
        role: "Mobile",
        why: "Ships cross-platform in weeks, not months. EAS + OTA updates close the native gap.",
      },
      {
        name: "Next.js (App Router)",
        role: "Web",
        why: "Server components + file routing + static export is the fastest way I know to ship a fast, crawlable site.",
      },
      {
        name: "Tailwind CSS",
        role: "Styling",
        why: "Co-located, deletable, and impossible to drift. v4's `@theme inline` is elegant.",
      },
      {
        name: "Lucide",
        role: "Icons",
        why: "Tree-shakable, stylistically consistent, no sprite headaches.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    subtitle: "The part recruiters pretend to care about.",
    items: [
      {
        name: "NestJS",
        role: "Long-running services",
        why: "Opinionated structure pays off the moment a service crosses ~5 modules. DI for free.",
      },
      {
        name: "Supabase Edge Functions",
        role: "Serverless glue",
        why: "Deno + Postgres in one place. Perfect for tight, stateless endpoints next to user data.",
      },
      {
        name: "PostgreSQL + pgvector",
        role: "Primary store",
        why: "Relational *and* vector, same DB. No sidecar retrieval service.",
      },
      {
        name: "Prisma",
        role: "ORM",
        why: "Schema-first, type-safe, and the migration story actually works.",
      },
      {
        name: "Upstash QStash",
        role: "Serverless job queue",
        why: "HTTP-based, no Redis to operate. Powers Euno's hourly heartbeat loop with durable retries and deadlines.",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Observability",
    subtitle: "Where the LLMs actually live.",
    items: [
      {
        name: "Anthropic SDK",
        role: "Primary LLM",
        why: "Claude for reasoning-heavy generation. Behind a thin service abstraction so I can A/B against OpenAI per call.",
      },
      {
        name: "OpenAI SDK",
        role: "Embeddings + fallback",
        why: "text-embedding-3-small (1536d) for semantic memory; GPT models when Anthropic isn't the right shape.",
      },
      {
        name: "LangFuse",
        role: "LLM observability",
        why: "Every call logged with tokens, latency, userId, and prompt. Makes regressions visible before users notice.",
      },
      {
        name: "pgvector (IVFFlat)",
        role: "Retrieval",
        why: "Same Postgres that holds the rows. Composite ranking = cosine × recency × type weight, not just nearest neighbor.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Crypto",
    subtitle: "Boring choices on purpose.",
    items: [
      {
        name: "Web Crypto (AES-GCM)",
        role: "Symmetric encryption",
        why: "Browser-native, audited, fast. Per-user keys + biometric gates mean I can't read your data.",
      },
      {
        name: "Argon2id",
        role: "Password hashing",
        why: "Current best default. Tune parameters for the host, then forget about it.",
      },
    ],
  },
  {
    id: "infra",
    title: "Infra & Tooling",
    subtitle: "The stuff between `git push` and prod.",
    items: [
      {
        name: "Vercel",
        role: "Frontend hosting",
        why: "Preview deploys per PR closes the feedback loop to seconds.",
      },
      {
        name: "Railway",
        role: "Backend & Redis",
        why: "Deploys a NestJS + Redis stack without needing a DevOps detour.",
      },
      {
        name: "Docker",
        role: "Local parity",
        why: "If it boots in compose, it boots on the host.",
      },
      {
        name: "GitHub Actions",
        role: "CI",
        why: "Cheap, scriptable, and the logs are where everyone already lives.",
      },
    ],
  },
  {
    id: "editor",
    title: "Editor & Daily Drivers",
    subtitle: "What's actually on my screen.",
    items: [
      {
        name: "VS Code + Cursor",
        role: "Editor",
        why: "VS Code for everyday work, Cursor when the task is 'read this large thing first'.",
      },
      {
        name: "Claude Code",
        role: "Pair programmer",
        why: "Best when pointed at a tight, well-scoped task with a clear verification step.",
      },
      {
        name: "Arc / Chrome DevTools",
        role: "Browser",
        why: "DevTools is underrated. Most of my hardest bugs died in the Network tab.",
      },
      {
        name: "Obsidian",
        role: "Notes",
        why: "Plaintext markdown in a folder. Outlives every proprietary tool.",
      },
    ],
  },
];

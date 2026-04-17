export type ChatResponse = {
  keywords: string[];
  question: string;
  answer: string;
};

// Scripted responses. Matching is keyword-based.
// Swap in a real LLM later by replacing findResponse() with an API call.
export const responses: ChatResponse[] = [
  {
    keywords: ["euno", "current", "now", "working on"],
    question: "What's Euno?",
    answer:
      "Euno is a personal AI assistant for self-reflection. I've been building it solo since October 2025 — migrated the mobile app from Swift to React Native (Expo), architected the NestJS + BullMQ backend, implemented AES-GCM encryption with biometric auth, and built a semantic vector search over user memory using pgvector. It turns conversations into a structured, queryable knowledge base.",
  },
  {
    keywords: ["stack", "tech", "tools", "languages"],
    question: "What's your stack?",
    answer:
      "Daily drivers: TypeScript, React / React Native (Expo), Next.js, NestJS, Supabase + PostgreSQL, Prisma, BullMQ, Docker. I use Web Crypto (AES-GCM), pgvector for embeddings, and Railway + Vercel for deploys. For lower-level work I reach for Python and C/C++.",
  },
  {
    keywords: ["experience", "work", "job", "jobs", "career"],
    question: "Where have you worked?",
    answer:
      "Four roles in the last year: Euno (Oct 2025 → now, solo engineer), OurFreedom.ai (Sep 2025 – Jan 2026, React Native rebuild), Elaview (Jul – Sep 2025, full-stack intern on a Visibility Score system with Census + Overpass + Gemini data), and Camelia (Jan – Oct 2025, offline-capable inventory tracker). Full breakdown is in the Experience section.",
  },
  {
    keywords: ["encryption", "aes", "security", "crypto"],
    question: "Tell me about the encryption work",
    answer:
      "At Euno I implemented AES-GCM encryption across 25+ serverless functions, paired with biometric authentication on the client. Keys are derived per-user and the design ensures even I can't read user data on the server. Real case study is coming — see /work/euno for the scaffolded page.",
  },
  {
    keywords: ["available", "hire", "hiring", "opportunity", "role"],
    question: "Are you available for work?",
    answer:
      "Open to engineering roles, consulting gigs, and collaborations on the kind of thing you'd want to read a case study about. Shoot me an email at craig.brdt505@gmail.com.",
  },
  {
    keywords: ["codefest", "kapwa", "hackathon", "win", "award"],
    question: "Tell me about Kapwa Codefest",
    answer:
      "Won first place at Kapwa Codefest 2025. Built the Pisayian Data Cleaner — a web tool that normalizes SPECTRA CSV exports into three relational tables for the PSHS international alumni database. Cut manual cleanup time by 95%.",
  },
  {
    keywords: ["coverme", "cover letter", "ai"],
    question: "What's CoverMe?",
    answer:
      "An AI-powered cover letter generator I built and ship myself. 500+ users have generated 1000+ cover letters. Uses the OpenAI API with prompt engineering tuned for tone and resume-parsing. coverme.craigo.live.",
  },
  {
    keywords: ["school", "education", "college", "university", "degree"],
    question: "Where did you go to school?",
    answer:
      "BS in Computer Science with Honors from the University of Illinois Urbana-Champaign. March 2021 – May 2025. GPA 3.69.",
  },
  {
    keywords: ["github", "code", "repo", "source"],
    question: "Where's your code?",
    answer: "github.com/CraigO5 — most of my public work lives there.",
  },
  {
    keywords: ["contact", "email", "reach", "message"],
    question: "How do I reach you?",
    answer: "Email: craig.brdt505@gmail.com. LinkedIn works too.",
  },
  {
    keywords: ["who", "about", "introduce", "yourself", "you"],
    question: "Who are you?",
    answer:
      "Craig Ondevilla — software engineer, CS grad from UIUC, currently building Euno solo. I build encrypted, AI-backed mobile and web systems. Based between Chicago and remote.",
  },
  {
    keywords: ["fun", "hobby", "hobbies", "outside"],
    question: "What do you do outside of code?",
    answer:
      "I draw, I play video games, and I co-ran a small web studio called Camelia. Also won a hackathon once — counts as a hobby if you tell people at parties.",
  },
];

export const suggestedQuestions = [
  "What's Euno?",
  "What's your stack?",
  "Are you available for work?",
  "Tell me about Kapwa Codefest",
];

export function findResponse(input: string): string {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return "Ask me something about my work, stack, or experience.";

  // Score each response by keyword overlap
  let best: { r: ChatResponse; score: number } | null = null;
  for (const r of responses) {
    let score = 0;
    for (const kw of r.keywords) {
      if (normalized.includes(kw)) score += kw.length;
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { r, score };
    }
  }

  if (best) return best.r.answer;

  return "I haven't scripted an answer for that yet — try asking about Euno, my stack, my experience, CoverMe, the Kapwa Codefest win, or availability. (This bot runs on canned responses; a real LLM-backed version is on the roadmap.)";
}

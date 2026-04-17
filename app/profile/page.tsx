import type { Metadata } from "next";
import ProfileCard from "@/components/custom/ProfileCard";
import ScreenHeader from "@/components/custom/ScreenHeader";
import { experiences } from "@/lib/experience";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "Craig Ondevilla — CS grad from UIUC. Currently leading engineering at Euno. Work timeline and stack.",
};

const stack = [
  { area: "encryption", tools: "AES-GCM · Web Crypto · @noble/ciphers · per-record IVs", ref: "euno" },
  { area: "queues", tools: "NestJS + Upstash QStash", ref: "euno" },
  { area: "retrieval", tools: "pgvector · semantic search", ref: "euno" },
  { area: "mobile", tools: "React Native (Expo 54) · TypeScript · Face ID · HealthKit", ref: "euno" },
  { area: "backend", tools: "NestJS 11 · Supabase · PostgreSQL · class-validator", ref: "euno" },
  { area: "ai", tools: "Anthropic · OpenAI · LangFuse observability", ref: "euno" },
  { area: "frontend", tools: "Next.js 15 · React 19 · Tailwind v4" },
  { area: "devops", tools: "Docker · Railway · Vercel · GitHub Actions · Sentry" },
  { area: "languages", tools: "TypeScript · Python · C/C++ · Java" },
];

export default function ProfilePage() {
  return (
    <main className="overflow-x-hidden pt-24 pb-28 md:pt-32">
      {/* Profile */}
      <ProfileCard />

      {/* Timeline */}
      <section id="experience" className="mx-auto max-w-5xl px-6 pb-20">
        <ScreenHeader
          title="Where I've worked."
          subtitle="The last year has been a crash course in owning systems end-to-end."
        />
        <div className="relative">
          <div className="absolute top-0 left-0 hidden h-full w-px bg-gradient-to-b from-accent via-warm to-transparent md:block" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-10">
                <div className="absolute top-7 -left-[5px] hidden h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-[var(--background)] md:block" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                  <div className="mb-5 flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold md:text-2xl">
                        {exp.url ? (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors duration-200"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h3>
                      <p className="font-semibold text-accent">{exp.role}</p>
                    </div>
                    <div className="mt-1 text-sm text-white/50 md:mt-0 md:text-right">
                      <p>{exp.dates}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 leading-relaxed text-white/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="mx-auto max-w-5xl px-6 pb-20">
        <ScreenHeader
          title="What I build with."
          subtitle="Tools, languages, and services I reach for day-to-day."
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {stack.map((row) => (
            <div
              key={row.area}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm text-accent capitalize">{row.area}</p>
                {row.ref && (
                  <Link
                    href={`/work/${row.ref}`}
                    className="text-xs text-white/40 hover:text-white transition-colors duration-200"
                  >
                    see {row.ref} →
                  </Link>
                )}
              </div>
              <p className="text-white/80 leading-relaxed">{row.tools}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

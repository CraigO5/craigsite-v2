import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.tagline,
    openGraph: {
      title: cs.title,
      description: cs.tagline,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <div className="min-h-screen pb-28">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Link
          href="/work"
          className="mb-12 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          All work
        </Link>

        <header className="mb-12">
          <p className="mb-3 text-sm text-accent">
            {cs.status} · {cs.dates}
          </p>
          <h1 className="mb-4 font-bold">{cs.title}</h1>
          <p className="text-xl text-white/70 leading-relaxed">{cs.tagline}</p>
          {cs.url && (
            <a
              href={cs.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-black"
            >
              Visit {cs.title}
              <ArrowUpRight size={14} />
            </a>
          )}
        </header>

        <section className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {cs.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <p className="mb-1 text-xs text-white/40">{m.label}</p>
              <p className="text-xl font-semibold">{m.value}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <p className="text-lg text-white/80 leading-relaxed">{cs.summary}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-lg font-bold text-white/80">Built with</h2>
          <div className="flex flex-wrap gap-2">
            {cs.stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <div className="space-y-12">
          {cs.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-4 text-2xl font-bold">{s.heading}</h2>
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

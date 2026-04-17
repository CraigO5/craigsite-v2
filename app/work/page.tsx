import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and projects by Craig Ondevilla — including Euno, CoverMe, and Kapwa Codefest 2025.",
};

export default function WorkIndex() {
  return (
    <div className="min-h-screen pb-28">
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <header className="mb-12">
          <p className="mb-2 text-sm text-accent">My work</p>
          <h1 className="font-bold">Things I've built.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            A mix of shipped products, hackathon wins, and side projects.
            Deep-dives first, then the rest.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="mb-5 text-xl font-bold md:text-2xl">Case studies</h2>
          <div className="flex flex-col gap-4">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/8 md:p-8"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{cs.title}</h3>
                  <span className="text-xs text-accent">{cs.status}</span>
                </div>
                <p className="mb-4 text-white/70 leading-relaxed">
                  {cs.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.stack.slice(0, 6).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-white/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-xl font-bold md:text-2xl">Other projects</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-raised">
                  <Image
                    alt={p.title}
                    src={p.image}
                    width={640}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <ArrowUpRight
                      size={14}
                      className="flex-shrink-0 text-white/30 transition-colors duration-200 group-hover:text-accent"
                    />
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

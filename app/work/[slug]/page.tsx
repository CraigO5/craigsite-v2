import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";
import MetadataRow from "@/components/MetadataRow";
import CountUp from "@/components/CountUp";
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
    openGraph: { title: cs.title, description: cs.tagline },
  };
}

function MetricValue({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (match && match[1].replace(/,/g, "").length > 0) {
    const num = parseInt(match[1].replace(/,/g, ""), 10);
    if (!isNaN(num)) {
      return <CountUp target={num} suffix={match[2]} duration={1400} />;
    }
  }
  return <>{value}</>;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const num = String(idx + 1).padStart(3, "0");
  const nextIdx = (idx + 1) % caseStudies.length;
  const next = caseStudies[nextIdx];
  const nextNum = String(nextIdx + 1).padStart(3, "0");

  return (
    <main id="top" className="min-h-screen bg-[#1a1a1a] text-[#f4eee5]">
      <NavBar theme="dark" />

      <article className="border-l border-r border-[#333]">
        <header className="border-b border-[#333] px-8 py-20">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [{num}] / SELECTED WORK
          </p>
          <h1 className="mt-8 font-black leading-[0.85] tracking-[-0.07em] text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px]">
            {cs.title.toUpperCase()}
          </h1>
          <p className="mt-8 max-w-2xl text-[20px] leading-[1.5]">
            {cs.tagline}
          </p>
        </header>

        <MetadataRow
          items={[
            { label: "ROLE", value: cs.role },
            { label: "TIMELINE", value: cs.dates },
            { label: "STATUS", value: cs.status },
            { label: "STACK", value: cs.stack.slice(0, 3).join(", ") },
          ]}
        />

        {cs.url && (
          <div className="border-b border-[#333] px-8 py-6">
            <a
              href={cs.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗ EXTERNAL"
              className="text-[12px] font-bold tracking-[0.25em] text-[#38bdf8] underline underline-offset-4 decoration-[2px] hover:decoration-[3px]"
            >
              VISIT SITE ↗
            </a>
          </div>
        )}

        <section className="border-b border-[#333] px-8 py-16">
          <p
            className="max-w-3xl text-[22px] leading-[1.5]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            <em>{cs.summary}</em>
          </p>
        </section>

        <section className="border-b border-[#333] px-8 py-12">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [METRICS]
          </p>
          <div className="mt-8 grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {cs.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-black leading-none tracking-[-0.04em] text-[40px]">
                  <MetricValue value={m.value} />
                </div>
                <div className="mt-3 text-[11px] font-bold tracking-[0.25em] text-[#888]">
                  {m.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#333] px-8 py-12">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [STACK]
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            {cs.stack.map((tool) => (
              <li key={tool} className="font-medium">
                {tool}
              </li>
            ))}
          </ul>
        </section>

        {cs.sections.map((s, i) => (
          <section
            key={s.heading}
            className="border-b border-[#333] px-8 py-20"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
              [{String(i + 1).padStart(2, "0")}]
            </p>
            <h2 className="mt-4 font-black leading-[0.95] tracking-[-0.03em] text-[28px] md:text-[36px] lg:text-[48px]">
              {s.heading.toUpperCase()}
            </h2>
            <p className="mt-8 max-w-3xl whitespace-pre-line text-[16px] leading-[1.7]">
              {s.body}
            </p>
          </section>
        ))}

        {next && next.slug !== slug && (
          <Link
            href={`/work/${next.slug}`}
            data-cursor={`→ ${nextNum}`}
            className="group block border-b border-[#333] px-8 py-16 transition-colors hover:bg-[#38bdf8] hover:text-[#1a1a1a]"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#888] group-hover:text-[#1a1a1a]">
              [UP NEXT]
            </p>
            <p className="mt-4 font-black leading-none tracking-[-0.04em] text-[28px] md:text-[36px] lg:text-[48px]">
              → {nextNum} / {next.title.toUpperCase()}
            </p>
          </Link>
        )}
      </article>

      <PageFooter theme="dark" />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";
import { experiences } from "@/lib/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founding engineer based in Champaign, IL. Building AI-backed mobile, backend, and web systems.",
};

const facts = [
  { label: "BASED IN", value: "Champaign, IL" },
  { label: "EDUCATION", value: "B.S. Computer Science, UIUC, 2025 — Honors, 3.69 GPA" },
  { label: "ROLE", value: "Founding engineer at Euno" },
  { label: "RECOGNITION", value: "1st place — Kapwa Codefest 2025" },
  { label: "INTERESTS", value: "ML applied to user modeling" },
  { label: "OPEN TO", value: "AI engineering and senior full-stack roles" },
];

export default function AboutPage() {
  return (
    <main id="top" className="min-h-screen bg-[#1a1a1a] text-[#f4eee5]">
      <NavBar theme="dark" />

      <article className="border-l border-r border-[#333]">
        <header className="border-b border-[#333] px-8 py-20">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [005] / ABOUT
          </p>
          <h1 className="mt-8 font-black leading-[0.85] tracking-[-0.07em] text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px]">
            HI, I&apos;M
            <br />
            CRAIG<span className="text-[#38bdf8]">.</span>
          </h1>
        </header>

        <section className="border-b border-[#333] px-8 py-16">
          <p
            className="max-w-3xl text-[24px] leading-[1.5]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            <em>
              Founding engineer. I write production systems end-to-end —
              mobile, backend, and the AI loops in between. I make art when
              I&apos;m not making software.
            </em>
          </p>
        </section>

        <ul className="grid grid-cols-1 border-b border-[#333] md:grid-cols-2">
          {facts.map((f, i) => (
            <li
              key={f.label}
              className={`px-8 py-10 ${
                i % 2 === 0 ? "md:border-r border-[#333]" : ""
              } ${i < facts.length - 2 ? "border-b border-[#333]" : ""}`}
            >
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
                {f.label}
              </p>
              <p className="mt-4 text-[20px] font-medium leading-snug">
                {f.value}
              </p>
            </li>
          ))}
        </ul>

        <section className="border-b border-[#333] px-8 py-16">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [LONGFORM]
          </p>
          <div className="mt-8 max-w-2xl space-y-6 text-[16px] leading-[1.7]">
            <p>
              I&apos;m Craig — a founding engineer based in Champaign, IL. I
              graduated from the University of Illinois Urbana-Champaign in
              2025 with a B.S. in Computer Science and Honors (GPA 3.69).
            </p>
            <p>
              Right now I&apos;m the sole engineer at Euno, building AI agent
              systems end-to-end — the mobile client, the backend, the
              encryption layer, and the retrieval loop. I rebuilt the product
              from a Swift iOS app into a cross-platform React Native app with
              a NestJS backend, biometric-gated field-level encryption, and a
              continuously-running per-user AI pipeline.
            </p>
            <p>
              In September 2025, my team won 1st place at Kapwa Codefest for
              building a CSV cleanup tool for a Filipino alumni nonprofit in 36
              hours. I&apos;ve also shipped CoverMe (an AI cover letter
              generator with 500+ users) and Spyfall (a real-time multiplayer
              social deduction game).
            </p>
            <p>
              I make art when I&apos;m not making software. I&apos;m
              particularly interested in ML applied to user modeling, and
              I&apos;m open to AI engineering and senior full-stack roles.
            </p>
          </div>
        </section>

        <section className="border-b border-[#333] px-8 py-16">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [EXPERIENCE]
          </p>
          <h2 className="mt-4 font-black leading-[0.95] tracking-[-0.03em] text-[48px]">
            WHERE I&apos;VE WORKED.
          </h2>
          <ol className="mt-10 space-y-10">
            {experiences.map((exp, i) => (
              <li
                key={`${exp.company}-${i}`}
                className="grid grid-cols-12 gap-6 border-t border-[#333] pt-8"
              >
                <div className="col-span-12 md:col-span-3">
                  <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
                    {exp.dates.toUpperCase()}
                  </p>
                  <p className="mt-2 text-[11px] font-bold tracking-[0.25em] text-[#888]">
                    {exp.location.toUpperCase()}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-black leading-[0.95] tracking-[-0.03em] text-[32px]">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#38bdf8]"
                      >
                        {exp.company.toUpperCase()}
                      </a>
                    ) : (
                      exp.company.toUpperCase()
                    )}
                  </h3>
                  <p className="mt-2 text-[14px] font-bold tracking-[0.1em] text-[#38bdf8]">
                    {exp.role.toUpperCase()}
                  </p>
                  <ul className="mt-4 space-y-3 text-[15px] leading-[1.6]">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-[#888]">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-b border-[#333] px-8 py-16">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [LINKS]
          </p>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-[14px] font-medium">
            <Link
              href="/contact"
              data-cursor="→ CONTACT"
              className="underline underline-offset-4 decoration-[2px] hover:decoration-[3px]"
            >
              Contact →
            </Link>
            <Link
              href="/work"
              data-cursor="→ WORK"
              className="underline underline-offset-4 decoration-[2px] hover:decoration-[3px]"
            >
              See the work →
            </Link>
            <a
              href="/resume.pdf"
              data-cursor="↓ DOWNLOAD"
              className="underline underline-offset-4 decoration-[2px] hover:decoration-[3px]"
            >
              Resume (PDF) ↗
            </a>
          </div>
        </section>
      </article>

      <PageFooter theme="dark" />
    </main>
  );
}

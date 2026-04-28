import Link from "next/link";
import Hero from "@/components/Hero";
import PageFooter from "@/components/PageFooter";
import MarqueeTicker from "@/components/MarqueeTicker";
import CellReveal from "@/components/CellReveal";
import ScrambleText from "@/components/ScrambleText";
import { caseStudies } from "@/lib/case-studies";

const tickerItems = [
  "AVAILABLE FOR HIRE",
  "CHAMPAIGN, IL",
  "FOUNDING ENGINEER @ EUNO",
  "EST. 2025",
  "MOBILE / BACKEND / WEB",
  "1ST PLACE — KAPWA CODEFEST 2025",
];

export default function Home() {
  return (
    <div id="top">
      <Hero />

      <MarqueeTicker items={tickerItems} duration={45} />

      {/* [DETAIL] WORK — expanded list */}
      <section
        id="work"
        className="bg-[#1a1a1a] text-[#f4eee5] border-l border-r border-[#333]"
      >
        <header className="border-b border-[#333] px-8 py-16">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [DETAIL] / SELECTED WORK
          </p>
          <h2 className="mt-6 font-black leading-[0.9] tracking-[-0.05em] text-[44px] sm:text-[56px] md:text-[72px] lg:text-[80px]">
            WHAT I&apos;VE BUILT.
          </h2>
        </header>
        <ol>
          {caseStudies.map((cs, i) => {
            const num = String(i + 1).padStart(3, "0");
            return (
              <li key={cs.slug} className="border-b border-[#333]">
                <CellReveal index={i}>
                  <Link
                    href={`/work/${cs.slug}`}
                    data-cursor={`→ ${num}`}
                    className="grid grid-cols-12 items-baseline gap-6 px-8 py-10 transition-colors hover:bg-[#222]"
                  >
                    <span className="col-span-12 text-[11px] font-bold tracking-[0.25em] text-[#888] md:col-span-1">
                      [{num}]
                    </span>
                    <h3 className="col-span-12 font-black leading-[0.95] tracking-[-0.04em] text-[28px] md:text-[36px] lg:text-[40px] md:col-span-4">
                      <ScrambleText text={cs.title.toUpperCase()} />
                    </h3>
                    <p className="col-span-12 text-[14px] leading-[1.5] md:col-span-4">
                      {cs.tagline}
                    </p>
                    <p className="col-span-10 text-[11px] font-bold tracking-[0.2em] text-[#888] md:col-span-2">
                      {cs.stack.slice(0, 3).join(" · ").toUpperCase()}
                    </p>
                    <span className="col-span-2 text-right text-[24px] font-black md:col-span-1">
                      →
                    </span>
                  </Link>
                </CellReveal>
              </li>
            );
          })}
        </ol>
      </section>

      {/* [005] ABOUT teaser */}
      <section className="bg-[#1a1a1a] text-[#f4eee5] border-l border-r border-b border-[#333]">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="border-b border-[#333] px-8 py-8 md:col-span-1 md:border-b-0 md:border-r">
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
              [005]
            </p>
          </div>
          <div className="border-b border-[#333] px-8 py-16 md:col-span-7 md:border-b-0 md:border-r">
            <h2 className="font-black leading-[0.9] tracking-[-0.05em] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
              HI, I&apos;M CRAIG.
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.6]">
              Founding engineer based in Champaign, IL. UIUC &apos;25
              (Honors). Sole engineer at Euno building AI agent systems
              end-to-end — mobile, backend, and the AI loops in between. 1st
              place at Kapwa Codefest 2025. I make art when I&apos;m not
              making software.
            </p>
            <Link
              href="/about"
              data-cursor="→ READ"
              className="mt-8 inline-block text-[12px] font-bold tracking-[0.25em] underline underline-offset-4 decoration-[2px] hover:decoration-[3px]"
            >
              FULL BIO →
            </Link>
          </div>
          <div
            className="px-8 py-16 md:col-span-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            <p className="text-[18px] leading-[1.6] text-[#888]">
              <em>
                &ldquo;Open to AI engineering and senior full-stack
                roles.&rdquo;
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* [006] CONTACT CTA */}
      <section className="bg-[#1a1a1a] text-[#f4eee5] border-l border-r border-b border-[#333] px-8 py-24">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
          [006] / GET IN TOUCH
        </p>
        <h2 className="mt-6 font-black leading-[0.85] tracking-[-0.07em] text-[56px] sm:text-[72px] md:text-[100px] lg:text-[120px]">
          LET&apos;S
          <br />
          BUILD<span className="text-[#38bdf8]">.</span>
        </h2>
        <div className="mt-12 flex flex-wrap items-baseline gap-x-12 gap-y-6">
          <a
            href="mailto:craigondevilla1231@gmail.com"
            data-cursor="✉ EMAIL"
            className="text-[28px] font-black underline underline-offset-[10px] decoration-[3px] hover:decoration-[6px]"
          >
            craigondevilla1231@gmail.com
          </a>
          <Link
            href="/contact"
            data-cursor="→ CHANNELS"
            className="text-[12px] font-bold tracking-[0.25em] underline underline-offset-4 decoration-[2px] hover:decoration-[3px]"
          >
            ALL CHANNELS →
          </Link>
        </div>
      </section>

      <PageFooter theme="dark" />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";
import MarqueeTicker from "@/components/MarqueeTicker";
import CellReveal from "@/components/CellReveal";
import ScrambleText from "@/components/ScrambleText";
import { caseStudies } from "@/lib/case-studies";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and side projects by Craig Ondevilla — Euno, CoverMe, Pisayian, Spyfall and more.",
};

const tickerItems = [
  "SELECTED WORK",
  `${caseStudies.length} CASE STUDIES`,
  `${projects.length} SIDE PROJECTS`,
  "EST. 2025",
  "AVAILABLE FOR HIRE",
];

export default function WorkIndex() {
  return (
    <main id="top" className="min-h-screen bg-[#1a1a1a] text-[#f4eee5]">
      <NavBar theme="dark" />

      <section className="border-b border-l border-r border-[#333] px-8 py-20">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
          [INDEX] / SELECTED WORK
        </p>
        <h1 className="mt-6 font-black leading-[0.85] tracking-[-0.07em] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px]">
          THE WORK<span className="text-[#38bdf8]">.</span>
        </h1>
        <p className="mt-8 max-w-xl text-[15px] leading-[1.6] text-[#888]">
          A mix of shipped products, hackathon wins, and side projects. Click
          in for the long version.
        </p>
      </section>

      <MarqueeTicker items={tickerItems} duration={40} />

      <section className="border-l border-r border-[#333]">
        <header className="border-b border-[#333] px-8 py-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [CASE STUDIES]
          </p>
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
                    <h2 className="col-span-12 font-black leading-[0.95] tracking-[-0.04em] text-[32px] md:text-[44px] lg:text-[56px] md:col-span-4">
                      <ScrambleText text={cs.title.toUpperCase()} />
                    </h2>
                    <p className="col-span-12 text-[15px] leading-[1.5] md:col-span-4">
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

      <section className="border-l border-r border-[#333]">
        <header className="border-b border-[#333] px-8 py-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [OTHER PROJECTS]
          </p>
          <h2 className="mt-3 font-black leading-[0.95] tracking-[-0.04em] text-[40px]">
            ALSO BUILT.
          </h2>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((p, i) => (
            <li
              key={p.title}
              className={`${
                i % 2 === 0 ? "md:border-r border-[#333]" : ""
              } ${i < projects.length - (projects.length % 2 === 0 ? 2 : 1) ? "border-b border-[#333]" : ""} ${
                projects.length % 2 === 1 && i === projects.length - 1
                  ? "md:col-span-2 border-b border-[#333]"
                  : ""
              }`}
            >
              <CellReveal index={i}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="↗ EXTERNAL"
                  className="group flex flex-col h-full transition-colors hover:bg-[#222]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[#333] bg-[#222]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-6 px-8 py-8">
                    <div>
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-black leading-none tracking-[-0.04em] text-[28px]">
                          <ScrambleText text={p.title.toUpperCase()} />
                        </h3>
                        <span className="text-[20px]">↗</span>
                      </div>
                      <p className="mt-4 text-[14px] leading-[1.5] text-[#f4eee5]">
                        {p.description}
                      </p>
                    </div>
                    <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
                      {p.technologies.join(" · ").toUpperCase()}
                    </p>
                  </div>
                </a>
              </CellReveal>
            </li>
          ))}
        </ul>
      </section>

      <PageFooter theme="dark" />
    </main>
  );
}

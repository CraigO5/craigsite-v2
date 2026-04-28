import Link from "next/link";
import HeadlineStagger from "@/components/HeadlineStagger";
import PortraitParallax from "@/components/PortraitParallax";
import ScrambleText from "@/components/ScrambleText";
import CountUp from "@/components/CountUp";
import LiveClock from "@/components/LiveClock";

type Project = {
  num: string;
  name: string;
  subtitle: string;
  href: string;
  accent?: boolean;
};

const projects: Project[] = [
  {
    num: "001",
    name: "EUNO",
    subtitle: "AI self-reflection companion",
    href: "/work/euno",
  },
  {
    num: "002",
    name: "COVERME",
    subtitle: "AI cover letter generator",
    href: "/work/coverme",
  },
  {
    num: "003",
    name: "PISAYIAN",
    subtitle: "CSV → relational tables for nonprofit alumni network",
    href: "/work/pisayian",
  },
  {
    num: "004",
    name: "SPYFALL",
    subtitle: "Multiplayer browser-based social deduction game",
    href: "/work/spyfall",
    accent: true,
  },
];

export default function Hero() {
  return (
    <main className="min-h-screen">
      <div className="hero-grid border-t border-l border-[#333]">
        {/* Nav */}
        <header
          style={{ gridArea: "nav" }}
          className="flex flex-col gap-3 border-r border-b border-[#333] px-5 py-4 md:h-20 md:flex-row md:items-center md:justify-between md:gap-0 md:px-8 md:py-0"
        >
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
            <Link
              href="/"
              data-cursor="→ HOME"
              className="text-[11px] font-bold tracking-[0.25em] hover:underline hover:underline-offset-4 hover:decoration-[3px] md:text-[12px]"
            >
              CRAIG ONDEVILLA<span className="hidden sm:inline"> — INDEX</span>
            </Link>
            <span className="hidden md:inline text-[#444]">·</span>
            <span className="hidden md:inline">
              <LiveClock />
            </span>
          </div>
          <nav className="flex gap-5 text-[11px] font-bold tracking-[0.25em] md:gap-10 md:text-[12px]">
            <Link
              href="/work"
              data-cursor="→ WORK"
              className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
            >
              WORK
            </Link>
            <Link
              href="/about"
              data-cursor="→ ABOUT"
              className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              data-cursor="→ CONTACT"
              className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
            >
              CONTACT
            </Link>
          </nav>
        </header>

        {/* Hero headline */}
        <section
          style={{ gridArea: "hero" }}
          className="flex items-center border-r border-b border-[#333] px-5 py-12 md:px-8 md:py-0"
        >
          <h1 className="font-black leading-[0.85] tracking-[-0.07em] text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px]">
            <HeadlineStagger
              lines={["FOUNDING", "ENGINEER"]}
              suffix={
                <span className="ml-1 align-top text-[28px] tracking-normal sm:text-[32px] md:text-[40px] lg:text-[44px]">
                  ©
                </span>
              }
            />
          </h1>
        </section>

        {/* Portrait */}
        <div
          style={{ gridArea: "portrait" }}
          className="relative aspect-[4/3] overflow-hidden border-r border-b border-[#333] md:aspect-auto md:h-full"
        >
          <PortraitParallax src="/craig.jpg" alt="Craig Ondevilla" />
          <div className="pointer-events-none absolute left-3 top-3 text-[10px] font-bold tracking-[0.25em] text-[#f4eee5] mix-blend-difference">
            [PORTRAIT]
          </div>
        </div>

        {/* Currently */}
        <aside
          style={{ gridArea: "curr" }}
          className="flex flex-col justify-between gap-6 border-r border-b border-[#333] p-5 md:gap-0 md:p-6"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [CURRENTLY]
          </span>
          <div className="text-[40px] font-black leading-[0.95] tracking-[-0.04em]">
            SHIP<span className="text-[#38bdf8]">PING</span>
          </div>
        </aside>

        {/* Stats */}
        <aside
          style={{ gridArea: "stat" }}
          className="flex flex-col justify-between gap-6 border-r border-b border-[#333] p-5 md:gap-0 md:p-6"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [STATS]
          </span>
          <div>
            <div className="text-[48px] font-black leading-none tracking-[-0.04em]">
              <CountUp target={1039} duration={1600} />
            </div>
            <div className="mt-2 text-[11px] font-bold tracking-[0.25em] text-[#888]">
              COMMITS · 12 MO
            </div>
          </div>
        </aside>

        {/* Project cells */}
        {projects.map((p, i) => (
          <Link
            key={p.num}
            href={p.href}
            data-cursor={`→ ${p.num}`}
            style={{ gridArea: `p${i}` }}
            className={`group flex items-baseline justify-between gap-6 border-r border-b border-[#333] p-5 transition-colors md:flex-col md:items-stretch md:justify-between md:gap-0 ${
              p.accent ? "bg-[#38bdf8]" : "hover:bg-[#222]"
            }`}
          >
            <span
              className={`shrink-0 text-[11px] font-bold tracking-[0.25em] ${
                p.accent ? "text-[#1a1a1a]" : "text-[#888]"
              }`}
            >
              [{p.num}]
            </span>
            <div className="flex-1 text-right md:text-left">
              <div
                className={`text-[24px] font-black leading-none tracking-[-0.04em] md:text-[28px] ${
                  p.accent ? "text-[#1a1a1a]" : ""
                }`}
              >
                <ScrambleText text={p.name} />
              </div>
              <div
                className={`mt-2 text-[12px] leading-snug ${
                  p.accent ? "text-[#1a1a1a]" : "text-[#888]"
                }`}
              >
                {p.subtitle}
              </div>
            </div>
          </Link>
        ))}

        {/* Footer */}
        <footer
          style={{ gridArea: "foot" }}
          className="flex flex-col gap-2 border-r border-b border-[#333] px-5 py-4 md:h-[100px] md:flex-row md:items-center md:justify-between md:gap-0 md:px-8 md:py-0"
        >
          <span className="text-[11px] font-bold tracking-[0.25em]">
            EST. 2025 ☉ MOBILE / BACKEND / WEB
          </span>
          <span className="text-[11px] font-bold tracking-[0.25em]">
            SCROLL FOR DETAIL ↓
          </span>
        </footer>
      </div>
    </main>
  );
}

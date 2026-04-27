import Link from "next/link";
import Image from "next/image";

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
      <div
        className="grid h-[700px] border-t border-l border-[#333]"
        style={{
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gridTemplateRows: "80px 200px 200px 120px 100px",
          gridTemplateAreas: `
            "nav nav nav nav"
            "hero hero portrait curr"
            "hero hero portrait stat"
            "p0 p1 p2 p3"
            "foot foot foot foot"
          `,
        }}
      >
        {/* Row 1 — top nav */}
        <header
          style={{ gridArea: "nav" }}
          className="flex items-center justify-between border-r border-b border-[#333] px-8"
        >
          <span className="text-[12px] font-bold tracking-[0.25em]">
            CRAIG ONDEVILLA — INDEX
          </span>
          <nav className="flex gap-10 text-[12px] font-bold tracking-[0.25em]">
            <Link
              href="/work"
              className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
            >
              WORK
            </Link>
            <Link
              href="/about"
              className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
            >
              CONTACT
            </Link>
          </nav>
        </header>

        {/* Rows 2–3 — display headline (cols 1–2) */}
        <section
          style={{ gridArea: "hero" }}
          className="flex items-center border-r border-b border-[#333] px-8"
        >
          <h1 className="font-black leading-[0.85] tracking-[-0.07em] text-[80px] md:text-[100px] lg:text-[120px]">
            FOUNDING
            <br />
            ENGINEER
            <span className="ml-1 inline-block align-top text-[44px] tracking-normal">
              ©
            </span>
          </h1>
        </section>

        {/* Rows 2–3 col 3 — portrait */}
        <div
          style={{ gridArea: "portrait" }}
          className="relative overflow-hidden border-r border-b border-[#333]"
        >
          <Image
            src="/craig.jpg"
            alt="Craig Ondevilla"
            fill
            priority
            sizes="25vw"
            className="object-cover grayscale contrast-[1.05]"
          />
          <div className="absolute left-3 top-3 text-[10px] font-bold tracking-[0.25em] text-[#f4eee5] mix-blend-difference">
            [PORTRAIT]
          </div>
        </div>

        {/* Row 2 col 4 — currently shipping */}
        <aside
          style={{ gridArea: "curr" }}
          className="flex flex-col justify-between border-r border-b border-[#333] p-6"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [CURRENTLY]
          </span>
          <div className="text-[40px] font-black leading-[0.95] tracking-[-0.04em]">
            SHIP<span className="text-[#38bdf8]">PING</span>
          </div>
        </aside>

        {/* Row 3 col 4 — stats */}
        <aside
          style={{ gridArea: "stat" }}
          className="flex flex-col justify-between border-r border-b border-[#333] p-6"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [STATS]
          </span>
          <div>
            <div className="text-[48px] font-black leading-none tracking-[-0.04em]">
              1,039
            </div>
            <div className="mt-2 text-[11px] font-bold tracking-[0.25em] text-[#888]">
              COMMITS · 12 MO
            </div>
          </div>
        </aside>

        {/* Row 4 — project index */}
        {projects.map((p, i) => (
          <article
            key={p.num}
            style={{ gridArea: `p${i}` }}
            className={`flex flex-col justify-between border-r border-b border-[#333] p-5 ${
              p.accent ? "bg-[#38bdf8]" : ""
            }`}
          >
            <span
              className={`text-[11px] font-bold tracking-[0.25em] ${
                p.accent ? "text-[#1a1a1a]" : "text-[#888]"
              }`}
            >
              [{p.num}]
            </span>
            <div>
              <div
                className={`text-[28px] font-black leading-none tracking-[-0.04em] ${
                  p.accent ? "text-[#1a1a1a]" : ""
                }`}
              >
                {p.name}
              </div>
              <div
                className={`mt-2 text-[12px] leading-snug ${
                  p.accent ? "text-[#1a1a1a]" : "text-[#888]"
                }`}
              >
                {p.subtitle}
              </div>
            </div>
          </article>
        ))}

        {/* Row 5 — footer strip */}
        <footer
          style={{ gridArea: "foot" }}
          className="flex items-center justify-between border-r border-b border-[#333] px-8"
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

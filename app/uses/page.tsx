import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";
import { usesData } from "@/lib/uses";

export const metadata: Metadata = {
  title: "Uses",
  description: "Tools, languages, and services Craig Ondevilla reaches for.",
};

export default function UsesPage() {
  return (
    <main id="top" className="min-h-screen bg-[#1a1a1a] text-[#f4eee5]">
      <NavBar theme="dark" />

      <article className="border-l border-r border-[#333]">
        <header className="border-b border-[#333] px-8 py-20">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [007] / WHAT I USE
          </p>
          <h1 className="mt-8 font-black leading-[0.85] tracking-[-0.07em] text-[140px]">
            THE
            <br />
            STACK<span className="text-[#38bdf8]">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.6]">
            Tools, languages, and services I reach for day-to-day. Opinions
            are mine, defaults are mostly the same as everyone else&apos;s.
          </p>
        </header>

        {usesData.map((cat, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <section
              key={cat.id}
              className="border-b border-[#333] px-8 py-16"
            >
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3">
                  <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
                    [{num}]
                  </p>
                  <h2 className="mt-4 font-black leading-[0.9] tracking-[-0.04em] text-[40px]">
                    {cat.title.toUpperCase()}
                  </h2>
                  <p className="mt-3 max-w-xs text-[14px] leading-[1.5] text-[#888]">
                    {cat.subtitle}
                  </p>
                </div>
                <ul className="col-span-12 md:col-span-9 divide-y divide-[#333] border-y border-[#333]">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="grid grid-cols-12 gap-4 py-6"
                    >
                      <div className="col-span-12 md:col-span-4">
                        <h3 className="font-black leading-none tracking-[-0.03em] text-[20px]">
                          {item.name.toUpperCase()}
                        </h3>
                        <p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-[#38bdf8]">
                          {item.role.toUpperCase()}
                        </p>
                      </div>
                      <p className="col-span-12 text-[14px] leading-[1.6] md:col-span-8">
                        {item.why}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </article>

      <PageFooter theme="dark" />
    </main>
  );
}

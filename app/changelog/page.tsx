import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";
import { changelog } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Versions of the portfolio itself.",
};

export default function ChangelogPage() {
  return (
    <main id="top" className="min-h-screen bg-[#1a1a1a] text-[#f4eee5]">
      <NavBar theme="dark" />

      <article className="border-l border-r border-[#333]">
        <header className="border-b border-[#333] px-8 py-20">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [009] / CHANGELOG
          </p>
          <h1 className="mt-8 font-black leading-[0.85] tracking-[-0.07em] text-[140px]">
            VER<span className="text-[#38bdf8]">.</span>
            <br />
            HISTORY.
          </h1>
          <p
            className="mt-8 max-w-2xl text-[18px] leading-[1.5]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            <em>
              Treating the portfolio itself as a shipped product. Newest
              first.
            </em>
          </p>
        </header>

        <ol>
          {changelog.map((entry, i) => (
            <li
              key={entry.version}
              className="border-b border-[#333] px-8 py-16"
            >
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3">
                  <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
                    [{String(changelog.length - i).padStart(2, "0")}]
                  </p>
                  <p className="mt-4 font-black leading-none tracking-[-0.04em] text-[36px] text-[#38bdf8]">
                    {entry.version.toUpperCase()}
                  </p>
                  <p className="mt-3 text-[11px] font-bold tracking-[0.25em] text-[#888]">
                    {entry.display.toUpperCase()}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h2 className="font-black leading-[0.95] tracking-[-0.03em] text-[40px]">
                    {entry.headline.toUpperCase()}
                  </h2>
                  <ul className="mt-8 space-y-4 border-t border-[#333] pt-6">
                    {entry.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-4 text-[15px] leading-[1.6]"
                      >
                        <span className="shrink-0 text-[11px] font-bold tracking-[0.25em] text-[#888]">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </article>

      <PageFooter theme="dark" />
    </main>
  );
}

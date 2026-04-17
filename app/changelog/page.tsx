import type { Metadata } from "next";
import ScreenHeader from "@/components/custom/ScreenHeader";
import { changelog } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release notes for this site, versioned like a product.",
};

export default function ChangelogPage() {
  return (
    <main className="overflow-x-hidden pt-24 pb-28 md:pt-32">
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <ScreenHeader
          title="Changelog."
          subtitle="This site ships like a product — here's the history."
        />

        <ol className="relative space-y-10">
          <div className="absolute top-3 bottom-3 left-[11px] w-px bg-white/10" />

          {changelog.map((entry) => (
            <li key={entry.version} className="relative pl-10">
              <span className="absolute top-5 left-[5px] h-3 w-3 rounded-full border-2 border-background bg-accent" />

              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-3">
                    <h2 className="font-mono text-lg font-bold text-accent">
                      {entry.version}
                    </h2>
                    <p className="text-base font-semibold">{entry.headline}</p>
                  </div>
                  <time className="text-xs text-white/40">{entry.display}</time>
                </header>
                <ul className="space-y-1.5 text-sm text-white/70 leading-relaxed">
                  {entry.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white/30" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        <p className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/30">
          Versioned by hand. The git log has the full story.
        </p>
      </section>
    </main>
  );
}

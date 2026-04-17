import { ArrowUpRight } from "lucide-react";
import { fetchGitHubActivity, kindLabel, kindTone } from "@/lib/github";
import {
  activity as curated,
  kindLabel as curatedLabel,
  kindTone as curatedTone,
} from "@/lib/activity";

type Item = {
  id: string;
  title: string;
  description: string;
  display: string;
  href?: string;
  external?: boolean;
  badgeLabel: string;
  badgeTone: string;
};

export default async function ActivityFeed({ limit }: { limit?: number }) {
  const gh = await fetchGitHubActivity();

  const items: Item[] =
    gh.length > 0
      ? gh.map((e) => ({
          id: e.id,
          title: e.title,
          description: e.description,
          display: e.display,
          href: e.href,
          external: true,
          badgeLabel: kindLabel[e.kind],
          badgeTone: kindTone[e.kind],
        }))
      : curated.map((e, i) => ({
          id: `curated-${i}`,
          title: e.title,
          description: e.description,
          display: e.display,
          href: e.href,
          external: e.external,
          badgeLabel: curatedLabel[e.kind],
          badgeTone: curatedTone[e.kind],
        }));

  const entries = limit ? items.slice(0, limit) : items;

  if (entries.length === 0) {
    return (
      <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-sm text-white/40">
        No recent activity to show.
      </p>
    );
  }

  return (
    <div className="relative">
      <div className="absolute top-3 bottom-3 left-[11px] w-px bg-white/10" />

      <ul className="space-y-4">
        {entries.map((e) => {
          const inner = (
            <div
              className={`group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-200 ${
                e.href
                  ? "hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/5"
                  : ""
              }`}
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${e.badgeTone}`}
                  >
                    {e.badgeLabel}
                  </span>
                  <span className="text-xs text-white/40">{e.display}</span>
                </div>
                {e.href && (
                  <ArrowUpRight
                    size={14}
                    className="flex-shrink-0 text-white/30 transition-colors duration-200 group-hover:text-accent"
                  />
                )}
              </div>
              <h3 className="mb-1 text-base font-bold leading-snug">
                {e.title}
              </h3>
              {e.description && (
                <p className="text-sm text-white/60 leading-relaxed">
                  {e.description}
                </p>
              )}
            </div>
          );

          return (
            <li key={e.id} className="relative pl-10">
              <span className="absolute top-6 left-[5px] h-3 w-3 rounded-full border-2 border-background bg-accent" />
              {e.href ? (
                <a
                  href={e.href}
                  target={e.external ? "_blank" : undefined}
                  rel={e.external ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

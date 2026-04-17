import { ArrowUpRight } from "lucide-react";
import { activity, kindLabel, kindTone } from "@/lib/activity";

export default function ActivityFeed({ limit }: { limit?: number }) {
  const entries = limit ? activity.slice(0, limit) : activity;

  return (
    <div className="relative">
      <div className="absolute top-3 bottom-3 left-[11px] w-px bg-white/10" />

      <ul className="space-y-4">
        {entries.map((e, i) => {
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
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${kindTone[e.kind]}`}
                  >
                    {kindLabel[e.kind]}
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
            <li key={i} className="relative pl-10">
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

import { achievements } from "@/lib/achievements";
import ScreenHeader from "./ScreenHeader";

export default function Achievements() {
  const unlocked = achievements.filter((a) => a.unlocked).length;

  return (
    <section id="achievements" className="mx-auto max-w-5xl px-6 pb-20">
      <ScreenHeader
        title="Highlights."
        subtitle="Wins, shipped projects, and milestones I'm proud of."
        right={
          <span className="text-muted-foreground">
            {unlocked} of {achievements.length}
          </span>
        }
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {achievements.map((a) => (
          <div
            key={a.id}
            className={`group relative overflow-hidden rounded-2xl border p-5 backdrop-blur-sm transition-all duration-200 ${
              a.unlocked
                ? "border-white/10 bg-white/5 hover:-translate-y-0.5 hover:border-accent/40"
                : "border-dashed border-white/10 bg-white/[0.02] opacity-50"
            }`}
          >
            <div className="mb-3 text-3xl" aria-hidden>
              {a.unlocked ? a.icon : "🔒"}
            </div>
            <h3 className="mb-1 text-sm font-bold">{a.title}</h3>
            {a.metric && a.unlocked && (
              <p className="mb-2 font-mono text-xs text-accent">{a.metric}</p>
            )}
            <p className="text-xs leading-relaxed text-white/60">
              {a.description}
            </p>
            {a.date && a.unlocked && (
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
                {a.date}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";
import { achievements } from "@/lib/achievements";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Wins, milestones, and unlockables.",
};

export default function AchievementsPage() {
  const unlocked = achievements.filter((a) => a.unlocked);
  const locked = achievements.filter((a) => !a.unlocked);

  return (
    <main id="top" className="min-h-screen bg-[#1a1a1a] text-[#f4eee5]">
      <NavBar theme="dark" />

      <article className="border-l border-r border-[#333]">
        <header className="border-b border-[#333] px-8 py-20">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [008] / ACHIEVEMENTS
          </p>
          <h1 className="mt-8 font-black leading-[0.85] tracking-[-0.07em] text-[140px]">
            THE
            <br />
            WINS<span className="text-[#38bdf8]">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.6] text-[#888]">
            <span className="text-[#f4eee5]">{unlocked.length}</span> /{" "}
            {achievements.length} UNLOCKED
          </p>
        </header>

        <ul className="grid grid-cols-1 border-b border-[#333] md:grid-cols-2 lg:grid-cols-3">
          {unlocked.map((a) => (
            <li
              key={a.id}
              className="border-b border-r border-[#333] px-8 py-10 last:border-r-0"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[40px] leading-none">{a.icon}</span>
                {a.date && (
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
                    {a.date.toUpperCase()}
                  </span>
                )}
              </div>
              <h2 className="mt-6 font-black leading-[0.95] tracking-[-0.03em] text-[24px]">
                {a.title.toUpperCase()}
              </h2>
              <p className="mt-3 text-[14px] leading-[1.6]">
                {a.description}
              </p>
              {a.metric && (
                <p className="mt-4 text-[11px] font-bold tracking-[0.25em] text-[#38bdf8]">
                  {a.metric.toUpperCase()}
                </p>
              )}
            </li>
          ))}
        </ul>

        {locked.length > 0 && (
          <section className="border-b border-[#333] px-8 py-16">
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
              [LOCKED]
            </p>
            <ul className="mt-8 space-y-4">
              {locked.map((a) => (
                <li
                  key={a.id}
                  className="flex items-baseline gap-6 border-b border-dashed border-[#333] pb-4 opacity-50"
                >
                  <span className="text-[20px] leading-none grayscale">
                    {a.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-black leading-none tracking-[-0.03em] text-[18px]">
                      {a.title.toUpperCase()}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.5] text-[#888]">
                      {a.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
                    LOCKED
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <PageFooter theme="dark" />
    </main>
  );
}

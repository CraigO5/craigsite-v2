import type { Metadata } from "next";
import ScreenHeader from "@/components/custom/ScreenHeader";
import { usesData } from "@/lib/uses";

export const metadata: Metadata = {
  title: "Uses",
  description: "The stack Craig reaches for — and why.",
};

export default function UsesPage() {
  return (
    <main className="overflow-x-hidden pt-24 pb-28 md:pt-32">
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <ScreenHeader
          title="Uses."
          subtitle="The daily stack — opinionated, with reasons."
        />

        <div className="space-y-10">
          {usesData.map((cat) => (
            <section key={cat.id} id={cat.id}>
              <div className="mb-4">
                <h2 className="text-xl font-bold md:text-2xl">{cat.title}</h2>
                <p className="text-sm text-white/50">{cat.subtitle}</p>
              </div>
              <ul className="divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-2 px-5 py-4 md:flex-row md:items-baseline md:gap-6"
                  >
                    <div className="md:w-56 md:flex-shrink-0">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-white/40">{item.role}</p>
                    </div>
                    <p className="flex-1 text-sm text-white/70 leading-relaxed">
                      {item.why}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/30">
          Inspired by{" "}
          <a
            href="https://uses.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-accent"
          >
            uses.tech
          </a>
          . Updated as the stack shifts.
        </p>
      </section>
    </main>
  );
}

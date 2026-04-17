import Image from "next/image";
import { MapPin, Circle, Coffee } from "lucide-react";
import ScreenHeader from "./ScreenHeader";

const stats = [
  { label: "Years coding", value: "5+" },
  { label: "Projects shipped", value: "10+" },
  { label: "Products solo", value: "3" },
  { label: "Coffee per day", value: "2-3" },
];

export default function ProfileCard() {
  return (
    <section id="profile" className="mx-auto max-w-5xl px-6 pb-20">
      <ScreenHeader
        title="About me."
        subtitle="The quick read on who I am and what I've been up to."
      />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface backdrop-blur-sm">
        <div className="flex flex-col gap-6 border-b border-white/5 p-6 md:flex-row md:items-center md:gap-8 md:p-8">
          <div className="relative flex-shrink-0">
            <Image
              alt="Craig Ondevilla"
              src="/craig.jpg"
              width={140}
              height={140}
              className="h-28 w-28 rounded-2xl object-cover md:h-36 md:w-36"
            />
            <div className="absolute -right-1 -bottom-1 flex items-center gap-1.5 rounded-full border border-white/10 bg-background px-2.5 py-1 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-white/70">available</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="mb-1 text-2xl font-bold md:text-3xl">
              Craig Ondevilla
            </h3>
            <p className="mb-4 text-accent">Software Engineer</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                Chicago / Remote
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Circle size={14} className="fill-accent text-accent" />
                Open to work
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Coffee size={14} />
                Currently building Euno
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-white/5 md:grid-cols-4 md:divide-x">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 ${i < 2 ? "border-b md:border-b-0" : ""} ${i % 2 === 0 ? "border-r md:border-r-0" : ""} border-white/5`}
            >
              <p className="mb-1 text-xs text-muted-foreground">
                {s.label}
              </p>
              <p className="text-xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 border-t border-white/5 p-6 text-white/75 leading-relaxed md:p-8">
          <p>
            I'm a CS grad from UIUC, and for the past year I've been building
            a personal AI assistant called Euno — on my own. That means I get
            to wear every hat: mobile, backend, design, infra, the whole
            stack.
          </p>
          <p>
            Before Euno, I helped build an app at OurFreedom.ai, a
            location-intelligence system at Elaview, and a small inventory
            tool with a studio I co-founded called Camelia. I like shipping
            things people actually use.
          </p>
        </div>
      </div>
    </section>
  );
}

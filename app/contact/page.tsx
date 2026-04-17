import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import ScreenHeader from "@/components/custom/ScreenHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Craig Ondevilla — open to engineering roles, consulting, and collaborations.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden pt-24 pb-28 md:pt-32">
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <ScreenHeader
          title="Let's talk."
          subtitle="Open to engineering roles, collaborations, or just a friendly hello."
        />

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 via-surface to-surface p-8 backdrop-blur-sm md:p-12">
          <p className="mb-8 max-w-xl text-lg text-white/70 leading-relaxed">
            Open to engineering roles, consulting gigs, and collaborations on
            the kind of thing you'd want to read a case study about.
          </p>

          <a
            href="mailto:craig.brdt505@gmail.com"
            className="group inline-flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-3 text-lg font-medium text-accent transition-all duration-200 hover:border-accent/60 hover:bg-accent/15"
          >
            <Mail size={18} />
            craig.brdt505@gmail.com
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href="https://github.com/craigsterr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
            >
              <SiGithub size={14} /> github.com/craigsterr
            </a>
            <a
              href="https://www.linkedin.com/in/craig-ondevilla-8106b4191"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
            >
              <SiLinkedin size={14} /> linkedin
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Craig Ondevilla — open to engineering roles, consulting, and collaborations.",
};

const links = [
  {
    label: "EMAIL",
    value: "craigondevilla1231@gmail.com",
    href: "mailto:craigondevilla1231@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/craig-ondevilla",
    href: "https://linkedin.com/in/craig-ondevilla",
  },
  {
    label: "GITHUB",
    value: "github.com/CraigO5",
    href: "https://github.com/CraigO5",
  },
  {
    label: "RESUME",
    value: "Download PDF",
    href: "/resume.pdf",
  },
];

export default function ContactPage() {
  return (
    <main id="top" className="min-h-screen bg-[#1a1a1a] text-[#f4eee5]">
      <NavBar theme="dark" />

      <article className="border-l border-r border-[#333]">
        <header className="border-b border-[#333] px-8 py-20">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#888]">
            [006] / CONTACT
          </p>
          <h1 className="mt-8 font-black leading-[0.85] tracking-[-0.07em] text-[140px]">
            GET IN
            <br />
            TOUCH<span className="text-[#38bdf8]">.</span>
          </h1>
        </header>

        <section className="border-b border-[#333] px-8 py-16">
          <p
            className="max-w-2xl text-[22px] leading-[1.5] text-[#f4eee5]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            <em>
              Open to engineering roles, collaborations, or anything you&apos;d
              want to read a case study about.
            </em>
          </p>
        </section>

        <ul className="grid grid-cols-1 border-b border-[#333] md:grid-cols-2">
          {links.map((l, i) => {
            const external = l.href.startsWith("http");
            return (
              <li
                key={l.label}
                className={`${
                  i % 2 === 0 ? "md:border-r border-[#333]" : ""
                } ${i < links.length - 2 ? "border-b border-[#333]" : ""}`}
              >
                <a
                  href={l.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group block px-8 py-10 transition-colors hover:bg-[#38bdf8] hover:text-[#1a1a1a]"
                >
                  <p className="text-[11px] font-bold tracking-[0.25em] text-[#888] group-hover:text-[#1a1a1a]">
                    {l.label}
                  </p>
                  <p className="mt-4 break-words font-black leading-none tracking-[-0.03em] text-[28px]">
                    {l.value}
                  </p>
                  <p className="mt-4 text-[11px] font-bold tracking-[0.25em]">
                    {external ? "↗" : "→"}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </article>

      <PageFooter theme="dark" />
    </main>
  );
}

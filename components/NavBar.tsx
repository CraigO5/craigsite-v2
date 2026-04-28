import Link from "next/link";
import LiveClock from "@/components/LiveClock";

type Theme = "dark" | "cream";

const TOKENS: Record<Theme, { fg: string; border: string }> = {
  dark: { fg: "text-[#f4eee5]", border: "border-[#333]" },
  cream: { fg: "text-[#1a1a1a]", border: "border-[#1a1a1a]" },
};

export default function NavBar({ theme = "dark" }: { theme?: Theme }) {
  const { fg, border } = TOKENS[theme];
  return (
    <header
      className={`flex flex-col gap-3 border-t border-b border-l border-r ${border} ${fg} px-5 py-4 md:h-20 md:flex-row md:items-center md:justify-between md:gap-0 md:px-8 md:py-0`}
    >
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
        <Link
          href="/"
          data-cursor="→ HOME"
          className="text-[11px] font-bold tracking-[0.25em] hover:underline hover:underline-offset-4 hover:decoration-[3px] md:text-[12px]"
        >
          CRAIG ONDEVILLA<span className="hidden sm:inline"> — INDEX</span>
        </Link>
        <span className="hidden md:inline text-[#444]">·</span>
        <span className="hidden md:inline">
          <LiveClock />
        </span>
      </div>
      <nav className="flex gap-5 text-[11px] font-bold tracking-[0.25em] md:gap-10 md:text-[12px]">
        <Link
          href="/work"
          data-cursor="→ WORK"
          className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
        >
          WORK
        </Link>
        <Link
          href="/about"
          data-cursor="→ ABOUT"
          className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          data-cursor="→ CONTACT"
          className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
}

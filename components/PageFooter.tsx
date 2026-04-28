import Link from "next/link";

type Theme = "dark" | "cream";

const TOKENS: Record<Theme, { fg: string; border: string; mutedFg: string }> = {
  dark: {
    fg: "text-[#f4eee5]",
    border: "border-[#333]",
    mutedFg: "text-[#888]",
  },
  cream: {
    fg: "text-[#1a1a1a]",
    border: "border-[#1a1a1a]",
    mutedFg: "text-[#666]",
  },
};

export default function PageFooter({ theme = "dark" }: { theme?: Theme }) {
  const { fg, border, mutedFg } = TOKENS[theme];
  return (
    <div className={fg}>
      <div
        className={`flex flex-col items-start gap-3 border-b border-l border-r ${border} px-5 py-5 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-y-2 md:px-8`}
      >
        <span
          className={`text-[11px] font-bold tracking-[0.25em] ${mutedFg}`}
        >
          [ALSO]
        </span>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-bold tracking-[0.25em] md:gap-x-8">
          <Link
            href="/uses"
            data-cursor="→ USES"
            className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
          >
            USES
          </Link>
          <Link
            href="/achievements"
            data-cursor="→ WINS"
            className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
          >
            ACHIEVEMENTS
          </Link>
          <Link
            href="/changelog"
            data-cursor="→ LOG"
            className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
          >
            CHANGELOG
          </Link>
        </nav>
      </div>

      <footer
        className={`flex flex-col gap-2 border-b border-l border-r ${border} px-5 py-5 md:h-[100px] md:flex-row md:items-center md:justify-between md:gap-0 md:px-8 md:py-0`}
      >
        <span className="text-[11px] font-bold tracking-[0.25em]">
          EST. 2025 ☉ MOBILE / BACKEND / WEB
        </span>
        <Link
          href="#top"
          data-cursor="↑ TOP"
          className="text-[11px] font-bold tracking-[0.25em] hover:underline hover:underline-offset-4 hover:decoration-[3px]"
        >
          ↑ BACK TO TOP
        </Link>
      </footer>
    </div>
  );
}

import Link from "next/link";

type Theme = "dark" | "cream";

const TOKENS: Record<Theme, { fg: string; border: string; mutedFg: string }> = {
  dark: { fg: "text-[#f4eee5]", border: "border-[#333]", mutedFg: "text-[#888]" },
  cream: { fg: "text-[#1a1a1a]", border: "border-[#1a1a1a]", mutedFg: "text-[#666]" },
};

export default function PageFooter({ theme = "dark" }: { theme?: Theme }) {
  const { fg, border, mutedFg } = TOKENS[theme];
  return (
    <div className={fg}>
      <div
        className={`flex flex-wrap items-center justify-between gap-y-2 border-b border-l border-r ${border} px-8 py-5`}
      >
        <span
          className={`text-[11px] font-bold tracking-[0.25em] ${mutedFg}`}
        >
          [ALSO]
        </span>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-bold tracking-[0.25em]">
          <Link
            href="/uses"
            className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
          >
            USES
          </Link>
          <Link
            href="/achievements"
            className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
          >
            ACHIEVEMENTS
          </Link>
          <Link
            href="/changelog"
            className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
          >
            CHANGELOG
          </Link>
        </nav>
      </div>

      <footer
        className={`flex h-[100px] items-center justify-between border-b border-l border-r ${border} px-8`}
      >
        <span className="text-[11px] font-bold tracking-[0.25em]">
          EST. 2025 ☉ MOBILE / BACKEND / WEB
        </span>
        <Link
          href="#top"
          className="text-[11px] font-bold tracking-[0.25em] hover:underline hover:underline-offset-4 hover:decoration-[3px]"
        >
          ↑ BACK TO TOP
        </Link>
      </footer>
    </div>
  );
}

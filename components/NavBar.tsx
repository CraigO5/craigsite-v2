import Link from "next/link";

type Theme = "dark" | "cream";

const TOKENS: Record<Theme, { fg: string; border: string }> = {
  dark: { fg: "text-[#f4eee5]", border: "border-[#333]" },
  cream: { fg: "text-[#1a1a1a]", border: "border-[#1a1a1a]" },
};

export default function NavBar({ theme = "dark" }: { theme?: Theme }) {
  const { fg, border } = TOKENS[theme];
  return (
    <header
      className={`flex h-20 items-center justify-between border-t border-b border-l border-r ${border} ${fg} px-8`}
    >
      <Link
        href="/"
        className="text-[12px] font-bold tracking-[0.25em] hover:underline hover:underline-offset-4 hover:decoration-[3px]"
      >
        CRAIG ONDEVILLA — INDEX
      </Link>
      <nav className="flex gap-10 text-[12px] font-bold tracking-[0.25em]">
        <Link
          href="/work"
          className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
        >
          WORK
        </Link>
        <Link
          href="/about"
          className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:underline-offset-4 hover:decoration-[3px]"
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
}

type Theme = "dark" | "cream";

export default function MarqueeTicker({
  items,
  duration = 40,
  theme = "dark",
}: {
  items: string[];
  duration?: number;
  theme?: Theme;
}) {
  const repeated = [...items, ...items];
  const fg = theme === "dark" ? "text-[#f4eee5]" : "text-[#1a1a1a]";
  const border = theme === "dark" ? "border-[#333]" : "border-[#1a1a1a]";

  return (
    <div
      className={`overflow-hidden border-l border-r border-b ${border} ${fg} py-4`}
    >
      <div
        className="flex whitespace-nowrap will-change-transform animate-marquee"
        style={{ animationDuration: `${duration}s` }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center text-[13px] font-bold tracking-[0.25em]"
          >
            <span className="px-8">{item}</span>
            <span className="text-[#38bdf8]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

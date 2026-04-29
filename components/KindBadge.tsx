import { Briefcase, Code2, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Kind = "job" | "project" | "hackathon";

const META: Record<Kind, { label: string; Icon: LucideIcon; accent: boolean }> = {
  job: { label: "JOB", Icon: Briefcase, accent: true },
  project: { label: "PROJECT", Icon: Code2, accent: false },
  hackathon: { label: "HACKATHON", Icon: Trophy, accent: true },
};

const ICON_SIZE: Record<"sm" | "md", number> = {
  sm: 12,
  md: 14,
};

export default function KindBadge({
  kind,
  variant = "full",
  size = "md",
  className = "",
  overrideColor,
}: {
  kind: Kind;
  variant?: "full" | "icon" | "compact";
  size?: "sm" | "md";
  className?: string;
  overrideColor?: string;
}) {
  const { label, Icon, accent } = META[kind];
  const color =
    overrideColor ?? (accent ? "text-[#38bdf8]" : "text-[#888]");
  const fontSize = size === "sm" ? "text-[10px]" : "text-[11px]";
  const iconSize = ICON_SIZE[size];

  if (variant === "icon") {
    return (
      <span
        aria-label={label}
        title={label}
        className={`inline-flex items-center ${color} ${className}`}
      >
        <Icon size={iconSize} strokeWidth={1.75} />
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 ${fontSize} font-bold tracking-[0.2em] ${color} ${className}`}
      >
        <Icon size={iconSize} strokeWidth={1.75} aria-hidden />
        <span>{label}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 ${fontSize} font-bold tracking-[0.25em] ${color} ${className}`}
    >
      <Icon size={iconSize} strokeWidth={1.75} aria-hidden />
      <span>{label}</span>
    </span>
  );
}

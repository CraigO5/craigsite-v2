import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
};

export default function ScreenHeader({
  eyebrow,
  title,
  subtitle,
  right,
}: Props) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="mb-2 text-sm text-accent">{eyebrow}</p>
        )}
        <h2 className="font-bold">{title}</h2>
        {subtitle && (
          <p className="mt-3 max-w-xl text-base text-white/60 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {right && <div className="pb-1 text-sm">{right}</div>}
    </div>
  );
}

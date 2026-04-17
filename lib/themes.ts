export type ThemeId = "signal" | "midnight" | "forest" | "dusk" | "mono";

export type Theme = {
  id: ThemeId;
  name: string;
  tagline: string;
  swatch: { bg: string; accent: string; warm: string };
};

export const themes: Theme[] = [
  {
    id: "midnight",
    name: "Midnight",
    tagline: "Default. Soft blue on deep navy.",
    swatch: { bg: "#08090f", accent: "#60a5fa", warm: "#c084fc" },
  },
  {
    id: "signal",
    name: "Signal",
    tagline: "Red on warm black.",
    swatch: { bg: "#0a0a0c", accent: "#ef4444", warm: "#f59e0b" },
  },
  {
    id: "forest",
    name: "Forest",
    tagline: "Emerald on pine.",
    swatch: { bg: "#0b0d0a", accent: "#34d399", warm: "#fbbf24" },
  },
  {
    id: "dusk",
    name: "Dusk",
    tagline: "Peach on plum.",
    swatch: { bg: "#0e0a0d", accent: "#fb7185", warm: "#fcd34d" },
  },
  {
    id: "mono",
    name: "Mono",
    tagline: "Pure grayscale.",
    swatch: { bg: "#0a0a0a", accent: "#ededed", warm: "#a3a3a3" },
  },
];

export const defaultTheme: ThemeId = "midnight";

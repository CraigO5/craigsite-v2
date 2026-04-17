// Lightweight global event bus so any component can request the palette or
// shortcut cheatsheet to open without threading context through the tree.

export const PALETTE_OPEN = "palette:open";
export const CHEATSHEET_OPEN = "cheatsheet:open";

export function openPalette() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(PALETTE_OPEN));
  }
}

export function openCheatsheet() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CHEATSHEET_OPEN));
  }
}

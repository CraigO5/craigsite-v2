"use client";

import { useEffect } from "react";

const ASCII = `
%c
╔════════════════════════════════════════════╗
║                                            ║
║   CRAIG ONDEVILLA                          ║
║   FOUNDING ENGINEER                        ║
║   building at euno.life                    ║
║                                            ║
║   → hi recruiter, I'm open to roles.       ║
║   craigondevilla1231@gmail.com             ║
║                                            ║
╚════════════════════════════════════════════╝
`;

const STYLE =
  "color: #38bdf8; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 12px; line-height: 1.2;";

export default function ConsoleSignature() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as unknown as { __sigPrinted?: boolean }).__sigPrinted) return;
    (window as unknown as { __sigPrinted?: boolean }).__sigPrinted = true;
    console.log(ASCII, STYLE);
  }, []);
  return null;
}

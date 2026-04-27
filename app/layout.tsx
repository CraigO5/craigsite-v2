import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://craigo.live"),
  title: {
    default: "Craig Ondevilla — Founding Engineer",
    template: "%s · Craig Ondevilla",
  },
  description:
    "Founding engineer building AI-backed mobile, backend, and web systems. Currently shipping at Euno.",
  authors: [{ name: "Craig Ondevilla" }],
  creator: "Craig Ondevilla",
  openGraph: {
    type: "website",
    url: "https://craigo.live",
    title: "Craig Ondevilla — Founding Engineer",
    description:
      "Founding engineer building AI-backed mobile, backend, and web systems.",
    siteName: "Craig Ondevilla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craig Ondevilla — Founding Engineer",
    description:
      "Founding engineer building AI-backed mobile, backend, and web systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import NavBar from "@/components/custom/NavBar";
import BottomNav from "@/components/custom/BottomNav";
import CommandPalette from "@/components/custom/CommandPalette";
import KeyboardShortcuts from "@/components/custom/KeyboardShortcuts";
import BuildFooter from "@/components/custom/BuildFooter";
import "./globals.css";

// Runs before hydration — prevents a flash of unthemed content
const themeInitScript = `
try {
  var t = localStorage.getItem('craigsite-theme') || 'midnight';
  document.documentElement.dataset.theme = t;
} catch (e) {
  document.documentElement.dataset.theme = 'midnight';
}
`;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://craigo.live"),
  title: {
    default: "Craig Ondevilla — Software Engineer",
    template: "%s · Craig Ondevilla",
  },
  description:
    "Software engineer building encrypted, AI-backed mobile and web systems. Currently shipping Euno solo.",
  keywords: [
    "Craig Ondevilla",
    "software engineer",
    "full stack developer",
    "React Native",
    "Next.js",
    "NestJS",
    "Supabase",
    "Euno",
  ],
  authors: [{ name: "Craig Ondevilla" }],
  creator: "Craig Ondevilla",
  openGraph: {
    type: "website",
    url: "https://craigo.live",
    title: "Craig Ondevilla — Software Engineer",
    description:
      "Software engineer building encrypted, AI-backed mobile and web systems. Currently shipping Euno solo.",
    siteName: "Craig Ondevilla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craig Ondevilla — Software Engineer",
    description:
      "Software engineer building encrypted, AI-backed mobile and web systems. Currently shipping Euno solo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex justify-center">
            <NavBar />
          </div>
          {children}
          <BuildFooter />
          <BottomNav />
          <CommandPalette />
          <KeyboardShortcuts />
        </ThemeProvider>
      </body>
    </html>
  );
}

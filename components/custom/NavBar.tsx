"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { name: "work", href: "/work" },
  { name: "profile", href: "/profile" },
  { name: "badges", href: "/achievements" },
  { name: "ask", href: "/ask" },
  { name: "contact", href: "/contact" },
];

const linkStyle =
  "text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-xl transition-all duration-200";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-20 w-full border-white/15 bg-white/8 px-4 py-2.5 shadow-lg backdrop-blur-md sm:mt-3 sm:max-w-[75%] sm:rounded-3xl sm:border">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="transition-transform duration-200 hover:scale-110"
            />
          </Link>

          <div className="flex items-center gap-2 sm:hidden">
            <ThemeSwitcher />
            <button
              className="cursor-pointer text-white/60 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>
          </div>

          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={linkStyle}>
                {link.name}
              </Link>
            ))}
            <div className="ml-2 border-l border-white/10 pl-2">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-20 h-full w-64 border-l border-white/10 bg-neutral-950/95 backdrop-blur-xl transition-transform duration-300 ease-in-out sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <button
            className="mb-8 cursor-pointer self-end text-white/50 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-white/60 hover:bg-white/8 hover:text-white transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

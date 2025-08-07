"use client";
import "animate.css";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const textColor = "text-white/75";
  const linkStyle = ` text-lg lg:text-xl font-medium px-2 py-1 rounded-2xl ${
    pathname === "/contact"
      ? `bg-gray-300 ${textColor}`
      : `my-auto ${textColor} bg-gray-300/0 hover:bg-white/75 transition-all duration-300 hover:text-black`
  }`;

  const links = [
    { name: "home", link: "#home" },
    { name: "about", link: "#about" },
    { name: "projects", link: "#projects" },
    { name: "skills", link: "#skills" },
  ];

  return (
    <>
      <nav className="fixed z-20 w-full border-white/20 bg-gradient-to-br from-white/20 via-white/5 to-white/10 px-4 py-2 shadow-xl/50 backdrop-blur-md sm:mt-3 sm:max-w-[75%] sm:rounded-3xl sm:border-2">
        <div className="z-30 mx-auto flex max-w-7xl justify-between sm:flex-row">
          <div className="flex gap-2">
            <Link href="/">
              <Image
                src={"/logo.png"}
                alt={"logo"}
                width={50}
                height={50}
                className="my-auto flex transition-all hover:scale-125 hover:invert"
              />
            </Link>
          </div>

          {/* Menu toggle button - visible on small screens */}
          <button
            className={
              "mr-5 cursor-pointer bg-transparent text-lg sm:hidden " +
              textColor
            }
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>

          {/* Desktop links */}
          <div className="mr-5 hidden sm:flex sm:flex-row sm:gap-4">
            {links.map((link) => (
              <Link key={link.link} href={link.link} className={linkStyle}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/30 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile drawer menu */}
      <div
        className={`fixed top-0 right-0 z-20 h-full w-1/2 max-w-xs transform border-2 border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-md transition-transform duration-300 ease-in-out sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-3">
          <button
            className="mr-4 cursor-pointer self-end text-2xl text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <div className="space-y-10">
            {links.map((link) => (
              <div key={link.link} className="flex flex-col">
                <Link
                  href={link.link}
                  className="mx-auto w-full p-5 text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                <div className="mb-4 h-[1px] w-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

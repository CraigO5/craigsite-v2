"use client";
import Image from "next/image";
import SmoothScroll from "@/components/custom/SmoothScroll";
import { ContactCard } from "@/components/custom/ContactCard";
import { Star } from "lucide-react";

import "animate.css";
import { SiGithub, SiLinkedin } from "react-icons/si"; // or "react-icons/fa"
import { FaFileAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const posts = [
  {
    title: "CoverMe",
    content:
      "Created my first ChatGPT based application called CoverMe. It generates cover letters based on the job description and your resume! Had a little bit of trouble learning how to parse PDFs, and had to learn some annoying new libraries, but it works great now! Check it out!",
    date: "Monday, July 14, 2025",
    image: "./coverme.png",
  },
  {
    title: "Trial n' Error Mockups",
    content:
      "Recently discussed the mockups for Trial n' Error with my project partner! We're creating an app that helps you whittle down your options when making a decision through good ol' trial and error!",
    date: "Monday, July 14, 2025",
    image: "./tne.png",
  },
  {
    title: "Blog",
    content:
      "Created a blog post section to document my projects and thoughts! Feel free to check in every so often!",
    date: "Monday, July 14, 2025",
    image: "",
  },
];

export default function Home() {
  const bgMainColor = "bg-red-500";
  const linkStyle = `hover:bg-red-500 hover:text-white rounded-2xl lg:bg-white px-2 lg:px-5 lg:py-2 transition-all hover:scale-110 duration-300`;
  const socialStyle =
    "drop-shadow-md/25 hover:scale-120 hover:text-black transition-all duration-300";

  const [isScrolled, setIsScrolled] = useState(false);
  const [navAnimation, setNavAnimation] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200;
      setIsScrolled(scrolled);
      setNavAnimation(
        scrolled
          ? "animate__animated animate__fadeInDown"
          : "animate__animated animate__fadeOutUp",
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SmoothScroll />
      <nav className={"fixed z-1 flex w-full bg-black " + navAnimation}>
        <div className="mx-auto my-5 flex w-[80%] items-center justify-center md:justify-between">
          <div>
            <a href="#">
              <Image
                src="./logo.png"
                alt="Logo"
                width={60}
                height={60}
                className={`hidden drop-shadow-white/50 transition-all duration-300 hover:scale-130 hover:invert md:flex ${
                  isScrolled
                    ? "animate__animated animate__fadeInDown"
                    : "opacity-100" // visible by default, no fade-out
                }`}
              />
            </a>
          </div>
          {/* Socials */}
          <div className="gap-5 text-lg font-bold text-white lg:flex lg:text-black">
            <a href="#" className={linkStyle}>
              blog
            </a>
            <a href="#welcome" className={linkStyle}>
              welcome
            </a>
            <a href="#posts" className={linkStyle}>
              posts
            </a>
            <a href="#contact" className={linkStyle}>
              contact
            </a>
            <a href="./" className={linkStyle}>
              home
            </a>
          </div>
        </div>
      </nav>

      {/* Navbar */}
      <nav className="flex bg-black">
        <div className="mx-auto my-5 flex w-[80%] items-center justify-center md:justify-between">
          <div>
            <a href="#">
              <Image
                src="./logo.png"
                alt="Logo"
                width={60}
                height={60}
                className={`hidden drop-shadow-white/50 transition-all duration-300 hover:scale-130 hover:invert md:flex ${
                  isScrolled
                    ? "animate__animated animate__fadeInDown"
                    : "opacity-100" // visible by default, no fade-out
                }`}
              />
            </a>
          </div>
          {/* Socials */}
          <div className="flex gap-2 text-lg font-bold text-white lg:flex lg:gap-5 lg:text-black">
            <a href="#" className={linkStyle}>
              blog
            </a>
            <a href="#welcome" className={linkStyle}>
              welcome
            </a>
            <a href="#posts" className={linkStyle}>
              posts
            </a>
            <a href="#contact" className={linkStyle}>
              contact
            </a>
            <a href="./" className={linkStyle}>
              home
            </a>
          </div>
        </div>
      </nav>

      {/* Home */}
      <div>
        {" "}
        {/* Colored box */}
        <div className={bgMainColor + " items-center space-y-7 pt-20"}>
          {/* Black box */}
          {/* Black box with repeating name */}
          <div className="relative overflow-hidden border-y-5 border-white bg-black py-4">
            <div className="animate-marquee whitespace-nowrap">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="mx-8 inline-block -skew-x-12 text-4xl font-black text-white lg:text-8xl"
                >
                  THE BLOG
                </span>
              ))}
            </div>
          </div>
          <div className="group flex justify-center gap-7 pb-5">
            <a
              href="https://github.com/craigsterr"
              className={socialStyle + " space-y-2"}
            >
              <SiGithub size={30} className="mx-auto" />
              <h2 className="font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Github
              </h2>
            </a>
            <a
              href="https://www.linkedin.com/in/craig-ondevilla-8106b4191"
              className={socialStyle + " space-y-2"}
            >
              <SiLinkedin size={30} className="mx-auto" />
              <h2 className="font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                LinkedIn
              </h2>
            </a>
            <a href="./resume.pdf" className={socialStyle + " space-y-2"}>
              {" "}
              <FaFileAlt size={30} className="mx-auto" />
              <h2 className="font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Resume
              </h2>
            </a>
          </div>
        </div>
      </div>
      <div id="welcome" className="relative overflow-hidden bg-white">
        <div className="flex flex-col items-center space-y-10">
          <div className="w-[75%] rounded-2xl bg-black" />
          {/* About Section */}
          <Image src="./arrow.png" alt="Logo" width={20} height={20} />

          <div className="mb-20 space-y-10 py-15 text-black">
            <h2 className="mx-auto w-[75%] text-center text-3xl font-black">
              Welcome To My Blog!
            </h2>
            <p className="mx-auto w-[80%] text-center text-xl lg:w-[75%]">
              This blog is where I update my journey as a developer. I'll talk
              about my thoughts on various topics, share my experiences, and
              document my projects.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center justify-center">
            <Star className="absolute h-100 w-100 stroke-[0.5] text-black lg:h-200 lg:w-200" />
            <Star className="absolute h-50 w-50 stroke-1 text-black lg:h-100 lg:w-100" />
          </div>
        </div>
      </div>
      {/* Posts Section */}
      <div id="posts" className="relative overflow-hidden bg-black">
        <div className="flex justify-normal">
          <div className="flex items-center justify-center">
            <Star className="absolute h-100 w-100 stroke-[0.5] text-white lg:h-200 lg:w-200" />
            <Star className="absolute h-50 w-50 stroke-1 text-white lg:h-100 lg:w-100" />
          </div>
        </div>

        <Image
          src="./arrow_white.png"
          alt="Logo"
          width={20}
          height={20}
          className="mx-auto pt-10"
        />
        <div className="sm:p-20">
          {/* Posts */}
          <h2 className="mb-20 text-center text-3xl font-bold">Posts</h2>
          <div className="mx-auto flex w-[100%] flex-col items-center gap-6 sm:w-[75%]">
            {posts.map((post, i) => (
              <div
                key={i}
                className="max-w-full space-y-5 rounded-2xl border-2 border-white/50 p-10 text-white md:max-w-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="italic opacity-50">Created on {post.date}</p>
                </div>
                <p className="text-lg">{post.content}</p>

                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={750}
                    height={750}
                    className="rounded-lg object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center justify-center">
            <Star className="absolute h-100 w-100 stroke-[0.5] text-white lg:h-200 lg:w-200" />
            <Star className="absolute h-50 w-50 stroke-1 text-white lg:h-100 lg:w-100" />
          </div>
        </div>
      </div>
      {/* Contact */}
      <div
        id="contact"
        className="relative items-center justify-center space-y-10 overflow-hidden bg-white pb-25"
      >
        <div className="flex justify-normal">
          <div className="flex items-center justify-center">
            <Star className="absolute h-100 w-100 stroke-[0.5] text-black lg:h-200 lg:w-200" />
            <Star className="absolute h-50 w-50 stroke-1 text-black lg:h-100 lg:w-100" />
          </div>
        </div>
        <Image
          src="./arrow.png"
          alt="Logo"
          width={20}
          height={20}
          className="mx-auto pt-10"
        />
        <h2 className="my-10 text-center text-4xl font-bold text-black">
          Contact Me!
        </h2>
        <div className="flex justify-center">
          <ContactCard />
        </div>
      </div>
    </>
  );
}

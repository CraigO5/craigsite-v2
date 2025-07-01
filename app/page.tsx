"use client";
import Image from "next/image";
import SmoothScroll from "@/components/custom/SmoothScroll";
import { ContactCard } from "@/components/custom/ContactCard";
import { Star } from "lucide-react";

import "animate.css";
import {
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiGithub,
  SiTailwindcss,
  SiDocker,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBlender,
  SiCplusplus,
  SiUnity,
  SiUnrealengine,
  SiSupabase,
  SiNodedotjs,
  SiShadcnui,
  SiLinkedin,
} from "react-icons/si"; // or "react-icons/fa"
import { FaFileAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
const labeledIcons = [
  // --- Languages ---

  {
    name: "C++",
    icon: SiCplusplus,
    description:
      "Extension of C with object-oriented features for high-performance applications.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Typed superset of JavaScript for scalable and robust apps.",
  },
  {
    name: "Python",
    icon: SiPython,
    description:
      "General-purpose language known for simplicity and readability.",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    description: "Standard markup language for creating modern web pages.",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    description: "Stylesheet language used for designing responsive layouts.",
  },

  // --- Backend / Databases ---
  {
    name: "Supabase",
    icon: SiSupabase,
    description:
      "Open-source Firebase alternative for building secure, scalable backends with Postgres.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description:
      "JavaScript runtime built on Chrome's V8 engine, ideal for building backend services.",
  },

  // --- Frameworks & Libraries ---
  {
    name: "React",
    icon: SiReact,
    description:
      "JavaScript library for building interactive and component-based user interfaces.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description:
      "Full-stack React framework for building fast, server-rendered apps.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description:
      "Utility-first CSS framework for custom, responsive UI design.",
  },
  {
    name: "shadcn/ui",
    icon: SiShadcnui,
    description:
      "Beautifully designed, customizable React components built with Tailwind CSS and Radix UI.",
  },

  // --- DevOps & Developer Tools ---
  {
    name: "GitHub",
    icon: SiGithub,
    description:
      "Platform for version control and collaborative software development using Git.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description:
      "Platform for containerizing applications and managing environments.",
  },

  // --- Design & Media ---
  {
    name: "Adobe Photoshop",
    icon: SiAdobephotoshop,
    description:
      "Industry-standard tool for raster graphics and image editing.",
  },
  {
    name: "Adobe Illustrator",
    icon: SiAdobeillustrator,
    description:
      "Vector graphics software for logos, icons, and illustrations.",
  },
  {
    name: "Blender",
    icon: SiBlender,
    description:
      "Open-source 3D creation suite for modeling, animation, and rendering.",
  },
  {
    name: "Unity",
    icon: SiUnity,
    description: "Cross-platform game engine for 2D/3D games and simulations.",
  },
  {
    name: "Unreal Engine",
    icon: SiUnrealengine,
    description:
      "High-fidelity game engine used for AAA games and virtual production.",
  },
];

const projects = [
  {
    title: "Spyfall",
    description:
      "A web clone of the social deduction game Spyfall using Next.js and Supabase!",
    image: "./spyfall.png",
    link: "https://spyfall.craigo.live",
  },
  {
    title: "Productivity Slime",
    description:
      "A Firefox extension live on the add-ons store to track time spent on unproductive tabs in the style of a video game slime.",
    image: "./slime_sc.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/productivity-slime/",
  },
  {
    title: "Camelia",
    description:
      "A two-person web development startup focused creating stylish and responsive websites.",
    image: "./camellia.png",
    link: "https://camelia.work",
  },
  {
    title: "News Template Presets",
    description:
      "A preset Firefox extension to automate article items when I worked as a news reporter.",
    image: "./news.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/news-template-presets/",
  },
  {
    title: "Webbie Pet",
    description:
      "A tamagotchi style game created with JavaScript, HTML5 Canvas, SASS, Next.js, and Node.js.",
    image: "./webbie-sc.png",
    link: "https://craigsterr.github.io/webbie-pet",
  },
  {
    title: "Kitty Clicker",
    description: "A clicker game made entirely in React, HTML, and Javascript.",
    image: "./kitty.png",
    link: "https://craigsterr.github.io/kitty-clicker",
  },
];

export default function Home() {
  const bgMainColor = "bg-red-500";
  const linkStyle = `hover:bg-red-500 hover:text-white rounded-2xl bg-white px-5 py-2 transition-all hover:scale-110 duration-300`;
  const iconStyle =
    "hover:scale-110 hover:bg-white hover:text-black transition-all duration-100";
  const socialStyle =
    "drop-shadow-md/25 hover:scale-120 hover:text-black transition-all duration-300";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SmoothScroll />
      {isScrolled && (
        <nav className="animate__animated animate__bounceInDown fixed z-1 flex w-full bg-black">
          <div className="mx-auto my-5 flex w-[80%] items-center justify-between">
            <div>
              <a href="#">
                <Image
                  src="./logo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="animate__animated animate__rubberBand drop-shadow-white/50 transition-all duration-300 hover:scale-130 hover:invert"
                />
              </a>
            </div>
            {/* Socials */}
            <div className="hidden gap-5 text-lg font-bold text-black lg:flex">
              <a href="#" className={linkStyle}>
                home
              </a>
              <a href="#projects" className={linkStyle}>
                projects
              </a>
              <a href="#skills" className={linkStyle}>
                skills
              </a>
              <a href="#contact" className={linkStyle}>
                contact
              </a>
            </div>
          </div>
        </nav>
      )}

      {/* Navbar */}
      <nav className="flex bg-black">
        <div className="mx-auto my-5 flex w-[80%] items-center justify-between">
          <div>
            <a href="#">
              <Image
                src="./logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="animate__animated animate__rubberBand drop-shadow-white/50 transition-all duration-300 hover:scale-130 hover:invert"
              />
            </a>
          </div>
          {/* Socials */}
          <div className="hidden gap-5 text-lg font-bold text-black lg:flex">
            <a href="#" className={linkStyle}>
              home
            </a>
            <a href="#projects" className={linkStyle}>
              projects
            </a>
            <a href="#skills" className={linkStyle}>
              skills
            </a>
            <a href="#contact" className={linkStyle}>
              contact
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
          <div className="flex justify-center border-y-5 border-white bg-black">
            <h1 className="hidden -skew-x-12 py-2 text-center text-8xl font-black text-white lg:block">
              CRAIG ONDEVILLA
            </h1>
            <h1 className="block -skew-x-12 py-2 text-center text-8xl font-black text-white lg:hidden">
              CRAIG
            </h1>
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
      <div id="home" className="relative overflow-hidden bg-white">
        <div className="flex flex-col items-center space-y-10">
          <div className="w-[75%] rounded-2xl bg-black" />
          {/* About Section */}
          <Image src="./arrow.png" alt="Logo" width={20} height={20} />

          <div className="mb-20 space-y-10 py-15 text-black">
            <Image
              src="./craig.jpg"
              alt="Logo"
              width={300}
              height={300}
              className="mx-auto rounded-full drop-shadow-md/25"
            />
            <h2 className="mx-auto w-[30%] text-center text-2xl font-black">
              Hey, I'm Craig Ondevilla!
            </h2>
            <p className="mx-auto w-[80%] text-center text-xl lg:w-[30%]">
              I'm a passionate programmer with a Bachelor of Science in Computer
              Science from the University of Illinois Urbana-Champaign (UIUC). I
              specialize in web development and design, and I love creating
              clean, user-friendly digital experiences. Me and my friend are
              currently working on Camelia, a web development startup providing
              stylish and responsive websites for clients with small
              businesses.{" "}
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
      {/* Projects Section */}
      <div id="projects" className="relative overflow-hidden bg-black">
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
        <div className="p-20">
          {/* Projects */}
          <h2 className="mb-20 text-center text-3xl font-bold">Projects</h2>
          <div className="mx-auto flex w-[100%] flex-wrap justify-center gap-6 md:w-[50%]">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className="group flex h-60 w-60 -skew-x-12 items-center justify-center border-4 border-white bg-black transition-transform duration-100 hover:scale-110 hover:bg-red-700"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-25"
                  sizes="320px"
                />
                <div className="absolute p-10">
                  <h1 className="mx-auto text-center text-2xl font-bold group-hover:hidden">
                    {project.title}
                  </h1>
                  <p className="hidden text-xl group-hover:block">
                    {project.description}
                  </p>
                </div>
              </a>
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
      {/* Skills */}
      <div id="skills" className={bgMainColor + " relative overflow-hidden"}>
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
        <h2 className="mt-20 text-center text-4xl font-bold text-black">
          Skills
        </h2>
        {/* Skills cards */}
        <div className="py-20">
          <div className="mx-auto flex w-[90%] flex-wrap justify-center gap-10 lg:w-[70%]">
            {labeledIcons.map(({ icon: Icon, name, description }, i) => (
              <div
                key={i}
                className={
                  "w-25 space-y-3 rounded-2xl bg-black lg:w-50 " + iconStyle
                }
              >
                <div className="flex flex-col gap-5 p-4">
                  <Icon size={50} className="mx-auto" />
                  <h2 className="hidden font-black lg:block">{name}</h2>
                  <p className="hidden lg:block">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center justify-center">
            <Star className="absolute h-100 w-100 stroke-[0.5] text-black lg:h-200 lg:w-200" />
            <Star className="absolute h-50 w-50 stroke-1 text-black lg:h-100 lg:w-100" />
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

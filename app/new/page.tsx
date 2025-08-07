"use client";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import SmoothScroll from "@/components/custom/SmoothScroll";
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
import NavBar from "@/components/custom/NavBar";
import Link from "next/link";

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
    title: "CoverMe",
    description: "An AI Cover Letter generator using Next.js and ChatGPT!",
    image: "./coverme.png",
    link: "https://coverme.craigo.live",
  },
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
  {
    title: "TURBOHYPER",
    description: "A bullet hell game made in Unity/C#. (COMING SOON)",
    image: "./logo.png",
    link: "",
  },
  {
    title: "Trial N' Error",
    description:
      "A problem solving app focused on finding the variables to success made in Next.js. (COMING SOON)",
    image: "./logo.png",
    link: "https://github.com/craigsterr/trial-n-error",
  },
  {
    title: "Reddit Grabber",
    description:
      "Search tool that grabs the top Reddit comments to a search. (COMING SOON)",
    image: "./logo.png",
    link: "",
  },
];

export default function Home() {
  const iconStyle =
    "hover:scale-110 hover:bg-white hover:text-black transition-all duration-100";
  const buttonStyle =
    "px-3 py-1 text-white rounded-md hover:bg-red-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl border border-white/20  bg-gradient-to-br bg-red-500 from-white/20 via-white/5 to-white/10 cursor-pointer hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-0 active:translate-x-0 hover:shadow-[4px_4px_0px_#000000] active:shadow-none transition duration-100 mx-1 border-2 ";

  return (
    <>
      <div className="flex justify-center">
        <NavBar />
      </div>
      <SmoothScroll />
      <ParallaxProvider>
        {/* Title Section */}
        <section id="home" className="relative flex h-[720px] w-full flex-col">
          <Parallax translateY={[-50, 50]} className="absolute inset-0 z-0">
            <div className="flex h-full w-full items-center justify-center bg-black opacity-50">
              <h1 className="font bold text-[6rem]">BACKGROUND</h1>
            </div>
          </Parallax>
          <div className="relative z-10 flex">
            <h1 className="m-10 text-[10rem] font-bold">
              <span className="inline md:hidden">CRAIG</span>
              <span className="hidden md:inline">CRAIG ONDEVILLA</span>
            </h1>
          </div>
          <div className="relative z-10 mx-auto flex text-[3rem] font-bold">
            <Link href="#about" className={buttonStyle}>
              click to explore
            </Link>
          </div>
          <div className="relative z-10 mx-auto mt-auto mb-10 flex">
            <FontAwesomeIcon icon={faAnglesDown} size="5x" />
          </div>
        </section>
        {/* About me section */}
        <section id="about" className="h-[720px]">
          <div className="relative z-10 flex h-full bg-red-500 p-10">
            <div>
              <h2 className="text-[6rem] font-bold">ABOUT ME</h2>
              <p className="text-2xl md:w-1/2">
                {" "}
                I'm a passionate programmer with a Bachelor of Science in
                Computer Science from the University of Illinois
                Urbana-Champaign (UIUC). I specialize in web development and
                design, and I love creating clean, user-friendly digital
                experiences. Me and my friend are currently working on Camelia,
                a web development startup providing stylish and responsive
                websites for clients with small businesses.{" "}
              </p>
            </div>
            <Image
              alt="Craig Ondevilla"
              src={"/craig.jpg"}
              width={1080}
              height={1080}
            />
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="relative h-[720px]">
          <Parallax translateY={[-50, 50]} className="absolute inset-0">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                alt="Craig Ondevilla"
                src={projects[0].image}
                width={1080}
                height={1080}
                className="rounded-2xl object-cover drop-shadow-2xl"
              />
            </div>
          </Parallax>
          <div className="relative m-10 flex h-full w-full flex-col">
            <div className="z-10">
              <h1 className="text-[6rem] font-bold">PROJECTS</h1>
              <h2 className="text-[4rem] font-bold">{projects[0].title}</h2>
              <p className="text-2xl">{projects[0].description}</p>
            </div>
            {/* <Image
              alt={projects[0].title}
              src={projects[0].image}
              width={1280}
              height={720}
              className="h-full w-full rounded-2xl drop-shadow-2xl"
            /> */}
            <div className="mx-auto mt-auto flex gap-10">
              <div className="mb-10 h-32 w-64 rounded-2xl bg-white/50" />
              <div className="mb-10 h-32 w-64 rounded-2xl bg-white/50" />
              <div className="mb-10 h-32 w-64 rounded-2xl bg-white/50" />
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="relative z-10 h-full bg-red-500 p-10">
            <h2 className="text-[6rem] font-bold">SKILLS</h2>
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
          </div>
        </section>
      </ParallaxProvider>
    </>
  );
}

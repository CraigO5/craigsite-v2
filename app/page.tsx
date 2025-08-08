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
  SiVercel,
  SiSass,
  SiJavascript,
  SiRailway,
  SiPrisma,
} from "react-icons/si"; // or "react-icons/fa"
import { FaFileAlt } from "react-icons/fa";
import NavBar from "@/components/custom/NavBar";
import Link from "next/link";
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
  {
    name: "Railway",
    icon: SiRailway,
    description:
      "A cloud platform that helps you deploy, manage, and scale apps and databases with minimal configuration.",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    description:
      "A modern database toolkit and ORM for TypeScript and JavaScript, simplifying database access and migrations.",
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
    description:
      "An AI-powered Cover Letter Generator built with ChatGPT. Used by 200+ users to create over 400 cover letters and counting. I still use it daily!",
    image: "./coverme.png",
    link: "https://coverme.craigo.live",
    technologies: [SiTypescript, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss],
  },
  {
    title: "Spyfall",
    description:
      "A web clone of the social deduction game Spyfall using Next.js and Supabase!",
    image: "./spyfall.png",
    link: "https://spyfall.craigo.live",
    technologies: [
      SiTypescript,
      SiNextdotjs,
      SiHtml5,
      SiCss3,
      SiTailwindcss,
      SiVercel,
      SiSupabase,
    ],
  },
  {
    title: "Productivity Slime",
    description:
      "A Firefox extension live on the add-ons store to track time spent on unproductive tabs in the style of a video game slime.",
    image: "./slime_sc.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/productivity-slime/",
    technologies: [SiTailwindcss, SiHtml5, SiJavascript],
  },
  {
    title: "Camelia",
    description:
      "A two-person web development startup focused creating stylish and responsive websites.",
    image: "./camellia.png",
    link: "https://camelia.work",
    technologies: [
      SiTypescript,
      SiNextdotjs,
      SiReact,
      SiTailwindcss,
      SiHtml5,
      SiCss3,
    ],
  },
  {
    title: "News Template Presets",
    description:
      "A preset Firefox extension to automate article items when I worked as a news reporter.",
    image: "./news.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/news-template-presets/",
    technologies: [SiJavascript, SiHtml5, SiCss3], // Note: You'll need to import SiJavascript
  },
  {
    title: "Webbie Pet",
    description:
      "A tamagotchi style game created with JavaScript, HTML5 Canvas, SASS, Next.js, and Node.js.",
    image: "./webbie-sc.png",
    link: "https://craigsterr.github.io/webbie-pet",
    technologies: [SiJavascript, SiNextdotjs, SiNodedotjs, SiHtml5, SiSass], // Note: You'll need to import SiSass
  },
  {
    title: "Kitty Clicker",
    description: "A clicker game made entirely in React, HTML, and Javascript.",
    image: "./kitty.png",
    link: "https://craigsterr.github.io/kitty-clicker",
    technologies: [SiReact, SiJavascript, SiHtml5, SiCss3],
  },
  {
    title: "Trial N' Error",
    description:
      "A problem solving app focused on finding the variables to success made in Next.js. (COMING SOON)",
    image: "./logo.png",
    link: "https://github.com/craigsterr/trial-n-error",
    technologies: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss],
  },
];

export default function Home() {
  const [currentProjectId, setCurrentProjectId] = useState(0);

  const iconStyle =
    "hover:scale-110 hover:bg-white hover:text-black transition-all duration-100";
  const buttonStyle =
    "px-4 py-2 text-white rounded-md hover:bg-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl border border-white/20  bg-gradient-to-br from-white/20 via-white/5 to-white/10 cursor-pointer hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-0 active:translate-x-0 hover:shadow-[4px_4px_0px_#000000] active:shadow-none transition duration-100 mx-1 border-2 ";
  const socialStyle =
    "drop-shadow-md/25 hover:scale-120 hover:text-red-500 transition-all duration-300";

  const wrapAround = (id: number) => {
    let newId = id;
    if (newId < 0) {
      newId = projects.length - 1;
    }
    if (newId >= projects.length) {
      newId = 0;
    }

    return newId;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const appearElements = document.querySelectorAll(".hide");
    appearElements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <NavBar />
      </div>
      <SmoothScroll />
      <ParallaxProvider>
        {/* Title Section */}
        <section
          id="home"
          className="relative flex w-full flex-col overflow-hidden"
        >
          <Parallax translateY={[-50, 50]} className="absolute inset-0 z-0">
            <div className="flex h-full w-full items-center justify-center bg-black opacity-50">
              <Image
                alt="Craig Ondevilla"
                src="/square bg.png"
                width={1280}
                height={1280}
                className="w-full rounded-full object-cover"
              />
            </div>
          </Parallax>
          <div className="relative z-10 mx-auto mt-20 mb-20 flex md:mb-40">
            <h1 className="hide font-bold md:m-10">
              <span className="mx-auto inline lg:hidden">CRAIG</span>
              <span className="hidden lg:inline">CRAIG ONDEVILLA</span>
            </h1>
          </div>
          <div className="hide relative z-10 mx-auto mb-10 flex text-[2rem] font-bold md:text-[3rem]">
            <Link href="#about" className={buttonStyle}>
              click to explore
            </Link>
          </div>
          <div className="group hide flex justify-center gap-7 pb-5">
            <a
              href="https://github.com/craigsterr"
              className={socialStyle + " space-y-2"}
            >
              <SiGithub size={30} className="mx-auto" />
              <p className="font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Github
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/craig-ondevilla-8106b4191"
              className={socialStyle + " space-y-2"}
            >
              <SiLinkedin size={30} className="mx-auto" />
              <p className="font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                LinkedIn
              </p>
            </a>
            <a href="./resume.pdf" className={socialStyle + " space-y-2"}>
              {" "}
              <FaFileAlt size={30} className="mx-auto" />
              <p className="font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Resume
              </p>
            </a>
          </div>
          <div className="relative z-10 mx-auto mt-auto mb-10 flex">
            <FontAwesomeIcon icon={faAnglesDown} size="2x" />
          </div>
          <div className="scroller">
            {Array.from({ length: 3 }).map((_, i) => (
              <ul key={i}>
                <li>
                  <span>Full Stack Developer</span>
                </li>
                <li>
                  <span>UI/UX Designer</span>
                </li>
                <li>
                  <span>Problem Solver</span>
                </li>
                <li>
                  <span>Frontend Developer</span>
                </li>
                <li>
                  <span>Artist</span>
                </li>
                <li>
                  <span>Team Player</span>
                </li>
                <li>
                  <span>Leader</span>
                </li>
                <li>
                  <span>Programmer</span>
                </li>
                <li>
                  <span>Freelancer</span>
                </li>
              </ul>
            ))}{" "}
          </div>{" "}
        </section>
        {/* About me section */}
        <section id="about">
          <div className="relative z-10 flex h-full flex-col bg-red-500 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-10 lg:mb-0 lg:w-1/2 lg:p-10">
              <h2 className="hide inline-block font-bold text-shadow-xs">
                ABOUT ME
              </h2>
              <div className="hide space-y-5">
                <p className="text-2xl">
                  Welcome to the page! I'm Craig, a Computer Science graduate
                  from the University of Illinois Urbana-Champaign! I'm a{" "}
                  <b>full stack developer</b> with a passion for intuitive
                  design and collaboration. I have hands-on expertise with
                  TypeScript, Next.js, Tailwind CSS, and PostgreSQL. I've
                  contributed to several startups, media organizations, and led
                  several projects.
                </p>
                <p className="text-2xl">
                  My most recent contributions are as a full stack developer for
                  <b> Elaview</b>, a B2B advertiser marketplace website and a
                  full stack developer and co-founder of <b>Camelia</b>, a web
                  development startup. I'm also an artist at heart, with a
                  passion for stylish and vibrant UI.
                </p>
              </div>
            </div>
            <div className="hide flex justify-center lg:w-1/2">
              <Image
                alt="Craig Ondevilla"
                src="/craig.jpg"
                width={700}
                height={700}
                className="h-auto w-full max-w-xs rounded-full sm:max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </section>{" "}
        {/* Projects Section */}
        <section id="projects" className="relative overflow-hidden">
          <Parallax translateY={[-50, 50]} className="absolute inset-0">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                alt={projects[currentProjectId].title}
                src={projects[currentProjectId].image}
                width={1080}
                height={1080}
                className="rounded-2xl object-cover opacity-50 drop-shadow-2xl"
              />
            </div>
          </Parallax>
          <div className="relative m-5 flex flex-col md:m-10">
            <div className="z-10 mb-50 rounded-2xl text-shadow-xs">
              <h2 className="hide font-bold">PROJECTS</h2>
              <h3 className="hide text-[2rem] font-bold md:text-[4rem]">
                {projects[currentProjectId].title}
              </h3>
              <p className="hide mb-10 text-2xl">
                {projects[currentProjectId].description}
              </p>
              <a
                href={projects[currentProjectId].link}
                className={
                  buttonStyle + " hide text-[2rem] font-bold md:text-[3rem]"
                }
              >
                DEMO
              </a>
              <div className="hide mt-10 flex flex-wrap gap-5">
                {projects[currentProjectId].technologies &&
                  projects[currentProjectId].technologies?.map(
                    (TechIcon, TechIndex) => (
                      <TechIcon key={TechIndex} size={50} />
                    ),
                  )}
              </div>
            </div>

            <div className="hide mx-auto mt-auto mb-10 flex items-center gap-10">
              <FontAwesomeIcon
                icon={faAnglesDown}
                size="3x"
                onClick={() => setCurrentProjectId((id) => wrapAround(id - 1))}
                className="relative z-10 my-auto flex rotate-90 duration-300 hover:scale-110 hover:cursor-pointer"
              />
              <div className="hidden h-32 w-64 rounded-2xl lg:block">
                <Image
                  alt={projects[wrapAround(currentProjectId - 1)].title}
                  src={projects[wrapAround(currentProjectId - 1)].image}
                  width={1280}
                  height={720}
                  onClick={() =>
                    setCurrentProjectId((id) => wrapAround(id - 1))
                  }
                  className="h-full w-full rounded-2xl border border-white/4 object-cover drop-shadow-2xl duration-300 hover:scale-105 hover:cursor-pointer"
                />
              </div>
              <div className="hidden h-32 w-64 rounded-2xl lg:block">
                <Image
                  alt={projects[currentProjectId].title}
                  src={projects[currentProjectId].image}
                  width={1280}
                  height={720}
                  className="h-full w-full scale-90 rounded-2xl border border-white/4 object-cover drop-shadow-2xl duration-300 lg:scale-115"
                />
              </div>
              <div className="hidden h-32 w-64 rounded-2xl lg:block">
                <Image
                  alt={projects[wrapAround(currentProjectId + 1)].title}
                  src={projects[wrapAround(currentProjectId + 1)].image}
                  width={1280}
                  height={720}
                  onClick={() =>
                    setCurrentProjectId((id) => wrapAround(id + 1))
                  }
                  className="h-full w-full rounded-2xl border border-white/4 object-cover drop-shadow-2xl duration-300 hover:scale-105 hover:cursor-pointer"
                />
              </div>

              <FontAwesomeIcon
                icon={faAnglesDown}
                size="3x"
                onClick={() => setCurrentProjectId((id) => wrapAround(id - 1))}
                className="relative z-10 my-auto flex -rotate-90 duration-300 hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="relative z-10 h-full bg-red-500 p-10">
            <h2 className="hide font-bold text-shadow-xs">SKILLS</h2>
            <div className="hide py-20">
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
                      <h3 className="hidden font-black lg:block">{name}</h3>
                      <p className="hidden lg:block">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="relative z-10 flex h-full flex-col items-center bg-black p-30">
            <h2 className="hide mb-20 font-bold text-shadow-xs">CONTACT</h2>
            <div className="space-y-10 rounded-2xl border p-10">
              <h3 className="hide text-[3rem] font-bold">
                Let's get in touch!
              </h3>
              <p className="hide max-w-lg text-lg">
                I’m always excited to collaborate on creative projects, chat
                about tech, or discuss opportunities. Drop me a message and I’ll
                get back to you as soon as I can.
              </p>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=craig.brdt505@gmail.com"
                className="hide text-xl text-blue-500"
              >
                craig.brdt505@gmail.com
              </a>
            </div>
          </div>
        </section>
      </ParallaxProvider>
    </>
  );
}

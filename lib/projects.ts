import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
  SiVercel,
  SiSass,
  SiJavascript,
} from "react-icons/si";

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: IconType[];
};

export const projects: Project[] = [
  {
    title: "CoverMe",
    description:
      "AI-powered cover letter generator. 500+ users, 1000+ generations.",
    image: "/coverme.png",
    link: "https://coverme.craigo.live",
    technologies: [SiTypescript, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss],
  },
  {
    title: "Pisayian Data Cleaner & Normalizer",
    description:
      "First place at Kapwa Codefest 2025. A web tool for the PSHS international alumni foundation that normalizes SPECTRA CSV exports into three relational tables, cutting manual cleanup time by 95%.",
    image: "/kapwa.png",
    link: "https://csv-umber.vercel.app/",
    technologies: [SiTypescript, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss],
  },
  {
    title: "Spyfall Unlimited",
    description:
      "Browser-based multiplayer social deduction game with real-time concurrent gameplay over a PostgreSQL session model.",
    image: "/spyfall.png",
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
      "Firefox extension (live on the add-ons store) that tracks time spent on unproductive tabs through a video-game-slime metaphor.",
    image: "/slime_sc.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/productivity-slime/",
    technologies: [SiTailwindcss, SiHtml5, SiJavascript],
  },
  {
    title: "Camelia",
    description:
      "Two-person web development studio. Stylish, responsive client sites.",
    image: "/camellia.png",
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
      "Firefox extension built to automate article templating during a stint as a news reporter.",
    image: "/news.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/news-template-presets/",
    technologies: [SiJavascript, SiHtml5, SiCss3],
  },
  {
    title: "Webbie Pet",
    description:
      "Tamagotchi-style game built on HTML5 Canvas, SASS, Next.js, and Node.js.",
    image: "/webbie-sc.png",
    link: "https://craigsterr.github.io/webbie-pet",
    technologies: [SiJavascript, SiNextdotjs, SiNodedotjs, SiHtml5, SiSass],
  },
  {
    title: "Kitty Clicker",
    description: "Clicker game in React, HTML, and JavaScript.",
    image: "/kitty.png",
    link: "https://craigsterr.github.io/kitty-clicker",
    technologies: [SiReact, SiJavascript, SiHtml5, SiCss3],
  },
  {
    title: "The Backroom",
    description:
      "Inventory and sales tracker commissioned by Cacao De Davao. Semi-local deployment.",
    image: "/inventory.png",
    link: "https://inventory-3rjex210k-craigsterrs-projects.vercel.app/",
    technologies: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss],
  },
  {
    title: "Reverber",
    description:
      "File-upload app that applies configurable reverb to an audio file.",
    image: "/reverber.png",
    link: "https://github.com/CraigO5/reverber",
    technologies: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPython],
  },
];

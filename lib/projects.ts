export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
};

// Smaller side projects — case-study-tier work lives in lib/case-studies.ts.
export const projects: Project[] = [
  {
    title: "Productivity Slime",
    description:
      "Firefox extension (live on the add-ons store) that tracks time spent on unproductive tabs through a video-game-slime metaphor.",
    image: "/slime_sc.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/productivity-slime/",
    technologies: ["JavaScript", "Tailwind", "HTML5"],
  },
  {
    title: "Camelia",
    description:
      "Two-person web development studio. Stylish, responsive client sites.",
    image: "/camellia.png",
    link: "https://camelia.work",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind"],
  },
  {
    title: "News Template Presets",
    description:
      "Firefox extension built to automate article templating during a stint as a news reporter.",
    image: "/news.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/news-template-presets/",
    technologies: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Webbie Pet",
    description:
      "Tamagotchi-style game built on HTML5 Canvas, SASS, Next.js, and Node.js.",
    image: "/webbie-sc.png",
    link: "https://craigsterr.github.io/webbie-pet",
    technologies: ["JavaScript", "Next.js", "Node.js", "SASS"],
  },
  {
    title: "The Backroom",
    description:
      "Inventory and sales tracker commissioned by Cacao De Davao. Semi-local deployment.",
    image: "/inventory.png",
    link: "https://inventory-3rjex210k-craigsterrs-projects.vercel.app/",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind"],
  },
  {
    title: "Reverber",
    description:
      "File-upload app that applies configurable reverb to an audio file.",
    image: "/reverber.png",
    link: "https://github.com/CraigO5/reverber",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind", "Python"],
  },
  {
    title: "Kitty Clicker",
    description: "Clicker game in React, HTML, and JavaScript.",
    image: "/kitty.png",
    link: "https://craigsterr.github.io/kitty-clicker",
    technologies: ["React", "JavaScript", "HTML5"],
  },
];

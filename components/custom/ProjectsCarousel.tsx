"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectsCarousel() {
  const [currentProjectId, setCurrentProjectId] = useState(0);

  const wrapAround = (id: number) => {
    if (id < 0) return projects.length - 1;
    if (id >= projects.length) return 0;
    return id;
  };

  const current = projects[currentProjectId];

  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <Image
          alt={current.title}
          src={current.image}
          width={1280}
          height={720}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-mono uppercase tracking-widest text-accent">
          {String(currentProjectId + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </p>
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">{current.title}</h3>
        <p className="mb-6 text-white/70 leading-relaxed">
          {current.description}
        </p>
        <div className="mb-6 flex flex-wrap gap-3">
          {current.technologies.map((Icon, i) => (
            <Icon key={i} size={22} className="text-white/60" />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={current.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-black"
          >
            Visit
            <ArrowUpRight size={14} />
          </a>
          <button
            onClick={() => setCurrentProjectId((id) => wrapAround(id - 1))}
            className="rounded-2xl border border-white/20 bg-white/5 p-2.5 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:cursor-pointer"
            aria-label="Previous project"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => setCurrentProjectId((id) => wrapAround(id + 1))}
            className="rounded-2xl border border-white/20 bg-white/5 p-2.5 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:cursor-pointer"
            aria-label="Next project"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

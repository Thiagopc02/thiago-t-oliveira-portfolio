"use client";

import { ArrowUpRight } from "lucide-react";

import type { Project } from "./projectsData";
import ProjectTech from "./ProjectTech";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
  large?: boolean;
};

export default function ProjectCard({
  project,
  onOpen,
  large = false,
}: ProjectCardProps) {
  return (
    <article
      className={`
        group
        relative
        flex
        cursor-pointer
        flex-col
        overflow-hidden
        border
        border-white/10
        bg-white/[0.02]
        transition
        duration-500
        hover:border-white/20
        hover:bg-white/[0.04]

        ${large ? "lg:col-span-2" : ""}
      `}
      onClick={() => onOpen(project)}
    >
      <div
        className={`
          relative
          overflow-hidden
          bg-zinc-950

          ${large ? "aspect-[16/7]" : "aspect-[16/10]"}
        `}
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-zinc-900
            via-black
            to-zinc-950
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]
          "
        />

        <div
          className="
            absolute
            bottom-6
            left-6
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-white/20
          "
        >
          {project.title}
        </div>

        <div
          className="
            absolute
            right-6
            top-6
            flex
            h-11
            w-11
            translate-y-3
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/40
            text-white/0
            opacity-0
            backdrop-blur-xl
            transition
            duration-500
            group-hover:translate-y-0
            group-hover:text-white
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div>
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            {project.category}
          </p>

          <h3
            className="
              mt-3
              text-2xl
              font-medium
              tracking-[-0.03em]
              text-white
              sm:text-3xl
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-white/45
            "
          >
            {project.description}
          </p>
        </div>

        <div className="mt-8">
          <ProjectTech technologies={project.technologies} />
        </div>

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-5
          "
        >
          <span className="text-xs text-white/25">
            {project.year}
          </span>

          <button
            type="button"
            className="
              text-xs
              font-medium
              text-white/45
              transition
              duration-300
              group-hover:text-white
            "
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  );
}
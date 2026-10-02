"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { ProjectCard as ProjectCardType } from "./projectsData";
import ProjectTech from "./ProjectTech";

type ProjectCardProps = {
  project: ProjectCardType;
  onOpen: (project: ProjectCardType) => void;
  large?: boolean;
};

export default function ProjectCard({
  project,
  onOpen,
  large = false,
}: ProjectCardProps) {
  const projectNumber = String(project.id).padStart(2, "0");

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

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.04]

        ${large ? "lg:col-span-2" : ""}
      `}
      onClick={() => onOpen(project)}
    >
      {/* =====================================================
          IMAGEM DO PROJETO
      ====================================================== */}

      <div
        className={`
          relative
          overflow-hidden
          bg-zinc-950

          ${large ? "aspect-[16/7]" : "aspect-[16/10]"}
        `}
      >
        <Image
          src={project.backImage}
          alt={`Preview do projeto ${project.title}`}
          fill
          sizes={
            large
              ? "(max-width: 1024px) 100vw, 66vw"
              : "(max-width: 640px) 100vw, 33vw"
          }
          className="
            object-cover
            object-center

            transition-transform
            duration-700

            group-hover:scale-[1.035]
          "
        />

        {/* ESCURECIMENTO */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black
            via-black/25
            to-transparent
          "
        />

        {/* FADE LATERAL */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r

            from-black/30
            via-transparent
            to-black/10
          "
        />

        {/* GLOW */}

        <div
          className="
            pointer-events-none

            absolute
            bottom-[-70px]
            left-1/2

            h-[150px]
            w-[70%]

            -translate-x-1/2

            rounded-full

            bg-cyan-400/[0.04]

            blur-[70px]
          "
        />

        {/* ===================================================
            NÚMERO DO PROJETO
        ==================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-6
            z-10

            font-mono

            text-[10px]
            font-medium

            uppercase

            tracking-[0.32em]

            text-cyan-300/70
          "
        >
          Projeto {projectNumber}
        </div>

        {/* ===================================================
            ÍCONE SUPERIOR
        ==================================================== */}

        <div
          className="
            absolute
            right-6
            top-6
            z-10

            flex
            h-11
            w-11

            translate-y-3

            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-black/50

            text-white/0

            opacity-0

            backdrop-blur-xl

            transition-all
            duration-500

            group-hover:translate-y-0
            group-hover:text-white
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div>
          {/* SUBTÍTULO */}

          <p
            className="
              text-[10px]

              uppercase

              tracking-[0.25em]

              text-white/30
            "
          >
            {project.subtitle}
          </p>

          {/* TÍTULO */}

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

          {/* DESCRIÇÃO */}

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

        {/* ===================================================
            TECNOLOGIAS
        ==================================================== */}

        <div className="mt-8">
          <ProjectTech technologies={project.technologies} />
        </div>

        {/* ===================================================
            RODAPÉ DO CARD
        ==================================================== */}

        <div
          className="
            mt-auto
            pt-8
          "
        >
          <div
            className="
              flex
              items-center
              justify-between

              border-t
              border-white/10

              pt-5
            "
          >
            <span
              className="
                font-mono

                text-[10px]

                uppercase

                tracking-[0.22em]

                text-white/25
              "
            >
              PROJECT_{projectNumber}
            </span>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onOpen(project);
              }}
              className="
                group/button

                flex
                items-center
                gap-2

                text-xs
                font-medium

                text-white/45

                transition
                duration-300

                hover:text-white
                group-hover:text-white
              "
            >
              Ver detalhes

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300

                  group-hover/button:-translate-y-0.5
                  group-hover/button:translate-x-0.5
                "
              />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          GLOW DO CARD
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -bottom-24
          -right-24

          h-52
          w-52

          rounded-full

          bg-cyan-400/[0.015]

          blur-3xl

          transition
          duration-500

          group-hover:bg-cyan-400/[0.035]
        "
      />
    </article>
  );
}
"use client";

import Image from "next/image";
import { ExternalLink, Code2, X } from "lucide-react";
import type { ProjectCard } from "./projectsData";

type ProjectModalProps = {
  project: ProjectCard | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[120]
        flex
        items-center
        justify-center
        bg-black/80
        p-4
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          w-full
          max-w-[860px]
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-[#050708]
          shadow-[0_20px_80px_rgba(0,0,0,0.65)]
        "
      >
        {/* BOTÃO FECHAR */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="
            absolute
            right-4
            top-4
            z-30
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/50
            text-white/60
            backdrop-blur-xl
            transition
            duration-300
            hover:border-white/25
            hover:bg-white
            hover:text-black
          "
        >
          <X size={18} />
        </button>

        {/* CORPO DO MODAL */}
        <div className="max-h-[82vh] overflow-y-auto">
          {/* HERO / TOPO */}
          <div className="relative h-[210px] w-full sm:h-[250px] md:h-[290px]">
            <Image
              src={project.backImage || project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#050708]
                via-black/45
                to-black/10
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/45
                via-transparent
                to-black/15
              "
            />

            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-cyan-300
                  "
                >
                  Projeto {project.number}
                </span>

                <span className="h-px w-12 bg-cyan-300/35" />
              </div>

              <p
                className="
                  mt-3
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-white/50
                "
              >
                {project.subtitle}
              </p>

              <h3
                className="
                  mt-3
                  max-w-2xl
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                "
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
            <p
              className="
                max-w-3xl
                text-base
                leading-8
                text-white/65
              "
            >
              {project.description}
            </p>

            {/* TECNOLOGIAS */}
            <div className="mt-8">
              <p
                className="
                  mb-4
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-white/30
                "
              >
                Tecnologias utilizadas
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-4
                      py-2
                      text-[11px]
                      uppercase
                      tracking-[0.16em]
                      text-white/55
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* INFO */}
            <div
              className="
                mt-8
                grid
                gap-6
                border-t
                border-white/10
                pt-6
                sm:grid-cols-2
              "
            >
              <div>
                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-white/25
                  "
                >
                  Desenvolvido por
                </p>

                <p className="mt-3 text-lg text-white/90">
                  Thiago T Oliveira
                </p>
              </div>

              <div className="sm:text-right">
                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-white/25
                  "
                >
                  Identificação
                </p>

                <p className="mt-3 text-sm uppercase tracking-[0.28em] text-cyan-300">
                  Project_{project.number}
                </p>
              </div>
            </div>

            {/* CARD DE AÇÕES */}
            <div
              className="
                mt-8
                rounded-[24px]
                border
                border-white/10
                bg-white/[0.02]
                p-5
                sm:p-6
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    text-white/60
                  "
                >
                  <ExternalLink size={18} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Explorar projeto
                  </h4>
                  <p className="mt-1 text-sm text-white/40">
                    Veja o projeto funcionando.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-full
                      bg-white
                      px-5
                      py-4
                      text-sm
                      font-semibold
                      text-black
                      transition
                      duration-300
                      hover:scale-[1.01]
                    "
                  >
                    <span>Acessar projeto</span>
                    <ExternalLink size={16} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-full
                      border
                      border-white/10
                      px-5
                      py-4
                      text-sm
                      text-white/70
                      transition
                      duration-300
                      hover:border-white/20
                      hover:bg-white/[0.03]
                      hover:text-white
                    "
                  >
                    <span className="flex items-center gap-2">
                      <Code2 size={15} />
                      Ver código
                    </span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <div>
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.28em]
                      text-white/25
                    "
                  >
                    Status
                  </p>
                </div>

                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.8)]" />
                  <span className="text-sm uppercase tracking-[0.2em]">
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BRILHO SUAVE */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[28px]
            shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]
          "
        />
      </div>
    </div>
  );
}
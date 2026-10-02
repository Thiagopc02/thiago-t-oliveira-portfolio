"use client";

import { X, ExternalLink, Code2 } from "lucide-react";
import type { Project } from "./projectsData";

type ProjectModalProps = {
  project: Project | null;
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
        z-[100]
        flex
        items-center
        justify-center
        bg-black/80
        p-4
        backdrop-blur-xl
      "
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-3xl
          border
          border-white/10
          bg-zinc-950
          shadow-2xl
        "
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="
            absolute
            right-5
            top-5
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/60
            text-white/60
            backdrop-blur-xl
            transition
            hover:bg-white
            hover:text-black
          "
        >
          <X size={18} />
        </button>

        <div
          className="
            relative
            flex
            min-h-[320px]
            items-end
            overflow-hidden
            border-b
            border-white/10
            bg-zinc-900
            p-8
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/50
              to-transparent
            "
          />

          <div className="relative z-10">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/40
              "
            >
              {project.category}
            </p>

            <h3
              className="
                mt-3
                text-4xl
                font-semibold
                tracking-[-0.04em]
                text-white
              "
            >
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              <p className="text-base leading-8 text-white/55">
                {project.longDescription}
              </p>

              <div className="mt-10">
                <h4
                  className="
                    mb-5
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Funcionalidades
                </h4>

                <div className="space-y-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-white/55
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-white/40
                        "
                      />

                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside
              className="
                h-fit
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-6
              "
            >
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Ano
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    {project.year}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Status
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    {project.status}
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Tecnologias
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/10
                          px-3
                          py-1.5
                          text-[10px]
                          text-white/40
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-8 space-y-3">
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
                        py-3
                        text-sm
                        font-medium
                        text-black
                      "
                    >
                      Ver projeto

                      <ExternalLink size={15} />
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
                        py-3
                        text-sm
                        text-white/60
                      "
                    >
                      Código

                      <Code2 size={15} />
                    </a>
                  )}
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
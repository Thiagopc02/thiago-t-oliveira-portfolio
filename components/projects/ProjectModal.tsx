"use client";

import { useEffect } from "react";
import Image from "next/image";

import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  X,
} from "lucide-react";

import type { ProjectCard } from "./projectsData";

type ProjectModalProps = {
  project: ProjectCard | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  /* =========================================================
     FECHAR COM ESC + BLOQUEAR SCROLL DO BODY
  ========================================================= */

  useEffect(() => {
    if (!project) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  /* =========================================================
     NÚMERO DO PROJETO
  ========================================================= */

  const projectNumber = String(
    project.id
  ).padStart(2, "0");

  return (
    <div
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center

        bg-black/85

        p-3
        backdrop-blur-xl

        sm:p-6
      "
      onClick={onClose}
    >
      {/* =====================================================
          MODAL
      ====================================================== */}

      <article
        onClick={(event) =>
          event.stopPropagation()
        }
        className="
          relative

          max-h-[92vh]
          w-full
          max-w-5xl

          overflow-y-auto
          overflow-x-hidden

          rounded-[28px]

          border
          border-white/10

          bg-[#050708]

          shadow-[0_40px_140px_rgba(0,0,0,0.85)]
        "
      >
        {/* ===================================================
            GLOW DE FUNDO
        ==================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            right-[-180px]
            top-[120px]

            h-[420px]
            w-[420px]

            rounded-full

            bg-cyan-400/[0.035]

            blur-[140px]
          "
        />

        {/* ===================================================
            BOTÃO FECHAR
        ==================================================== */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar projeto"
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

            bg-black/70

            text-white/60

            backdrop-blur-xl

            transition-all
            duration-300

            hover:scale-105
            hover:border-white/25
            hover:bg-white
            hover:text-black

            sm:right-6
            sm:top-6
          "
        >
          <X
            size={18}
            strokeWidth={1.7}
          />
        </button>

        {/* ===================================================
            HERO / IMAGEM DO PROJETO
        ==================================================== */}

        <div
          className="
            relative

            min-h-[300px]

            overflow-hidden

            border-b
            border-white/10

            sm:min-h-[390px]
            lg:min-h-[460px]
          "
        >
          {/* IMAGEM */}

          <Image
            src={project.backImage}
            alt={`Preview do projeto ${project.title}`}
            fill
            priority
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 90vw,
              1000px
            "
            className="
              object-cover
              object-center

              transition-transform
              duration-700
            "
          />

          {/* ESCURECIMENTO */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0

              bg-gradient-to-t

              from-black
              via-black/45
              to-black/10
            "
          />

          {/* FADE LATERAL */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0

              bg-gradient-to-r

              from-black/60
              via-transparent
              to-black/20
            "
          />

          {/* GLOW INFERIOR */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[-100px]
              left-1/2

              h-[230px]
              w-[70%]

              -translate-x-1/2

              rounded-full

              bg-cyan-400/[0.05]

              blur-[90px]
            "
          />

          {/* =================================================
              CONTEÚDO SOBRE A IMAGEM
          ================================================== */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-10

              p-6

              sm:p-8
              lg:p-10
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  font-mono

                  text-[10px]
                  font-semibold

                  uppercase

                  tracking-[0.3em]

                  text-cyan-300
                "
              >
                Projeto {projectNumber}
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-cyan-300/30
                "
              />
            </div>

            <p
              className="
                mt-4

                text-[10px]
                font-medium

                uppercase

                tracking-[0.3em]

                text-white/45

                sm:text-xs
              "
            >
              {project.subtitle}
            </p>

            <h3
              className="
                mt-3

                max-w-4xl

                text-3xl
                font-semibold

                leading-[0.98]

                tracking-[-0.045em]

                text-white

                sm:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* ===================================================
            CONTEÚDO
        ==================================================== */}

        <div
          className="
            relative
            z-10

            p-6

            sm:p-8
            lg:p-10
          "
        >
          <div
            className="
              grid
              gap-10

              lg:grid-cols-[1fr_320px]
              lg:gap-14
            "
          >
            {/* =================================================
                COLUNA PRINCIPAL
            ================================================== */}

            <div>
              <p
                className="
                  max-w-2xl

                  text-base
                  font-medium

                  leading-8

                  text-white/60

                  sm:text-lg
                  sm:leading-9
                "
              >
                {project.description}
              </p>

              {/* ===============================================
                  TECNOLOGIAS
              ================================================ */}

              <div className="mt-9">
                <p
                  className="
                    mb-4

                    text-[9px]
                    font-semibold

                    uppercase

                    tracking-[0.3em]

                    text-white/30
                  "
                >
                  Tecnologias utilizadas
                </p>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full

                          border
                          border-white/10

                          bg-white/[0.02]

                          px-4
                          py-2

                          text-[10px]
                          font-medium

                          uppercase

                          tracking-[0.12em]

                          text-white/55

                          transition-all
                          duration-300

                          hover:border-cyan-300/30
                          hover:bg-cyan-300/[0.04]
                          hover:text-white
                        "
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* ===============================================
                  SEPARADOR
              ================================================ */}

              <div
                className="
                  mt-10
                  h-px
                  w-full

                  bg-gradient-to-r

                  from-white/10
                  via-white/5
                  to-transparent
                "
              />

              {/* ===============================================
                  ASSINATURA
              ================================================ */}

              <div
                className="
                  mt-6

                  flex
                  items-center
                  justify-between
                  gap-5
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]

                      uppercase

                      tracking-[0.28em]

                      text-white/25
                    "
                  >
                    Desenvolvido por
                  </p>

                  <p
                    className="
                      mt-2

                      text-sm
                      font-medium

                      text-white/65
                    "
                  >
                    Thiago T Oliveira
                  </p>
                </div>

                <span
                  className="
                    font-mono

                    text-[10px]

                    uppercase

                    tracking-[0.2em]

                    text-cyan-300/50
                  "
                >
                  PROJECT_{projectNumber}
                </span>
              </div>
            </div>

            {/* =================================================
                PAINEL DE AÇÕES
            ================================================== */}

            <aside
              className="
                h-fit

                rounded-[22px]

                border
                border-white/10

                bg-white/[0.025]

                p-5

                backdrop-blur-xl

                sm:p-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/10

                    bg-white/[0.025]

                    text-white/55
                  "
                >
                  <ExternalLink
                    size={17}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold

                      text-white
                    "
                  >
                    Explorar projeto
                  </p>

                  <p
                    className="
                      mt-0.5

                      text-[11px]

                      text-white/30
                    "
                  >
                    Veja o projeto funcionando.
                  </p>
                </div>
              </div>

              {/* ===============================================
                  BOTÕES
              ================================================ */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >
                {/* SITE AO VIVO */}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link

                      flex
                      w-full

                      items-center
                      justify-between

                      rounded-full

                      bg-white

                      px-5
                      py-3.5

                      text-sm
                      font-semibold

                      text-black

                      transition-all
                      duration-300

                      hover:scale-[1.02]
                      hover:bg-cyan-50

                      active:scale-[0.98]
                    "
                  >
                    <span>
                      Acessar projeto
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      className="
                        transition-transform
                        duration-300

                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                    />
                  </a>
                )}

                {/* GITHUB */}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link

                      flex
                      w-full

                      items-center
                      justify-between

                      rounded-full

                      border
                      border-white/10

                      bg-white/[0.015]

                      px-5
                      py-3.5

                      text-sm
                      font-medium

                      text-white/65

                      transition-all
                      duration-300

                      hover:scale-[1.02]
                      hover:border-white/25
                      hover:bg-white/[0.05]
                      hover:text-white

                      active:scale-[0.98]
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <Code2
                        size={15}
                        strokeWidth={1.6}
                      />

                      Ver código
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      className="
                        transition-transform
                        duration-300

                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                    />
                  </a>
                )}
              </div>

              {/* ===============================================
                  CASO NÃO EXISTA LINK
              ================================================ */}

              {!project.liveUrl &&
                !project.githubUrl && (
                  <div
                    className="
                      mt-6

                      rounded-2xl

                      border
                      border-white/10

                      bg-black/30

                      px-4
                      py-4
                    "
                  >
                    <p
                      className="
                        text-xs
                        leading-5

                        text-white/35
                      "
                    >
                      Este projeto ainda não
                      possui acesso público
                      disponível.
                    </p>
                  </div>
                )}

              {/* ===============================================
                  STATUS
              ================================================ */}

              <div
                className="
                  mt-6

                  border-t
                  border-white/10

                  pt-5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[9px]

                      uppercase

                      tracking-[0.2em]

                      text-white/25
                    "
                  >
                    Status
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-2

                      text-[10px]
                      font-medium

                      uppercase

                      tracking-[0.15em]

                      text-emerald-300/70
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5

                        rounded-full

                        bg-emerald-400

                        shadow-[0_0_8px_rgba(52,211,153,0.8)]
                      "
                    />

                    Online
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ===================================================
            BORDA NEON SUPERIOR
        ==================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            left-[10%]
            right-[10%]
            top-0

            h-px

            bg-gradient-to-r

            from-transparent
            via-cyan-300/40
            to-transparent

            shadow-[0_0_14px_rgba(34,211,238,0.25)]
          "
        />
      </article>
    </div>
  );
}
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

        sm:p-5
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

          max-h-[84vh]
          w-full
          max-w-3xl

          overflow-y-auto
          overflow-x-hidden

          rounded-[24px]

          border
          border-white/10

          bg-[#050708]

          shadow-[0_35px_110px_rgba(0,0,0,0.85)]
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
            right-[-160px]
            top-[100px]

            h-[340px]
            w-[340px]

            rounded-full

            bg-cyan-400/[0.03]

            blur-[120px]
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
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-black/75

            text-white/60

            backdrop-blur-xl

            transition-all
            duration-300

            hover:scale-105
            hover:border-white/25
            hover:bg-white
            hover:text-black
          "
        >
          <X
            size={17}
            strokeWidth={1.7}
          />
        </button>

        {/* ===================================================
            HERO / IMAGEM DO PROJETO
        ==================================================== */}

        <div
          className="
            relative

            min-h-[210px]

            overflow-hidden

            border-b
            border-white/10

            sm:min-h-[240px]
            lg:min-h-[270px]
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
              768px
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

              from-black/55
              via-transparent
              to-black/20
            "
          />

          {/* GLOW INFERIOR */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[-80px]
              left-1/2

              h-[170px]
              w-[70%]

              -translate-x-1/2

              rounded-full

              bg-cyan-400/[0.045]

              blur-[75px]
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

              p-5

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
              <span
                className="
                  font-mono

                  text-[9px]
                  font-semibold

                  uppercase

                  tracking-[0.28em]

                  text-cyan-300
                "
              >
                Projeto {projectNumber}
              </span>

              <span
                className="
                  h-px
                  w-8
                  bg-cyan-300/30
                "
              />
            </div>

            <p
              className="
                mt-3

                text-[9px]
                font-medium

                uppercase

                tracking-[0.25em]

                text-white/45

                sm:text-[10px]
              "
            >
              {project.subtitle}
            </p>

            <h3
              className="
                mt-2

                max-w-3xl

                text-2xl
                font-semibold

                leading-[1]

                tracking-[-0.04em]

                text-white

                sm:text-3xl
                lg:text-4xl
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

            p-5

            sm:p-6
          "
        >
          <div
            className="
              grid
              gap-7

              lg:grid-cols-[1fr_240px]
              lg:gap-8
            "
          >
            {/* =================================================
                COLUNA PRINCIPAL
            ================================================== */}

            <div>
              <p
                className="
                  max-w-2xl

                  text-sm
                  font-medium

                  leading-7

                  text-white/60

                  sm:text-[15px]
                "
              >
                {project.description}
              </p>

              {/* ===============================================
                  TECNOLOGIAS
              ================================================ */}

              <div className="mt-6">
                <p
                  className="
                    mb-3

                    text-[8px]
                    font-semibold

                    uppercase

                    tracking-[0.28em]

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

                          px-3
                          py-1.5

                          text-[9px]
                          font-medium

                          uppercase

                          tracking-[0.1em]

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
                  mt-7
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
                  mt-5

                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]

                      uppercase

                      tracking-[0.26em]

                      text-white/25
                    "
                  >
                    Desenvolvido por
                  </p>

                  <p
                    className="
                      mt-1.5

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

                    text-[9px]

                    uppercase

                    tracking-[0.18em]

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

                rounded-[18px]

                border
                border-white/10

                bg-white/[0.025]

                p-4

                backdrop-blur-xl
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
                    h-9
                    w-9

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
                    size={15}
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
                      text-[10px]
                      text-white/30
                    "
                  >
                    Veja funcionando.
                  </p>
                </div>
              </div>

              {/* ===============================================
                  BOTÕES
              ================================================ */}

              <div
                className="
                  mt-4
                  space-y-2.5
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

                      px-4
                      py-3

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

                      px-4
                      py-3

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
                        size={14}
                        strokeWidth={1.6}
                      />

                      Ver código
                    </span>

                    <ArrowUpRight
                      size={14}
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
                      mt-4

                      rounded-xl

                      border
                      border-white/10

                      bg-black/30

                      px-3
                      py-3
                    "
                  >
                    <p
                      className="
                        text-[11px]
                        leading-5

                        text-white/35
                      "
                    >
                      Este projeto ainda não
                      possui acesso público.
                    </p>
                  </div>
                )}

              {/* ===============================================
                  STATUS
              ================================================ */}

              <div
                className="
                  mt-4

                  border-t
                  border-white/10

                  pt-4
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
                      text-[8px]

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

                      text-[9px]
                      font-medium

                      uppercase

                      tracking-[0.14em]

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
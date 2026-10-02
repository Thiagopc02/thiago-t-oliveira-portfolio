"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/* =========================================================
   TIPOS
========================================================= */

type Project = {
  id: number;
  number: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  rotation: number;
  imageClassName: string;
};

/* =========================================================
   PROJETOS
========================================================= */

const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Império Bebidas & Tabacos",
    image: "/projeto01.png",

    description:
      "Plataforma completa para uma distribuidora, com catálogo, carrinho, pedidos, autenticação e painel administrativo.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Tailwind CSS",
    ],

    rotation: -5,

    /*
     * Ajuste visual da imagem 01.
     */
    imageClassName:
      "scale-[0.96] sm:scale-[0.98] md:scale-[1.00] lg:scale-[1.02]",
  },

  {
    id: 2,
    number: "02",
    title: "Império Chalés",
    image: "/projeto02.png",

    description:
      "Projeto digital desenvolvido para apresentação dos chalés, divulgação do empreendimento e experiência de hospedagem.",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    rotation: 0,

    /*
     * O PNG 02 possui mais área transparente,
     * então recebe uma escala um pouco maior.
     */
    imageClassName:
      "scale-[1.08] sm:scale-[1.10] md:scale-[1.12] lg:scale-[1.14]",
  },

  {
    id: 3,
    number: "03",
    title: "Açaí do Bruxo",
    image: "/projeto03.png",

    description:
      "Projeto visual e digital criado para transformar a identidade do Açaí do Bruxo em uma experiência moderna e marcante.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX",
    ],

    rotation: 5,

    /*
     * O PNG 03 possui bastante transparência,
     * portanto precisa ser ampliado.
     */
    imageClassName:
      "scale-[1.20] sm:scale-[1.24] md:scale-[1.28] lg:scale-[1.32]",
  },
];

/* =========================================================
   COMPONENTE
========================================================= */

export default function ProjectRevealDeck() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [isAnimating, setIsAnimating] =
    useState(false);

  /* =======================================================
     SELECIONAR CARTA
  ======================================================= */

  function handleSelect(project: Project) {
    if (isAnimating) return;

    setIsAnimating(true);
    setSelectedProject(project);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 1400);
  }

  /* =======================================================
     VOLTAR
  ======================================================= */

  function handleBack() {
    if (isAnimating) return;

    setSelectedProject(null);
  }

  return (
    <section
      className="
        relative
        mx-auto
        w-full
        max-w-[1500px]
        overflow-hidden
        px-4
        pb-28
        pt-10
        sm:px-6
        md:px-8
        lg:px-10
        lg:pt-14
      "
    >
      {/* ===================================================
          LUZ CENTRAL
      ==================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.035]
          blur-[160px]
        "
      />

      <AnimatePresence mode="wait">
        {/* =================================================
            BARALHO COM AS 3 CARTAS
        ================================================== */}

        {!selectedProject && (
          <motion.div
            key="project-deck"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[650px]
              w-full
              max-w-[1180px]
              items-center
              justify-center

              gap-0

              sm:min-h-[680px]

              md:gap-0

              lg:min-h-[700px]
              lg:gap-1
            "
          >
            {projects.map((project, index) => {
              return (
                <motion.button
                  key={project.id}
                  type="button"
                  aria-label={`Revelar projeto ${project.title}`}
                  onClick={() =>
                    handleSelect(project)
                  }

                  /* =======================================
                     QUEDA INICIAL
                  ======================================== */

                  initial={{
                    opacity: 0,

                    y:
                      index === 0
                        ? -500
                        : index === 1
                          ? -650
                          : -800,

                    x:
                      index === 0
                        ? -80
                        : index === 2
                          ? 80
                          : 0,

                    rotate:
                      index === 0
                        ? -25
                        : index === 1
                          ? 8
                          : 25,

                    scale: 0.6,
                  }}

                  animate={{
                    opacity: 1,

                    x: 0,

                    y:
                      index === 1
                        ? 0
                        : 10,

                    rotate:
                      project.rotation,

                    scale: 1,
                  }}

                  transition={{
                    duration: 1.15,

                    delay:
                      0.15 +
                      index * 0.22,

                    type: "spring",

                    stiffness: 70,

                    damping: 13,
                  }}

                  /* =======================================
                     HOVER
                  ======================================== */

                  whileHover={{
                    y: -18,

                    scale: 1.04,

                    rotate:
                      project.rotation *
                      0.55,

                    zIndex: 40,

                    transition: {
                      duration: 0.3,
                    },
                  }}

                  whileTap={{
                    scale: 0.97,
                  }}

                  className={`
                    group
                    relative
                    flex
                    shrink-0
                    items-center
                    justify-center
                    border-0
                    bg-transparent
                    p-0
                    outline-none

                    h-[400px]
                    w-[33.333%]

                    sm:h-[450px]

                    md:h-[500px]

                    lg:h-[560px]
                    lg:max-w-[350px]

                    xl:h-[590px]
                    xl:max-w-[365px]

                    ${
                      index === 1
                        ? "z-20"
                        : "z-10"
                    }
                  `}
                >
                  {/* =====================================
                      BRILHO ATRÁS
                  ====================================== */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      h-[65%]
                      w-[70%]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-cyan-400/[0.06]
                      opacity-50
                      blur-[85px]
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* =====================================
                      IMAGEM DA CARTA
                  ====================================== */}

                  <img
                    src={project.image}
                    alt={`Carta do projeto ${project.title}`}
                    draggable={false}
                    className={`
                      pointer-events-none
                      block
                      h-full
                      w-full
                      select-none
                      object-contain
                      object-center
                      transition
                      duration-500
                      drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]
                      group-hover:drop-shadow-[0_25px_55px_rgba(34,211,238,0.18)]

                      ${project.imageClassName}
                    `}
                  />
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* =================================================
            PROJETO SELECIONADO
        ================================================== */}

        {selectedProject && (
          <motion.div
            key={`selected-${selectedProject.id}`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative
              z-20
              mx-auto
              flex
              min-h-[700px]
              w-full
              max-w-[1150px]
              items-center
              justify-center
            "
          >
            {/* =============================================
                CARTA ORIGINAL AUMENTANDO E SUMINDO
            ============================================== */}

            <motion.div
              initial={{
                opacity: 1,
                scale: 0.8,
                rotateY: 0,
                rotateZ:
                  selectedProject.rotation,
              }}
              animate={{
                opacity: [1, 1, 0],

                scale: [
                  0.8,
                  1.25,
                  2.3,
                ],

                rotateY: [
                  0,
                  180,
                  360,
                ],

                rotateZ: [
                  selectedProject.rotation,
                  0,
                  0,
                ],

                filter: [
                  "blur(0px)",
                  "blur(0px)",
                  "blur(18px)",
                ],
              }}
              transition={{
                duration: 1.2,

                times: [
                  0,
                  0.66,
                  1,
                ],

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                pointer-events-none
                absolute
                z-30
                flex
                h-[500px]
                w-[320px]
                items-center
                justify-center
                [transform-style:preserve-3d]

                md:h-[570px]
                md:w-[360px]
              "
            >
              <img
                src={selectedProject.image}
                alt=""
                draggable={false}
                className={`
                  h-full
                  w-full
                  select-none
                  object-contain

                  ${selectedProject.imageClassName}
                `}
              />
            </motion.div>

            {/* =============================================
                CARTA / PAINEL REVELADO
            ============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotateY: -90,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.85,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                relative
                z-20
                w-full
                max-w-[720px]
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[#05080b]/95
                shadow-[0_30px_120px_rgba(0,0,0,0.85),0_0_80px_rgba(34,211,238,0.06)]
                backdrop-blur-xl
              "
            >
              {/* ===========================================
                  LUZ
              ============================================ */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-[250px]
                  w-[75%]
                  -translate-x-1/2
                  rounded-full
                  bg-cyan-400/[0.06]
                  blur-[110px]
                "
              />

              {/* ===========================================
                  CABEÇALHO
              ============================================ */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-6
                  py-5
                  sm:px-8
                "
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.35em]
                    text-cyan-300/50
                  "
                >
                  Projeto{" "}
                  {selectedProject.number}
                </span>

                <button
                  type="button"
                  onClick={handleBack}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-5
                    py-2
                    text-xs
                    text-white/60
                    transition
                    hover:border-white/25
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  Voltar
                </button>
              </div>

              {/* ===========================================
                  CONTEÚDO
              ============================================ */}

              <div
                className="
                  relative
                  px-6
                  py-10
                  sm:px-8
                  md:px-10
                  md:py-12
                "
              >
                <p
                  className="
                    mb-4
                    text-[10px]
                    uppercase
                    tracking-[0.28em]
                    text-white/30
                  "
                >
                  Projeto selecionado
                </p>

                <h3
                  className="
                    max-w-[620px]
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-[-0.04em]
                    text-white

                    sm:text-4xl

                    md:text-5xl
                  "
                >
                  {selectedProject.title}
                </h3>

                <p
                  className="
                    mt-6
                    max-w-[620px]
                    text-sm
                    leading-7
                    text-zinc-400

                    sm:text-base
                    sm:leading-8
                  "
                >
                  {
                    selectedProject.description
                  }
                </p>

                {/* =========================================
                    TECNOLOGIAS
                ========================================== */}

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {selectedProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.025]
                          px-4
                          py-2
                          text-[9px]
                          uppercase
                          tracking-[0.15em]
                          text-white/50
                        "
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>

                {/* =========================================
                    RODAPÉ
                ========================================== */}

                <div
                  className="
                    mt-10
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/10
                    pt-6
                  "
                >
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-white/25
                    "
                  >
                    Thiago Torres
                  </span>

                  <span
                    className="
                      text-xs
                      font-medium
                      text-cyan-300/60
                    "
                  >
                    Projeto{" "}
                    {
                      selectedProject.number
                    }
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
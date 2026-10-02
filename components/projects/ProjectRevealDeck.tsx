"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { projects } from "./projectsData";

/* =========================================================
   PROJECT REVEAL DECK
========================================================= */

export default function ProjectRevealDeck() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        min-h-[460px]
        w-full
        max-w-[1050px]
        items-center
        justify-center
        overflow-visible

        sm:min-h-[520px]
        lg:min-h-[600px]
      "
    >
      {/* =====================================================
          GLOW CENTRAL
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[360px]
          w-[620px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/[0.025]

          blur-[130px]
        "
      />

      {/* =====================================================
          BARALHO
      ====================================================== */}

      <div
        className="
          relative
          h-[410px]
          w-full
          max-w-[880px]

          sm:h-[470px]
          lg:h-[540px]
        "
      >
        {projects.map((project, index) => {
          const isCenter = index === 1;

          return (
            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.9,
                rotate: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: isCenter ? 1 : 0.96,
                rotate: project.rotation,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -16,
                scale: isCenter ? 1.03 : 1,
                rotate: 0,
                zIndex: 20,
              }}
              className={`
                group
                absolute

                overflow-hidden

                rounded-[28px]

                border
                border-white/10

                bg-[#050708]

                shadow-[0_35px_100px_rgba(0,0,0,0.75)]

                transition-colors
                duration-500

                hover:border-white/20

                ${
                  index === 0
                    ? `
                      left-[2%]
                      top-[15%]
                      z-[1]

                      h-[300px]
                      w-[240px]

                      sm:left-[4%]
                      sm:h-[360px]
                      sm:w-[290px]

                      lg:left-[2%]
                      lg:h-[420px]
                      lg:w-[335px]
                    `
                    : ""
                }

                ${
                  index === 1
                    ? `
                      left-1/2
                      top-[2%]
                      z-[5]

                      h-[335px]
                      w-[260px]

                      -translate-x-1/2

                      sm:h-[400px]
                      sm:w-[315px]

                      lg:h-[480px]
                      lg:w-[370px]
                    `
                    : ""
                }

                ${
                  index === 2
                    ? `
                      right-[2%]
                      top-[15%]
                      z-[1]

                      h-[300px]
                      w-[240px]

                      sm:right-[4%]
                      sm:h-[360px]
                      sm:w-[290px]

                      lg:right-[2%]
                      lg:h-[420px]
                      lg:w-[335px]
                    `
                    : ""
                }
              `}
            >
              {/* =================================================
                  IMAGEM
              ================================================== */}

              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 1}
                  sizes="
                    (max-width: 640px) 260px,
                    (max-width: 1024px) 315px,
                    370px
                  "
                  className={`
                    object-contain
                    object-center

                    transition-transform
                    duration-700

                    group-hover:scale-[1.04]

                    ${project.imageClassName}
                  `}
                />
              </div>

              {/* =================================================
                  OVERLAY
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t

                  from-black
                  via-black/15
                  to-transparent
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  bg-gradient-to-r

                  from-black/20
                  via-transparent
                  to-black/20
                "
              />

              {/* =================================================
                  CONTEÚDO DA CARTA
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
                <div className="flex items-center gap-2">
                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.32em]
                      text-cyan-300/70
                    "
                  >
                    Projeto {project.number}
                  </span>

                  <span className="h-px w-7 bg-cyan-300/25" />
                </div>

                <p
                  className="
                    mt-3
                    text-[9px]
                    uppercase
                    tracking-[0.22em]
                    text-white/35
                  "
                >
                  {project.subtitle}
                </p>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-semibold
                    leading-tight
                    tracking-[-0.035em]
                    text-white

                    sm:text-2xl
                  "
                >
                  {project.title}
                </h3>
              </div>

              {/* =================================================
                  GLOW INFERIOR
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  bottom-[-80px]
                  left-1/2

                  h-[150px]
                  w-[80%]

                  -translate-x-1/2

                  rounded-full

                  bg-cyan-400/[0.035]

                  blur-[65px]
                "
              />

              {/* =================================================
                  LINHA SUPERIOR
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  left-[15%]
                  right-[15%]
                  top-0

                  h-px

                  bg-gradient-to-r

                  from-transparent
                  via-white/20
                  to-transparent
                "
              />
            </motion.article>
          );
        })}
      </div>

      {/* =====================================================
          TEXTO INFERIOR
      ====================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          bottom-1
          left-1/2

          -translate-x-1/2

          whitespace-nowrap

          font-mono

          text-[8px]
          uppercase

          tracking-[0.42em]

          text-white/15
        "
      >
        Select_Project
      </div>
    </div>
  );
}
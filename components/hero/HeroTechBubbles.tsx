"use client";

import { motion } from "framer-motion";

import {
  heroTechData,
  type HeroTechnology,
} from "./heroTechData";

type HeroTechBubblesProps = {
  mobile?: boolean;
  selectedTechnology?: HeroTechnology | null;
  onSelectTechnology?: (
    technology: HeroTechnology,
  ) => void;
};

type DesktopBubbleProps = {
  tech: HeroTechnology;
  index: number;
  selectedTechnology?: HeroTechnology | null;
  onSelectTechnology?: (
    technology: HeroTechnology,
  ) => void;
};

type MobileTechListProps = {
  tech: HeroTechnology;
  index: number;
  selectedTechnology?: HeroTechnology | null;
  onSelectTechnology?: (
    technology: HeroTechnology,
  ) => void;
};

/* =========================================================
   DESKTOP BUBBLE
========================================================= */

function DesktopBubble({
  tech,
  index,
  selectedTechnology,
  onSelectTechnology,
}: DesktopBubbleProps) {
  const active =
    selectedTechnology?.id === tech.id;

  return (
    <motion.button
      type="button"
      aria-label={`Abrir ${tech.name}`}
      onClick={() =>
        onSelectTechnology?.(tech)
      }
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 14,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: tech.float.x,
        y: tech.float.y,
        rotate: tech.float.rotate,
      }}
      transition={{
        opacity: {
          duration: 0.45,
          delay: index * 0.08,
        },

        scale: {
          duration: 0.45,
          delay: index * 0.08,
        },

        x: {
          duration: tech.float.duration,
          delay: tech.float.delay,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },

        y: {
          duration:
            tech.float.duration + 0.8,
          delay: tech.float.delay,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },

        rotate: {
          duration:
            tech.float.duration + 1.2,
          delay: tech.float.delay,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.055,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`
        pointer-events-auto
        absolute
        ${tech.desktopPosition}
        group
        z-30

        h-[88px]
        w-[88px]

        rounded-[28px]

        focus:outline-none

        xl:h-[96px]
        xl:w-[96px]
      `}
    >
      {/* GLOW EXTERNO */}

      <motion.div
        aria-hidden="true"
        className="
          absolute
          -inset-[20px]
          rounded-[45px]
          blur-[24px]
        "
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(255, 90, 90, 0.38) 0%,
              rgba(255, 50, 50, 0.28) 28%,
              rgba(255, 25, 25, 0.18) 48%,
              rgba(255, 0, 0, 0.08) 68%,
              rgba(255, 0, 0, 0.00) 100%
            )
          `,
        }}
        animate={{
          scale: active
            ? [
                1,
                1.09,
                1.035,
                1.085,
                1,
              ]
            : [
                1,
                1.065,
                1.025,
                1.07,
                1,
              ],

          opacity: active
            ? [
                0.9,
                1,
                0.94,
                1,
                0.9,
              ]
            : [
                0.76,
                0.9,
                0.82,
                0.92,
                0.76,
              ],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GLOW MÉDIO */}

      <motion.div
        aria-hidden="true"
        className="
          absolute
          -inset-[11px]
          rounded-[37px]
          blur-[13px]
        "
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(255, 120, 120, 0.44) 0%,
              rgba(255, 65, 65, 0.34) 36%,
              rgba(255, 25, 25, 0.20) 62%,
              rgba(255, 0, 0, 0.00) 100%
            )
          `,
        }}
        animate={{
          scale: active
            ? [
                1,
                1.065,
                1.025,
                1.06,
                1,
              ]
            : [
                1,
                1.045,
                1.018,
                1.05,
                1,
              ],

          opacity: active
            ? [
                0.94,
                1,
                0.96,
                1,
                0.94,
              ]
            : [
                0.82,
                0.95,
                0.87,
                0.96,
                0.82,
              ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CONTORNO QUENTE */}

      <motion.div
        aria-hidden="true"
        className="
          absolute
          -inset-[4px]
          rounded-[32px]
          border
          border-red-300/80
        "
        style={{
          boxShadow: active
            ? `
              0 0 5px rgba(255, 235, 235, 0.98),
              0 0 10px rgba(255, 130, 130, 0.98),
              0 0 18px rgba(255, 55, 55, 0.92),
              0 0 30px rgba(255, 25, 25, 0.70),
              0 0 48px rgba(255, 0, 0, 0.40)
            `
            : `
              0 0 4px rgba(255, 225, 225, 0.88),
              0 0 9px rgba(255, 110, 110, 0.88),
              0 0 16px rgba(255, 50, 50, 0.78),
              0 0 27px rgba(255, 20, 20, 0.58),
              0 0 42px rgba(255, 0, 0, 0.32)
            `,
        }}
        animate={{
          scale: active
            ? [
                1,
                1.025,
                1.012,
                1.028,
                1,
              ]
            : [
                1,
                1.018,
                1.009,
                1.02,
                1,
              ],

          opacity: active
            ? [
                0.96,
                1,
                0.98,
                1,
                0.96,
              ]
            : [
                0.9,
                0.98,
                0.93,
                0.99,
                0.9,
              ],
        }}
        transition={{
          duration: 2.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SEGUNDO CONTORNO */}

      <motion.div
        aria-hidden="true"
        className="
          absolute
          -inset-[1px]
          rounded-[29px]
          border
          border-red-200/65
        "
        animate={{
          opacity: active
            ? [
                0.82,
                1,
                0.88,
                1,
                0.82,
              ]
            : [
                0.7,
                0.88,
                0.76,
                0.9,
                0.7,
              ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: `
            0 0 6px rgba(255, 160, 160, 0.50),
            inset 0 0 6px rgba(255, 100, 100, 0.18)
          `,
        }}
      />

      {/* CORPO DO BALÃO */}

      <div
        className={`
          relative
          z-10

          h-full
          w-full

          overflow-hidden
          rounded-[28px]
          border

          bg-[#06080d]/95
          backdrop-blur-md

          transition
          duration-300

          ${
            active
              ? "border-red-200/80"
              : "border-red-400/45"
          }
        `}
        style={{
          boxShadow: active
            ? `
              inset 0 0 0 1px rgba(255,255,255,0.07),
              inset 0 0 14px rgba(255,70,70,0.12)
            `
            : `
              inset 0 0 0 1px rgba(255,255,255,0.04),
              inset 0 0 10px rgba(255,60,60,0.08)
            `,
        }}
      >
        {/* SOMENTE ÍCONE DA TECNOLOGIA */}

        <img
          src={tech.image}
          alt={tech.alt}
          draggable={false}
          className="
            absolute
            inset-0

            h-full
            w-full

            select-none
            object-cover

            transition
            duration-500

            group-hover:scale-[1.025]
          "
        />

        {/* REFLEXO */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-br
            from-white/[0.11]
            via-transparent
            to-transparent
          "
        />

        {/* PROFUNDIDADE */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0

            bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.18)_100%)]
          "
        />
      </div>
    </motion.button>
  );
}

/* =========================================================
   MOBILE CARD
========================================================= */

function MobileTechList({
  tech,
  index,
  selectedTechnology,
  onSelectTechnology,
}: MobileTechListProps) {
  const active =
    selectedTechnology?.id === tech.id;

  return (
    <motion.button
      type="button"
      aria-label={`Abrir ${tech.name}`}
      onClick={() =>
        onSelectTechnology?.(tech)
      }
      initial={{
        opacity: 0,
        y: 14,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`
        relative
        flex
        items-center
        gap-3

        rounded-2xl
        border

        bg-[#05070c]/90

        px-3
        py-3

        text-left

        backdrop-blur-md

        transition
        duration-300

        ${
          active
            ? "border-red-300/60"
            : "border-red-500/20"
        }
      `}
    >
      {/* GLOW */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute

          left-[10px]
          top-1/2

          h-[58px]
          w-[58px]

          -translate-y-1/2

          rounded-[20px]

          bg-red-500/20
          blur-[13px]
        "
        animate={{
          scale: [
            1,
            1.06,
            1.02,
            1.065,
            1,
          ],

          opacity: [
            0.7,
            0.9,
            0.78,
            0.92,
            0.7,
          ],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ÍCONE */}

      <div
        className="
          relative

          h-12
          w-12
          shrink-0

          overflow-hidden

          rounded-xl
          border
          border-red-400/35

          bg-black
        "
        style={{
          boxShadow: `
            0 0 6px rgba(255,90,90,0.55),
            0 0 14px rgba(255,30,30,0.30)
          `,
        }}
      >
        <img
          src={tech.image}
          alt={tech.alt}
          draggable={false}
          className="
            absolute
            inset-0

            h-full
            w-full

            select-none
            object-cover

            rounded-xl
          "
        />
      </div>

      {/* TEXTO */}

      <div className="relative z-10">
        <p className="text-sm font-semibold text-white">
          {tech.name}
        </p>

        <p className="mt-0.5 text-xs text-zinc-500">
          Toque para abrir
        </p>
      </div>
    </motion.button>
  );
}

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function HeroTechBubbles({
  mobile = false,
  selectedTechnology,
  onSelectTechnology,
}: HeroTechBubblesProps) {
  /*
   * MOBILE:
   * somente os cards das tecnologias.
   *
   * NÃO existe imagem do personagem aqui.
   */
  if (mobile) {
    return (
      <div
        className="
          mt-6
          grid
          grid-cols-2
          gap-3
          lg:hidden
        "
      >
        {heroTechData.map(
          (tech, index) => (
            <MobileTechList
              key={tech.id}
              tech={tech}
              index={index}
              selectedTechnology={
                selectedTechnology
              }
              onSelectTechnology={
                onSelectTechnology
              }
            />
          ),
        )}
      </div>
    );
  }

  /*
   * DESKTOP:
   * somente os balões.
   *
   * NÃO existe imagem do personagem aqui.
   */
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-20
        hidden
        lg:block
      "
    >
      <div
        className="
          absolute

          left-[2%]
          top-[6%]

          h-[86%]
          w-[44%]

          xl:left-[3%]
          xl:w-[48%]

          2xl:w-[50%]
        "
      >
        {heroTechData.map(
          (tech, index) => (
            <DesktopBubble
              key={tech.id}
              tech={tech}
              index={index}
              selectedTechnology={
                selectedTechnology
              }
              onSelectTechnology={
                onSelectTechnology
              }
            />
          ),
        )}
      </div>
    </div>
  );
}
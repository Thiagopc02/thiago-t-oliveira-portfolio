import {
  Braces,
  Code2,
  Database,
  Flame,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  TerminalSquare,
  Wind,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type {
  Technology,
  TechnologyIcon,
} from "./technologiesData";

/* =========================================================
   MAPA DOS ÍCONES
========================================================= */

const iconMap: Record<TechnologyIcon, LucideIcon> = {
  braces: Braces,
  code: Code2,
  layers: Layers3,
  globe: Globe2,
  server: Server,
  terminal: TerminalSquare,
  wind: Wind,
  flame: Flame,
  database: Database,
  workflow: Workflow,
  zap: Zap,
  git: GitBranch,
};

type TechnologyCardProps = {
  technology: Technology;
};

export default function TechnologyCard({
  technology,
}: TechnologyCardProps) {
  const Icon = iconMap[technology.icon];

  return (
    <article
      className="
        group
        relative
        flex
        min-h-[285px]
        flex-col
        overflow-hidden

        border
        border-white/10

        bg-white/[0.02]

        p-6

        transition-all
        duration-500

        hover:border-cyan-300/20
        hover:bg-white/[0.04]

        sm:min-h-[300px]
        sm:p-7
      "
    >
      {/* =====================================================
          GLOW SUPERIOR
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16

          h-44
          w-44

          rounded-full

          bg-cyan-400/[0.025]

          blur-[70px]

          transition-all
          duration-700

          group-hover:bg-cyan-400/[0.05]
        "
      />

      {/* =====================================================
          ÍCONE PEQUENO
      ====================================================== */}

      <div
        className="
          relative
          z-20

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-2xl

          border
          border-white/10

          bg-white/[0.025]

          text-white/45

          transition-all
          duration-500

          group-hover:border-cyan-300/25
          group-hover:bg-cyan-300/[0.035]
          group-hover:text-cyan-100
        "
      >
        <Icon size={20} strokeWidth={1.5} />
      </div>

      {/* =====================================================
          BONECO 3D
      ====================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          right-2
          top-0
          z-30

          h-[125px]
          w-[125px]

          sm:right-3
          sm:h-[140px]
          sm:w-[140px]

          lg:h-[145px]
          lg:w-[145px]
        "
      >
        <div className="technology-mascot relative h-full w-full">
          <img
            src={technology.image}
            alt={`Mascote 3D ${technology.name}`}
            draggable={false}
            className="
              h-full
              w-full

              select-none
              object-contain

              drop-shadow-[0_12px_22px_rgba(0,0,0,0.55)]

              transition-transform
              duration-500

              group-hover:scale-[1.08]
            "
          />
        </div>
      </div>

      {/* =====================================================
          NÍVEL
      ====================================================== */}

      <div className="relative z-20 mt-5">
        <span
          className="
            inline-flex

            rounded-full

            border
            border-white/[0.07]

            bg-black/20

            px-2.5
            py-1

            text-[7px]
            uppercase
            tracking-[0.16em]

            text-white/20

            backdrop-blur-sm

            transition-all
            duration-500

            group-hover:border-cyan-300/15
            group-hover:text-white/35
          "
        >
          {technology.level}
        </span>
      </div>

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div
        className="
          relative
          z-20

          mt-auto

          max-w-[88%]
        "
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.22em]
            text-white/25
          "
        >
          {technology.category}
        </p>

        <h3
          className="
            mt-3

            text-2xl
            font-medium

            tracking-[-0.03em]

            text-white
          "
        >
          {technology.name}
        </h3>

        <p
          className="
            mt-4

            text-sm
            leading-6

            text-white/40
          "
        >
          {technology.description}
        </p>
      </div>

      {/* =====================================================
          GLOW INFERIOR
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -bottom-24
          -right-24

          h-48
          w-48

          rounded-full

          bg-white/[0.02]

          blur-3xl

          transition-all
          duration-700

          group-hover:bg-cyan-300/[0.035]
        "
      />

      {/* =====================================================
          LINHA SUPERIOR
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[15%]
          top-0

          h-px
          w-[42%]

          bg-gradient-to-r
          from-transparent
          via-cyan-200/0
          to-transparent

          transition-all
          duration-700

          group-hover:via-cyan-200/30
        "
      />
    </article>
  );
}
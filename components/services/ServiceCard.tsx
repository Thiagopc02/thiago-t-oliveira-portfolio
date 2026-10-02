import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  active?: boolean;
  compact?: boolean;
};

export default function ServiceCard({
  number,
  title,
  description,
  technologies,
  image,
  active = false,
  compact = false,
}: ServiceCardProps) {
  return (
    <article
      className={`
        group
        relative
        flex
        w-full
        flex-col
        overflow-hidden
        rounded-[28px]

        transition-all
        duration-500

        ${
          compact
            ? `
              min-h-[250px]
              p-5

              sm:min-h-[270px]
              sm:p-6
            `
            : `
              min-h-[360px]
              p-7

              sm:min-h-[390px]
              sm:p-8
            `
        }
      `}
    >
      {/* =====================================================
          BORDA LUMINOSA GIRATÓRIA
          SOMENTE NO CARD ATIVO
      ====================================================== */}

      {active && (
        <>
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -inset-[70%]

              animate-spin

              bg-[conic-gradient(from_0deg,transparent_0deg,transparent_40deg,rgba(34,211,238,0.15)_70deg,rgba(34,211,238,1)_100deg,rgba(59,130,246,1)_125deg,rgba(34,211,238,0.25)_155deg,transparent_190deg,transparent_260deg,rgba(59,130,246,0.9)_310deg,transparent_360deg)]

              blur-[10px]
            "
            style={{
              animationDuration: "4s",
            }}
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -inset-[65%]

              animate-spin

              bg-[conic-gradient(from_0deg,transparent_0deg,transparent_55deg,#22d3ee_90deg,#3b82f6_115deg,transparent_155deg,transparent_260deg,#22d3ee_305deg,transparent_350deg)]
            "
            style={{
              animationDuration: "4s",
            }}
          />
        </>
      )}

      {/* =====================================================
          FUNDO INTERNO
      ====================================================== */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-[1.5px]
          rounded-[27px]

          transition-all
          duration-500

          ${
            active
              ? `
                bg-[#050a0d]
                shadow-[inset_0_0_35px_rgba(34,211,238,0.035)]
              `
              : `
                border
                border-white/10
                bg-white/[0.02]
              `
          }
        `}
      />

      {/* =====================================================
          GLOW DO CARD ATIVO
      ====================================================== */}

      {active && (
        <>
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2

              h-[230px]
              w-[230px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-cyan-400/[0.06]

              blur-[85px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[-45px]
              top-[-45px]

              h-[180px]
              w-[180px]

              rounded-full

              bg-blue-500/[0.05]

              blur-[70px]
            "
          />
        </>
      )}

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-1
          flex-col
        "
      >
        {/* ===================================================
            TOPO
        ==================================================== */}

        <div className="flex items-start justify-between gap-4">
          <span
            className={`
              relative
              z-20

              font-mono
              text-[10px]
              uppercase
              tracking-[0.22em]

              transition-colors
              duration-500

              ${
                active
                  ? "text-cyan-300/55"
                  : "text-white/20"
              }
            `}
          >
            {compact
              ? `SERVICE_${number}`
              : number}
          </span>

          {/* =================================================
              IMAGEM 3D
          ================================================== */}

          <div
            className={`
              relative
              flex
              shrink-0
              items-center
              justify-center

              transition-all
              duration-700

              ${
                compact
                  ? `
                    h-[74px]
                    w-[74px]
                  `
                  : `
                    h-[100px]
                    w-[100px]

                    sm:h-[112px]
                    sm:w-[112px]
                  `
              }

              ${
                active
                  ? `
                    scale-100
                    opacity-100
                  `
                  : `
                    scale-[0.88]
                    opacity-55
                  `
              }
            `}
          >
            {/* aura atrás da imagem */}

            {active && (
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2

                  h-[90%]
                  w-[90%]

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full

                  bg-cyan-400/[0.12]

                  blur-[28px]
                "
              />
            )}

            {/* círculo discreto */}

            <div
              aria-hidden="true"
              className={`
                pointer-events-none
                absolute
                inset-[10%]

                rounded-full

                border

                transition-all
                duration-500

                ${
                  active
                    ? `
                      border-cyan-300/15
                      bg-cyan-300/[0.025]
                    `
                    : `
                      border-white/[0.04]
                      bg-white/[0.01]
                    `
                }
              `}
            />

            <Image
              src={image}
              alt=""
              fill
              sizes={
                compact
                  ? "74px"
                  : "(max-width: 640px) 100px, 112px"
              }
              className={`
                relative
                z-10

                select-none
                object-contain

                transition-all
                duration-700

                ${
                  active
                    ? `
                      drop-shadow-[0_0_20px_rgba(34,211,238,0.22)]
                    `
                    : `
                      saturate-[0.65]
                      brightness-[0.72]
                    `
                }
              `}
            />
          </div>
        </div>

        {/* ===================================================
            CONTEÚDO INFERIOR
        ==================================================== */}

        <div className="mt-auto">
          <h3
            className={`
              font-medium
              tracking-[-0.035em]

              transition-colors
              duration-500

              ${
                compact
                  ? `
                    text-[21px]
                    leading-[1.08]
                  `
                  : `
                    text-2xl
                  `
              }

              ${
                active
                  ? "text-white"
                  : "text-white/70"
              }
            `}
          >
            {title}
          </h3>

          <p
            className={`
              mt-4

              transition-colors
              duration-500

              ${
                compact
                  ? `
                    text-[13px]
                    leading-6
                  `
                  : `
                    text-sm
                    leading-6
                  `
              }

              ${
                active
                  ? "text-white/50"
                  : "text-white/35"
              }
            `}
          >
            {description}
          </p>

          {/* =================================================
              TECNOLOGIAS
          ================================================== */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >
            {technologies.map((technology) => (
              <span
                key={technology}
                className={`
                  rounded-full
                  border

                  px-3
                  py-1.5

                  text-[9px]
                  uppercase
                  tracking-[0.12em]

                  transition-all
                  duration-500

                  ${
                    active
                      ? `
                        border-white/12
                        bg-white/[0.02]
                        text-white/45
                      `
                      : `
                        border-white/[0.07]
                        text-white/25
                      `
                  }
                `}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          SETA DO CARD
      ====================================================== */}

      <ArrowUpRight
        aria-hidden="true"
        size={18}
        className={`
          absolute
          bottom-6
          right-6
          z-20

          transition-all
          duration-500

          ${
            active
              ? `
                translate-y-0
                text-cyan-200/65
              `
              : `
                translate-y-2
                text-transparent
              `
          }
        `}
      />

      {/* =====================================================
          REFLEXO SUPERIOR
      ====================================================== */}

      {active && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[18%]
            top-[1px]
            z-20

            h-px
            w-[38%]

            bg-gradient-to-r
            from-transparent
            via-cyan-100/80
            to-transparent

            blur-[0.5px]
          "
        />
      )}

      {/* =====================================================
          REFLEXO VERTICAL DISCRETO
      ====================================================== */}

      {active && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[1px]
            top-[22%]

            h-[34%]
            w-px

            bg-gradient-to-b
            from-transparent
            via-cyan-300/35
            to-transparent

            blur-[0.5px]
          "
        />
      )}
    </article>
  );
}
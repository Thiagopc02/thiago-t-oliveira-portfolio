const stats = [
  {
    number: "01",
    value: "3+",
    label: "Projetos completos",
  },
  {
    number: "02",
    value: "6+",
    label: "Tecnologias principais",
  },
  {
    number: "03",
    value: "100%",
    label: "Responsivo",
  },
  {
    number: "04",
    value: "Full Stack",
    label: "Desenvolvimento",
  },
];

export default function AboutStats() {
  return (
    <section
      className="
        relative
        mt-16
        w-full
        overflow-hidden
        bg-black

        sm:mt-20
        lg:mt-24
      "
    >
      <div
        className="
          ticker-shell
          relative
          w-full
          overflow-hidden

          bg-white/[0.012]
        "
      >
        {/* =====================================================
            BORDA LUMINOSA SUPERIOR
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            ticker-light
            ticker-light-top
            pointer-events-none
            absolute
            left-0
            top-0
            z-30

            h-px
            w-full
          "
        />

        {/* =====================================================
            BORDA LUMINOSA INFERIOR
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            ticker-light
            ticker-light-bottom
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-30

            h-px
            w-full
          "
        />

        {/* =====================================================
            GLOW SUPERIOR
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            ticker-glow
            ticker-glow-top
            pointer-events-none
            absolute
            left-0
            top-[-8px]
            z-20

            h-[16px]
            w-full

            blur-[10px]
          "
        />

        {/* =====================================================
            GLOW INFERIOR
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            ticker-glow
            ticker-glow-bottom
            pointer-events-none
            absolute
            bottom-[-8px]
            left-0
            z-20

            h-[16px]
            w-full

            blur-[10px]
          "
        />

        {/* =====================================================
            SOMBRA ESQUERDA
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-16

            bg-gradient-to-r
            from-black
            via-black/85
            to-transparent

            sm:w-24
            lg:w-32
          "
        />

        {/* =====================================================
            SOMBRA DIREITA
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-16

            bg-gradient-to-l
            from-black
            via-black/85
            to-transparent

            sm:w-24
            lg:w-32
          "
        />

        {/* =====================================================
            LUZ CENTRAL
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2

            h-16
            w-[420px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-cyan-400/[0.035]

            blur-[60px]
          "
        />

        {/* =====================================================
            TICKER
        ====================================================== */}

        <div
          className="
            ticker-window
            relative
            z-10
            flex
            w-full
            overflow-hidden
          "
        >
          <div
            className="
              ticker-track
              flex
              min-w-max
              items-center
            "
          >
            <div className="flex shrink-0 items-center">
              {stats.map((stat) => (
                <TickerItem
                  key={`first-${stat.number}`}
                  number={stat.number}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            <div
              aria-hidden="true"
              className="flex shrink-0 items-center"
            >
              {stats.map((stat) => (
                <TickerItem
                  key={`second-${stat.number}`}
                  number={stat.number}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          /* ==================================================
             MOVIMENTO DO CONTEÚDO
          ================================================== */

          .ticker-track {
            animation: aboutStatsTicker 22s linear infinite;
            will-change: transform;
          }

          .ticker-window:hover .ticker-track {
            animation-play-state: paused;
          }

          @keyframes aboutStatsTicker {
            from {
              transform: translate3d(0, 0, 0);
            }

            to {
              transform: translate3d(-50%, 0, 0);
            }
          }

          /* ==================================================
             BORDA NEON
          ================================================== */

          .ticker-light {
            background:
              linear-gradient(
                90deg,
                transparent 0%,
                transparent 20%,
                rgba(34, 211, 238, 0.10) 30%,
                rgba(34, 211, 238, 0.55) 42%,
                rgba(103, 232, 249, 1) 50%,
                rgba(34, 211, 238, 0.55) 58%,
                rgba(34, 211, 238, 0.10) 70%,
                transparent 80%,
                transparent 100%
              );

            background-size: 220% 100%;

            animation:
              tickerBorderMove 5s linear infinite;

            opacity: 0.9;
          }

          .ticker-light-top {
            box-shadow:
              0 0 4px rgba(34, 211, 238, 0.50),
              0 0 10px rgba(34, 211, 238, 0.18);
          }

          .ticker-light-bottom {
            box-shadow:
              0 0 4px rgba(34, 211, 238, 0.45),
              0 0 10px rgba(34, 211, 238, 0.16);
          }

          /* ==================================================
             GLOW QUE ACOMPANHA A BORDA
          ================================================== */

          .ticker-glow {
            background:
              linear-gradient(
                90deg,
                transparent 0%,
                transparent 26%,
                rgba(34, 211, 238, 0.04) 34%,
                rgba(34, 211, 238, 0.22) 48%,
                rgba(34, 211, 238, 0.38) 52%,
                rgba(34, 211, 238, 0.12) 66%,
                transparent 76%,
                transparent 100%
              );

            background-size: 220% 100%;

            animation:
              tickerBorderMove 5s linear infinite;

            opacity: 0.7;
          }

          @keyframes tickerBorderMove {
            from {
              background-position: 120% 0;
            }

            to {
              background-position: -120% 0;
            }
          }

          /* ==================================================
             HOVER

             Para tudo ao mesmo tempo.
          ================================================== */

          .ticker-shell:hover .ticker-light,
          .ticker-shell:hover .ticker-glow {
            animation-play-state: paused;
          }

          /* ==================================================
             MOBILE
          ================================================== */

          @media (max-width: 767px) {
            .ticker-track {
              animation-duration: 16s;
            }

            .ticker-light,
            .ticker-glow {
              animation-duration: 4s;
            }
          }

          /* ==================================================
             ACESSIBILIDADE
          ================================================== */

          @media (prefers-reduced-motion: reduce) {
            .ticker-track,
            .ticker-light,
            .ticker-glow {
              animation: none;
            }
          }
        `}
      </style>
    </section>
  );
}

/* =========================================================
   ITEM
========================================================= */

type TickerItemProps = {
  number: string;
  value: string;
  label: string;
};

function TickerItem({
  number,
  value,
  label,
}: TickerItemProps) {
  return (
    <div
      className="
        group
        flex
        h-[58px]
        shrink-0
        items-center

        border-r
        border-white/[0.08]

        px-6

        sm:h-[62px]
        sm:px-8

        lg:px-10
      "
    >
      <span
        className="
          mr-3
          font-mono
          text-[8px]
          font-medium
          tracking-[0.24em]
          text-cyan-300/45

          sm:text-[9px]
        "
      >
        {number}
      </span>

      <span
        className="
          whitespace-nowrap

          text-[16px]
          font-semibold
          tracking-[-0.03em]
          text-white

          sm:text-[17px]
          lg:text-[18px]
        "
      >
        {value}
      </span>

      <span
        aria-hidden="true"
        className="
          mx-4
          h-1
          w-1
          shrink-0
          rounded-full

          bg-cyan-300

          shadow-[0_0_10px_rgba(34,211,238,0.85)]
        "
      />

      <span
        className="
          whitespace-nowrap

          font-mono
          text-[8px]
          uppercase
          tracking-[0.2em]
          text-white/30

          transition-colors
          duration-300

          group-hover:text-white/55

          sm:text-[9px]
        "
      >
        {label}
      </span>
    </div>
  );
}
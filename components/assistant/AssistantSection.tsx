const rainColumns = [
  { left: "2%", duration: "12s", delay: "0s" },
  { left: "8%", duration: "10s", delay: "1s" },
  { left: "14%", duration: "11s", delay: "2s" },
  { left: "20%", duration: "13s", delay: "0.5s" },
  { left: "27%", duration: "9.5s", delay: "1.5s" },
  { left: "34%", duration: "12.5s", delay: "0.2s" },
  { left: "41%", duration: "10.5s", delay: "2.2s" },
  { left: "48%", duration: "11.8s", delay: "0.8s" },
  { left: "55%", duration: "9.8s", delay: "1.2s" },
  { left: "62%", duration: "12.8s", delay: "0.4s" },
  { left: "69%", duration: "10.2s", delay: "2.4s" },
  { left: "76%", duration: "11.2s", delay: "0.9s" },
  { left: "83%", duration: "13.5s", delay: "1.6s" },
  { left: "90%", duration: "10.8s", delay: "0.3s" },
  { left: "96%", duration: "12.2s", delay: "2.1s" },
];

const codeWords = [
  { text: "const", color: "text-purple-400/65" },
  { text: "async", color: "text-purple-400/65" },
  { text: "await", color: "text-purple-400/65" },

  { text: "function()", color: "text-blue-400/65" },
  { text: "return", color: "text-blue-400/65" },
  { text: "useState()", color: "text-blue-400/65" },

  { text: "Python", color: "text-yellow-300/70" },
  { text: "FastAPI", color: "text-green-300/70" },
  { text: "Next.js", color: "text-white/55" },

  { text: "React", color: "text-cyan-300/75" },
  { text: "TypeScript", color: "text-blue-300/70" },
  { text: "JavaScript", color: "text-yellow-300/70" },

  { text: "Firebase", color: "text-orange-400/70" },
  { text: "Firestore", color: "text-orange-300/65" },

  { text: "Node.js", color: "text-green-400/65" },
  { text: "REST API", color: "text-cyan-300/65" },

  { text: "Git", color: "text-orange-500/65" },
  { text: "GitHub", color: "text-purple-300/65" },

  { text: "user", color: "text-cyan-200/55" },
  { text: "request", color: "text-white/45" },
  { text: "response", color: "text-white/45" },

  { text: "database", color: "text-green-300/60" },
  { text: "server", color: "text-cyan-300/60" },

  { text: "whatsapp", color: "text-green-400/70" },
  { text: "instagram", color: "text-pink-400/70" },
  { text: "linkedin", color: "text-blue-400/70" },

  { text: "portfolio", color: "text-purple-300/55" },
  { text: "projects", color: "text-cyan-300/60" },
  { text: "services", color: "text-blue-300/60" },

  { text: "{ }", color: "text-yellow-200/60" },
  { text: "< />", color: "text-pink-300/60" },
  { text: "=>", color: "text-purple-300/60" },

  { text: "true", color: "text-green-300/70" },
  { text: "false", color: "text-red-300/65" },

  { text: "npm run dev", color: "text-green-300/55" },
  { text: "git push", color: "text-orange-300/60" },

  { text: "build()", color: "text-cyan-300/60" },
  { text: "deploy()", color: "text-green-300/60" },

  { text: "AI.SYSTEM", color: "text-cyan-200/70" },
  { text: "assistant()", color: "text-purple-300/65" },

  { text: "navigate()", color: "text-blue-300/65" },
  { text: "open()", color: "text-green-300/65" },
  { text: "help()", color: "text-yellow-300/65" },

  { text: "010101", color: "text-cyan-400/45" },
  { text: "101010", color: "text-cyan-400/45" },
];

function getWord(columnIndex: number, wordIndex: number) {
  return codeWords[
    (columnIndex * 7 + wordIndex * 3) % codeWords.length
  ];
}

export default function AssistantSection() {
  return (
    <section
      id="assistente"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-black
      "
    >
      {/* =====================================================
          CHUVA DE CÓDIGOS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {rainColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="
              assistant-rain-column
              absolute
              top-[-50%]
              flex
              flex-col
              gap-5
              whitespace-nowrap
              font-mono
              text-[10px]
              font-medium
              tracking-[0.12em]
              sm:text-[11px]
            "
            style={{
              left: column.left,
              animationDuration: column.duration,
              animationDelay: column.delay,
            }}
          >
            {Array.from({ length: 38 }).map((_, wordIndex) => {
              const word = getWord(columnIndex, wordIndex);

              return (
                <span
                  key={wordIndex}
                  className={word.color}
                >
                  {word.text}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      {/* =====================================================
          ESCURECIMENTO CENTRAL
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.42)_42%,rgba(0,0,0,0.12)_76%,transparent_100%)]
        "
      />

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

          h-[520px]
          w-[820px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/[0.035]

          blur-[150px]
        "
      />

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          max-w-[1450px]

          px-5
          py-24

          sm:px-8
          sm:py-28

          lg:px-10
          lg:py-32
        "
      >
        {/* ===================================================
            LABEL
        ==================================================== */}

        <div className="mb-8">
          <span
            className="
              font-mono

              text-[10px]

              font-medium

              uppercase

              tracking-[0.4em]

              text-cyan-300/75
            "
          >
            06 — Assistente IA
          </span>
        </div>

        {/* ===================================================
            BALÃO PRINCIPAL
        ==================================================== */}

        <div
          className="
            relative

            mx-auto

            flex

            min-h-[390px]

            w-full
            max-w-[1380px]

            items-center
            justify-center

            overflow-hidden

            rounded-[34px]

            border
            border-cyan-400/25

            bg-black/60

            px-6
            py-14

            text-center

            shadow-[0_0_0_1px_rgba(255,255,255,0.025),0_0_55px_rgba(34,211,238,0.045)]

            backdrop-blur-[3px]

            sm:min-h-[460px]
            sm:px-10

            lg:min-h-[540px]
            lg:px-16
          "
        >
          {/* fundo interno */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.025),transparent_58%)]
            "
          />

          {/* linha superior luminosa */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[15%]
              top-0

              h-px
              w-[70%]

              bg-gradient-to-r
              from-transparent
              via-cyan-300/30
              to-transparent
            "
          />

          {/* =================================================
              RABINHO DO BALÃO
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[-18px]
              left-14

              h-12
              w-12

              rotate-45

              rounded-[10px]

              border-r
              border-b
              border-cyan-400/25

              bg-black/80
            "
          />

          {/* =================================================
              TEXTO CENTRAL
          ================================================== */}

          <div
            className="
              relative
              z-10

              mx-auto

              w-full
              max-w-[1040px]
            "
          >
            <p
              className="
                mb-7

                font-mono

                text-[10px]

                uppercase

                tracking-[0.42em]

                text-cyan-300/85

                sm:text-xs
              "
            >
              AI.SYSTEM.ONLINE
            </p>

            {/* TÍTULO */}

            <h2
              className="
                assistant-title-3d

                text-4xl

                font-black

                uppercase

                leading-[0.96]

                tracking-[-0.05em]

                sm:text-5xl

                md:text-6xl

                lg:text-[78px]

                xl:text-[92px]
              "
            >
              NÃO TENHA MEDO DA IA !
            </h2>

            {/* SUBTÍTULO */}

            <p
              className="
                mx-auto

                mt-8

                max-w-[920px]

                text-base
                leading-8

                text-white/72

                sm:text-lg

                md:text-xl

                lg:text-[26px]
                lg:leading-[1.55]
              "
            >
              Estou aqui para te ajudar em qualquer coisa aqui dentro da
              plataforma, basta me falar.
            </p>

            {/* =================================================
                CAMPO ESTILO GOOGLE
            ================================================== */}

            <div
              className="
                mx-auto

                mt-12

                flex

                w-full
                max-w-[760px]

                items-center

                gap-4

                rounded-full

                border
                border-white/10

                bg-[#0a0a0a]/90

                px-5
                py-4

                text-left

                shadow-[0_8px_30px_rgba(0,0,0,0.45)]

                backdrop-blur-md

                transition
                duration-300

                hover:border-cyan-300/25

                sm:px-6
                sm:py-5
              "
            >
              {/* LUPA */}

              <div className="shrink-0 text-white/55">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>

              {/* TEXTO DO CAMPO */}

              <span
                className="
                  flex-1

                  text-sm

                  text-white/50

                  sm:text-base

                  md:text-lg
                "
              >
                Como posso te ajudar hoje?
              </span>

              {/* CURSOR */}

              <span
                className="
                  assistant-cursor

                  h-5
                  w-px

                  bg-cyan-300/80
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
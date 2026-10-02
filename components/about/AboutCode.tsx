"use client";

/* =========================================================
   TIPOS
========================================================= */

type CodeToken = {
  text: string;
  className?: string;
};

type CodeLine = {
  number: string;
  tokens: CodeToken[];
};

/* =========================================================
   CÓDIGO DO DEVELOPER.TS
========================================================= */

const codeLines: CodeLine[] = [
  {
    number: "01",
    tokens: [
      {
        text: "const",
        className: "text-purple-300",
      },
      {
        text: " ",
      },
      {
        text: "developer",
        className: "text-blue-300",
      },
      {
        text: " = {",
      },
    ],
  },

  {
    number: "02",
    tokens: [
      {
        text: "  name: ",
      },
      {
        text: '"Thiago Torres"',
        className: "text-green-300",
      },
      {
        text: ",",
      },
    ],
  },

  {
    number: "03",
    tokens: [
      {
        text: "  role: ",
      },
      {
        text: '"Full Stack Developer"',
        className: "text-green-300",
      },
      {
        text: ",",
      },
    ],
  },

  {
    number: "04",
    tokens: [
      {
        text: "  focus: [",
      },
      {
        text: '"Web"',
        className: "text-green-300",
      },
      {
        text: ", ",
      },
      {
        text: '"E-commerce"',
        className: "text-green-300",
      },
      {
        text: ", ",
      },
      {
        text: '"Systems"',
        className: "text-green-300",
      },
      {
        text: "],",
      },
    ],
  },

  {
    number: "05",
    tokens: [
      {
        text: "  stack: [",
      },
      {
        text: '"React"',
        className: "text-green-300",
      },
      {
        text: ", ",
      },
      {
        text: '"Next.js"',
        className: "text-green-300",
      },
      {
        text: "],",
      },
    ],
  },

  {
    number: "06",
    tokens: [
      {
        text: "  available: ",
      },
      {
        text: "true",
        className: "text-orange-300",
      },
      {
        text: ",",
      },
    ],
  },

  {
    number: "07",
    tokens: [
      {
        text: "};",
      },
    ],
  },
];

/* =========================================================
   ÍNDICE GLOBAL DOS CARACTERES

   HeroCodeTransition usa data-char-index para saber
   exatamente a ordem das letras.
========================================================= */

let globalCharacterIndex = 0;

/* =========================================================
   COMPONENTE
========================================================= */

export default function AboutCode() {
  /*
   * Reinicia o contador sempre que este componente renderiza.
   */
  globalCharacterIndex = 0;

  return (
    <div
      id="developer-code-target"
      className="
        relative
        w-full
      "
    >
      {/* ===================================================
          AURA EXTERNA

          Começa invisível.
          GSAP controla a intensidade.
      ==================================================== */}

      <div
        id="developer-code-aura"
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-12
          rounded-[40px]
          bg-cyan-400/[0.08]
          opacity-0
          blur-[70px]
        "
      />

      {/* ===================================================
          CARD PRINCIPAL
      ==================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#03070b]/95
          shadow-2xl
          backdrop-blur-sm
        "
      >
        {/* =================================================
            GLOW INTERNO
        ================================================== */}

        <div
          id="developer-inner-glow"
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            opacity-0

            bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.10),transparent_62%)]
          "
        />

        {/* =================================================
            LINHA DE LUZ SUPERIOR
        ================================================== */}

        <div
          id="developer-top-glow"
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[10%]
            right-[10%]
            top-0
            z-20
            h-px
            opacity-0

            bg-gradient-to-r
            from-transparent
            via-cyan-300
            to-transparent

            shadow-[0_0_18px_rgba(34,211,238,0.9)]
          "
        />

        {/* =================================================
            BARRA DA JANELA
        ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            h-12
            items-center
            border-b
            border-white/10
            px-5

            sm:h-14
            sm:px-6
          "
        >
          <div className="flex gap-2">
            <span
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-white/15
              "
            />

            <span
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-white/15
              "
            />

            <span
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-white/15
              "
            />
          </div>

          <span
            className="
              ml-5
              font-mono
              text-[9px]
              font-semibold
              tracking-[0.2em]
              text-white/25

              sm:text-[10px]
            "
          >
            developer.ts
          </span>
        </div>

        {/* =================================================
            ÁREA DO CÓDIGO
        ================================================== */}

        <div
          className="
            relative
            z-10

            min-h-[360px]

            overflow-x-auto

            px-5
            py-8

            sm:min-h-[390px]
            sm:px-8
            sm:py-9

            md:min-h-[410px]
            md:px-9
          "
        >
          <div
            id="developer-code-lines"
            className="
              relative
              min-w-max
              font-mono
              text-[11px]
              leading-8
              text-white/65

              sm:text-xs
              sm:leading-9

              md:text-sm
            "
          >
            {codeLines.map(
              (line, lineIndex) => (
                <div
                  key={line.number}
                  className="
                    about-code-line
                    flex
                    min-h-[32px]
                    items-start

                    sm:min-h-[36px]
                  "
                >
                  {/* Número */}

                  <span
                    className="
                      about-code-number

                      mr-5
                      w-5
                      shrink-0
                      select-none
                      text-right
                      text-white/15

                      sm:mr-6
                    "
                  >
                    {line.number}
                  </span>

                  {/* Código */}

                  <span className="whitespace-pre">
                    {line.tokens.map(
                      (
                        token,
                        tokenIndex,
                      ) => (
                        <span
                          key={`${line.number}-token-${tokenIndex}`}
                          className={
                            token.className ??
                            ""
                          }
                        >
                          {Array.from(
                            token.text,
                          ).map(
                            (
                              char,
                              charIndex,
                            ) => {
                              const index =
                                globalCharacterIndex++;

                              return (
                                <span
                                  key={`${line.number}-${tokenIndex}-${charIndex}`}
                                  data-code-char
                                  data-char-index={
                                    index
                                  }
                                  data-line-index={
                                    lineIndex
                                  }
                                  className="
                                    inline-block
                                    opacity-0
                                  "
                                >
                                  {char ===
                                  " "
                                    ? "\u00A0"
                                    : char}
                                </span>
                              );
                            },
                          )}
                        </span>
                      ),
                    )}
                  </span>
                </div>
              ),
            )}

            {/* =============================================
                CURSOR

                GSAP muda left/top conforme cada letra
                vai sendo escrita.
            ============================================== */}

            <span
              id="developer-code-cursor"
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[48px]
                top-[4px]

                h-[18px]
                w-[2px]

                bg-cyan-300

                opacity-0

                shadow-[0_0_10px_rgba(34,211,238,0.95)]

                sm:h-[20px]
              "
            />
          </div>
        </div>

        {/* =================================================
            STATUS
        ================================================== */}

        <div
          id="developer-status"
          className="
            relative
            z-10

            flex
            items-center
            gap-2

            border-t
            border-white/10

            px-6
            py-4

            opacity-0
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-400

              shadow-[0_0_12px_rgba(52,211,153,0.8)]
            "
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-white/30

              sm:text-[9px]
              sm:tracking-[0.25em]
            "
          >
            Available for new projects
          </span>
        </div>

        {/* =================================================
            SOMBRA INFERIOR INTERNA
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-0
            h-[30%]

            bg-gradient-to-t
            from-cyan-950/[0.04]
            to-transparent
          "
        />
      </div>
    </div>
  );
}
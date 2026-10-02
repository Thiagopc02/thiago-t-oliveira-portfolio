"use client";

import AboutContent from "./AboutContent";
import AboutReveal from "./AboutReveal";
import AboutStats from "./AboutStats";

/* =========================================================
   TIPOS
========================================================= */

type CodeToken = {
  text: string;
  className: string;
};

type DeveloperLine = {
  number: string;
  tokens: CodeToken[];
};

/* =========================================================
   CÓDIGO FINAL DO DEVELOPER.TS
========================================================= */

const developerCode: DeveloperLine[] = [
  {
    number: "01",
    tokens: [
      {
        text: "const",
        className: "text-violet-300",
      },
      {
        text: " ",
        className: "text-zinc-400",
      },
      {
        text: "developer",
        className: "text-blue-300",
      },
      {
        text: " = {",
        className: "text-zinc-400",
      },
    ],
  },

  {
    number: "02",
    tokens: [
      {
        text: "  name: ",
        className: "text-zinc-400",
      },
      {
        text: '"Thiago Torres"',
        className: "text-emerald-300",
      },
      {
        text: ",",
        className: "text-zinc-400",
      },
    ],
  },

  {
    number: "03",
    tokens: [
      {
        text: "  role: ",
        className: "text-zinc-400",
      },
      {
        text: '"Full Stack Developer"',
        className: "text-emerald-300",
      },
      {
        text: ",",
        className: "text-zinc-400",
      },
    ],
  },

  {
    number: "04",
    tokens: [
      {
        text: "  focus: [",
        className: "text-zinc-400",
      },
      {
        text: '"Web"',
        className: "text-emerald-300",
      },
      {
        text: ", ",
        className: "text-zinc-400",
      },
      {
        text: '"E-commerce"',
        className: "text-emerald-300",
      },
      {
        text: ", ",
        className: "text-zinc-400",
      },
      {
        text: '"Systems"',
        className: "text-emerald-300",
      },
      {
        text: "],",
        className: "text-zinc-400",
      },
    ],
  },

  {
    number: "05",
    tokens: [
      {
        text: "  stack: [",
        className: "text-zinc-400",
      },
      {
        text: '"React"',
        className: "text-emerald-300",
      },
      {
        text: ", ",
        className: "text-zinc-400",
      },
      {
        text: '"Next.js"',
        className: "text-emerald-300",
      },
      {
        text: "],",
        className: "text-zinc-400",
      },
    ],
  },

  {
    number: "06",
    tokens: [
      {
        text: "  available: ",
        className: "text-zinc-400",
      },
      {
        text: "true",
        className: "text-amber-300",
      },
      {
        text: ",",
        className: "text-zinc-400",
      },
    ],
  },

  {
    number: "07",
    tokens: [
      {
        text: "};",
        className: "text-zinc-400",
      },
    ],
  },
];

/* =========================================================
   CONTADOR GLOBAL DE CARACTERES
========================================================= */

let globalCharacterIndex = 0;

/* =========================================================
   COMPONENTE
========================================================= */

export default function About() {
  globalCharacterIndex = 0;

  return (
    <section
      id="sobre"
      className="
        relative
        bg-black
        text-white
      "
    >
      {/* =====================================================
          ÁREA PINADA
      ====================================================== */}

      <div
        id="about-pin-stage"
        className="
          relative
          min-h-screen
          overflow-hidden
          px-6
          py-28
          md:px-10
          lg:px-16
          lg:py-32
        "
      >
        {/* ================================================= */}
        {/* LUZ DE FUNDO */}
        {/* ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.025]
            blur-[120px]
          "
        />

        {/* ================================================= */}
        {/* AURA DO DEVELOPER.TS */}
        {/* ================================================= */}

        <div
          id="developer-code-aura"
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-[34%]
            hidden
            h-[580px]
            w-[580px]
            rounded-full
            bg-cyan-400/[0.035]
            opacity-0
            blur-[140px]
            lg:block
          "
        />

        {/* ================================================= */}
        {/* CONTEÚDO */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >
          {/* ================================================= */}
          {/* CABEÇALHO */}
          {/* ================================================= */}

          <AboutReveal>
            <div className="mb-16">
              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.4em]
                  text-white/40
                "
              >
                01 — Sobre mim
              </span>
            </div>
          </AboutReveal>

          {/* ================================================= */}
          {/* GRID PRINCIPAL */}
          {/* ================================================= */}

          <div
            className="
              grid
              items-center
              gap-16
              lg:grid-cols-2
              lg:gap-24
            "
          >
            {/* ================================================= */}
            {/* TEXTO */}
            {/* ================================================= */}

            <AboutReveal>
              <AboutContent />
            </AboutReveal>

            {/* ================================================= */}
            {/* COLUNA DIREITA */}
            {/* ================================================= */}

            <div className="relative">
              {/* ============================================= */}
              {/* AVISO DE SCROLL */}
              {/* ============================================= */}

              <div
                className="
                  mb-6
                  flex
                  flex-col
                  items-center
                  text-center
                  lg:items-start
                  lg:text-left
                "
              >
                <p
                  className="
                    max-w-xl
                    text-xl
                    font-black
                    uppercase
                    leading-[1.05]
                    tracking-[-0.035em]
                    text-white
                    sm:text-2xl
                    lg:text-[26px]
                    xl:text-[28px]
                  "
                >
                  Role para baixo para escrever o{" "}
                  <span
                    className="
                      text-red-500
                      drop-shadow-[0_0_8px_rgba(255,0,0,0.75)]
                      drop-shadow-[0_0_18px_rgba(255,0,0,0.35)]
                    "
                  >
                    DEV
                  </span>
                </p>

                <p
                  className="
                    mt-2
                    font-mono
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-white/25
                    sm:text-[9px]
                  "
                >
                  Se não rolar, não consegue.
                </p>

                <div
                  aria-hidden="true"
                  className="
                    mt-4
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-6
                      items-start
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.01]
                      p-1.5
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1
                        animate-bounce
                        rounded-full
                        bg-red-500
                        shadow-[0_0_8px_rgba(255,0,0,0.9)]
                      "
                    />
                  </div>

                  <span
                    className="
                      animate-bounce
                      font-mono
                      text-xs
                      text-white/20
                    "
                  >
                    ↓
                  </span>
                </div>
              </div>

              {/* ============================================= */}
              {/* DEVELOPER.TS */}
              {/* ============================================= */}

              <div
                id="developer-code-target"
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-[#07090d]/95
                  shadow-[0_30px_100px_rgba(0,0,0,0.58)]
                  backdrop-blur-xl
                "
              >
                {/* =========================================== */}
                {/* BARRA SUPERIOR */}
                {/* =========================================== */}

                <div
                  className="
                    flex
                    h-14
                    items-center
                    border-b
                    border-white/10
                    bg-white/[0.01]
                    px-5
                  "
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-white/20
                      "
                    />

                    <span
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-white/20
                      "
                    />

                    <span
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-white/20
                      "
                    />
                  </div>

                  <span
                    className="
                      ml-6
                      font-mono
                      text-[10px]
                      tracking-[0.2em]
                      text-white/30
                    "
                  >
                    developer.ts
                  </span>
                </div>

                {/* =========================================== */}
                {/* ÁREA DO CÓDIGO */}
                {/* =========================================== */}

                <div
                  id="developer-code-lines"
                  className="
                    relative
                    min-h-[310px]
                    px-5
                    py-8
                    font-mono
                    sm:px-8
                    sm:py-10
                  "
                >
                  {developerCode.map(
                    (line, lineIndex) => (
                      <div
                        key={line.number}
                        data-code-line={line.number}
                        data-line-index={lineIndex}
                        className="
                          about-code-line
                          flex
                          min-h-[32px]
                          items-center
                          text-[11px]
                          leading-7
                          sm:text-[13px]
                          lg:text-[12px]
                          xl:text-[13px]
                        "
                      >
                        {/* NÚMERO */}

                        <span
                          data-code-number
                          className="
                            about-code-number
                            mr-5
                            w-7
                            shrink-0
                            select-none
                            text-right
                            text-white/15
                            opacity-0
                          "
                        >
                          {line.number}
                        </span>

                        {/* CÓDIGO */}

                        <span
                          className="
                            about-code-content
                            whitespace-pre
                          "
                        >
                          {line.tokens.map(
                            (
                              token,
                              tokenIndex
                            ) => (
                              <span
                                key={`${line.number}-${tokenIndex}`}
                                className={
                                  token.className
                                }
                              >
                                {Array.from(
                                  token.text
                                ).map(
                                  (
                                    character,
                                    characterIndex
                                  ) => {
                                    const currentIndex =
                                      globalCharacterIndex++;

                                    return (
                                      <span
                                        key={`${line.number}-${tokenIndex}-${characterIndex}`}
                                        data-code-char
                                        data-char-index={
                                          currentIndex
                                        }
                                        data-line-index={
                                          lineIndex
                                        }
                                        className="
                                          about-code-char
                                          inline-block
                                          opacity-0
                                          will-change-transform
                                        "
                                      >
                                        {character === " "
                                          ? "\u00A0"
                                          : character}
                                      </span>
                                    );
                                  }
                                )}
                              </span>
                            )
                          )}
                        </span>
                      </div>
                    )
                  )}

                  {/* ========================================= */}
                  {/* CURSOR */}
                  {/* ========================================= */}

                  <span
                    id="developer-code-cursor"
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-[80px]
                      top-[42px]
                      h-[17px]
                      w-[2px]
                      bg-cyan-300
                      opacity-0
                      shadow-[0_0_6px_rgba(34,211,238,0.95),0_0_14px_rgba(34,211,238,0.65)]
                    "
                  />
                </div>

                {/* =========================================== */}
                {/* STATUS */}
                {/* =========================================== */}

                <div
                  id="developer-status"
                  className="
                    flex
                    h-14
                    items-center
                    border-t
                    border-white/10
                    px-6
                    opacity-0
                  "
                >
                  <span
                    className="
                      mr-3
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-400
                      shadow-[0_0_10px_rgba(52,211,153,0.8)]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/30
                    "
                  >
                    Available for new projects
                  </span>
                </div>

                {/* =========================================== */}
                {/* GLOW INTERNO */}
                {/* =========================================== */}

                <div
                  id="developer-inner-glow"
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.08),transparent_58%)]
                  "
                />

                {/* =========================================== */}
                {/* LINHA SUPERIOR NEON */}
                {/* =========================================== */}

                <div
                  id="developer-top-glow"
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
                    via-cyan-300/60
                    to-transparent
                    opacity-0
                    shadow-[0_0_12px_rgba(34,211,238,0.5)]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ESTATÍSTICAS
      ====================================================== */}

      <div
        id="about-stats-stage"
        className="
          relative
          z-10
          px-6
          pb-28
          md:px-10
          lg:px-16
          lg:pb-32
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
          "
        >
          <AboutReveal delay={0.25}>
            <AboutStats />
          </AboutReveal>
        </div>
      </div>
    </section>
  );
}
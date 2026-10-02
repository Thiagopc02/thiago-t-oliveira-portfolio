"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* =========================================================
   TIPOS
========================================================= */

type CodeParticle = {
  text: string;

  startLeft: number;
  startTop: number;

  midX: number;
  midY: number;

  rotate: number;

  color: string;
};

/* =========================================================
   CÓDIGOS DA CORRENTE
========================================================= */

const floatingCodes: CodeParticle[] = [
  {
    text: "const developer = {",
    startLeft: 28,
    startTop: 47,
    midX: 180,
    midY: 250,
    rotate: -5,
    color: "text-cyan-300",
  },

  {
    text: 'name: "Thiago Torres",',
    startLeft: 33,
    startTop: 43,
    midX: 260,
    midY: 300,
    rotate: 4,
    color: "text-emerald-300",
  },

  {
    text: 'role: "Full Stack Developer",',
    startLeft: 24,
    startTop: 54,
    midX: 330,
    midY: 350,
    rotate: -4,
    color: "text-violet-300",
  },

  {
    text: 'focus: ["Web", "E-commerce", "Systems"],',
    startLeft: 37,
    startTop: 50,
    midX: 390,
    midY: 390,
    rotate: 3,
    color: "text-sky-300",
  },

  {
    text: 'stack: ["React", "Next.js"],',
    startLeft: 40,
    startTop: 57,
    midX: 440,
    midY: 430,
    rotate: -3,
    color: "text-blue-300",
  },

  {
    text: "available: true,",
    startLeft: 30,
    startTop: 59,
    midX: 500,
    midY: 470,
    rotate: 4,
    color: "text-orange-300",
  },

  {
    text: "};",
    startLeft: 43,
    startTop: 52,
    midX: 560,
    midY: 510,
    rotate: -5,
    color: "text-white/80",
  },

  {
    text: "import React from 'react';",
    startLeft: 35,
    startTop: 39,
    midX: 320,
    midY: 245,
    rotate: 8,
    color: "text-blue-300",
  },

  {
    text: "<FullStackDeveloper />",
    startLeft: 42,
    startTop: 46,
    midX: 485,
    midY: 320,
    rotate: 6,
    color: "text-fuchsia-300",
  },

  {
    text: "npm run dev",
    startLeft: 20,
    startTop: 43,
    midX: 380,
    midY: 385,
    rotate: -7,
    color: "text-yellow-300",
  },

  {
    text: "function buildExperience() {",
    startLeft: 31,
    startTop: 34,
    midX: 500,
    midY: 420,
    rotate: 5,
    color: "text-cyan-200",
  },

  {
    text: "return experience;",
    startLeft: 45,
    startTop: 55,
    midX: 570,
    midY: 470,
    rotate: -5,
    color: "text-rose-300",
  },
];

/* =========================================================
   MICROPARTÍCULAS
========================================================= */

const magicBits = [
  "{ }",
  "</>",
  "[]",
  "()",
  "=>",
  "const",
  "01",
  "API",
  "DEV",
  "React",
  "Next",
  "TS",
  "JS",
  "true",
  "async",
  "{}",
  "/>",
];

/* =========================================================
   COMPONENTE
========================================================= */

export default function HeroCodeTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;

    if (!container) return;

    /* =====================================================
       ELEMENTOS PRINCIPAIS
    ====================================================== */

    const hero =
      document.querySelector<HTMLElement>("#inicio");

    const about =
      document.querySelector<HTMLElement>("#sobre");

    const pinStage =
      document.querySelector<HTMLElement>(
        "#about-pin-stage",
      );

    const developer =
      document.querySelector<HTMLElement>(
        "#developer-code-target",
      );

    const developerLines = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#developer-code-target .about-code-line",
      ),
    );

    const developerNumbers = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#developer-code-target .about-code-number",
      ),
    );

    const developerChars = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#developer-code-target [data-code-char]",
      ),
    ).sort((a, b) => {
      const aIndex = Number(
        a.dataset.charIndex ?? 0,
      );

      const bIndex = Number(
        b.dataset.charIndex ?? 0,
      );

      return aIndex - bIndex;
    });

    const developerStatus =
      document.querySelector<HTMLElement>(
        "#developer-status",
      );

    const developerCursor =
      document.querySelector<HTMLElement>(
        "#developer-code-cursor",
      );

    const developerAura =
      document.querySelector<HTMLElement>(
        "#developer-code-aura",
      );

    const developerInnerGlow =
      document.querySelector<HTMLElement>(
        "#developer-inner-glow",
      );

    const developerTopGlow =
      document.querySelector<HTMLElement>(
        "#developer-top-glow",
      );

    if (
      !hero ||
      !about ||
      !pinStage ||
      !developer ||
      developerChars.length === 0
    ) {
      return;
    }

    /* =====================================================
       CONTEXTO GSAP
    ====================================================== */

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ===================================================
         RESET DO DEVELOPER.TS
      ==================================================== */

      const resetDeveloper = () => {
        gsap.set(developerChars, {
          opacity: 0,
          y: 2,
          scale: 0.96,
          textShadow:
            "0 0 0 rgba(34,211,238,0)",
        });

        gsap.set(developerNumbers, {
          opacity: 0,
        });

        if (developerStatus) {
          gsap.set(developerStatus, {
            opacity: 0,
            y: 8,
          });
        }

        if (developerCursor) {
          gsap.set(developerCursor, {
            opacity: 0,
          });
        }

        if (developerAura) {
          gsap.set(developerAura, {
            opacity: 0,
          });
        }

        if (developerInnerGlow) {
          gsap.set(developerInnerGlow, {
            opacity: 0,
          });
        }

        if (developerTopGlow) {
          gsap.set(developerTopGlow, {
            opacity: 0,
          });
        }
      };

      /* ===================================================
         POSIÇÃO DO CURSOR

         Move o cursor junto com a letra atual.
      ==================================================== */

      const moveCursorToCharacter = (
        char: HTMLElement,
      ) => {
        if (!developerCursor) return;

        const linesContainer =
          document.querySelector<HTMLElement>(
            "#developer-code-lines",
          );

        if (!linesContainer) return;

        const charRect =
          char.getBoundingClientRect();

        const containerRect =
          linesContainer.getBoundingClientRect();

        gsap.set(developerCursor, {
          left:
            charRect.right -
            containerRect.left +
            2,

          top:
            charRect.top -
            containerRect.top +
            4,
        });
      };

      /* ===================================================
         DIGITAÇÃO
      ==================================================== */

      const addTypingSequence = (
        timeline: gsap.core.Timeline,
        typingStart: number,
        typingDuration: number,
      ) => {
        const totalChars = Math.max(
          developerChars.length,
          1,
        );

        const step =
          typingDuration / totalChars;

        /* -------------------------------------------------
           GLOW INICIAL
        -------------------------------------------------- */

        if (developerAura) {
          timeline.to(
            developerAura,
            {
              opacity: 1,
              duration: 0.04,
              ease: "none",
            },
            0,
          );
        }

        if (developerInnerGlow) {
          timeline.to(
            developerInnerGlow,
            {
              opacity: 1,
              duration: 0.05,
              ease: "none",
            },
            typingStart,
          );
        }

        if (developerTopGlow) {
          timeline.to(
            developerTopGlow,
            {
              opacity: 1,
              duration: 0.05,
              ease: "none",
            },
            typingStart,
          );
        }

        if (developerCursor) {
          timeline.to(
            developerCursor,
            {
              opacity: 1,
              duration: 0.02,
              ease: "none",
            },
            typingStart,
          );
        }

        /* -------------------------------------------------
           NÚMEROS DAS LINHAS
        -------------------------------------------------- */

        developerLines.forEach(
          (_, lineIndex) => {
            const charsInLine =
              developerChars.filter(
                (char) =>
                  Number(
                    char.dataset.lineIndex ??
                      -1,
                  ) === lineIndex,
              );

            if (
              charsInLine.length === 0
            ) {
              return;
            }

            const firstCharIndex =
              developerChars.indexOf(
                charsInLine[0],
              );

            const position =
              typingStart +
              firstCharIndex * step;

            const number =
              developerNumbers[lineIndex];

            if (number) {
              timeline.to(
                number,
                {
                  opacity: 1,
                  duration:
                    step * 1.5,
                  ease: "none",
                },
                position,
              );
            }
          },
        );

        /* -------------------------------------------------
           LETRA POR LETRA
        -------------------------------------------------- */

        developerChars.forEach(
          (char, index) => {
            const position =
              typingStart +
              index * step;

            timeline.to(
              char,
              {
                opacity: 1,
                y: 0,
                scale: 1,

                textShadow:
                  "0 0 10px rgba(34,211,238,0.90)",

                duration:
                  step * 1.05,

                ease: "none",

                onStart: () => {
                  moveCursorToCharacter(
                    char,
                  );
                },

                onReverseComplete:
                  () => {
                    if (index > 0) {
                      moveCursorToCharacter(
                        developerChars[
                          index - 1
                        ],
                      );
                    }
                  },
              },
              position,
            );

            timeline.to(
              char,
              {
                textShadow:
                  "0 0 0 rgba(34,211,238,0)",

                duration:
                  step * 1.8,

                ease: "none",
              },
              position +
                step * 0.95,
            );
          },
        );

        /* -------------------------------------------------
           STATUS FINAL
        -------------------------------------------------- */

        const statusPosition =
          typingStart +
          typingDuration +
          0.012;

        if (developerStatus) {
          timeline.to(
            developerStatus,
            {
              opacity: 1,
              y: 0,
              duration: 0.025,
              ease: "none",
            },
            statusPosition,
          );
        }

        if (developerCursor) {
          timeline.to(
            developerCursor,
            {
              opacity: 0,
              duration: 0.02,
              ease: "none",
            },
            statusPosition + 0.025,
          );
        }

        if (developerInnerGlow) {
          timeline.to(
            developerInnerGlow,
            {
              opacity: 0.26,
              duration: 0.025,
              ease: "none",
            },
            statusPosition,
          );
        }
      };

      /* ===================================================
         DESKTOP
         >= 1024px

         MANTIDO COMO ESTAVA.
      ==================================================== */

      mm.add(
        "(min-width: 1024px)",
        () => {
          resetDeveloper();

          const particles =
            gsap.utils.toArray<HTMLElement>(
              ".magic-code-main",
              container,
            );

          const bits =
            gsap.utils.toArray<HTMLElement>(
              ".magic-code-bit",
              container,
            );

          const neonPaths =
            gsap.utils.toArray<SVGPathElement>(
              ".magic-neon-path",
              container,
            );

          const neonGlows =
            gsap.utils.toArray<SVGPathElement>(
              ".magic-neon-glow",
              container,
            );

          gsap.set(particles, {
            opacity: 0,
            scale: 0.2,
            filter: "blur(6px)",
          });

          gsap.set(bits, {
            opacity: 0,
            scale: 0.2,
            filter: "blur(4px)",
          });

          [
            ...neonPaths,
            ...neonGlows,
          ].forEach((path) => {
            const length =
              path.getTotalLength();

            gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length,
              opacity: 0,
            });
          });

          /* ===============================================
             HERO → ABOUT
          ================================================ */

          const travelTimeline =
            gsap.timeline({
              scrollTrigger: {
                trigger: hero,

                start: "top top",

                endTrigger: about,

                end: "top 55%",

                scrub: 1.1,

                invalidateOnRefresh:
                  true,
              },
            });

          travelTimeline.to(
            [
              ...neonPaths,
              ...neonGlows,
            ],
            {
              opacity: 1,
              duration: 0.08,
              ease: "none",
            },
            0.08,
          );

          travelTimeline.to(
            [
              ...neonPaths,
              ...neonGlows,
            ],
            {
              strokeDashoffset: 0,
              duration: 0.62,
              ease: "none",
            },
            0.1,
          );

          /* -----------------------------------------------
             CÓDIGOS NASCEM
          ------------------------------------------------ */

          particles.forEach(
            (
              particle,
              index,
            ) => {
              const data =
                floatingCodes[index];

              if (!data) return;

              travelTimeline.to(
                particle,
                {
                  opacity: 0.95,

                  scale: 0.62,

                  x:
                    data.midX *
                    0.12,

                  y:
                    data.midY *
                    0.08,

                  rotate:
                    data.rotate *
                    0.2,

                  filter:
                    "blur(0px)",

                  duration: 0.13,

                  ease: "none",
                },

                0.08 +
                  index *
                    0.012,
              );
            },
          );

          /* -----------------------------------------------
             CRESCEM
          ------------------------------------------------ */

          particles.forEach(
            (
              particle,
              index,
            ) => {
              const data =
                floatingCodes[index];

              if (!data) return;

              travelTimeline.to(
                particle,
                {
                  x: data.midX,

                  y: data.midY,

                  scale:
                    index < 7
                      ? 2
                      : 1.5,

                  rotate:
                    data.rotate,

                  opacity: 0.95,

                  duration: 0.33,

                  ease: "none",
                },

                0.25 +
                  index *
                    0.008,
              );
            },
          );

          /* -----------------------------------------------
             MICROPARTÍCULAS
          ------------------------------------------------ */

          bits.forEach(
            (bit, index) => {
              const direction =
                index % 2 === 0
                  ? 1
                  : -1;

              travelTimeline.to(
                bit,
                {
                  opacity:
                    0.35 +
                    (index % 4) *
                      0.12,

                  scale:
                    0.7 +
                    (index % 5) *
                      0.12,

                  x:
                    90 +
                    index *
                      15 *
                      direction,

                  y:
                    120 +
                    index * 28,

                  rotate:
                    direction *
                    (8 + index),

                  filter:
                    "blur(0px)",

                  duration: 0.28,

                  ease: "none",
                },

                0.18 +
                  index *
                    0.012,
              );
            },
          );

          /* -----------------------------------------------
             CONVERGÊNCIA
          ------------------------------------------------ */

          particles.forEach(
            (
              particle,
              index,
            ) => {
              const data =
                floatingCodes[index];

              if (!data) return;

              travelTimeline.to(
                particle,
                {
                  x: () => {
                    const rect =
                      developer.getBoundingClientRect();

                    const startX =
                      window.innerWidth *
                      (data.startLeft /
                        100);

                    return (
                      rect.left +
                      rect.width *
                        0.45 -
                      startX
                    );
                  },

                  y: () => {
                    const rect =
                      developer.getBoundingClientRect();

                    const startY =
                      window.innerHeight *
                      (data.startTop /
                        100);

                    return (
                      rect.top +
                      rect.height *
                        0.35 -
                      startY
                    );
                  },

                  scale: 0.36,

                  rotate: 0,

                  opacity: 0,

                  filter:
                    "blur(3px)",

                  duration: 0.28,

                  ease: "none",
                },

                0.66 +
                  index *
                    0.005,
              );
            },
          );

          bits.forEach(
            (bit, index) => {
              travelTimeline.to(
                bit,
                {
                  opacity: 0,

                  scale: 0.2,

                  y:
                    500 +
                    index * 20,

                  filter:
                    "blur(3px)",

                  duration: 0.25,

                  ease: "none",
                },

                0.64 +
                  index *
                    0.007,
              );
            },
          );

          travelTimeline.to(
            [
              ...neonPaths,
              ...neonGlows,
            ],
            {
              opacity: 0,

              duration: 0.15,

              ease: "none",
            },

            0.83,
          );

          /* ===============================================
             ABOUT PRESO - DESKTOP
          ================================================ */

          const DESKTOP_SCROLL =
            5200;

          const typingTimeline =
            gsap.timeline({
              scrollTrigger: {
                trigger: pinStage,

                start: "top top",

                end: `+=${DESKTOP_SCROLL}`,

                pin: true,

                pinSpacing: true,

                scrub: 0.35,

                anticipatePin: 1,

                invalidateOnRefresh:
                  true,
              },
            });

          addTypingSequence(
            typingTimeline,
            0.06,
            0.84,
          );

          /*
           * Pausa final.
           * Mantém o desktop preso depois
           * do código terminar.
           */
          typingTimeline.to(
            {},
            {
              duration: 0.1,
            },
          );

          return () => {
            travelTimeline.kill();

            typingTimeline.kill();
          };
        },
      );

      /* ===================================================
         TABLET + MOBILE
         < 1024px

         ALTERAÇÃO IMPORTANTE:

         NÃO prendemos mais o About inteiro.

         Agora a página desce naturalmente até
         o developer.ts.

         Quando o developer.ts chega à posição
         correta na viewport:

         1. ele trava;
         2. começa vazio;
         3. o scroll escreve o código;
         4. termina;
         5. permanece preso para leitura;
         6. só então libera a página.
      ==================================================== */

      mm.add(
        "(max-width: 1023px)",
        () => {
          resetDeveloper();

          const particles =
            gsap.utils.toArray<HTMLElement>(
              ".magic-code-main",
              container,
            );

          const bits =
            gsap.utils.toArray<HTMLElement>(
              ".magic-code-bit",
              container,
            );

          /* ===============================================
             TAMANHO DE TELA
          ================================================ */

          const width =
            window.innerWidth;

          const height =
            window.innerHeight;

          const isPhone =
            width <= 639;

          const isSmallTablet =
            width >= 640 &&
            width <= 767;

          /* ===============================================
             CORRENTE MOBILE
          ================================================ */

          particles.forEach(
            (
              particle,
              index,
            ) => {
              gsap.set(particle, {
                opacity: 0,

                scale: 0.2,

                filter:
                  "blur(4px)",

                display:
                  index < 7
                    ? "block"
                    : "none",
              });
            },
          );

          bits.forEach(
            (bit, index) => {
              gsap.set(bit, {
                opacity: 0,

                scale: 0.2,

                filter:
                  "blur(3px)",

                display:
                  index < 7
                    ? "block"
                    : "none",
              });
            },
          );

          /* ===============================================
             HERO → ABOUT
          ================================================ */

          const mobileTravel =
            gsap.timeline({
              scrollTrigger: {
                trigger: hero,

                start: "top top",

                endTrigger: about,

                end: "top 78%",

                scrub: 0.65,

                invalidateOnRefresh:
                  true,
              },
            });

          particles
            .slice(0, 7)
            .forEach(
              (
                particle,
                index,
              ) => {
                const data =
                  floatingCodes[index];

                if (!data) return;

                const direction =
                  index % 2 === 0
                    ? 1
                    : -1;

                mobileTravel.to(
                  particle,
                  {
                    opacity: 0.82,

                    scale:
                      isPhone
                        ? 0.48
                        : 0.58,

                    x:
                      direction *
                      (10 +
                        index * 3),

                    y:
                      45 +
                      index *
                        15,

                    rotate:
                      direction * 2,

                    filter:
                      "blur(0px)",

                    duration: 0.18,

                    ease: "none",
                  },

                  0.08 +
                    index *
                      0.018,
                );

                mobileTravel.to(
                  particle,
                  {
                    scale:
                      isPhone
                        ? 0.7
                        : 0.82,

                    x:
                      direction *
                      (18 +
                        index * 4),

                    y:
                      105 +
                      index *
                        24,

                    opacity: 0.72,

                    duration: 0.25,

                    ease: "none",
                  },

                  0.29 +
                    index *
                      0.014,
                );

                mobileTravel.to(
                  particle,
                  {
                    opacity: 0,

                    scale: 0.2,

                    rotate: 0,

                    filter:
                      "blur(3px)",

                    duration: 0.3,

                    ease: "none",
                  },

                  0.61 +
                    index *
                      0.01,
                );
              },
            );

          /* ===============================================
             MICROPARTÍCULAS MOBILE
          ================================================ */

          bits
            .slice(0, 7)
            .forEach(
              (
                bit,
                index,
              ) => {
                const direction =
                  index % 2 === 0
                    ? 1
                    : -1;

                mobileTravel.to(
                  bit,
                  {
                    opacity: 0.4,

                    scale:
                      isPhone
                        ? 0.4
                        : 0.5,

                    x:
                      direction *
                      (15 +
                        index * 4),

                    y:
                      65 +
                      index *
                        22,

                    filter:
                      "blur(0px)",

                    duration: 0.22,

                    ease: "none",
                  },

                  0.14 +
                    index *
                      0.018,
                );

                mobileTravel.to(
                  bit,
                  {
                    opacity: 0,

                    scale: 0.15,

                    y:
                      230 +
                      index *
                        18,

                    filter:
                      "blur(3px)",

                    duration: 0.23,

                    ease: "none",
                  },

                  0.57 +
                    index *
                      0.011,
                );
              },
            );

          /* ===============================================
             DISTÂNCIA DA DIGITAÇÃO

             Quanto maior, mais scroll o usuário
             precisa fazer enquanto o quadro está parado.
          ================================================ */

          const MOBILE_SCROLL_DISTANCE =
            isPhone
              ? 5600
              : isSmallTablet
                ? 5800
                : 6000;

          /* ===============================================
             POSIÇÃO VERTICAL DO QUADRO

             Em celulares menores deixamos o quadro
             um pouco mais alto para caber melhor.
          ================================================ */

          const pinTop =
            isPhone
              ? Math.max(
                  84,
                  Math.min(
                    130,
                    height * 0.11,
                  ),
                )
              : Math.max(
                  90,
                  Math.min(
                    150,
                    height * 0.13,
                  ),
                );

          /* ===============================================
             DEVELOPER.TS PRESO

             AQUI ESTÁ O AJUSTE PRINCIPAL.

             trigger = developer
             pin = developer

             Portanto os cards / estatísticas
             de baixo NÃO conseguem passar até
             esta animação terminar.
          ================================================ */

          const mobileTyping =
            gsap.timeline({
              scrollTrigger: {
                trigger: developer,

                /*
                 * Quando o topo do developer.ts
                 * alcançar aproximadamente a região
                 * logo abaixo do header, trava.
                 */
                start: `top ${pinTop}px`,

                /*
                 * Obriga uma quantidade grande
                 * de rolagem enquanto está preso.
                 */
                end: `+=${MOBILE_SCROLL_DISTANCE}`,

                /*
                 * Agora prendemos exatamente
                 * o quadro developer.ts.
                 */
                pin: developer,

                /*
                 * Cria todo o espaço necessário
                 * abaixo do quadro.
                 *
                 * Isso impede as estatísticas
                 * de subirem antes da hora.
                 */
                pinSpacing: true,

                /*
                 * A digitação acompanha o scroll.
                 */
                scrub:
                  isPhone
                    ? 0.32
                    : 0.28,

                anticipatePin: 1,

                invalidateOnRefresh:
                  true,

                /*
                 * Ajuda especialmente no mobile
                 * quando existem transformações
                 * em elementos pais.
                 */
                pinReparent: true,
              },
            });

          /* ===============================================
             1 — QUADRO VAZIO

             Primeiro o usuário vê o quadro vazio.
          ================================================ */

          mobileTyping.to(
            {},
            {
              duration: 0.06,
            },
          );

          /* ===============================================
             2 — DIGITAÇÃO

             Ela ocupa aproximadamente 72%
             de toda a animação.

             Assim fica mais lenta que antes.
          ================================================ */

          addTypingSequence(
            mobileTyping,
            0.06,
            0.72,
          );

          /* ===============================================
             3 — PAUSA LOGO APÓS O ÚLTIMO CARACTERE
          ================================================ */

          mobileTyping.to(
            {},
            {
              duration: 0.08,
            },
          );

          /* ===============================================
             4 — PULSO DE CONCLUSÃO
          ================================================ */

          if (developerTopGlow) {
            mobileTyping.to(
              developerTopGlow,
              {
                opacity: 1,

                duration: 0.025,

                ease: "none",
              },
            );

            mobileTyping.to(
              developerTopGlow,
              {
                opacity: 0.3,

                duration: 0.035,

                ease: "none",
              },
            );
          }

          if (developerInnerGlow) {
            mobileTyping.to(
              developerInnerGlow,
              {
                opacity: 0.42,

                duration: 0.025,

                ease: "none",
              },
            );

            mobileTyping.to(
              developerInnerGlow,
              {
                opacity: 0.22,

                duration: 0.035,

                ease: "none",
              },
            );
          }

          /* ===============================================
             5 — PAUSA FINAL GRANDE

             É exatamente a "travadinha" que você
             pediu.

             Código já está 100% completo.

             Mesmo rolando, o usuário ainda precisa
             consumir esta parte da timeline.

             Só depois o quadro é liberado.
          ================================================ */

          mobileTyping.to(
            {},
            {
              duration:
                isPhone
                  ? 0.18
                  : 0.16,
            },
          );

          /* ===============================================
             CLEANUP
          ================================================ */

          return () => {
            mobileTravel.kill();

            mobileTyping.kill();
          };
        },
      );

      /* ===================================================
         REFRESH
      ==================================================== */

      const refreshFrame =
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });

      const refreshTimer =
        window.setTimeout(() => {
          ScrollTrigger.refresh();
        }, 250);

      return () => {
        cancelAnimationFrame(
          refreshFrame,
        );

        window.clearTimeout(
          refreshTimer,
        );

        mm.revert();
      };
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =========================================================
     JSX
  ========================================================== */

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[50]
        overflow-hidden
      "
    >
      {/* ================================================= */}
      {/* CORRENTE NEON DESKTOP */}
      {/* ================================================= */}

      <svg
        className="
          absolute
          inset-0
          hidden
          h-full
          w-full
          overflow-visible
          lg:block
        "
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="magicCodeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#22d3ee"
              stopOpacity="0"
            />

            <stop
              offset="20%"
              stopColor="#22d3ee"
              stopOpacity="0.95"
            />

            <stop
              offset="52%"
              stopColor="#818cf8"
              stopOpacity="1"
            />

            <stop
              offset="78%"
              stopColor="#d946ef"
              stopOpacity="0.95"
            />

            <stop
              offset="100%"
              stopColor="#22d3ee"
              stopOpacity="0"
            />
          </linearGradient>

          <filter
            id="magicGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="9"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />

              <feMergeNode
                in="SourceGraphic"
              />
            </feMerge>
          </filter>
        </defs>

        {/* brilho */}

        <path
          className="magic-neon-glow"
          d="
            M 360 420
            C 500 350,
              610 520,
              750 485

            C 900 445,
              930 650,
              1100 630

            C 1230 615,
              1230 735,
              1320 790
          "
          fill="none"
          stroke="url(#magicCodeGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          filter="url(#magicGlow)"
        />

        {/* núcleo */}

        <path
          className="magic-neon-path"
          d="
            M 360 420
            C 500 350,
              610 520,
              750 485

            C 900 445,
              930 650,
              1100 630

            C 1230 615,
              1230 735,
              1320 790
          "
          fill="none"
          stroke="url(#magicCodeGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* ================================================= */}
      {/* AURA */}
      {/* ================================================= */}

      <div
        className="
          absolute
          left-[30%]
          top-[48%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-400/[0.04]
          blur-[100px]

          max-lg:left-1/2
          max-lg:top-[52%]
          max-lg:h-[260px]
          max-lg:w-[260px]
          max-lg:-translate-x-1/2
          max-lg:blur-[80px]
        "
      />

      {/* ================================================= */}
      {/* CÓDIGOS PRINCIPAIS */}
      {/* ================================================= */}

      {floatingCodes.map(
        (particle, index) => (
          <span
            key={`main-${index}`}
            className={`
              magic-code-main
              absolute
              whitespace-nowrap
              font-mono
              font-medium
              text-[8px]
              tracking-[0.01em]
              ${particle.color}
              drop-shadow-[0_0_10px_rgba(34,211,238,0.40)]

              sm:text-[9px]

              md:text-[10px]

              lg:text-[11px]
            `}
            style={{
              left: `${particle.startLeft}%`,
              top: `${particle.startTop}%`,
            }}
          >
            {particle.text}
          </span>
        ),
      )}

      {/* ================================================= */}
      {/* MICROPARTÍCULAS */}
      {/* ================================================= */}

      {magicBits.map(
        (bit, index) => {
          const left =
            22 +
            ((index * 7) %
              25);

          const top =
            42 +
            ((index * 9) %
              20);

          return (
            <span
              key={`bit-${index}`}
              className={`
                magic-code-bit
                absolute
                font-mono
                font-semibold
                text-[7px]

                ${
                  index % 3 === 0
                    ? "text-cyan-300"
                    : index % 3 === 1
                      ? "text-violet-300"
                      : "text-emerald-300"
                }

                drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]

                sm:text-[8px]

                lg:text-[10px]
              `}
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
            >
              {bit}
            </span>
          );
        },
      )}
    </div>
  );
}
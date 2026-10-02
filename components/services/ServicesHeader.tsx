"use client";

import { useEffect, useRef, useState } from "react";

export default function ServicesHeader() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoEntered, setVideoEntered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    /*
     * =========================================================
     * VELOCIDADE DO VÍDEO
     *
     * 0.5x:
     * vídeo de 5s ≈ 10 segundos.
     *
     * Continua cinematográfico, mas sem ficar lento demais.
     * =========================================================
     */

    const applySlowMotion = () => {
      video.defaultPlaybackRate = 0.5;
      video.playbackRate = 0.5;
    };

    const startVideo = async () => {
      applySlowMotion();

      try {
        await video.play();
      } catch {
        // Evita erro caso o navegador segure o autoplay.
      }
    };

    /*
     * =========================================================
     * GARANTE QUE A VELOCIDADE CONTINUE EM 0.5x
     * =========================================================
     */

    video.addEventListener(
      "loadedmetadata",
      applySlowMotion,
    );

    video.addEventListener(
      "loadeddata",
      applySlowMotion,
    );

    video.addEventListener(
      "canplay",
      applySlowMotion,
    );

    video.addEventListener(
      "play",
      applySlowMotion,
    );

    startVideo();

    /*
     * =========================================================
     * ENTRADA DO MONSTRO
     *
     * O navegador primeiro renderiza o estado inicial.
     * Depois o monstro aparece suavemente.
     * =========================================================
     */

    let frame1 = 0;
    let frame2 = 0;

    frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(() => {
        setVideoEntered(true);
      });
    });

    return () => {
      video.removeEventListener(
        "loadedmetadata",
        applySlowMotion,
      );

      video.removeEventListener(
        "loadeddata",
        applySlowMotion,
      );

      video.removeEventListener(
        "canplay",
        applySlowMotion,
      );

      video.removeEventListener(
        "play",
        applySlowMotion,
      );

      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
    };
  }, []);

  return (
    <div
      className="
        mb-16
        grid
        gap-10

        md:grid-cols-[1.05fr_0.95fr]
        md:items-center

        lg:gap-12
        xl:gap-16
      "
    >
      {/* =====================================================
          LADO ESQUERDO
          TÍTULO + DESCRIÇÃO
      ====================================================== */}

      <div className="relative z-20">
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-white/40
          "
        >
          02 — Serviços
        </span>

        <h2
          className="
            mt-6

            text-4xl
            font-semibold
            leading-[1.05]
            tracking-[-0.04em]

            sm:text-5xl

            lg:text-6xl

            xl:text-[68px]
          "
        >
          Do conceito

          <span className="block text-white/35">
            ao produto digital.
          </span>
        </h2>

        <p
          className="
            mt-8
            max-w-xl

            text-sm
            leading-7
            text-white/50

            sm:text-base
          "
        >
          Desenvolvimento de soluções digitais completas para empresas,
          marcas e profissionais que precisam transformar uma ideia em algo
          funcional, rápido e preparado para crescer.
        </p>
      </div>

      {/* =====================================================
          LADO DIREITO
          VÍDEO DO VÍRUS
      ====================================================== */}

      <div
        className="
          relative

          hidden

          md:block
          md:min-h-[330px]

          lg:min-h-[420px]

          xl:min-h-[500px]
        "
      >
        {/* ===================================================
            VÍDEO COM MÁSCARA EM DEGRADÊ

            Sem glow vermelho externo.
            Só aparece o vermelho que já existe no próprio vídeo.
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 82% 76% at 66% 50%, black 20%, rgba(0,0,0,0.98) 38%, rgba(0,0,0,0.84) 52%, rgba(0,0,0,0.58) 66%, rgba(0,0,0,0.24) 78%, transparent 92%)",

            maskImage:
              "radial-gradient(ellipse 82% 76% at 66% 50%, black 20%, rgba(0,0,0,0.98) 38%, rgba(0,0,0,0.84) 52%, rgba(0,0,0,0.58) 66%, rgba(0,0,0,0.24) 78%, transparent 92%)",
          }}
        >
          <video
            ref={videoRef}
            src="/virus.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
              absolute

              right-[-10%]
              top-1/2

              object-contain

              mix-blend-screen

              md:h-[130%]
              md:w-[130%]

              lg:h-[150%]
              lg:w-[150%]

              xl:h-[165%]
              xl:w-[165%]
            "
            style={{
              /*
               * =================================================
               * ESTADO INICIAL
               *
               * Começa:
               * - menor
               * - levemente deslocado
               * - invisível
               * - desfocado
               *
               * Depois aparece naturalmente.
               * =================================================
               */

              opacity: videoEntered ? 0.94 : 0,

              transform: videoEntered
                ? "translate3d(0%, -50%, 0) scale(1)"
                : "translate3d(16%, -50%, 0) scale(0.72)",

              filter: videoEntered
                ? "blur(0px) brightness(1) saturate(1)"
                : "blur(10px) brightness(0.4) saturate(0.75)",

              transformOrigin: "72% 50%",

              /*
               * =================================================
               * ENTRADA MAIS RÁPIDA
               * =================================================
               */

              transitionProperty:
                "opacity, transform, filter",

              transitionDuration:
                "2.5s, 3.5s, 2.5s",

              transitionTimingFunction:
                "cubic-bezier(0.16, 1, 0.3, 1)",

              willChange:
                "opacity, transform, filter",
            }}
          />
        </div>

        {/* ===================================================
            FADE ESQUERDO
            FAZ O VÍDEO SE MISTURAR COM O PRETO
        ==================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute

            inset-y-0
            left-[-12%]

            z-10

            w-[54%]

            bg-gradient-to-r
            from-black
            via-black/90
            via-[42%]
            to-transparent
          "
        />

        {/* ===================================================
            FADE SUPERIOR
        ==================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute

            inset-x-0
            top-0

            z-10

            h-[30%]

            bg-gradient-to-b
            from-black
            via-black/75
            to-transparent
          "
        />

        {/* ===================================================
            FADE INFERIOR
        ==================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute

            inset-x-0
            bottom-0

            z-10

            h-[36%]

            bg-gradient-to-t
            from-black
            via-black/80
            to-transparent
          "
        />

        {/* ===================================================
            FADE DIREITO
        ==================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute

            inset-y-0
            right-0

            z-10

            w-[18%]

            bg-gradient-to-l
            from-black
            via-black/70
            to-transparent
          "
        />
      </div>
    </div>
  );
}
"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroTechBubbles from "./HeroTechBubbles";

export default function HeroScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const scrollLayerRef = useRef<HTMLDivElement>(null);
  const mouseLayerRef = useRef<HTMLDivElement>(null);
  const techLayerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const reduceMotion = useReducedMotion();

  /*
   * =====================================================
   * AUTOPLAY DO VÍDEO
   * =====================================================
   */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      video.muted = true;

      video.play().catch(() => {
        // O navegador pode bloquear temporariamente.
      });
    };

    playVideo();

    video.addEventListener(
      "loadeddata",
      playVideo,
    );

    video.addEventListener(
      "canplay",
      playVideo,
    );

    const handleVisibilityChange = () => {
      if (
        document.visibilityState === "visible"
      ) {
        playVideo();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      video.removeEventListener(
        "loadeddata",
        playVideo,
      );

      video.removeEventListener(
        "canplay",
        playVideo,
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, []);

  /*
   * =====================================================
   * GSAP
   * =====================================================
   */

  useLayoutEffect(() => {
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const scene = sceneRef.current;
    const scrollLayer =
      scrollLayerRef.current;
    const mouseLayer =
      mouseLayerRef.current;
    const techLayer =
      techLayerRef.current;

    if (
      !scene ||
      !scrollLayer ||
      !mouseLayer
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * CONFIGURAÇÃO INICIAL
       */

      gsap.set(mouseLayer, {
        transformPerspective: 1400,
        transformOrigin: "50% 65%",
        force3D: true,
      });

      gsap.set(scrollLayer, {
        transformOrigin: "42% 65%",
        force3D: true,
      });

      if (techLayer) {
        gsap.set(techLayer, {
          force3D: true,
        });
      }

      /*
       * =====================================================
       * MOVIMENTO DO MOUSE
       * SOMENTE DESKTOP
       * =====================================================
       */

      const desktopQuery =
        window.matchMedia(
          "(min-width: 1024px) and (pointer: fine)",
        );

      let moveX:
        | ReturnType<typeof gsap.quickTo>
        | undefined;

      let moveY:
        | ReturnType<typeof gsap.quickTo>
        | undefined;

      let rotateX:
        | ReturnType<typeof gsap.quickTo>
        | undefined;

      let rotateY:
        | ReturnType<typeof gsap.quickTo>
        | undefined;

      let techX:
        | ReturnType<typeof gsap.quickTo>
        | undefined;

      let techY:
        | ReturnType<typeof gsap.quickTo>
        | undefined;

      if (desktopQuery.matches) {
        moveX = gsap.quickTo(
          mouseLayer,
          "x",
          {
            duration: 0.9,
            ease: "power3.out",
          },
        );

        moveY = gsap.quickTo(
          mouseLayer,
          "y",
          {
            duration: 0.9,
            ease: "power3.out",
          },
        );

        rotateX = gsap.quickTo(
          mouseLayer,
          "rotationX",
          {
            duration: 1,
            ease: "power3.out",
          },
        );

        rotateY = gsap.quickTo(
          mouseLayer,
          "rotationY",
          {
            duration: 1,
            ease: "power3.out",
          },
        );

        if (techLayer) {
          techX = gsap.quickTo(
            techLayer,
            "x",
            {
              duration: 1.2,
              ease: "power3.out",
            },
          );

          techY = gsap.quickTo(
            techLayer,
            "y",
            {
              duration: 1.2,
              ease: "power3.out",
            },
          );
        }
      }

      const handlePointerMove = (
        event: PointerEvent,
      ) => {
        if (!desktopQuery.matches) {
          return;
        }

        const x =
          event.clientX /
            window.innerWidth -
          0.5;

        const y =
          event.clientY /
            window.innerHeight -
          0.5;

        moveX?.(x * 18);
        moveY?.(y * 10);

        rotateY?.(x * 2.5);
        rotateX?.(-y * 1.8);

        techX?.(x * 30);
        techY?.(y * 18);
      };

      window.addEventListener(
        "pointermove",
        handlePointerMove,
        {
          passive: true,
        },
      );

      /*
       * =====================================================
       * SCROLL
       * =====================================================
       */

      const mm =
        gsap.matchMedia();

      /*
       * DESKTOP
       */

      mm.add(
        "(min-width: 1024px)",
        () => {
          const timeline =
            gsap.timeline({
              scrollTrigger: {
                trigger: scene,
                start: "top top",
                end: "bottom top",
                scrub: 1.15,
                invalidateOnRefresh: true,
              },
            });

          timeline.to(
            scrollLayer,
            {
              y: -35,
              scale: 1.06,
              ease: "none",
            },
            0,
          );

          if (techLayer) {
            timeline.to(
              techLayer,
              {
                y: -55,
                scale: 1.03,
                ease: "none",
              },
              0,
            );
          }

          return () => {
            timeline.kill();
          };
        },
      );

      /*
       * MOBILE / TABLET
       */

      mm.add(
        "(max-width: 1023px)",
        () => {
          gsap.set(mouseLayer, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
          });

          gsap.set(scrollLayer, {
            x: 0,
            y: 0,
            scale: 1,
          });

          if (techLayer) {
            gsap.set(techLayer, {
              x: 0,
              y: 0,
              scale: 1,
            });
          }

          return undefined;
        },
      );

      /*
       * CLEANUP
       */

      return () => {
        window.removeEventListener(
          "pointermove",
          handlePointerMove,
        );

        mm.revert();
      };
    }, scene);

    return () => {
      ctx.revert();
    };
  }, [reduceMotion]);

  return (
    <div
      ref={sceneRef}
      className="
        pointer-events-none
        absolute
        inset-0
        z-10
        overflow-hidden
        bg-black
        [perspective:1400px]
      "
    >
      {/* ================================================= */}
      {/* CENA DO VÍDEO */}
      {/* ================================================= */}

      <div
        ref={scrollLayerRef}
        className="
          absolute
          inset-0
          z-10
          will-change-transform
          [transform-style:preserve-3d]
        "
      >
        <div
          ref={mouseLayerRef}
          className="
            absolute
            inset-0
            will-change-transform
            [transform-style:preserve-3d]
          "
        >
          <motion.div
            initial={
              reduceMotion
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 1.1,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              absolute
              z-10
              flex
              justify-center

              lg:bottom-[-2%]
              lg:left-[-2%]
              lg:items-end

              max-lg:left-1/2
              max-lg:top-[475px]
              max-lg:w-full
              max-lg:-translate-x-1/2
              max-lg:items-start

              max-md:top-[480px]

              max-sm:top-[470px]
            "
          >
            {/* ============================================= */}
            {/* SOMENTE VÍDEO — NENHUMA IMAGEM */}
            {/* ============================================= */}

            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              className="
                block
                h-auto
                select-none
                object-contain
                mix-blend-screen

                lg:w-[56vw]
                lg:min-w-[700px]
                lg:max-w-[980px]

                xl:w-[54vw]

                2xl:w-[52vw]

                max-lg:w-[78vw]
                max-lg:min-w-0
                max-lg:max-w-[720px]

                max-md:w-[90vw]
                max-md:max-w-none

                max-sm:w-[94vw]
              "
            >
              <source
                src="/hero-hacker.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* TECNOLOGIAS */}
      {/* ================================================= */}

      <div
        ref={techLayerRef}
        className="
          absolute
          inset-0
          z-[15]
          will-change-transform
        "
      >
        <HeroTechBubbles />
      </div>

      {/* ================================================= */}
      {/* SOMBRAS DESKTOP */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          hidden
          h-[15%]
          bg-gradient-to-t
          from-black
          via-black/65
          to-transparent
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          hidden
          w-[6%]
          bg-gradient-to-r
          from-black
          to-transparent
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-[48%]
          z-20
          hidden
          w-[18%]
          bg-gradient-to-r
          from-transparent
          via-black/45
          to-black
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-20
          hidden
          h-[10%]
          bg-gradient-to-b
          from-black/60
          to-transparent
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          hidden
          bg-[radial-gradient(circle_at_28%_50%,transparent_37%,rgba(0,0,0,0.42)_100%)]
          lg:block
        "
      />
    </div>
  );
}
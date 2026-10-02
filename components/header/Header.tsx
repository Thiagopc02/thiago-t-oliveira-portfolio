"use client";

import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-white/5
        bg-black/70
        backdrop-blur-2xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[72px]
          max-w-[1500px]
          items-center
          justify-between
          px-5
          sm:px-6
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            MARCA / LOGO
        ====================================================== */}

        <a
          href="#inicio"
          aria-label="Ir para o início"
          className="
            group
            relative
            flex
            min-w-0
            items-center
          "
        >
          {/* glow vermelho grande */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[40px]
              w-[155px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-red-600/20
              blur-[26px]
              transition-all
              duration-500
              group-hover:bg-red-500/30
              group-hover:blur-[30px]
              sm:w-[190px]
              lg:w-[210px]
            "
          />

          {/* glow vermelho concentrado */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[24px]
              w-[120px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-red-500/20
              blur-[12px]
              transition-all
              duration-500
              group-hover:bg-red-500/35
              sm:w-[150px]
              lg:w-[165px]
            "
          />

          {/* imagem */}

          <img
            src="/tto.png"
            alt="Thiago T Oliveira"
            draggable={false}
            className="
              relative
              z-10
              h-auto
              w-[145px]
              select-none
              object-contain
              drop-shadow-[0_0_8px_rgba(255,0,0,0.75)]
              drop-shadow-[0_0_18px_rgba(255,0,0,0.30)]
              transition-all
              duration-500
              group-hover:scale-[1.025]
              group-hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]
              sm:w-[175px]
              md:w-[185px]
              lg:w-[195px]
              xl:w-[205px]
            "
          />
        </a>

        {/* =====================================================
            NAVEGAÇÃO
        ====================================================== */}

        <div className="flex items-center gap-5">
          <DesktopNav />

          {/* ===================================================
              BOTÃO CONTATO
          ==================================================== */}

          <a
            href="#contato"
            className="
              group
              relative
              hidden
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-white/10
              bg-white
              px-5
              py-2.5
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:border-red-500/30
              lg:inline-flex
            "
          >
            {/* reflexo vermelho */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                translate-x-[-120%]
                bg-gradient-to-r
                from-transparent
                via-red-500/15
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-[120%]
              "
            />

            <span className="relative z-10">
              Falar comigo
            </span>
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
import HeroContent from "./HeroContent";
import HeroScene from "./HeroScene";

import HeroCodeTransition from "./HeroCodeTransition";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        overflow-hidden
        bg-black
        text-white

        min-h-[1120px]
        sm:min-h-[1160px]
        md:min-h-[1200px]

        lg:min-h-screen
      "
    >
      {/* =====================================================
          CENA ÚNICA
          HeroScene contém somente o vídeo.
      ====================================================== */}

      <HeroScene />
      <HeroCodeTransition />

      {/* =====================================================
          CONTEÚDO PRINCIPAL
      ====================================================== */}

      <div
        className="
          relative
          z-30
          mx-auto
          flex
          w-full
          max-w-[1600px]

          items-start

          px-6
          pt-[105px]

          sm:px-7

          md:px-8
          md:pt-[105px]

          lg:min-h-screen
          lg:items-center
          lg:justify-end
          lg:px-10
          lg:pb-10
          lg:pt-[90px]

          xl:px-14
        "
      >
        <div
          className="
            w-full

            lg:w-[48%]
            xl:w-[47%]
            2xl:w-[46%]
          "
        >
          <HeroContent />
        </div>
      </div>

      {/* =====================================================
          INDICADOR DE SCROLL
          SOMENTE DESKTOP
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-7
          left-1/2
          z-40

          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3

          lg:flex
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/30
          "
        >
          Scroll
        </span>

        <div
          className="
            h-12
            w-px
            bg-gradient-to-b
            from-white/30
            to-transparent
          "
        />
      </div>
    </section>
  );
}
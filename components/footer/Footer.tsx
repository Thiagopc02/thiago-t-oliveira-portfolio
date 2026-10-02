import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterNavigation from "./FooterNavigation";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-black
        px-6
        py-20
        text-white

        md:px-10
        md:py-24

        lg:px-16
        lg:py-28
      "
    >
      {/* =====================================================
          GLOW VERMELHO PRINCIPAL
          Fica atrás da área da marca
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[20%]
          top-[40%]

          h-[420px]
          w-[620px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-red-600/[0.09]

          blur-[140px]

          lg:h-[520px]
          lg:w-[760px]
        "
      />

      {/* =====================================================
          GLOW VERMELHO MAIS FORTE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[18%]
          top-[42%]

          h-[180px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-red-500/[0.10]

          blur-[75px]
        "
      />

      {/* =====================================================
          GLOW NEUTRO CENTRAL
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-[-250px]
          left-1/2

          h-[500px]
          w-[800px]

          -translate-x-1/2

          rounded-full

          bg-white/[0.02]

          blur-[150px]
        "
      />

      {/* =====================================================
          LINHA VERMELHA SUPERIOR
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[8%]
          top-0

          h-px
          w-[34%]

          bg-gradient-to-r
          from-transparent
          via-red-500/35
          to-transparent

          blur-[0.5px]
        "
      />

      {/* =====================================================
          LINHA AZUL/CYANO DO OUTRO LADO
          Mantém conexão com o restante do site
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          right-[8%]
          top-0

          h-px
          w-[24%]

          bg-gradient-to-r
          from-transparent
          via-cyan-400/15
          to-transparent
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

          max-w-7xl
        "
      >
        {/* ===================================================
            CONTEÚDO SUPERIOR
        ==================================================== */}

        <div
          className="
            grid

            gap-14

            lg:grid-cols-[1.5fr_0.6fr_0.6fr]

            xl:gap-20
          "
        >
          {/* LOGO / MARCA */}

          <div className="relative">
            <FooterBrand />
          </div>

          {/* NAVEGAÇÃO */}

          <FooterNavigation />

          {/* REDES */}

          <FooterSocial />
        </div>

        {/* ===================================================
            DIVISÓRIA
        ==================================================== */}

        <div
          aria-hidden="true"
          className="
            my-12
            h-px
            w-full

            bg-gradient-to-r

            from-transparent
            via-white/10
            to-transparent

            lg:my-16
          "
        />

        {/* ===================================================
            BASE DO RODAPÉ
        ==================================================== */}

        <FooterBottom />
      </div>
    </footer>
  );
}
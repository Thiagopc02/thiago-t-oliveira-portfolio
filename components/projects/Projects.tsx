import ProjectRevealDeck from "./ProjectRevealDeck";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsReveal from "./ProjectsReveal";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="
        relative
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          LUZ DE FUNDO - AZUL
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[18%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/[0.04]
          blur-[150px]
        "
      />

      {/* =====================================================
          LUZ DE FUNDO - ROXA
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[12%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/[0.035]
          blur-[150px]
        "
      />

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div className="relative z-10">

        {/* ===================================================
            CABEÇALHO

            IMPORTANTE:
            NÃO existe mais max-w-7xl aqui.

            Dessa forma a imagem consegue realmente ir
            para a esquerda e o texto para a direita
            em monitores grandes.
        ==================================================== */}

        <div
          className="
            w-full
            px-6
            pt-28

            md:px-10

            lg:px-8
            lg:pt-32

            xl:px-10

            2xl:px-12
          "
        >
          <ProjectsReveal>
            <ProjectsHeader />
          </ProjectsReveal>
        </div>

        {/* ===================================================
            CARTAS
        ==================================================== */}

        <ProjectRevealDeck />

      </div>
    </section>
  );
}
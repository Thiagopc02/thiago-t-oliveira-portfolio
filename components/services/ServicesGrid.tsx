"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

/* =========================================================
   SERVIÇOS

   Cada serviço agora possui sua própria imagem 3D
   armazenada diretamente dentro de /public.
========================================================= */

const services = [
  {
    number: "01",
    title: "Sites & Landing Pages",
    description:
      "Sites modernos, rápidos e responsivos para empresas, profissionais, produtos e campanhas digitais.",
    technologies: ["Next.js", "React", "Tailwind"],
    image: "/browser.png",
  },

  {
    number: "02",
    title: "E-commerce",
    description:
      "Lojas e catálogos digitais com produtos, carrinho, pedidos, autenticação e experiências de compra personalizadas.",
    technologies: ["React", "Firebase", "APIs"],
    image: "/e-commerce.png",
  },

  {
    number: "03",
    title: "Sistemas Web",
    description:
      "Aplicações personalizadas com login, áreas restritas, regras de negócio e funcionalidades desenvolvidas para cada projeto.",
    technologies: ["Next.js", "TypeScript", "Firebase"],
    image: "/sistemas-web.png",
  },

  {
    number: "04",
    title: "Dashboards & Admin",
    description:
      "Painéis administrativos para gerenciamento de usuários, produtos, pedidos, conteúdo e operações.",
    technologies: ["React", "Firestore", "TypeScript"],
    image: "/dashboards.png",
  },

  {
    number: "05",
    title: "Backend & Integrações",
    description:
      "Integração entre aplicações, bancos de dados, autenticação, APIs e serviços externos.",
    technologies: ["Firebase", "REST API", "Firestore"],
    image: "/backend.png",
  },

  {
    number: "06",
    title: "Manutenção & Evolução",
    description:
      "Correção de bugs, melhorias de interface, responsividade, novas funcionalidades e evolução de projetos existentes.",
    technologies: ["Debug", "Performance", "UI"],
    image: "/manutencao.png",
  },
];

/* =========================================================
   NORMALIZAÇÃO DO ÍNDICE
========================================================= */

function normalizeIndex(
  index: number,
  total: number,
) {
  return ((index % total) + total) % total;
}

/* =========================================================
   DISTÂNCIA CIRCULAR ENTRE OS CARDS
========================================================= */

function getCircularOffset(
  index: number,
  activeIndex: number,
  total: number,
) {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

/* =========================================================
   COMPONENTE
========================================================= */

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] =
    useState(1);

  const total = services.length;

  /* =======================================================
     NAVEGAÇÃO
  ======================================================= */

  const goPrev = () => {
    setActiveIndex((prev) =>
      normalizeIndex(prev - 1, total),
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      normalizeIndex(prev + 1, total),
    );
  };

  /* =======================================================
     POSICIONAMENTO 3D DESKTOP
  ======================================================= */

  const desktopCards = useMemo(() => {
    const angleStep =
      (Math.PI * 2) / total;

    return services.map(
      (service, index) => {
        const offset =
          getCircularOffset(
            index,
            activeIndex,
            total,
          );

        /*
         * O card selecionado fica na parte frontal
         * e inferior do círculo.
         */

        const angle =
          offset * angleStep +
          Math.PI / 2;

        /*
         * TAMANHO DA ELIPSE
         *
         * radiusX:
         * abertura lateral da roda.
         *
         * radiusY:
         * profundidade visual.
         */

        const radiusX = 360;
        const radiusY = 170;

        const x =
          Math.cos(angle) *
          radiusX;

        const y =
          Math.sin(angle) *
          radiusY;

        /*
         * PROFUNDIDADE
         *
         * 0 = fundo
         * 1 = frente
         */

        const depth =
          (Math.sin(angle) + 1) / 2;

        /*
         * Quanto mais perto:
         *
         * - maior
         * - mais nítido
         * - mais claro
         */

        const scale =
          0.52 +
          depth * 0.48;

        const opacity =
          0.16 +
          depth * 0.84;

        const rotateZ =
          (x / radiusX) * 15;

        const blur =
          (1 - depth) * 1.8;

        return {
          ...service,

          index,

          x,
          y,

          scale,
          opacity,
          rotateZ,
          blur,

          isActive:
            offset === 0,

          zIndex:
            Math.round(
              depth * 100,
            ) +
            (offset === 0
              ? 50
              : 0),
        };
      },
    );
  }, [activeIndex, total]);

  /* =======================================================
     MOBILE
  ======================================================= */

  const prevIndex =
    normalizeIndex(
      activeIndex - 1,
      total,
    );

  const nextIndex =
    normalizeIndex(
      activeIndex + 1,
      total,
    );

  return (
    <div className="mt-14">
      {/* ===================================================
          CABEÇALHO
      ==================================================== */}

      <div
        className="
          mb-8
          flex
          items-end
          justify-between
          gap-6
        "
      >
        <div>
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-cyan-300/65
            "
          >
            Service.Carousel
          </span>

          <p
            className="
              mt-3
              text-sm
              text-white/50

              sm:text-base
            "
          >
            Navegue pelos serviços e explore cada solução.
          </p>
        </div>
      </div>

      {/* ===================================================
          MOBILE
      ==================================================== */}

      <div className="md:hidden">
        <div
          className="
            relative
            mx-auto

            min-h-[520px]

            w-full
            max-w-[360px]

            overflow-hidden
          "
        >
          {/* glow central */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute

              left-1/2
              top-[53%]

              h-[170px]
              w-[170px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-cyan-400/[0.09]

              blur-[65px]
            "
          />

          {/* ===============================================
              CARD ANTERIOR
          ================================================ */}

          <div
            className="
              absolute

              left-[-4%]
              top-[33%]

              w-[160px]

              opacity-25
            "
            style={{
              transform:
                "translateY(-50%) rotate(-18deg) scale(0.8)",
            }}
          >
            <ServiceCard
              {...services[prevIndex]}
              compact
            />
          </div>

          {/* ===============================================
              PRÓXIMO CARD
          ================================================ */}

          <div
            className="
              absolute

              right-[-4%]
              top-[33%]

              w-[160px]

              opacity-25
            "
            style={{
              transform:
                "translateY(-50%) rotate(18deg) scale(0.8)",
            }}
          >
            <ServiceCard
              {...services[nextIndex]}
              compact
            />
          </div>

          {/* ===============================================
              CARD ATIVO
          ================================================ */}

          <div
            className="
              absolute

              left-1/2
              top-[49%]

              w-[250px]

              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <ServiceCard
              {...services[activeIndex]}
              active
            />
          </div>

          {/* ===============================================
              CONTROLES MOBILE
          ================================================ */}

          <div
            className="
              absolute

              bottom-4
              left-1/2

              flex

              -translate-x-1/2

              items-center
              gap-4
            "
          >
            <button
              type="button"
              onClick={goPrev}
              aria-label="Serviço anterior"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                text-white/65

                transition

                hover:border-cyan-300/35
                hover:text-cyan-200
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Próximo serviço"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                text-white/65

                transition

                hover:border-cyan-300/35
                hover:text-cyan-200
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================
          TABLET + DESKTOP
      ==================================================== */}

      <div
        className="
          relative
          hidden
          md:block
        "
      >
        <div
          className="
            relative
            mx-auto

            min-h-[760px]

            w-full
            max-w-[1240px]

            overflow-hidden
          "
        >
          {/* ===============================================
              BRILHO CENTRAL
          ================================================ */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute

              left-1/2
              top-[52%]

              h-[360px]
              w-[360px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-cyan-400/[0.08]

              blur-[120px]
            "
          />

          {/* ===============================================
              ELIPSE GUIA
          ================================================ */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute

              left-1/2
              top-[43%]

              h-[340px]
              w-[860px]

              -translate-x-1/2

              rounded-full

              border
              border-white/[0.05]
            "
          />

          {/* ===============================================
              CARDS DA RODA
          ================================================ */}

          {desktopCards.map(
            (card) => (
              <button
                key={card.number}
                type="button"
                onClick={() =>
                  setActiveIndex(
                    card.index,
                  )
                }
                aria-label={`Selecionar ${card.title}`}
                className="
                  absolute

                  left-1/2
                  top-[43%]

                  w-[235px]

                  text-left

                  transition-all
                  duration-700

                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  xl:w-[245px]
                "
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translate(${card.x}px, ${card.y}px)
                    scale(${card.scale})
                    rotate(${card.rotateZ}deg)
                  `,

                  opacity:
                    card.opacity,

                  filter: `blur(${card.blur}px)`,

                  zIndex:
                    card.zIndex,
                }}
              >
                <ServiceCard
                  {...card}
                  active={
                    card.isActive
                  }
                  compact={
                    !card.isActive
                  }
                />
              </button>
            ),
          )}

          {/* ===============================================
              CONTROLES DESKTOP
          ================================================ */}

          <div
            className="
              absolute

              bottom-8
              left-1/2

              flex

              -translate-x-1/2

              items-center
              gap-4

              z-[200]
            "
          >
            <button
              type="button"
              onClick={goPrev}
              aria-label="Serviço anterior"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-black/60

                text-white/65

                backdrop-blur-md

                transition
                duration-300

                hover:border-cyan-300/40
                hover:bg-cyan-300/[0.04]
                hover:text-cyan-200
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Próximo serviço"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-black/60

                text-white/65

                backdrop-blur-md

                transition
                duration-300

                hover:border-cyan-300/40
                hover:bg-cyan-300/[0.04]
                hover:text-cyan-200
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
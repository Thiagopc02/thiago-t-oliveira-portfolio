"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Contato", href: "#contato" },
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* =====================================================
          BOTÃO MOBILE
      ====================================================== */}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        className="
          relative

          flex
          h-11
          w-11

          items-center
          justify-center

          overflow-hidden

          rounded-full

          border
          border-white/10

          bg-white/[0.04]

          text-white

          backdrop-blur-xl

          transition-all
          duration-300

          hover:border-red-500/30
          hover:bg-red-500/[0.05]
          hover:text-red-100
        "
      >
        {/* glow vermelho no hover */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0

            rounded-full

            bg-red-500/0

            blur-xl

            transition-all
            duration-300

            group-hover:bg-red-500/10
          "
        />

        <span className="relative z-10">
          {open ? <X size={22} /> : <Menu size={22} />}
        </span>
      </button>

      {/* =====================================================
          MENU ABERTO
      ====================================================== */}

      {open && (
        <div
          className="
            fixed
            inset-0
            top-[72px]
            z-40

            overflow-y-auto

            bg-black/95

            px-6
            py-8

            backdrop-blur-2xl
          "
        >
          {/* =================================================
              LOGO TTO
          ================================================== */}

          <div
            className="
              relative

              mx-auto
              mb-9

              flex
              max-w-[320px]

              items-center
              justify-center

              px-4
              py-3
            "
          >
            {/* glow grande */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-[70%]
                w-[90%]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-red-600/20

                blur-[38px]
              "
            />

            {/* glow mais forte */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-[35%]
                w-[70%]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-red-500/20

                blur-[18px]
              "
            />

            <img
              src="/tto.png"
              alt="Thiago T Oliveira"
              draggable={false}
              className="
                relative
                z-10

                h-auto
                w-full

                select-none
                object-contain

                drop-shadow-[0_0_10px_rgba(255,0,0,0.65)]
                drop-shadow-[0_0_24px_rgba(255,0,0,0.28)]
              "
            />
          </div>

          {/* =================================================
              NAVEGAÇÃO
          ================================================== */}

          <nav className="flex flex-col gap-2">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="
                  group
                  relative

                  flex
                  items-center
                  justify-between

                  overflow-hidden

                  rounded-2xl

                  border
                  border-transparent

                  px-5
                  py-4

                  text-xl
                  font-medium

                  text-zinc-300

                  transition-all
                  duration-300

                  hover:border-red-500/20
                  hover:bg-red-500/[0.035]
                  hover:text-white
                "
              >
                <span className="flex items-center gap-4">
                  <span
                    className="
                      font-mono

                      text-[9px]

                      tracking-[0.18em]

                      text-red-400/35

                      transition-colors
                      duration-300

                      group-hover:text-red-400/70
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {link.label}
                </span>

                <span
                  className="
                    translate-x-2

                    text-sm

                    text-red-400/0

                    transition-all
                    duration-300

                    group-hover:translate-x-0
                    group-hover:text-red-400/70
                  "
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* =================================================
              BOTÃO CONTATO
          ================================================== */}

          <a
            href="#contato"
            onClick={closeMenu}
            className="
              group

              relative

              mt-8

              flex
              w-full

              items-center
              justify-center

              overflow-hidden

              rounded-full

              border
              border-red-500/20

              bg-white

              px-6
              py-4

              font-semibold

              text-black

              transition-all
              duration-300

              hover:scale-[1.02]
              hover:border-red-400/40
            "
          >
            <span
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                inset-0

                bg-gradient-to-r

                from-transparent
                via-red-500/10
                to-transparent

                opacity-0

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
            />

            <span className="relative z-10">
              Falar comigo
            </span>
          </a>

          {/* =================================================
              ASSINATURA
          ================================================== */}

          <div
            className="
              mt-10

              border-t
              border-white/[0.06]

              pt-6

              text-center

              font-mono

              text-[8px]

              uppercase

              tracking-[0.3em]

              text-white/20
            "
          >
            Thiago T Oliveira • Full-Stack Developer
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Contato", href: "#contato" },
];

export default function DesktopNav() {
  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const section = document.querySelector(href);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(event) =>
            handleNavigation(event, link.href)
          }
          className="
            group
            relative
            cursor-pointer
            text-sm
            font-medium
            tracking-[0.01em]
            text-zinc-400
            transition-all
            duration-300
            hover:text-white
          "
        >
          <span className="relative z-10">
            {link.label}
          </span>

          {/* brilho vermelho */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-8
              w-[120%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-red-500/0
              blur-xl
              transition-all
              duration-300
              group-hover:bg-red-500/10
            "
          />

          {/* linha neon inferior */}
          <span
            aria-hidden="true"
            className="
              absolute
              -bottom-2
              left-1/2
              h-px
              w-0
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-red-500
              to-transparent
              shadow-[0_0_8px_rgba(255,0,0,0.8)]
              transition-all
              duration-300
              group-hover:w-full
            "
          />

          {/* ponto luminoso */}
          <span
            aria-hidden="true"
            className="
              absolute
              -top-2
              left-1/2
              h-1
              w-1
              -translate-x-1/2
              rounded-full
              bg-red-400
              opacity-0
              shadow-[0_0_12px_rgba(255,40,40,0.95)]
              transition-all
              duration-300
              group-hover:opacity-100
            "
          />
        </a>
      ))}
    </nav>
  );
}
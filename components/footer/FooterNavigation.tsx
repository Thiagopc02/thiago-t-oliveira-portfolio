const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Contato", href: "#contato" },
];

export default function FooterNavigation() {
  return (
    <div>
      <p
        className="
          mb-5
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-white/25
        "
      >
        Navegação
      </p>

      <nav className="flex flex-col gap-3">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="
              w-fit
              text-sm
              text-white/45
              transition
              duration-300
              hover:translate-x-1
              hover:text-white
            "
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
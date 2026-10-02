export default function AboutContent() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
        Código com propósito.
        <span className="block text-white/35">
          Soluções para problemas reais.
        </span>
      </h2>

      <div className="mt-10 space-y-6 text-sm leading-7 text-white/55 sm:text-base">
        <p>
          Sou Thiago Torres, Desenvolvedor Full Stack focado na criação de
          experiências digitais modernas, funcionais e preparadas para uso
          real.
        </p>

        <p>
          Desenvolvo sites, aplicações web, e-commerces, sistemas
          administrativos e plataformas personalizadas, trabalhando desde a
          interface até banco de dados, autenticação e integrações.
        </p>

        <p>
          Meu objetivo não é simplesmente escrever código. É entender o
          problema, transformar uma ideia em uma solução clara e construir
          produtos digitais rápidos, responsivos e fáceis de utilizar.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Firebase",
          "Tailwind CSS",
        ].map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55 transition duration-300 hover:border-white/30 hover:text-white"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}
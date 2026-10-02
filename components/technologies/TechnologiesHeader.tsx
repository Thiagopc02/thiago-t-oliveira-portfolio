export default function TechnologiesHeader() {
  return (
    <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
      <div>
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-white/40
          "
        >
          04 — Tecnologias
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-semibold
            leading-[1.05]
            tracking-[-0.04em]
            sm:text-5xl
            lg:text-6xl
          "
        >
          Ferramentas para
          <span className="block text-white/35">
            construir ideias reais.
          </span>
        </h2>
      </div>

      <div className="max-w-lg lg:justify-self-end">
        <p className="text-sm leading-7 text-white/50 sm:text-base">
          Utilizo tecnologias modernas para desenvolver desde interfaces
          responsivas até sistemas completos, bancos de dados,
          autenticação, integrações e aplicações preparadas para crescer.
        </p>
      </div>
    </div>
  );
}
export default function ContactHeader() {
  return (
    <div className="max-w-4xl">
      <span
        className="
          text-[10px]
          font-medium
          uppercase
          tracking-[0.4em]
          text-white/40
        "
      >
        05 — Contato
      </span>

      <h2
        className="
          mt-5
          text-4xl
          font-semibold
          leading-[1]
          tracking-[-0.045em]
          text-white
          sm:text-5xl
          lg:text-6xl
          xl:text-7xl
        "
      >
        Tem uma ideia?

        <span
          className="
            block
            text-white/30
          "
        >
          Vamos conversar.
        </span>
      </h2>

      <p
        className="
          mt-6
          max-w-xl
          text-sm
          leading-7
          text-white/45
          sm:text-base
        "
      >
        Conte brevemente o que você precisa. Responderei o mais rápido possível.
      </p>
    </div>
  );
}
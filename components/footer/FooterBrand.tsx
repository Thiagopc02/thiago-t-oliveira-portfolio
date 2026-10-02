import Image from "next/image";

export default function FooterBrand() {
  return (
    <div className="relative max-w-2xl">
      <p
        className="
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-white/30
        "
      >
        Full-Stack Web Developer
      </p>

      <div
        className="
          relative
          mt-6
          w-full
          max-w-[620px]
        "
      >
        {/* Glow vermelho principal */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[440px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-red-600/20
            blur-[95px]
          "
        />

        {/* Glow vermelho extra */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[40%]
            top-[48%]
            h-[120px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-red-500/25
            blur-[55px]
          "
        />

        {/* Moldura da imagem */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[26px]
            border
            border-red-500/15
            bg-gradient-to-br
            from-red-950/20
            via-black
            to-black
            px-3
            py-3
            shadow-[0_0_35px_rgba(255,0,0,0.08)]
            backdrop-blur-sm
            sm:px-4
            sm:py-4
          "
        >
          <Image
            src="/tto.png"
            alt="Thiago T Oliveira"
            width={1400}
            height={420}
            priority
            className="
              h-auto
              w-full
              object-contain
              drop-shadow-[0_0_10px_rgba(255,0,0,0.55)]
              drop-shadow-[0_0_22px_rgba(255,0,0,0.30)]
            "
          />
        </div>
      </div>

      <p
        className="
          mt-7
          max-w-xl
          text-sm
          leading-7
          text-white/40
          sm:text-base
        "
      >
        Desenvolvimento de sites, aplicações, sistemas e experiências digitais
        modernas, responsivas e preparadas para crescer.
      </p>
    </div>
  );
}
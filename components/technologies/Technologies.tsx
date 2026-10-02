import TechnologiesGrid from "./TechnologiesGrid";
import TechnologiesHeader from "./TechnologiesHeader";
import TechnologiesReveal from "./TechnologiesReveal";

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-28
        text-white
        md:px-10
        lg:px-16
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[10%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-blue-500/[0.035]
          blur-[160px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[10%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-violet-500/[0.035]
          blur-[160px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        <TechnologiesReveal>
          <TechnologiesHeader />
        </TechnologiesReveal>

        <TechnologiesReveal delay={0.15}>
          <TechnologiesGrid />
        </TechnologiesReveal>
      </div>
    </section>
  );
}
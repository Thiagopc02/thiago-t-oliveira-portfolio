import TechnologyCard from "./TechnologyCard";
import { technologies } from "./technologiesData";

export default function TechnologiesGrid() {
  return (
    <div
      className="
        relative

        grid
        gap-px

        overflow-hidden

        border
        border-white/10

        bg-white/10

        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
        />
      ))}

      {/* brilho muito suave no centro do grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.015]
          blur-[140px]
        "
      />
    </div>
  );
}
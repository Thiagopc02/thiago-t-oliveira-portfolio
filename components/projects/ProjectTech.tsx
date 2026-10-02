type ProjectTechProps = {
  technologies: string[];
};

export default function ProjectTech({
  technologies,
}: ProjectTechProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.025]
            px-3
            py-1.5
            text-[10px]
            uppercase
            tracking-[0.14em]
            text-white/40
            transition
            duration-300
            hover:border-white/25
            hover:text-white/70
          "
        >
          {technology}
        </span>
      ))}
    </div>
  );
}
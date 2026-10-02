import ServicesGrid from "./ServicesGrid";
import ServicesHeader from "./ServicesHeader";
import ServicesReveal from "./ServicesReveal";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-10 lg:px-16"
    >
      {/* Iluminação de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ServicesReveal>
          <ServicesHeader />
        </ServicesReveal>

        <ServicesReveal delay={0.15}>
          <ServicesGrid />
        </ServicesReveal>
      </div>
    </section>
  );
}
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactReveal from "./ContactReveal";

export default function Contact() {
  return (
    <section
      id="contato"
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-28
        text-white
        md:px-10
        lg:px-16
        lg:py-36
      "
    >
      {/* Luz de fundo */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-52
          top-[20%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-blue-500/[0.035]
          blur-[170px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-[5%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-violet-500/[0.04]
          blur-[170px]
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
        <ContactReveal>
          <ContactHeader />
        </ContactReveal>

        <div
          className="
            mt-20
            grid
            gap-12
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-16
          "
        >
          <ContactReveal delay={0.1}>
            <ContactInfo />
          </ContactReveal>

          <ContactReveal delay={0.2}>
            <ContactForm />
          </ContactReveal>
        </div>
      </div>
    </section>
  );
}
"use client";

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    const nextSection = hero.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToNextSection}
      aria-label="Scroll to explore"
      className="
        group
        absolute
        bottom-8
        left-1/2
        z-30
        flex
        -translate-x-1/2
        flex-col
        items-center
        gap-3
        text-white/50
        transition
        duration-300
        hover:text-white
      "
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.35em]">
        Scroll
      </span>

      <span
        className="
          relative
          flex
          h-10
          w-6
          justify-center
          rounded-full
          border
          border-white/30
          transition
          duration-300
          group-hover:border-white/70
        "
      >
        <span
          className="
            mt-2
            h-1.5
            w-1
            animate-bounce
            rounded-full
            bg-white/70
          "
        />
      </span>
    </button>
  );
}
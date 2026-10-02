"use client";

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="
        mt-16
        flex
        flex-col
        gap-4
        border-t
        border-white/10
        pt-6
        text-xs
        text-white/25
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <p>
        © {currentYear} Thiago Torres. Todos os direitos reservados.
      </p>

      <p>
        Desenvolvido com Next.js + TypeScript
      </p>
    </div>
  );
}
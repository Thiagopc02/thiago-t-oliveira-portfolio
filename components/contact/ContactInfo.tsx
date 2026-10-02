import {
  Clock3,
  Globe2,
  MessageCircle,
} from "lucide-react";

import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <div>
      {/* =====================================================
          CARD DE INFORMAÇÕES
      ====================================================== */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.02]
          p-6
          sm:p-7
        "
      >
        {/* STATUS */}

        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-emerald-400
                opacity-50
              "
            />

            <span
              className="
                relative
                inline-flex
                h-3
                w-3
                rounded-full
                bg-emerald-400
              "
            />
          </span>

          <span
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-white/60
            "
          >
            Disponível para novos projetos
          </span>
        </div>

        {/* ===================================================
            INFORMAÇÕES
        ==================================================== */}

        <div className="mt-7 space-y-3">
          {/* REMOTO */}

          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-transparent
              px-3
              py-3
              transition
              duration-300
              hover:border-white/[0.06]
              hover:bg-white/[0.02]
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                text-white/35
              "
            >
              <Globe2
                size={16}
                strokeWidth={1.5}
              />
            </div>

            <p className="text-sm text-white/70">
              Trabalho remoto
            </p>
          </div>

          {/* HORÁRIOS */}

          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-transparent
              px-3
              py-3
              transition
              duration-300
              hover:border-white/[0.06]
              hover:bg-white/[0.02]
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                text-white/35
              "
            >
              <Clock3
                size={16}
                strokeWidth={1.5}
              />
            </div>

            <p className="text-sm text-white/70">
              Horários flexíveis
            </p>
          </div>

          {/* COMUNICAÇÃO */}

          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-transparent
              px-3
              py-3
              transition
              duration-300
              hover:border-white/[0.06]
              hover:bg-white/[0.02]
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                text-white/35
              "
            >
              <MessageCircle
                size={16}
                strokeWidth={1.5}
              />
            </div>

            <p className="text-sm text-white/70">
              Comunicação direta
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          REDES
      ====================================================== */}

      <div className="mt-6">
        <p
          className="
            mb-3
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          Encontre-me também
        </p>

        <SocialLinks />
      </div>
    </div>
  );
}
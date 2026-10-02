"use client";

import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import {
  FormEvent,
  useState,
} from "react";

type FormData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

const projectLabels: Record<string, string> = {
  site: "Site profissional",
  "landing-page": "Landing page",
  ecommerce: "E-commerce",
  system: "Sistema web",
  dashboard: "Dashboard / Painel",
  maintenance: "Manutenção / Melhorias",
  other: "Outro projeto",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<FormData>(initialForm);

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const projectName =
      projectLabels[formData.projectType] ||
      formData.projectType;

    const whatsappNumber = "5562996916206";

    const whatsappMessage = `
Olá, Thiago! Vim através do seu portfólio e gostaria de conversar sobre um projeto.

👤 *Nome:* ${formData.name}
📧 *E-mail:* ${formData.email}
💻 *Tipo de projeto:* ${projectName}

📝 *Sobre o projeto:*
${formData.message}

Gostaria de saber mais sobre como podemos desenvolver esse projeto.
    `.trim();

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/15

        bg-white/[0.025]

        p-6

        sm:p-8

        lg:p-10

        shadow-[0_0_45px_rgba(0,0,0,0.25)]
      "
    >
      {/* =====================================================
          GLOW INTERNO
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-24
          -top-24

          h-56
          w-56

          rounded-full

          bg-cyan-400/[0.035]

          blur-[85px]
        "
      />

      <div className="relative z-10">
        {/* ===================================================
            NOME + E-MAIL
        ==================================================== */}

        <div className="grid gap-7 sm:grid-cols-2">
          {/* NOME */}

          <div>
            <label
              htmlFor="name"
              className="
                mb-2.5
                block

                text-[11px]
                font-semibold

                uppercase

                tracking-[0.18em]

                text-white/65
              "
            >
              Seu nome *
            </label>

            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(event) =>
                handleChange(
                  "name",
                  event.target.value
                )
              }
              placeholder="Como posso te chamar?"
              className="
                w-full

                border-b
                border-white/15

                bg-transparent

                px-0
                py-4

                text-[15px]
                font-medium
                text-white

                outline-none

                transition-all
                duration-300

                placeholder:text-white/35
                placeholder:font-normal

                focus:border-cyan-300/55
              "
            />
          </div>

          {/* E-MAIL */}

          <div>
            <label
              htmlFor="email"
              className="
                mb-2.5
                block

                text-[11px]
                font-semibold

                uppercase

                tracking-[0.18em]

                text-white/65
              "
            >
              E-mail *
            </label>

            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(event) =>
                handleChange(
                  "email",
                  event.target.value
                )
              }
              placeholder="seu@email.com"
              className="
                w-full

                border-b
                border-white/15

                bg-transparent

                px-0
                py-4

                text-[15px]
                font-medium
                text-white

                outline-none

                transition-all
                duration-300

                placeholder:text-white/35
                placeholder:font-normal

                focus:border-cyan-300/55
              "
            />
          </div>
        </div>

        {/* ===================================================
            TIPO DE PROJETO
        ==================================================== */}

        <div className="mt-7">
          <label
            htmlFor="projectType"
            className="
              mb-2.5
              block

              text-[11px]
              font-semibold

              uppercase

              tracking-[0.18em]

              text-white/65
            "
          >
            Tipo de projeto *
          </label>

          <select
            id="projectType"
            required
            value={formData.projectType}
            onChange={(event) =>
              handleChange(
                "projectType",
                event.target.value
              )
            }
            className="
              w-full

              border-b
              border-white/15

              bg-black

              px-0
              py-4

              text-[15px]
              font-medium
              text-white

              outline-none

              transition-all
              duration-300

              focus:border-cyan-300/55
            "
          >
            <option value="">
              Selecione uma opção
            </option>

            <option value="site">
              Site profissional
            </option>

            <option value="landing-page">
              Landing page
            </option>

            <option value="ecommerce">
              E-commerce
            </option>

            <option value="system">
              Sistema web
            </option>

            <option value="dashboard">
              Dashboard / Painel
            </option>

            <option value="maintenance">
              Manutenção / Melhorias
            </option>

            <option value="other">
              Outro projeto
            </option>
          </select>
        </div>

        {/* ===================================================
            MENSAGEM
        ==================================================== */}

        <div className="mt-7">
          <label
            htmlFor="message"
            className="
              mb-2.5
              block

              text-[11px]
              font-semibold

              uppercase

              tracking-[0.18em]

              text-white/65
            "
          >
            Conte sobre seu projeto *
          </label>

          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(event) =>
              handleChange(
                "message",
                event.target.value
              )
            }
            placeholder="O que você precisa desenvolver?"
            className="
              w-full

              resize-none

              border-b
              border-white/15

              bg-transparent

              px-0
              py-4

              text-[15px]
              font-medium
              leading-7
              text-white

              outline-none

              transition-all
              duration-300

              placeholder:text-white/35
              placeholder:font-normal

              focus:border-cyan-300/55
            "
          />
        </div>

        {/* ===================================================
            BOTÃO WHATSAPP
        ==================================================== */}

        <div
          className="
            mt-9

            flex

            justify-end
          "
        >
          <button
            type="submit"
            className="
              group

              inline-flex

              min-w-[210px]

              items-center
              justify-center

              gap-3

              rounded-full

              border
              border-emerald-400/20

              bg-white

              px-7
              py-4

              text-sm
              font-bold

              text-black

              transition-all
              duration-300

              hover:scale-[1.03]

              hover:border-emerald-400/40

              hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]
            "
          >
            <MessageCircle
              size={18}
              strokeWidth={2}
              className="
                text-emerald-600
              "
            />

            Enviar no WhatsApp

            <ArrowUpRight
              size={17}
              strokeWidth={2}
              className="
                transition
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </button>
        </div>
      </div>
    </form>
  );
}
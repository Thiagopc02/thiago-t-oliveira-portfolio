import Image from "next/image";

export default function ProjectsHeader() {
  return (
    <div
      className="
        relative
        mb-12
        overflow-hidden
        lg:mb-16
      "
    >
      {/* =====================================================
          BRILHOS DE FUNDO
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[2%]
          top-[18%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-400/[0.04]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[2%]
          top-[18%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-500/[0.035]
          blur-[140px]
        "
      />

      {/* =====================================================
          BLOCO PRINCIPAL
      ====================================================== */}

      <div
        className="
          relative
          z-10
          grid
          items-center
          gap-12

          lg:-mx-6
          lg:grid-cols-[minmax(380px,500px)_minmax(560px,1fr)]
          lg:items-start
          lg:gap-8

          xl:-mx-10
          xl:grid-cols-[minmax(420px,560px)_minmax(620px,1fr)]
          xl:gap-10

          2xl:-mx-14
          2xl:grid-cols-[minmax(460px,600px)_minmax(680px,1fr)]
        "
      >
        {/* ===================================================
            IMAGEM
            MOBILE: fica depois
            DESKTOP: fica à esquerda
        ==================================================== */}

        <div
          className="
            relative
            order-2
            mx-auto
            flex
            w-full
            max-w-[500px]
            items-end
            justify-center

            lg:order-1
            lg:mx-0
            lg:max-w-none
            lg:justify-start
            lg:-ml-4

            xl:-ml-8

            2xl:-ml-10
          "
        >
          {/* glow vermelho */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[12%]
              left-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              rounded-full
              bg-red-500/[0.08]
              blur-[110px]

              lg:left-[36%]
              lg:translate-x-0
            "
          />

          {/* glow azul */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[26%]
              left-1/2
              h-[180px]
              w-[180px]
              -translate-x-1/2
              rounded-full
              bg-cyan-400/[0.06]
              blur-[90px]

              lg:left-[34%]
              lg:translate-x-0
            "
          />

          <div
            className="
              relative
              w-full
              max-w-[390px]

              sm:max-w-[430px]
              md:max-w-[470px]

              lg:max-w-[420px]
              xl:max-w-[470px]
              2xl:max-w-[500px]
            "
          >
            <Image
              src="/mesa-vermelha.png"
              alt="Thiago Torres em composição visual da seção de projetos"
              width={900}
              height={1200}
              draggable={false}
              className="
                relative
                z-10
                h-auto
                w-full
                select-none
                object-contain
                drop-shadow-[0_25px_60px_rgba(0,0,0,0.75)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-20
                h-[18%]
                bg-gradient-to-t
                from-black
                via-black/35
                to-transparent
              "
            />
          </div>
        </div>

        {/* ===================================================
            TEXTO / TERMINAL
            MOBILE: aparece primeiro
            DESKTOP: fica à direita
        ==================================================== */}

        <div
          className="
            relative
            order-1

            lg:order-2
            lg:justify-self-end
            lg:pr-2

            xl:pr-4

            2xl:pr-6
          "
        >
          {/* topo */}
          <div
            className="
              mb-6
              flex
              items-center
              gap-3
              font-mono
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-cyan-300/45
            "
          >
            <span>03</span>
            <span className="h-px w-8 bg-cyan-300/20" />
            <span>projects.tsx</span>
          </div>

          {/* título */}
          <div className="relative lg:max-w-[760px] xl:max-w-[840px]">
            <div
              className="
                mb-3
                font-mono
                text-[10px]
                tracking-[0.08em]
                text-white/20
                sm:text-xs
              "
            >
              {"<ProjectsSection>"}
            </div>

            <h2
              className="
                font-mono
                text-[42px]
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-white

                sm:text-[54px]
                md:text-[64px]

                lg:text-[72px]

                xl:text-[84px]

                2xl:text-[92px]
              "
            >
              Projetos que
              <span className="mt-1 block text-zinc-500">
                saíram do papel.
              </span>
            </h2>

            <div
              className="
                mt-3
                flex
                items-center
                gap-2
                font-mono
                text-[10px]
                text-white/20
              "
            >
              <span>{"</ProjectsSection>"}</span>

              <span
                className="
                  inline-block
                  h-[14px]
                  w-[6px]
                  animate-pulse
                  bg-cyan-300/50
                "
              />
            </div>
          </div>

          {/* terminal */}
          <div
            className="
              mt-10
              w-full
              max-w-[760px]
              overflow-hidden
              rounded-xl
              border
              border-red-500/15
              bg-[#05070a]/80
              shadow-[0_0_35px_rgba(239,68,68,0.035)]
              backdrop-blur-md
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.06]
                bg-white/[0.015]
                px-4
                py-3
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/40" />
                <span className="h-2 w-2 rounded-full bg-green-400/40" />
              </div>

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  text-white/20
                "
              >
                terminal
              </span>
            </div>

            <div
              className="
                px-4
                py-5
                sm:px-5
              "
            >
              <div
                className="
                  font-mono
                  text-[10px]
                  leading-6
                  text-red-300/70
                  sm:text-xs
                "
              >
                <span className="text-red-400/85">ERROR</span>
                <span className="text-white/20">
                  {" "}
                  [PROJECTS_COMPILED_SUCCESSFULLY]
                </span>
              </div>

              <p
                className="
                  mt-3
                  max-w-2xl
                  font-mono
                  text-[12px]
                  leading-6
                  text-white/45

                  sm:text-[13px]
                  sm:leading-7
                "
              >
                Alguns projetos desenvolvidos para transformar ideias,
                negócios e operações em experiências digitais modernas,
                funcionais e preparadas para crescer.
              </p>

              <div
                className="
                  mt-4
                  font-mono
                  text-[9px]
                  tracking-[0.12em]
                  text-emerald-300/45
                "
              >
                &gt; status: ready_for_reveal
              </div>
            </div>
          </div>

          {/* chamada */}
          <div className="mt-10 lg:max-w-[760px] xl:max-w-[840px]">
            <p
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-cyan-300/35
              "
            >
              await user.chooseCard();
            </p>

            <h3
              className="
                mt-3
                font-mono
                text-[34px]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-white

                sm:text-[42px]
                md:text-[52px]

                lg:text-[54px]

                xl:text-[62px]
              "
            >
              O que acha de

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-white
                  to-red-300
                  bg-clip-text
                  text-transparent
                "
              >
                puxar uma carta?
              </span>
            </h3>
          </div>
        </div>
      </div>

      {/* linha inferior */}
      <div
        className="
          relative
          z-10
          mt-10
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            h-px
            flex-1
            bg-gradient-to-r
            from-transparent
            via-cyan-300/15
            to-transparent
          "
        />

        <span
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/20
          "
        >
          select_project
        </span>

        <div
          className="
            h-px
            flex-1
            bg-gradient-to-r
            from-transparent
            via-red-300/15
            to-transparent
          "
        />
      </div>
    </div>
  );
}
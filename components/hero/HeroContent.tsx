"use client";

import { motion } from "framer-motion";

import HeroTechBubbles from "./HeroTechBubbles";

export default function HeroContent() {
  return (
    <div
      className="
        relative
        z-20
        w-full
        max-w-3xl
      "
    >
      {/* =====================================================
          SUBTÍTULO
      ====================================================== */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          mb-5
          text-[11px]
          font-medium
          uppercase
          tracking-[0.32em]
          text-zinc-500

          sm:text-xs

          md:text-sm
          md:tracking-[0.35em]
        "
      >
        Full-Stack Web Developer
      </motion.p>

      {/* =====================================================
          TÍTULO
      ====================================================== */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
        }}
        className="
          max-w-4xl

          text-[44px]
          font-semibold
          leading-[0.93]
          tracking-[-0.045em]
          text-white

          sm:text-5xl

          md:text-6xl

          lg:text-7xl

          xl:text-[86px]

          2xl:text-8xl
        "
      >
        Eu transformo ideias

        <span
          className="
            mt-1
            block
            text-zinc-500
          "
        >
          em experiências digitais.
        </span>
      </motion.h1>

      {/* =====================================================
          DESCRIÇÃO
      ====================================================== */}

      <motion.p
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.25,
        }}
        className="
          mt-7
          max-w-2xl

          text-[15px]
          leading-7
          text-zinc-400

          sm:text-base

          md:mt-8
          md:text-lg
          md:leading-8

          lg:text-base
          lg:leading-7

          xl:text-lg
          xl:leading-8
        "
      >
        Desenvolvimento de sites, sistemas web e experiências digitais
        modernas com foco em desempenho, design e resultados.
      </motion.p>

      {/* =====================================================
          BOTÕES
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="
          mt-8
          flex
          flex-wrap
          gap-3

          sm:gap-4

          md:mt-10
        "
      >
        <a
          href="#projetos"
          className="
            inline-flex
            min-h-[50px]

            items-center
            justify-center

            rounded-full

            bg-white

            px-7
            py-3.5

            text-sm
            font-semibold
            text-black

            transition
            duration-300

            hover:scale-[1.04]
            hover:bg-zinc-200

            sm:min-w-[138px]
          "
        >
          Ver projetos
        </a>

        <a
          href="#contato"
          className="
            inline-flex
            min-h-[50px]

            items-center
            justify-center

            rounded-full

            border
            border-white/15

            bg-white/[0.03]

            px-7
            py-3.5

            text-sm
            font-semibold
            text-white

            backdrop-blur-xl

            transition
            duration-300

            hover:scale-[1.04]
            hover:border-white/30
            hover:bg-white/[0.07]

            sm:min-w-[138px]
          "
        >
          Falar comigo
        </a>
      </motion.div>

      {/* =====================================================
          TECNOLOGIAS MOBILE / TELA REDUZIDA
      ====================================================== */}
      {/*
        O vídeo NÃO fica mais aqui.

        Ele é renderizado exclusivamente pelo HeroScene.tsx.

        Aqui ficam somente os cards das tecnologias abaixo
        da cena nas telas menores.
      */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.55,
        }}
        className="
          mt-[520px]

          lg:hidden

          sm:mt-[560px]

          md:mt-[600px]
        "
      >
        <HeroTechBubbles mobile />
      </motion.div>
    </div>
  );
}
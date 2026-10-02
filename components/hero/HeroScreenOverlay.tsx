"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import type { HeroTechItem } from "./heroTechData";

type HeroScreenOverlayProps = {
  technology: HeroTechItem | null;
  onClose: () => void;
};

const technologyCode: Record<string, string[]> = {
  react: [
    "// React",
    "",
    "const technology = {",
    '  name: "React",',
    '  category: "Frontend Library",',
    '  createdBy: "Meta",',
    "",
    "  strengths: [",
    '    "Reusable Components",',
    '    "State Management",',
    '    "Interactive Interfaces",',
    '    "Large Ecosystem",',
    "  ],",
    "",
    "  modernWeb: true,",
    "};",
  ],

  typescript: [
    "// TypeScript",
    "",
    "interface Technology {",
    "  name: string;",
    "  typed: boolean;",
    "  scalable: boolean;",
    "  maintainable: boolean;",
    "}",
    "",
    "const typescript: Technology = {",
    '  name: "TypeScript",',
    "  typed: true,",
    "  scalable: true,",
    "  maintainable: true,",
    "};",
  ],

  next: [
    "// Next.js",
    "",
    "const framework = {",
    '  name: "Next.js",',
    '  basedOn: "React",',
    "",
    "  features: [",
    '    "Server Components",',
    '    "SSR",',
    '    "Routing",',
    '    "API Routes",',
    '    "Image Optimization",',
    "  ],",
    "",
    "  fullStack: true,",
    "};",
  ],

  javascript: [
    "// JavaScript",
    "",
    "const language = {",
    '  name: "JavaScript",',
    '  environment: ["Browser", "Server"],',
    "",
    "  capabilities: {",
    "    frontend: true,",
    "    backend: true,",
    "    realtime: true,",
    "    APIs: true,",
    "  },",
    "};",
  ],

  node: [
    "// Node.js",
    "",
    "const runtime = {",
    '  name: "Node.js",',
    '  language: "JavaScript",',
    "",
    "  applications: [",
    '    "REST APIs",',
    '    "Authentication",',
    '    "Backend Services",',
    '    "Realtime Systems",',
    "  ],",
    "};",
  ],

  python: [
    "# Python",
    "",
    "technology = {",
    '    "name": "Python",',
    "",
    '    "applications": [',
    '        "Automation",',
    '        "Backend",',
    '        "Artificial Intelligence",',
    '        "Data Processing",',
    '        "APIs"',
    "    ],",
    "",
    '    "productive": True',
    "}",
  ],
};

export default function HeroScreenOverlay({
  technology,
  onClose,
}: HeroScreenOverlayProps) {
  const code = technology
    ? technologyCode[technology.id] ?? [
        `// ${technology.label}`,
        "",
        "const technology = {",
        `  name: "${technology.label}",`,
        '  status: "Active",',
        "};",
      ]
    : [];

  return (
    <AnimatePresence>
      {technology && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.94,
            y: 8,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-auto
            absolute
            left-[39%]
            top-[20%]
            z-[60]
            hidden
            h-[34%]
            w-[30%]
            -translate-x-1/2
            overflow-hidden
            rounded-xl
            border
            border-cyan-400/20
            bg-[#03070d]/95
            shadow-[0_0_25px_rgba(0,180,255,0.16),0_0_45px_rgba(255,0,60,0.08)]
            backdrop-blur-xl

            lg:block
          "
        >
          {/* Barra superior */}
          <div
            className="
              flex
              h-10
              items-center
              justify-between
              border-b
              border-white/10
              bg-white/[0.02]
              px-4
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />

              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />

              <span className="h-2 w-2 rounded-full bg-green-400/70" />

              <span
                className="
                  ml-3
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                "
              >
                {technology.id}.ts
              </span>
            </div>

            <button
              type="button"
              aria-label="Fechar"
              onClick={onClose}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                text-white/30
                transition

                hover:bg-white/10
                hover:text-white
              "
            >
              <X size={13} />
            </button>
          </div>

          {/* Conteúdo */}
          <div
            className="
              h-[calc(100%-40px)]
              overflow-auto
              p-5
              [scrollbar-width:thin]
              [scrollbar-color:rgba(255,255,255,0.15)_transparent]
            "
          >
            {/* Nome */}
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              className="
                mb-4
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-px
                  w-8
                  bg-cyan-400/40
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-cyan-300/50
                "
              >
                {technology.label}
              </span>
            </motion.div>

            {/* Código */}
            <pre
              className="
                font-mono
                text-[10px]
                leading-6
                text-cyan-100/70
              "
            >
              {code.map((line, index) => (
                <motion.div
                  key={`${technology.id}-${index}`}
                  initial={{
                    opacity: 0,
                    x: -7,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.13 + index * 0.035,
                  }}
                  className="
                    flex
                    min-w-max
                  "
                >
                  <span
                    className="
                      mr-5
                      w-5
                      shrink-0
                      select-none
                      text-right
                      text-white/15
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{line || " "}</span>
                </motion.div>
              ))}
            </pre>
          </div>

          {/* brilho interno */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-[15%]
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-300/40
              to-transparent
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
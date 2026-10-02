export type HeroTechnology = {
  id: string;

  // Nome da tecnologia
  name: string;
  label: string;

  // Caminho da imagem
  icon: string;
  image: string;

  alt: string;

  // Posicionamento no desktop
  desktopPosition: string;

  // Movimento de flutuação
  float: {
    x: number[];
    y: number[];
    rotate: number[];
    duration: number;
    delay: number;
  };

  // Conteúdo exibido ao clicar
  code: string[];
};

/*
  Mantemos também HeroTechItem para compatibilidade
  com componentes que ainda importam esse nome.
*/
export type HeroTechItem = HeroTechnology;

export const heroTechData: HeroTechnology[] = [
  {
    id: "react",

    name: "React",
    label: "React",

    icon: "/tech/react.png",
    image: "/tech/react.png",

    alt: "Tecnologia React",

    desktopPosition: "left-[6%] top-[34%]",

    float: {
      x: [0, 7, -5, 3, 0],
      y: [0, -14, 7, -5, 0],
      rotate: [0, -3, 2, -1, 0],
      duration: 7.4,
      delay: 0.2,
    },

    code: [
      "// React",
      "",
      "const technology = {",
      '  name: "React",',
      '  type: "Frontend Library",',
      '  ecosystem: "JavaScript",',
      "",
      "  capabilities: [",
      '    "Componentes reutilizáveis",',
      '    "Interfaces interativas",',
      '    "State management",',
      '    "Aplicações modernas",',
      "  ],",
      "",
      "  status: true,",
      "};",
    ],
  },

  {
    id: "typescript",

    name: "TypeScript",
    label: "TypeScript",

    icon: "/tech/typescript.png",
    image: "/tech/typescript.png",

    alt: "Tecnologia TypeScript",

    desktopPosition: "left-[15%] top-[12%]",

    float: {
      x: [0, -6, 8, -3, 0],
      y: [0, 9, -11, 5, 0],
      rotate: [0, 2, -3, 1, 0],
      duration: 8.1,
      delay: 0.5,
    },

    code: [
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
  },

  {
    id: "next",

    name: "Next.js",
    label: "Next.js",

    icon: "/tech/next.png",
    image: "/tech/next.png",

    alt: "Tecnologia Next.js",

    desktopPosition: "left-[52%] top-[7%]",

    float: {
      x: [0, 10, -7, 4, 0],
      y: [0, -9, 11, -6, 0],
      rotate: [0, 3, -2, 2, 0],
      duration: 7.6,
      delay: 0.1,
    },

    code: [
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
  },

  {
    id: "javascript",

    name: "JavaScript",
    label: "JavaScript",

    icon: "/tech/javascript.png",
    image: "/tech/javascript.png",

    alt: "Tecnologia JavaScript",

    desktopPosition: "left-[59%] top-[29%]",

    float: {
      x: [0, -9, 6, -4, 0],
      y: [0, 12, -8, 6, 0],
      rotate: [0, -3, 3, -2, 0],
      duration: 8.5,
      delay: 0.3,
    },

    code: [
      "// JavaScript",
      "",
      "const language = {",
      '  name: "JavaScript",',
      "",
      "  capabilities: {",
      "    frontend: true,",
      "    backend: true,",
      "    realtime: true,",
      "    APIs: true,",
      "  },",
      "",
      "  universal: true,",
      "};",
    ],
  },

  {
    id: "node",

    name: "Node.js",
    label: "Node",

    icon: "/tech/node.png",
    image: "/tech/node.png",

    alt: "Tecnologia Node.js",

    desktopPosition: "left-[58%] bottom-[15%]",

    float: {
      x: [0, 9, -6, 5, 0],
      y: [0, -12, 8, -4, 0],
      rotate: [0, 3, -3, 1, 0],
      duration: 7.9,
      delay: 0.4,
    },

    code: [
      "// Node.js",
      "",
      "const runtime = {",
      '  name: "Node.js",',
      '  language: "JavaScript",',
      "",
      "  applications: [",
      '    "REST APIs",',
      '    "Backends",',
      '    "Authentication",',
      '    "Realtime Systems",',
      '    "Integrations",',
      "  ],",
      "",
      "  serverSide: true,",
      "};",
    ],
  },

  {
    id: "python",

    name: "Python",
    label: "Python",

    icon: "/tech/python.png",
    image: "/tech/python.png",

    alt: "Tecnologia Python",

    desktopPosition: "left-[6%] bottom-[14%]",

    float: {
      x: [0, -8, 7, -5, 0],
      y: [0, 11, -9, 5, 0],
      rotate: [0, -2, 3, -1, 0],
      duration: 8.7,
      delay: 0.6,
    },

    code: [
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
  },
];

/*
  Alias opcional.

  Assim componentes antigos que utilizavam:
  heroTechnologies

  continuam funcionando também.
*/
export const heroTechnologies = heroTechData;
/* =========================================================
   TIPOS
========================================================= */

export type ProjectCard = {
  id: number;

  // Número visual
  number: string;

  // Nome do projeto
  title: string;

  // Categoria / subtítulo
  subtitle: string;

  // Descrição
  description: string;

  // Tecnologias
  technologies: string[];

  // Imagem principal
  image: string;

  // Imagem usada em cards / modal
  backImage: string;

  // Rotação da carta
  rotation: number;

  // Ajuste individual da imagem
  imageClassName: string;

  // Site publicado
  liveUrl?: string;

  // GitHub
  githubUrl?: string;
};

/* =========================================================
   COMPATIBILIDADE
========================================================= */

export type Project = ProjectCard;

/* =========================================================
   PROJETOS
========================================================= */

export const projects: ProjectCard[] = [
  /* =======================================================
     PROJETO 01
     IMPÉRIO BEBIDAS & TABACOS
  ======================================================= */

  {
    id: 1,

    number: "01",

    title: "Império Bebidas & Tabacos",

    subtitle: "E-commerce & Sistema Web",

    description:
      "Plataforma completa para uma distribuidora, com catálogo, carrinho, pedidos, autenticação e painel administrativo.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Tailwind CSS",
    ],

    image: "/projeto01.png",

    backImage: "/projeto01.png",

    rotation: -5,

    imageClassName:
      "scale-[0.96] sm:scale-[0.98] md:scale-[1.00] lg:scale-[1.02]",

    /* SITE NO AR */
    liveUrl: "https://www.imperiodistribuidora3015.com.br",

    /* REPOSITÓRIO */
    githubUrl: "https://github.com/Thiagopc02/site-imperio",
  },

  /* =======================================================
     PROJETO 02
     IMPÉRIO CHALÉS
  ======================================================= */

  {
    id: 2,

    number: "02",

    title: "Império Chalés",

    subtitle: "Hospedagem & Experiência Digital",

    description:
      "Projeto digital desenvolvido para apresentação dos chalés, divulgação do empreendimento e experiência de hospedagem.",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    image: "/projeto02.png",

    backImage: "/projeto02.png",

    rotation: 0,

    imageClassName:
      "scale-[1.08] sm:scale-[1.10] md:scale-[1.12] lg:scale-[1.14]",

    /* SITE NO AR */
    liveUrl: "https://imperio-chales-site.vercel.app/",

    /* SEM LINK DO GITHUB POR ENQUANTO */
    githubUrl: "",
  },

  /* =======================================================
     PROJETO 03
     AÇAÍ DO BRUXO
  ======================================================= */

  {
    id: 3,

    number: "03",

    title: "Açaí do Bruxo",

    subtitle: "Branding & Experiência Web",

    description:
      "Projeto visual e digital criado para transformar a identidade do Açaí do Bruxo em uma experiência moderna e marcante.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX",
    ],

    image: "/projeto03.png",

    backImage: "/projeto03.png",

    rotation: 5,

    imageClassName:
      "scale-[1.20] sm:scale-[1.24] md:scale-[1.28] lg:scale-[1.32]",

    /* SITE NO AR */
    liveUrl: "https://acai-do-bruxo.vercel.app/",

    /* SEM LINK DO GITHUB POR ENQUANTO */
    githubUrl: "",
  },
];

/* =========================================================
   EXPORT DEFAULT
========================================================= */

export default projects;
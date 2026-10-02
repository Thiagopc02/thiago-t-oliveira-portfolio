/* =========================================================
   TIPO DOS PROJETOS
========================================================= */

export type ProjectCard = {
  id: number;

  title: string;
  subtitle: string;

  description: string;

  technologies: string[];

  /*
   * Imagem utilizada no projeto/card/modal.
   * Os arquivos ficam dentro de /public.
   */
  backImage: string;

  /*
   * Link do projeto publicado.
   *
   * É opcional porque podemos ter algum projeto
   * que ainda não esteja disponível publicamente.
   */
  liveUrl?: string;

  /*
   * Link do repositório no GitHub.
   */
  githubUrl?: string;
};

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

    backImage: "/projeto01.png",

    /*
     * SITE PUBLICADO
     */
    liveUrl: "https://site-imperio.vercel.app",

    /*
     * GITHUB
     */
    githubUrl:
      "https://github.com/Thiagopc02/site-imperio",
  },

  /* =======================================================
     PROJETO 02
     GRANALTA
  ======================================================= */

  {
    id: 2,

    title: "Granalta",

    subtitle: "Plataforma Digital",

    description:
      "Experiência digital responsiva criada para apresentação de pacotes, conteúdo e conversão de clientes.",

    technologies: [
      "React",
      "TypeScript",
      "Vercel",
    ],

    backImage: "/projeto02.png",

    /*
     * Quando tivermos certeza do endereço publicado,
     * basta colocar o link aqui.
     *
     * Exemplo:
     * liveUrl: "https://seu-site.vercel.app",
     */

    liveUrl: "",

    /*
     * Repositório do projeto.
     */
    githubUrl: "https://github.com/granalta/granalta",
  },

  /* =======================================================
     PROJETO 03
     PROJETO ESPECIAL
  ======================================================= */

  {
    id: 3,

    title: "Projeto Especial",

    subtitle: "Web Experience",

    description:
      "Projeto desenvolvido com foco em interface moderna, animações, experiência visual e navegação responsiva.",

    technologies: [
      "Next.js",
      "GSAP",
      "Tailwind CSS",
    ],

    backImage: "/projeto03.png",

    /*
     * Ainda vamos colocar o endereço correto
     * deste projeto.
     */
    liveUrl: "",

    /*
     * Caso queira disponibilizar o código,
     * coloque o GitHub aqui.
     */
    githubUrl: "",
  },
];

/* =========================================================
   EXPORT DEFAULT
========================================================= */

export default projects;
export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  year: string;
  status: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Império Bebidas & Tabacos",
    category: "E-commerce & Sistema Web",
    description:
      "Plataforma completa para uma distribuidora, com catálogo, carrinho, pedidos, autenticação e painel administrativo.",

    longDescription:
      "Projeto desenvolvido para digitalizar a operação da Império Bebidas & Tabacos. A plataforma reúne catálogo de produtos, autenticação de clientes, carrinho persistente, endereços, formas de pagamento, pedidos e painel administrativo.",

    image: "/projects/imperio-bebidas.jpg",

    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Tailwind CSS",
    ],

    features: [
      "Autenticação de clientes",
      "Catálogo de produtos",
      "Carrinho persistente",
      "Cadastro de endereços",
      "Pedidos online",
      "Painel administrativo",
      "Integração com Firebase",
    ],

    year: "2026",
    status: "Projeto completo",
  },

  {
    id: 2,
    title: "Império Chalés",
    category: "Website & Reservas",
    description:
      "Website institucional para hospedagem, desenvolvido para apresentar o empreendimento e facilitar o contato com hóspedes.",

    longDescription:
      "Projeto voltado para apresentação profissional da Império Chalés, com foco em experiência visual, informações sobre hospedagem, localização, serviços, contato e direcionamento para reservas.",

    image: "/projects/imperio-chales.jpg",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],

    features: [
      "Website responsivo",
      "Apresentação dos chalés",
      "Galeria de imagens",
      "Contato direto",
      "Integração com plataformas de reserva",
      "SEO básico",
    ],

    year: "2026",
    status: "Online",
  },

  {
    id: 3,
    title: "Açaí do Bruxo",
    category: "Website & Identidade Digital",
    description:
      "Experiência digital criada para uma marca de açaí com identidade visual própria e conceito criativo.",

    longDescription:
      "Website desenvolvido para apresentar produtos, identidade da marca e experiência visual do Açaí do Bruxo, utilizando elementos gráficos personalizados e uma interface moderna.",

    image: "/projects/acai-do-bruxo.jpg",

    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "Vercel",
    ],

    features: [
      "Identidade visual personalizada",
      "Cardápio digital",
      "Interface responsiva",
      "Animações",
      "Apresentação de produtos",
    ],

    year: "2026",
    status: "Em evolução",
  },

  {
    id: 4,
    title: "Granalta",
    category: "Plataforma Web",
    description:
      "Plataforma de educação financeira com páginas de conteúdo, pacotes e experiência personalizada para usuários.",

    longDescription:
      "Projeto web desenvolvido para disponibilização de conteúdos de educação financeira, oferecendo diferentes pacotes, páginas exclusivas e experiência de navegação personalizada.",

    image: "/projects/granalta.jpg",

    technologies: [
      "React",
      "TypeScript",
      "LocalStorage",
      "Vercel",
    ],

    features: [
      "Cadastro de usuários",
      "Login",
      "Pacotes personalizados",
      "Landing pages",
      "Interface responsiva",
      "Persistência local",
    ],

    year: "2025",
    status: "Online",
  },
];
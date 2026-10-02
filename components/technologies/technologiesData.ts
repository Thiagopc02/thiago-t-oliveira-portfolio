export type TechnologyIcon =
  | "braces"
  | "code"
  | "layers"
  | "globe"
  | "server"
  | "terminal"
  | "wind"
  | "flame"
  | "database"
  | "workflow"
  | "zap"
  | "git";

export type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  level: string;
  icon: TechnologyIcon;
  image: string;
};

export const technologies: Technology[] = [
  {
    id: 1,
    name: "TypeScript",
    category: "Frontend / Backend",
    description:
      "Tipagem estática para aplicações robustas, escaláveis e mais fáceis de manter.",
    level: "Principal",
    icon: "braces",
    image: "/boneco-typescript.png",
  },
  {
    id: 2,
    name: "JavaScript",
    category: "Frontend / Backend",
    description:
      "Base para construção de interfaces, aplicações web e integrações modernas.",
    level: "Principal",
    icon: "code",
    image: "/boneco-javascript.png",
  },
  {
    id: 3,
    name: "React",
    category: "Frontend",
    description:
      "Interfaces modernas, componentizadas, responsivas e altamente interativas.",
    level: "Principal",
    icon: "layers",
    image: "/boneco-react.png",
  },
  {
    id: 4,
    name: "Next.js",
    category: "Full Stack",
    description:
      "Aplicações web completas com renderização moderna, rotas, APIs e otimização.",
    level: "Principal",
    icon: "globe",
    image: "/boneco-next.png",
  },
  {
    id: 5,
    name: "Node.js",
    category: "Backend",
    description:
      "Servidores, APIs, integrações e regras de negócio executadas no backend.",
    level: "Avançando",
    icon: "server",
    image: "/boneco-node.png",
  },
  {
    id: 6,
    name: "Python",
    category: "Backend / Automação",
    description:
      "Automação, processamento de dados, APIs e futuras integrações com inteligência artificial.",
    level: "Em evolução",
    icon: "terminal",
    image: "/boneco-python.png",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    category: "UI / Styling",
    description:
      "Construção rápida de interfaces responsivas, modernas e consistentes.",
    level: "Principal",
    icon: "wind",
    image: "/boneco-tailwind-css.png",
  },
  {
    id: 8,
    name: "Firebase",
    category: "Backend as a Service",
    description:
      "Autenticação, hospedagem, serviços de aplicação e integração com ecossistemas web.",
    level: "Principal",
    icon: "flame",
    image: "/boneco-firebase.png",
  },
  {
    id: 9,
    name: "Firestore",
    category: "Banco de Dados",
    description:
      "Banco NoSQL para aplicações com dados em tempo real e integração com Firebase.",
    level: "Principal",
    icon: "database",
    image: "/boneco-firestore.png",
  },
  {
    id: 10,
    name: "REST API",
    category: "Integrações",
    description:
      "Comunicação entre sistemas, serviços externos, aplicações e backends.",
    level: "Principal",
    icon: "workflow",
    image: "/boneco-rest-api.png",
  },
  {
    id: 11,
    name: "Git",
    category: "Versionamento",
    description:
      "Controle de versões, organização de mudanças e evolução segura dos projetos.",
    level: "Principal",
    icon: "zap",
    image: "/boneco-git.png",
  },
  {
    id: 12,
    name: "GitHub",
    category: "Versionamento / Deploy",
    description:
      "Repositórios, colaboração, histórico de código e integração com deploy.",
    level: "Principal",
    icon: "git",
    image: "/boneco-github.png",
  },
];

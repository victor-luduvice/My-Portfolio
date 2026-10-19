/** Fonte única de textos, listas, endereços e metadados usados pelo portfólio. */
export const siteContent = {
  // Identidade e SEO: `siteUrl` também alimenta os metadados e arquivos de busca.
  name: "Victor Luduvice",
  firstName: "Victor",
  lastName: "Luduvice",
  role: "Desenvolvedor Full Stack",
  siteUrl: "https://victor-luduvice.vercel.app",
  description: "Portfólio de Victor Luduvice, desenvolvedor full stack com foco em back-end, dados e soluções digitais.",
  // Cada href aponta para o id de uma seção e cada label é o texto exibido no menu.
  navigation: [
    { label: "Início", href: "#inicio" }, { label: "Sobre", href: "#sobre" },
    { label: "Experiência", href: "#experiencia" }, { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ],
  // Conteúdo da abertura: eyebrow, resumo e rótulos dos botões.
  hero: {
    eyebrow: "01 — IDENTIDADE",
    subtitle: "DESENVOLVEDOR FULL STACK • BACK-END & DADOS • FUNDADOR DA CONECT",
    description: "Construo sistemas escaláveis, APIs robustas e soluções digitais do requisito à entrega.",
    primaryAction: "Ver projetos", secondaryAction: "Entrar em contato",
  },
  // Biografia: eyebrow e title identificam a seção; paragraphs são seus textos.
  about: {
    eyebrow: "02 — SOBRE", title: "Trajetória e Expertise",
    headline: "Desenvolvedor Full Stack | Fundador da Conect ",
    paragraphs: [
      "Sou desenvolvedor Full Stack com experiência modernizando ecossistemas digitais e migrando infraestrutura para arquiteturas de alta disponibilidade.",
      "Trabalho com Node.js (NestJS e Express), Java (Spring Boot), Python (FastAPI), Next.js e React, além de bancos relacionais e não relacionais. Busco equilibrar arquitetura, performance, UI/UX e uso consciente de IA para ganhar produtividade.",
      "Como fundador da Conect, conduzo projetos completos para clientes, do levantamento de requisitos à arquitetura e entrega técnica. No momento, aprofundo meus estudos em Back-end, Dados e IA aplicada.",
    ],
  },
  // Grupos de tecnologia. Os nomes também são usados como chaves dos ícones.
  stacks: [
    { title: "Back-end", technologies: ["Python", "FastAPI", "Node.js", "NestJS", "Express", "Java", "Spring"] },
    { title: "Front-end", technologies: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { title: "Bancos de dados", technologies: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
    { title: "Ferramentas e infraestrutura", technologies: ["Docker", "Linux", "Git", "AWS", "Vercel", "Render"] },
  ],
  // Experiências usam período, cargo, empresa, descrição, destaques e competências.
  // Formação usa título, instituição e período, que pode ficar vazio quando omitido.
  experience: {
    eyebrow: "03 — EXPERIÊNCIA", title: "Trajetória Profissional",
    items: [
      {
        period: "ABR/2026 — ATUAL", role: "Desenvolvedor Fullstack (Prestação de Serviços, Remoto)", company: "Progress BA",
        description: "Manutenção e evolução técnica contínua do ecossistema digital do cliente.",
        highlights: [
          "Liderança na transição para arquitetura de Monorepo, unificando Backend e Frontend com Type Safety e acelerando o ciclo de entrega.",
          "Orquestração da migração da Vercel para Hostinger, garantindo 100% de disponibilidade operacional e redução de latência.",
        ], skills: ["TypeScript", "Node.js", "Next.js", "Monorepo", "DevOps"],
      },
      {
        period: "AGO/2025 — ATUAL", role: "Fundador e Desenvolvedor", company: "Connect (projeto próprio)",
        description: "Soluções digitais para empresas, do levantamento de requisitos à entrega técnica.",
        highlights: [
          "Idealização e desenvolvimento de soluções digitais (sites, aplicativos e marketing) para donos de empresa, do levantamento de requisitos à entrega técnica.",
          "Responsável pelo ciclo completo do projeto.",
        ], skills: ["Next.js", "Node.js", "PostgreSQL", "Produto"],
      },
      {
        period: "MAR/2025 — SET/2025", role: "Call Center e Apoio em Desenvolvimento", company: "ServeLoja, Aracaju/SE",
        description: "Suporte técnico especializado e manutenção evolutiva do ecossistema digital institucional.",
        highlights: [
          "Otimização de performance e resolução de débitos técnicos em produção.",
        ], skills: [],
      },
      {
        period: "MAI/2024 — AGO/2024", role: "Diretor de Arte (Remoto)", company: "Moringa Digital",
        description: "Direção técnica e criativa para projetos web.",
        highlights: [], skills: [],
      },
      {
        period: "FEV/2023 — AGO/2023", role: "Desenvolvedor Web Front-end (Estágio)", company: "DelBank, Aracaju/SE",
        description: "Desenvolvimento de interfaces responsivas e seguras para sistemas bancários web.",
        highlights: [], skills: [],
      },
    ],
    educationTitle: "Formação e Cursos",
    education: [
      { title: "Engenharia de Software / ADS", institution: "UNOPAR", period: "DEZ/2024 — AGO/2025" },
      { title: "Java Web Full Stack (400h)", institution: "JDev Treinamentos", period: "" },
      { title: "Especialização Fullstack Next.js (83h)", institution: "Udemy", period: "" },
    ],
  },
  // Cada projeto possui tecnologias, links de código/demo, situação e descrição.
  projects: {
    eyebrow: "04 — PROJETOS", title: "Projetos selecionados",
    intro: "Produtos e experimentos construídos para resolver problemas reais com tecnologia.",
    items: [
      // TODO: substituir pelo projeto e links reais.
      { title: "Connect", description: "Site institucional e apresentação dos serviços digitais da Connect.", technologies: ["Next.js", "TypeScript", "Tailwind CSS"], codeUrl: "#", demoUrl: "#", status: "Projeto pessoal", placeholder: true },
      // TODO: substituir quando o projeto estiver publicado.
      { title: "Plataforma financeira com IA", description: "Plataforma financeira com API, dados e recursos de inteligência artificial aplicada.", technologies: ["Node.js", "PostgreSQL", "IA"], codeUrl: "#", demoUrl: "#", status: "Em desenvolvimento", placeholder: true },
      { title: "API de Delivery FastAPI", description: "API para delivery de pizza com autenticação JWT, controle de acesso e gerenciamento de pedidos e itens.", technologies: ["Python", "FastAPI", "SQLAlchemy", "JWT", "SQLite"], codeUrl: "https://github.com/victor-luduvice/FastAPI", demoUrl: "#", status: "Projeto pessoal", placeholder: true },
    ],
  },
  // Links de contato e textos usados nos botões, cartões e mensagens pré-preenchidas.
  contact: {
    eyebrow: "05 — CONTATO", title: "Vamos conversar", headline: "Construindo soluções e sistemas escaláveis.",
    description: "Tem um desafio ou uma ideia em mente? Vamos conversar sobre como tirar do papel.",
    email: "contatovct@outlook.com", linkedin: "https://linkedin.com/in/victor-luduvice",
    github: "https://github.com/victor-luduvice", whatsapp: "https://wa.me/5579998333341?text=Ol%C3%A1%20Victor%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
    whatsappMessage: "Olá Victor, vi seu portfólio e gostaria de conversar.",
    whatsappTitle: "Prefere uma conversa em tempo real?",
  },
  footer: "© 2026 Victor Luduvice — Desenvolvedor Full Stack",
} as const;

/** Total de tecnologias, calculado a partir de todos os grupos da stack. */
export const technologyCount = siteContent.stacks.reduce((total, group) => total + group.technologies.length, 0);

/** Calcula anos completos desde fevereiro de 2023; `asOf` permite informar outra data. */
export function yearsOfExperience(asOf = new Date()) {
  const started = new Date(2023, 1, 1);
  let years = asOf.getFullYear() - started.getFullYear();
  if (asOf.getMonth() < started.getMonth()) years -= 1;
  return Math.max(years, 0);
}

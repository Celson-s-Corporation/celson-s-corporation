export type IconName =
  'code-2' | 'database' | 'activity' | 'panels-top-left' | 'network' | 'layers' | 'workflow';

export interface NavItem {
  label: string;
  fragment: string;
  /** Rendered in the gold accent colour (the "Contato" call-out). */
  highlight?: boolean;
}

export interface ExpertiseArea {
  icon: IconName;
  title: string;
  description: string;
  tags: string[];
}

export interface Experience {
  period: string;
  location: string;
  /** Small gold label under the location, e.g. "ATUAÇÃO ATUAL". */
  badge?: string;
  /** Filled milestone dot (current role) instead of the hollow one. */
  current?: boolean;
  company: string;
  role: string;
  headline: string;
  paragraphs: string[];
  tags: string[];
}

export interface Domain {
  icon: IconName;
  title: string;
  scope: string;
  description: string;
  stack: string;
}

export interface Degree {
  title: string;
  institution: string;
  period: string;
  location: string;
}

export interface LanguageSkill {
  skill: string;
  level: string;
}

export interface ContactProfile {
  label: string;
  handle: string;
  /** Left undefined when the design only shows a display name and no profile URL is known. */
  url?: string;
}

export interface Resume {
  brand: string;
  fullName: string;
  location: string;
  nav: NavItem[];
  hero: {
    kicker: string;
    titleLines: [string, string];
    summary: string;
    primaryAction: string;
    secondaryAction: string;
    illustrationCaption: string;
    signature: string;
    signatureStack: string;
  };
  about: {
    eyebrow: string;
    title: string;
    stat: string;
    statLabel: string;
    paragraphs: string[];
    pillars: string;
  };
  expertise: {
    eyebrow: string;
    title: string;
    intro: string;
    areas: ExpertiseArea[];
  };
  experience: {
    eyebrow: string;
    title: string;
    entries: Experience[];
  };
  domains: {
    eyebrow: string;
    title: string;
    intro: string;
    kicker: string;
    items: Domain[];
  };
  education: {
    eyebrow: string;
    title: string;
    degreesLabel: string;
    degrees: Degree[];
    languagesLabel: string;
    native: { name: string; level: string };
    foreign: { name: string; scaleLabel: string; skills: LanguageSkill[] };
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    action: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phone: string;
    phoneHref: string;
    profiles: ContactProfile[];
  };
  footer: {
    tagline: string;
    backToTop: string;
    credit: string;
  };
}

export const RESUME: Resume = {
  brand: "Celson's Corporation",
  fullName: 'Celson Fernando Rodrigues de Araujo',
  location: 'Belo Horizonte, Brasil',
  nav: [
    { label: 'Sobre', fragment: 'sobre' },
    { label: 'Experiência', fragment: 'experiencia' },
    { label: 'Atuação', fragment: 'atuacao' },
    { label: 'Contato', fragment: 'contato', highlight: true },
  ],
  hero: {
    kicker: 'PORTFÓLIO PESSOAL / ENGENHARIA DE SOFTWARE',
    titleLines: ['Sistemas em órbita.', 'Engenharia no centro.'],
    summary:
      'Engenheiro de software com cerca de 12 anos de experiência. Java backend, microserviços e sistemas distribuídos com foco em escala, resiliência e qualidade.',
    primaryAction: 'Entrar em contato',
    secondaryAction: 'Ver experiência',
    illustrationCaption: 'C / ENGENHARIA DE SOFTWARE',
    signature: 'Um núcleo · muitas galáxias',
    signatureStack: 'JAVA / APIs / SISTEMAS DISTRIBUÍDOS',
  },
  about: {
    eyebrow: '01 / SOBRE O NÚCLEO',
    title: 'Da descoberta à operação.',
    stat: '~12 anos',
    statLabel: 'de experiência em desenvolvimento de software',
    paragraphs: [
      'Sou Celson. Atuo em todo o ciclo de desenvolvimento: descoberta, arquitetura, implementação, testes automatizados, implantação e evolução contínua. Contribuí para sistemas utilizados por milhões de clientes.',
      'Meu foco é construir soluções confiáveis, seguras e sustentáveis. Combino investigação de incidentes, observabilidade e atenção ao desempenho com colaboração ágil em equipes multidisciplinares e internacionais.',
    ],
    pillars: 'Performance · Escalabilidade · Resiliência · Segurança · Qualidade',
  },
  expertise: {
    eyebrow: '02 / EXPERTISE & STACK',
    title: 'Tecnologia com propósito.',
    intro:
      'Uma base sólida em Java, conectada a ferramentas para construir, integrar e operar soluções do início ao fim.',
    areas: [
      {
        icon: 'code-2',
        title: 'Backend & arquitetura',
        description: 'APIs, microserviços, filas e arquitetura distribuída.',
        tags: [
          'Java',
          'Spring Boot',
          'Spring MVC / Data',
          'Spring Security / Batch',
          'Micronaut',
          'Hibernate',
          'Apache Tomcat',
        ],
      },
      {
        icon: 'database',
        title: 'Eventos, dados & cloud',
        description: 'Processamento assíncrono, integração e persistência.',
        tags: [
          'Apache Kafka',
          'AWS',
          'DynamoDB / S3',
          'PostgreSQL / Supabase',
          'Oracle / PL/SQL',
          'SQL Server / T-SQL',
          'MySQL',
          'Elasticsearch / Trino',
          'Protobuf',
        ],
      },
      {
        icon: 'activity',
        title: 'Entrega & confiabilidade',
        description: 'Testes, observabilidade, depuração e automação.',
        tags: [
          'OpenTelemetry',
          'New Relic',
          'Docker',
          'Git / SVN',
          'GitHub Actions',
          'Jenkins / CI/CD',
          'Maven',
          'Eclipse / NetBeans',
        ],
      },
      {
        icon: 'panels-top-left',
        title: 'Web & integrações',
        description: 'Interfaces e serviços integrados ao backend.',
        tags: [
          'Node.js / NestJS',
          'TypeScript',
          'React / Next.js',
          'JavaScript',
          'HTML / CSS',
          'C# / .NET / ASP.NET',
          'REST APIs',
        ],
      },
    ],
  },
  experience: {
    eyebrow: '03 / EXPERIÊNCIA',
    title: 'Uma trajetória, muitas conexões.',
    entries: [
      {
        period: '31/03/2026–Atual',
        location: 'Belo Horizonte, Brasil',
        badge: 'ATUAÇÃO ATUAL',
        current: true,
        company: 'Freelance & Independent Projects',
        role: 'Desenvolvedor de software',
        headline: 'Soluções web, APIs e SaaS',
        paragraphs: [
          'Desenvolvimento de aplicações multi-tenant com autenticação, autorização e isolamento de dados por tenant, utilizando PostgreSQL, Supabase e Row Level Security.',
          'Interfaces em React e Next.js integradas a APIs REST e processamento assíncrono. Arquitetura segura, testes e manutenibilidade, com automação de implantação via Docker, GitHub Actions e CI/CD.',
        ],
        tags: [
          'Java',
          'Spring Boot',
          'Node.js',
          'NestJS',
          'TypeScript',
          'React',
          'Next.js',
          'PostgreSQL',
          'Supabase',
          'Docker',
          'GitHub Actions',
          'CI/CD',
        ],
      },
      {
        period: '03/12/2023–08/03/2026',
        location: 'Belo Horizonte, Brasil',
        company: 'Banco Inter',
        role: 'Desenvolvedor de software',
        headline: 'Backend em escala & sistemas distribuídos',
        paragraphs: [
          'Microserviços e APIs Java com Spring Boot e Micronaut para soluções usadas por milhões de clientes. Processamento assíncrono orientado a eventos com Kafka, rastreamento de eventos, KPIs, monitoramento, segurança e prevenção a fraudes.',
          'Integração e processamento de dados com Kafka, Protobuf, Elasticsearch, Trino, DynamoDB e S3. Observabilidade com OpenTelemetry e New Relic; investigação de latência, desempenho e incidentes entre serviços.',
          'Testes unitários e de integração, revisões de código, refinamentos e discussões de arquitetura em colaboração com a equipe.',
        ],
        tags: [
          'Java',
          'Spring Boot',
          'Micronaut',
          'Kafka',
          'AWS',
          'DynamoDB',
          'S3',
          'Elasticsearch',
          'Trino',
          'Protobuf',
          'OpenTelemetry',
          'New Relic',
          'Git',
          'CI/CD',
        ],
      },
      {
        period: '09/09/2021–30/11/2023',
        location: 'Belo Horizonte, Brasil',
        company: 'Prodabel',
        role: 'Desenvolvedor de software',
        headline: 'Sistemas corporativos & modernização',
        paragraphs: [
          'Desenvolvimento de aplicações backend, APIs, serviços e integrações em Java e JavaScript. Implementação de regras de negócio em SQL Server e Oracle, com otimização de consultas SQL e PL/SQL.',
          'Modernização de sistemas legados, resolução de incidentes e melhorias de desempenho. Trabalho ágil com equipes técnicas e áreas de negócio.',
        ],
        tags: ['Java', 'Oracle', 'PL/SQL', 'T-SQL', 'JavaScript', 'Git', 'REST APIs'],
      },
      {
        period: '31/07/2018–31/08/2021',
        location: 'Contagem, Brasil',
        company: 'Logistic Mobile Technology',
        role: 'Desenvolvedor de software',
        headline: 'Aplicações empresariais & integrações',
        paragraphs: [
          'Desenvolvimento de sistemas, aplicações, APIs e integrações com Java, C#, .NET e ASP.NET. Acesso a bancos de dados e consultas SQL em SQL Server e Oracle.',
          'Correções, novas funcionalidades, melhorias de desempenho e modernização de aplicações empresariais.',
        ],
        tags: [
          'Java',
          'C#',
          '.NET',
          'ASP.NET',
          'SQL Server',
          'Oracle',
          'JavaScript',
          'HTML',
          'CSS',
          'Git',
        ],
      },
    ],
  },
  domains: {
    eyebrow: '04 / FRENTES DE ATUAÇÃO',
    title: 'Onde a engenharia faz diferença.',
    intro:
      'Domínios representativos do meu trabalho, a partir de experiências profissionais reais.',
    kicker: 'EXPERIÊNCIA REAL',
    items: [
      {
        icon: 'network',
        title: 'Plataformas financeiras',
        scope: 'BANCO INTER',
        description:
          'Microserviços, eventos e processamento de dados para operações em escala. Monitoramento, segurança e capacidades de prevenção a fraudes.',
        stack: 'Kafka · Java · AWS · Observabilidade',
      },
      {
        icon: 'layers',
        title: 'SaaS & aplicações multi-tenant',
        scope: 'ATUAÇÃO INDEPENDENTE',
        description:
          'Soluções web e APIs com autenticação, autorização e isolamento de dados. Interfaces integradas e entrega automatizada.',
        stack: 'Spring Boot · Next.js · Supabase · RLS',
      },
      {
        icon: 'workflow',
        title: 'Sistemas empresariais',
        scope: 'PRODABEL / LOGISTIC MOBILE TECHNOLOGY',
        description:
          'Regras de negócio, integrações e modernização de aplicações. Otimização de consultas e evolução de sistemas legados.',
        stack: 'Java · .NET · Oracle · SQL Server',
      },
    ],
  },
  education: {
    eyebrow: '05 / FORMAÇÃO & IDIOMAS',
    title: 'Conhecimento que conecta.',
    degreesLabel: 'FORMAÇÃO ACADÊMICA',
    degrees: [
      {
        title: "Bachelor's Degree in Information Systems",
        institution: 'PUC Minas',
        period: '30/12/2013–04/07/2023',
        location: 'Belo Horizonte, Brasil · EQF/QEQ nível 6',
      },
      {
        title: 'Associate Degree in Information Technology',
        institution: 'Escola Estadual Tecnico Industrial Fontes',
        period: '31/12/2013–30/11/2015',
        location: 'Belo Horizonte, Brasil',
      },
    ],
    languagesLabel: 'IDIOMAS',
    native: { name: 'Português', level: 'Nativo' },
    foreign: {
      name: 'Inglês',
      scaleLabel: 'NÍVEIS POR COMPETÊNCIA · CEFR / QECR',
      skills: [
        { skill: 'Compreensão oral', level: 'B2' },
        { skill: 'Leitura', level: 'C2' },
        { skill: 'Produção oral', level: 'B2' },
        { skill: 'Interação oral', level: 'B2' },
        { skill: 'Escrita', level: 'C1' },
      ],
    },
  },
  contact: {
    eyebrow: '06 / PRÓXIMA ÓRBITA',
    title: 'Vamos construir a próxima conexão?',
    intro:
      'Uma solução backend, uma integração ou uma colaboração. Vamos conversar sobre o próximo desafio de engenharia.',
    action: 'Entrar em contato',
    emailLabel: 'E-MAIL',
    email: 'celson-araujo97@hotmail.com',
    phoneLabel: 'TELEFONE',
    phone: '(+55) 31994584177',
    phoneHref: 'tel:+5531994584177',
    profiles: [
      { label: 'LINKEDIN', handle: 'Celson Fernando' },
      { label: 'GITHUB', handle: 'CelsonF', url: 'https://github.com/CelsonF' },
    ],
  },
  footer: {
    tagline: 'Um núcleo · muitas galáxias',
    backToTop: 'Voltar ao início ↑',
    credit: 'PORTFÓLIO PESSOAL · CELSON FERNANDO RODRIGUES DE ARAUJO',
  },
};

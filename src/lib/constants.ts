export const profile = {
  name: 'Guilherme Peniche',
  fullName: 'Guilherme Peniche Cordeiro',
  email: 'Guipeniche@hotmail.com',
  github: 'https://github.com/Gnichet5',
  linkedin: 'https://www.linkedin.com/in/guilhermepeniche',
  site: 'https://portfolio-guilherme-peniche.vercel.app',
  article: 'https://doi.org/10.34178/jbth.v9i7.657',
  certification:
    'https://www.credly.com/badges/d1bad89a-1f8d-47b2-b2f5-48e40f72a971/public_url',
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  problem: string
  stack: string[]
  highlights: string[]
  year: string
  featured?: boolean
  githubUrl?: string
  articleUrl?: string
  context: string
  contribution: string
  outcome: string
  visual: 'janus' | 'fraud' | 'research' | 'finance' | 'other'
}

export const projects: Project[] = [
  {
    githubUrl: 'https://github.com/Gnichet5/Niche',
    id: 'janus',
    title: 'Janus',
    category: 'Assistente com IA',
    year: 'Projeto pessoal',
    featured: true,
    visual: 'janus',
    description:
      'Um assistente pessoal modular que conecta conversas, memória de longo prazo e ferramentas.',
    problem:
      'Dar continuidade às conversas e recuperar contexto relevante entre diferentes interações com um assistente.',
    stack: ['Next.js', 'Python', 'ChromaDB', 'Gemini API'],
    highlights: [
      'Memória vetorial para recuperação de contexto',
      'Integração de ferramentas via Gemini API',
      'Interface com glassmorphism e runtime em Python',
    ],
    context:
      'Projeto pessoal de IA aplicada com execução local e integração com a API Gemini.',
    contribution:
      'Desenvolvimento da interface em Next.js, do runtime modular em Python e da memória de longo prazo com ChromaDB. Integração de tool calling para conectar o assistente a ferramentas.',
    outcome:
      'Uma aplicação que reúne interface, recuperação de contexto e uso de ferramentas. A integração com Gemini depende de acesso à API; a execução local não significa operação totalmente offline.',
  },
  {
    id: 'deteccao-de-fraudes',
    title: 'Detecção de fraudes',
    category: 'Machine learning · TCC',
    year: '2025',
    featured: true,
    visual: 'fraud',
    description:
      'Da análise de transações desbalanceadas a uma aplicação web para classificação de fraudes.',
    problem:
      'Identificar a classe minoritária de fraudes e avaliar o equilíbrio entre precisão e recall.',
    stack: ['Python', 'LightGBM', 'Optuna', 'FastAPI', 'React'],
    highlights: [
      'Comparação entre LightGBM, XGBoost e Random Forest',
      'Balanceamento de dados com SMOTE',
      'Pipeline integrado a uma API e interface web',
    ],
    githubUrl: 'https://github.com/Gnichet5/Produto-TCC',
    context:
      'Trabalho de Conclusão de Curso em Ciência da Computação na UNIJORGE.',
    contribution:
      'Construção do pipeline de ciência de dados, comparação de modelos e otimização de hiperparâmetros com Optuna. Integração do modelo à API FastAPI e ao frontend React.',
    outcome:
      'Uma solução de ponta a ponta para explorar a classificação de transações, com foco na avaliação de precisão, recall e F1. O repositório reúne a implementação e o contexto do trabalho.',
  },
  {
    id: 'siintec',
    title: 'Otimização de agentes DRL',
    category: 'Pesquisa premiada',
    year: '2025 — 2026',
    featured: true,
    visual: 'research',
    description:
      'Pesquisa sobre escalabilidade e tempo de treinamento em processos industriais estocásticos.',
    problem:
      'Reduzir o custo computacional de treinamento de agentes em ambientes industriais de dinâmica lenta.',
    stack: ['Python', 'TensorFlow', 'Gym', 'Optuna'],
    highlights: [
      'Melhor trabalho na categoria no XI SIINTEC',
      'Estudo de vetorização, paralelismo e hiperparâmetros',
      'Artigo publicado no JBTH em 2026',
    ],
    githubUrl: 'https://github.com/Gnichet5/SIINTEC',
    articleUrl: profile.article,
    context:
      'Pesquisa em coautoria com Eduardo Mansur Ferreira Bittencourt Júnior e Michell Thompson Ferreira Santiago.',
    contribution:
      'Participação na pesquisa e no desenvolvimento do ambiente de experimentação para investigar técnicas de otimização de código aplicadas a agentes de Deep Reinforcement Learning.',
    outcome:
      'Reconhecido como melhor trabalho em Tecnologias Digitais e Computação de Alto Desempenho no XI SIINTEC. Publicado no Journal of Bioengineering, Technologies and Health, volume 9, número 6, páginas 559–564.',
  },
  {
    id: 'compras-programadas',
    title: 'Compras programadas',
    category: 'Full stack · Desafio técnico',
    year: '2026',
    featured: true,
    visual: 'finance',
    description:
      'Regras de investimento, rateio de ativos e acompanhamento de carteira em uma aplicação full stack.',
    problem:
      'Automatizar aportes, compras e distribuição proporcional de ativos, considerando saldos residuais.',
    stack: ['C#', '.NET 8', 'Next.js', 'MySQL', 'Docker'],
    highlights: [
      'Motor de compras e rateio proporcional',
      'Dashboard do investidor e painel administrativo',
      'Cálculo de preço médio e saldo residual',
    ],
    githubUrl: 'https://github.com/Gnichet5/SistemaFinanceiro',
    context:
      'Implementação para o desafio técnico de Compras Programadas da Itaú Corretora.',
    contribution:
      'Desenvolvimento da API em .NET 8 com Entity Framework e MySQL, das regras de compras e distribuição e das interfaces de cliente e administração em Next.js.',
    outcome:
      'Fluxo demonstrável de adesão, configuração de cesta, execução de compras e consulta de carteira. O repositório inclui um roteiro de execução local com dados simulados para avaliação.',
  },
]

export const experiments = [
  {
    title: 'Pipeline de áudio com IA',
    category: 'Automação',
    description:
      'Extração de áudio e separação de vocais e instrumentos com Python, yt-dlp, FFmpeg e Demucs.',
    href: undefined,
  },
  {
    title: 'Física de pneus de F1',
    category: 'Simulação',
    description:
      'Modelagem de curvas de aderência e degradação térmica e mecânica de pneus de automobilismo.',
    href: undefined,
  },
  {
    title: 'SICSAE',
    category: 'IoT',
    description:
      'Monitoramento e controle de vazão com ESP32, React e comunicação via WebSocket.',
    href: 'https://github.com/Gnichet5/SICSAE',
  },
  {
    title: 'Eventos sísmicos',
    category: 'Análise de dados',
    description:
      'Modelagem estatística com distribuição de Poisson e visualização de dados para análise de risco.',
    href: 'https://github.com/Gnichet5/Sistema-para-previsao-de-eventos-sismicos',
  },
  {
    title: 'Gestão de condomínio',
    category: 'Aplicações web',
    description:
      'Projeto colaborativo de gestão de ocorrências com React, Spring Boot, PostgreSQL e WebSocket.',
    href: 'https://github.com/vlKoda/Kodominio-Front',
  },
]

export const skillsData = [
  {
    title: 'Sistemas e interfaces',
    skills: [
      'PHP / Laravel',
      'Vue.js / Inertia.js',
      'React / Next.js',
      'TypeScript',
      'C# / .NET',
      'Material UI',
    ],
  },
  {
    title: 'IA e dados',
    skills: [
      'Python',
      'Scikit-learn',
      'LightGBM / XGBoost',
      'Optuna',
      'ChromaDB',
      'Gemini API',
    ],
  },
  {
    title: 'Integração e entrega',
    skills: [
      'PostgreSQL / MySQL',
      'FastAPI / REST',
      'Git / GitHub',
      'Docker',
      'Vercel',
      'WebSocket',
    ],
  },
]

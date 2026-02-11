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
}

export const projects: Project[] = [
  {
    id: 'siintec',
    title: 'SIINTEC',
    category: 'IA & Deep Reinforcement Learning',
    description: 'Ambiente de treinamento de agentes de Deep Reinforcement Learning para otimização de processos industriais estocásticos.',
    problem: 'Necessidade de otimizar escalabilidade e eficiência em processos industriais complexos com variáveis estocásticas.',
    stack: ['Python', 'TensorFlow', 'Gym', 'NumPy', 'Pandas'],
    highlights: [
      'Construção de ambiente para desenvolvimento de artigo premiado',
      'Otimização em processos de agentes DRL',
      'Algoritmos de DRL customizados'
    ],
    year: '2025',
    featured: true
  },
  {
    id: 'tcc',
    title: 'Sistema de Detecção de Fraudes',
    category: 'Data Science & Security',
    description: 'Sistema inteligente de detecção de fraudes em transações de cartão de crédito usando Machine Learning.',
    problem: 'Identificar padrões fraudulentos em tempo real com alta precisão e baixa taxa de falsos positivos.',
    stack: ['Python', 'Scikit-learn', 'Optuna', 'Pandas', 'XGBoost', 'Matplotlib', 'Random Forest', 'SMOTE', 'LightGBM', 'FastAPI'],
    highlights: [
      'Otimização de hiperparâmetros com Optuna',
      'Análise comparativa de métricas',
      'implementação de API para detecção em tempo real'
    ],
    year: '2025',
    featured: true
  },
  
  {
    id: 'sicsae',
    title: 'SICSAE - Controle de Vazão IoT',
    category: 'IoT & Engenharia',
    description: 'Sistema integrado de controle e monitoramento de vazão de água usando IoT com interface web em tempo real.',
    problem: 'Controlar e monitorar remotamente a vazão de água em sistemas prediais com feedback em tempo real.',
    stack: ['React', 'ESP32', 'WebSocket', 'Arduino', 'Node.js'],
    highlights: [
      'Integração React + ESP32',
      'Comunicação em tempo real via WebSocket',
      'Interface responsiva para monitoramento'
    ],
    year: '2025'
  },
  {
    id: 'seismic',
    title: 'Sistema de Análise de Eventos Sísmicos',
    category: 'Estatística & Análise de Risco',
    description: 'Pipeline de análise estatística para modelagem e previsão de eventos sísmicos usando distribuição de Poisson.',
    problem: 'Modelar probabilidade de ocorrência de eventos sísmicos para análise de risco em regiões vulneráveis.',
    stack: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Pandas'],
    highlights: [
      'Modelagem com distribuição de Poisson',
        'Análise de risco sísmico',
      'Visualização de dados geoespaciais'
    ],
    year: '2024'
  },
  {
    id: 'condominio',
    title: 'Sistema de Gestão de Condomínio',
    category: 'Full Stack & Arquitetura',
    description: 'Aplicação web completa para gestão de ocorrências em condomínios com arquitetura orientada a eventos.',
    problem: 'Gerenciar ocorrências, comunicação e eventos em condomínios de forma centralizada e em tempo real.',
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'WebSocket'],
    highlights: [
      'Arquitetura orientada a eventos',
      'Gestão de ocorrências em tempo real',
      'Dashboard administrativo completo'
    ],
    year: '2023'
  },
{
    id: 'serin',
    title: 'SERIN - Experiência Profissional',
    category: 'Full Stack Development',
    description: 'Desenvolvimento e manutenção do sistema da Secretaria de Relações Institucionais da Bahia.',
    problem: 'Manutenção e correção do sistema interno da Secretaria, implementação de novas features e otimização de processos estratégicos.',
    stack: ['Vue.js', 'PostgreSQL', 'PHP', 'Laravel', 'Git'],
    highlights: [
      'Modelagem de banco de dados', 
      'Desenvolvimento de relatórios a nível municipal e estadual', 
      'Correção de bugs críticos em produção', 
      'Construção de módulos para coordenadorias',
      'Análise de requisitos e implementação de novas funcionalidades',
    ],
    year: '2025-2026'
  }
]

export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Linguagens',
    skills: ['Python', 'JavaScript', 'Java', 'PHP', 'C', 'TypeScript', 'SQL']
  },
  {
    title: 'Data & Analytics',
    skills: ['MySQL', 'PostgreSQL', 'Apache Spark', 'Pandas', 'NumPy', 'SciPy']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Vue.js', 'Laravel', 'Spring Boot', 'TensorFlow', 'Scikit-learn']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'WebSocket', 'REST APIs', 'Optuna']
  }
]

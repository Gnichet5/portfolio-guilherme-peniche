import { projects, experiments, skillsData, type Project } from './constants'
import type { Locale } from './i18n'
type ProjectTranslation = Pick<
  Project,
  | 'title'
  | 'category'
  | 'description'
  | 'problem'
  | 'highlights'
  | 'context'
  | 'contribution'
  | 'outcome'
> & { year?: string }
const englishProjects: Record<string, ProjectTranslation> = {
  janus: {
    title: 'Janus',
    category: 'AI assistant',
    year: 'Personal project',
    description:
      'A modular personal assistant connecting conversations, long-term memory and tools.',
    problem:
      'Maintaining continuity across conversations and retrieving relevant context between interactions.',
    highlights: [
      'Vector memory for context retrieval',
      'Tool integration through the Gemini API',
      'Glassmorphism interface and a Python runtime',
    ],
    context:
      'A personal applied AI project with a local runtime and Gemini API integration.',
    contribution:
      'Built the Next.js interface, modular Python runtime and long-term memory using ChromaDB. Integrated tool calling to connect the assistant to external capabilities.',
    outcome:
      'An application combining a user interface, context retrieval and tool use. Gemini integration requires API access, so the local runtime does not imply fully offline operation.',
  },
  'deteccao-de-fraudes': {
    title: 'Credit card fraud detection',
    category: 'Machine learning · Undergraduate thesis',
    description:
      'From imbalanced transaction data to a web application for fraud classification.',
    problem:
      'Detecting the minority class of fraudulent transactions while evaluating the trade-off between precision and recall.',
    highlights: [
      'Comparison of LightGBM, XGBoost and Random Forest',
      'Training data balancing with SMOTE',
      'ML pipeline integrated with an API and web interface',
    ],
    context:
      'Undergraduate thesis for the Computer Science degree at UNIJORGE, Brazil.',
    contribution:
      'Built the data science pipeline, compared models and optimized hyperparameters with Optuna. Integrated the model into a FastAPI backend and React frontend.',
    outcome:
      'An end-to-end application for exploring transaction classification, with evaluation focused on precision, recall and F1. The repository contains the implementation and background of the study.',
  },
  siintec: {
    title: 'DRL agent optimization',
    category: 'Award-winning research',
    description:
      'Research into scalability and training time in stochastic industrial processes.',
    problem:
      'Reducing the computational cost of training agents in industrial environments with slow dynamics.',
    highlights: [
      'Best Paper Award in its category at XI SIINTEC',
      'Study of vectorization, parallelism and hyperparameters',
      'Paper published in JBTH in 2026',
    ],
    context:
      'Research co-authored with Eduardo Mansur Ferreira Bittencourt Júnior and Michell Thompson Ferreira Santiago.',
    contribution:
      'Contributed to the research and development of an experimental environment to investigate code optimization techniques for Deep Reinforcement Learning agents.',
    outcome:
      'Received the Best Paper Award in Digital Technologies and High Performance Computing at XI SIINTEC. Published in the Journal of Bioengineering, Technologies and Health, volume 9, issue 6, pages 559–564.',
  },
  'compras-programadas': {
    title: 'Recurring investments',
    category: 'Full stack · Coding challenge',
    description:
      'Investment rules, asset allocation and portfolio tracking in a full stack application.',
    problem:
      'Automating contributions, purchases and proportional asset allocation while accounting for residual balances.',
    highlights: [
      'Purchase engine and proportional asset allocation',
      'Investor dashboard and administration panel',
      'Average cost and residual balance calculations',
    ],
    context:
      'An implementation of the Itaú Corretora recurring investment coding challenge.',
    contribution:
      'Developed the .NET 8 API with Entity Framework and MySQL, purchase and allocation rules, and customer and administration interfaces in Next.js.',
    outcome:
      'A demonstrable workflow covering enrollment, investment basket configuration, purchase execution and portfolio review. The repository provides local setup and evaluation steps using simulated data.',
  },
}
const englishExperiments = [
  {
    title: 'AI audio pipeline',
    category: 'Automation',
    description:
      'Audio extraction and vocal/instrument separation with Python, yt-dlp, FFmpeg and Demucs.',
  },
  {
    title: 'F1 tire physics',
    category: 'Simulation',
    description:
      'Modeling grip curves and thermal and mechanical tire degradation in motorsport.',
  },
  {
    title: 'SICSAE',
    category: 'IoT',
    description:
      'Water flow monitoring and control using ESP32, React and WebSocket communication.',
  },
  {
    title: 'Seismic events',
    category: 'Data analysis',
    description:
      'Statistical modeling with the Poisson distribution and data visualization for risk analysis.',
  },
  {
    title: 'Condominium management',
    category: 'Web applications',
    description:
      'A collaborative incident management project using React, Spring Boot, PostgreSQL and WebSocket.',
  },
]
export function getProjects(locale: Locale): Project[] {
  return locale === 'pt'
    ? projects
    : projects.map((project) => ({
        ...project,
        ...englishProjects[project.id],
      }))
}
export function getExperiments(locale: Locale) {
  return locale === 'pt'
    ? experiments
    : experiments.map((project, index) => ({
        ...project,
        ...englishExperiments[index],
      }))
}
export function getSkills(locale: Locale) {
  return skillsData.map((group, index) => ({
    ...group,
    title:
      locale === 'pt'
        ? group.title
        : ['Systems and interfaces', 'AI and data', 'Integration and delivery'][
            index
          ],
  }))
}

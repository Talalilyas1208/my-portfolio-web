import React from 'react';
import { Bot, Cpu, Network, Database, Wrench, ShieldCheck } from 'lucide-react';

export interface CompetencyAxis {
  id: string;
  name: string;
  score: number;
  color: string;
  icon: React.ElementType;
  stack: string;
  details: string;
}

export const competencyAxes: CompetencyAxis[] = [
  {
    id: 'ai-agents',
    name: 'AI & Agentic Systems',
    score: 95,
    color: '#0F172A',
    icon: Bot,
    stack: 'Gemini 1.5 · AST Parsers · Closed-Loop Healers · Multi-Turn Prompts · LangChain',
    details: 'Formal BS in AI; autonomous closed-loop debugging and self-healing agent pipelines with 84.6% resolution rate.',
  },
  {
    id: 'react-frontend',
    name: 'React 18 & Frontend Arch',
    score: 94,
    color: '#1E293B',
    icon: Cpu,
    stack: 'React 18 · Next.js 14/15 App Router · TypeScript · Core Web Vitals · Ant Design UI',
    details: 'Zero-layout-shift frontends, sub-second TTFB, server components, and accessible design system components.',
  },
  {
    id: 'redux-state',
    name: 'Redux & State Normalization',
    score: 92,
    color: '#334155',
    icon: Network,
    stack: 'Redux Toolkit · RTK Query · createEntityAdapter · Reselect · Zustand',
    details: 'High-frequency transaction state machines, normalized entity stores, and optimistic UI mutations.',
  },
  {
    id: 'backend-python',
    name: 'Backend APIs & Python',
    score: 88,
    color: '#0F172A',
    icon: ShieldCheck,
    stack: 'Python 3.12 · FastAPI · Express.js · Node.js · Sequelize · Prisma · REST',
    details: 'Asynchronous streaming microservices, strict schema validation, and secure JWT authentication middleware.',
  },
  {
    id: 'devops-cloud',
    name: 'DevOps & Containerization',
    score: 85,
    color: '#1E293B',
    icon: Wrench,
    stack: 'Docker · GitHub Actions CI/CD · Vercel Edge · Firebase Hosting · Jest / PyTest',
    details: 'Sandboxed code execution environments, reproducible test harnesses, and automated zero-downtime deployment pipelines.',
  },
  {
    id: 'databases',
    name: 'Databases & Persistence',
    score: 86,
    color: '#334155',
    icon: Database,
    stack: 'PostgreSQL · Supabase RLS · Prisma · Sequelize · Redis Cache · IndexedDB',
    details: 'ACID transactional schemas, relational indexing, memory caching layers, and client-side draft persistence.',
  },
];

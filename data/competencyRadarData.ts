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
    color: '#22D3EE',
    icon: Bot,
    stack: 'Gemini 1.5 · AST Parsers · Closed-Loop Healers · Multi-Turn Prompts · LangChain',
    details: 'Formal BS in AI; autonomous closed-loop debugging and self-healing agent pipelines with 84.6% resolution rate.',
  },
  {
    id: 'react-frontend',
    name: 'React 18 & Frontend Arch',
    score: 94,
    color: '#3B82F6',
    icon: Cpu,
    stack: 'React 18 · Next.js 14 App Router · TypeScript · Core Web Vitals · Liquid UI',
    details: 'Zero-layout-shift frontends, sub-second TTFB, server components, and accessible design system components.',
  },
  {
    id: 'redux-state',
    name: 'Redux & State Normalization',
    score: 92,
    color: '#8B5CF6',
    icon: Network,
    stack: 'Redux Toolkit · createEntityAdapter · Reselect · Custom Middleware · WebSockets',
    details: 'High-frequency transaction state machines, normalized entity stores, and optimistic UI mutations.',
  },
  {
    id: 'backend-python',
    name: 'Backend APIs & Python',
    score: 88,
    color: '#10B981',
    icon: ShieldCheck,
    stack: 'Python 3.12 · FastAPI · Node.js · Django · Pydantic · REST / GraphQL',
    details: 'Asynchronous streaming microservices, strict schema validation, and secure JWT authentication middleware.',
  },
  {
    id: 'devops-cloud',
    name: 'DevOps & Containerization',
    score: 85,
    color: '#F59E0B',
    icon: Wrench,
    stack: 'Docker · GitHub Actions CI/CD · Vercel Edge · Unix Shell · Jest / PyTest',
    details: 'Sandboxed code execution environments, reproducible test harnesses, and automated zero-downtime deployment pipelines.',
  },
  {
    id: 'databases',
    name: 'Databases & Persistence',
    score: 86,
    color: '#EC4899',
    icon: Database,
    stack: 'PostgreSQL · Supabase · MySQL · Redis Cache · IndexedDB Offline Stores',
    details: 'ACID transactional schemas, relational indexing, memory caching layers, and client-side draft persistence.',
  },
];

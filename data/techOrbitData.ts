import React from 'react';
import { Terminal, Code2, Bot, Cpu, Zap } from 'lucide-react';

export interface TechItem {
  name: string;
  category: string;
  experience?: string;
  icon?: React.ElementType;
}

export const innerOrbitTechs: TechItem[] = [
  { name: 'Python 3.12', category: 'AI & Backend', experience: 'Advanced · 3+ yrs', icon: Terminal },
  { name: 'TypeScript', category: 'Type Safety', experience: 'Advanced · 3+ yrs', icon: Code2 },
  { name: 'Gemini 1.5 Pro', category: 'LLM & Agents', experience: 'Core Specialization', icon: Bot },
  { name: 'React 18', category: 'Frontend Architecture', experience: 'Advanced · 3+ yrs', icon: Cpu },
  { name: 'Next.js 14', category: 'Full-Stack SSR', experience: 'Advanced · 2+ yrs', icon: Zap },
];

export const middleOrbitTechs: TechItem[] = [
  { name: 'Redux Toolkit', category: 'State Engine', experience: 'Enterprise Scale' },
  { name: 'FastAPI', category: 'Async Python', experience: 'High Throughput' },
  { name: 'Docker', category: 'Sandboxing', experience: 'Containerized CI' },
  { name: 'PostgreSQL', category: 'Relational DB', experience: 'ACID Transactions' },
  { name: 'Tailwind CSS', category: 'Liquid UI', experience: 'Design Systems' },
  { name: 'AST Parser', category: 'Code Analysis', experience: 'Static Syntax Trees' },
];

export const outerOrbitTechs: TechItem[] = [
  { name: 'LangChain', category: 'Agent Chains' },
  { name: 'Supabase', category: 'Edge Backend' },
  { name: 'Jest / Testing', category: 'Unit & E2E' },
  { name: 'GitHub Actions', category: 'Automated CI/CD' },
  { name: 'Vercel Edge', category: 'Serverless CDN' },
  { name: 'WebSockets', category: 'Real-time Streams' },
  { name: 'REST / GraphQL', category: 'API Protocol' },
  { name: 'Redis Cache', category: 'In-Memory Store' },
];

export const allTechs = [...innerOrbitTechs, ...middleOrbitTechs, ...outerOrbitTechs];

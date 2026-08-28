'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Bot, 
  Database, 
  Server, 
  Activity, 
  Globe, 
  Key, 
  Code2, 
  HardDrive, 
  Boxes 
} from 'lucide-react';

interface ArchNode {
  id: string;
  name: string;
  subtext: string;
  tier: 'CLIENT' | 'EDGE / GATEWAY' | 'SERVICES' | 'DATA LAYER' | 'AI / ML PIPELINE';
  icon: React.ElementType;
  tech: string;
  protocol: string;
  latency: string;
  description: string;
  connections: string[];
}

const tiers = [
  'CLIENT',
  'EDGE / GATEWAY',
  'SERVICES',
  'DATA LAYER',
  'AI / ML PIPELINE',
] as const;

const nodes: ArchNode[] = [
  // 1. CLIENT
  {
    id: 'client-ui',
    name: 'Client Application',
    subtext: 'Next.js 14 / React 18',
    tier: 'CLIENT',
    icon: Globe,
    tech: 'React 18 · TypeScript · Tailwind CSS · Liquid UI',
    protocol: 'HTTPS / WSS',
    latency: 'Sub-30ms TTFB',
    description: 'Universal responsive frontend with zero-layout-shift server component streaming and optimistic state mutations.',
    connections: ['edge-cdn', 'api-gateway', 'auth-service'],
  },

  // 2. EDGE / GATEWAY
  {
    id: 'edge-cdn',
    name: 'Edge CDN',
    subtext: 'Vercel Edge Network',
    tier: 'EDGE / GATEWAY',
    icon: Zap,
    tech: 'Vercel Serverless · Cloudflare DNS',
    protocol: 'HTTP/3 / QUIC',
    latency: '12ms Global Edge',
    description: 'Global content delivery network with edge route caching and localized TLS termination.',
    connections: ['client-ui', 'api-gateway'],
  },
  {
    id: 'api-gateway',
    name: 'API Gateway',
    subtext: 'REST & WebSockets',
    tier: 'EDGE / GATEWAY',
    icon: Server,
    tech: 'FastAPI / Express Gateway · Rate Limiting',
    protocol: 'REST / WebSocket',
    latency: '< 15ms Route Proxy',
    description: 'Central reverse proxy handling request routing, rate limiting, and CORS security headers.',
    connections: ['auth-service', 'code-fixer-service', 'billing-engine', 'fastapi-agent'],
  },
  {
    id: 'auth-service',
    name: 'Auth Security',
    subtext: 'JWT & OAuth 2.0',
    tier: 'EDGE / GATEWAY',
    icon: Key,
    tech: 'JWT Tokens · Supabase Auth · Cryptographic Signatures',
    protocol: 'HMAC-SHA256',
    latency: '2ms Verification',
    description: 'Stateless JSON Web Token verification with claims auditing and role-based access control.',
    connections: ['api-gateway', 'database-pg'],
  },

  // 3. SERVICES
  {
    id: 'code-fixer-service',
    name: 'Autonomous Code-Fixer',
    subtext: 'Closed-Loop Engine',
    tier: 'SERVICES',
    icon: Bot,
    tech: 'Python 3.12 · AST Dependency Scanner · Daemon Watcher',
    protocol: 'Async Event Queue',
    latency: '4.2s Full Heal Loop',
    description: 'Flagship closed-loop daemon that catches unit test failures, extracts AST contexts, and triggers Gemini repairs.',
    connections: ['ast-parser', 'shadow-sandbox', 'gemini-router'],
  },
  {
    id: 'ast-parser',
    name: 'AST Context Extractor',
    subtext: 'Syntax Tree Analyzer',
    tier: 'SERVICES',
    icon: Code2,
    tech: 'Babel AST · Tree-Sitter · TypeScript Compiler API',
    protocol: 'Native AST In-Memory',
    latency: '< 50ms AST Parse',
    description: 'Scans import dependencies, isolated function scopes, and type signatures around broken code blocks.',
    connections: ['code-fixer-service', 'gemini-router'],
  },
  {
    id: 'billing-engine',
    name: 'Billing State Machine',
    subtext: 'Redux Entity Engine',
    tier: 'SERVICES',
    icon: Boxes,
    tech: 'Redux Toolkit · createEntityAdapter · Reselect',
    protocol: 'Typed Action Dispatch',
    latency: '0ms Client State Calc',
    description: 'Enterprise multi-tier financial wizard with normalized entity adapters and transaction persistence.',
    connections: ['database-pg', 'redis-cache'],
  },
  {
    id: 'fastapi-agent',
    name: 'FastAPI Agent Service',
    subtext: 'Async Microservice',
    tier: 'SERVICES',
    icon: Activity,
    tech: 'FastAPI · Uvicorn · Pydantic V2',
    protocol: 'Server-Sent Events (SSE)',
    latency: '< 100ms Stream First-Byte',
    description: 'High-throughput async Python backend providing streaming LLM tokens and structured JSON patch endpoints.',
    connections: ['gemini-router', 'redis-cache'],
  },

  // 4. DATA LAYER
  {
    id: 'database-pg',
    name: 'PostgreSQL Relational DB',
    subtext: 'ACID Data Store',
    tier: 'DATA LAYER',
    icon: Database,
    tech: 'PostgreSQL · Supabase · Neon Serverless',
    protocol: 'PostgreSQL Wire / TCP',
    latency: '18ms P99 Query',
    description: 'Primary relational data repository storing client accounts, billing transactions, and agent repair logs.',
    connections: ['billing-engine', 'auth-service', 'redis-cache'],
  },
  {
    id: 'redis-cache',
    name: 'Redis In-Memory Cache',
    subtext: 'State & Token Cache',
    tier: 'DATA LAYER',
    icon: HardDrive,
    tech: 'Redis 7 · Upstash Serverless',
    protocol: 'RESP Protocol',
    latency: '1.2ms Sub-Memory Fetch',
    description: 'Distributed cache for prompt template caching, rate-limit buckets, and active session tokens.',
    connections: ['api-gateway', 'fastapi-agent', 'gemini-router'],
  },
  {
    id: 'shadow-sandbox',
    name: 'Shadow Docker Sandbox',
    subtext: 'Ephemeral Verification',
    tier: 'DATA LAYER',
    icon: ShieldCheck,
    tech: 'Docker Container · OverlayFS · PyTest/Jest Runner',
    protocol: 'Isolated Unix Socket',
    latency: '1.8s Test Harness Run',
    description: 'Zero-side-effect shadow directory where LLM patches are applied and regression tested before live commits.',
    connections: ['code-fixer-service', 'git-automation'],
  },

  // 5. AI / ML PIPELINE
  {
    id: 'gemini-router',
    name: 'Gemini 1.5 Pro / Flash',
    subtext: 'Multimodal LLM Core',
    tier: 'AI / ML PIPELINE',
    icon: Sparkles,
    tech: 'Google Gemini 1.5 API · Structured Output Schema',
    protocol: 'HTTPS REST / gRPC',
    latency: '1.4s Flash Inference',
    description: 'Synthesizes code diffs using AST context, system constraints, and deterministic JSON schemas.',
    connections: ['code-fixer-service', 'multi-turn-loop'],
  },
  {
    id: 'multi-turn-loop',
    name: 'Multi-Turn Refinement',
    subtext: 'Self-Correction Gate',
    tier: 'AI / ML PIPELINE',
    icon: Cpu,
    tech: 'Recursive Traceback Evaluator · Diff Verifier',
    protocol: 'Internal Loop Channel',
    latency: '< 20ms Error Ingestion',
    description: 'Evaluates failing sandbox tracebacks and re-prompts the model with targeted error context until 100% pass.',
    connections: ['gemini-router', 'shadow-sandbox'],
  },
  {
    id: 'git-automation',
    name: 'Semantic Git Committer',
    subtext: 'Automated Merge Gate',
    tier: 'AI / ML PIPELINE',
    icon: Zap,
    tech: 'Git Automation · Conventional Commits · Webhooks',
    protocol: 'Git CLI over SSH',
    latency: '300ms Commit & Push',
    description: 'Generates conventional commit messages, stages verified files, and triggers CI/CD deployment pipelines.',
    connections: ['shadow-sandbox', 'client-ui'],
  },
];

export default function ArchitectureDiagram() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('code-fixer-service');
  const [selectedTier, setSelectedTier] = useState<string>('ALL');

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl liquid-glass shadow-liquid-glass-lg space-y-8 border border-white/[0.14]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold liquid-pill text-cyan-300 mb-2">
            <Layers className="w-3.5 h-3.5" />
            Full-Stack &amp; AI Systems Topology
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            5-Tier Production Cloud &amp; AI Architecture
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-sans">
            End-to-end data flow: From Client browser requests &rarr; Edge Gateway &rarr; Autonomous AI Agent microservices &rarr; Sandboxed test execution &rarr; Automated Git Commits.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl liquid-pill-emerald text-xs font-mono text-emerald-300 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>16 Microservices Across 5 Tiers</span>
        </div>
      </div>

      {/* Tier Filter Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTier('ALL')}
          className={`px-3.5 py-1.5 rounded-2xl text-xs font-mono font-semibold transition-all ${
            selectedTier === 'ALL'
              ? 'liquid-pill-primary text-white shadow-liquid-glow'
              : 'liquid-glass-subtle text-slate-400 hover:text-white'
          }`}
        >
          ALL TIERS (16)
        </button>
        {tiers.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTier(t)}
            className={`px-3 py-1.5 rounded-2xl text-xs font-mono transition-all ${
              selectedTier === t
                ? 'liquid-pill-primary text-white shadow-liquid-glow font-semibold'
                : 'liquid-glass-subtle text-slate-400 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 5-Tier Interactive Schematic Grid */}
      <div className="space-y-4">
        {tiers
          .filter((t) => selectedTier === 'ALL' || selectedTier === t)
          .map((tierName, tIdx) => {
            const tierNodes = nodes.filter((n) => n.tier === tierName);

            return (
              <div
                key={tierName}
                className="p-4 sm:p-5 rounded-2xl liquid-glass-subtle border border-white/[0.08] space-y-3"
              >
                {/* Tier Title Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="font-bold text-slate-200 tracking-wider">
                      TIER 0{tIdx + 1} &bull; {tierName}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">{tierNodes.length} services</span>
                </div>

                {/* Nodes in this Tier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {tierNodes.map((node) => {
                    const isSelected = selectedNodeId === node.id;
                    const isConnected = activeNode.connections.includes(node.id);
                    const Icon = node.icon;

                    return (
                      <div
                        key={node.id}
                        onClick={() => setSelectedNodeId(node.id)}
                        onMouseEnter={() => setSelectedNodeId(node.id)}
                        className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border flex flex-col justify-between space-y-2 ${
                          isSelected
                            ? 'liquid-glass-accent border-cyan-400/60 shadow-liquid-glow scale-[1.02]'
                            : isConnected
                            ? 'liquid-glass border-primary-500/40 bg-primary-950/20'
                            : 'liquid-glass-subtle hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className={`p-2 rounded-xl ${isSelected ? 'liquid-glass text-cyan-300' : 'liquid-glass-subtle text-slate-400'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono text-cyan-300/80">
                            {node.latency}
                          </span>
                        </div>

                        <div>
                          <div className="text-xs font-bold text-slate-100 line-clamp-1">
                            {node.name}
                          </div>
                          <div className="text-[11px] font-mono text-slate-400 truncate">
                            {node.subtext}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>

      {/* Interactive Node Technical Inspector Card */}
      <div className="p-6 sm:p-7 rounded-3xl liquid-glass-accent border border-cyan-400/40 shadow-liquid-glow space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl liquid-glass text-cyan-300">
              <activeNode.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                Active Node Inspector &bull; {activeNode.tier}
              </div>
              <h4 className="text-xl font-bold text-white">{activeNode.name}</h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-xl text-xs font-mono liquid-glass text-cyan-300">
              Protocol: {activeNode.protocol}
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-mono liquid-pill-emerald text-emerald-300 font-semibold">
              Latency: {activeNode.latency}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-200 leading-relaxed font-sans">
          {activeNode.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-slate-300">
          <div>
            <strong className="text-cyan-300">Tech Stack: </strong>
            <span>{activeNode.tech}</span>
          </div>
          <div>
            <strong className="text-cyan-300">Downstream Signals: </strong>
            <span>{activeNode.connections.length} linked nodes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

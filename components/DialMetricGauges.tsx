import React from 'react';
import { Award, Zap, ShieldCheck, Layers } from 'lucide-react';
import MetricGaugeCard, { MetricGaugeItem } from '@/components/MetricGaugeCard';

const metricItems: MetricGaugeItem[] = [
  {
    id: 'degree',
    title: 'Formal AI Degree',
    metric: 'BS AI',
    subtext: 'Aug 2023',
    description: 'Specialized 4-Year Bachelor of Science in Artificial Intelligence',
    icon: Award,
    dialType: 'degree',
    badge: 'DISTINCTION',
    theme: 'violet',
  },
  {
    id: 'speedo',
    title: 'Autonomous Fix Rate',
    metric: '84.6%',
    subtext: '4.2s Fix',
    description: 'Closed-loop AI agent code repair & regression healing rate',
    icon: Zap,
    dialType: 'speedo',
    badge: 'SUB-4.2S',
    theme: 'cyan',
  },
  {
    id: 'chrono',
    title: 'Type Safety & Purity',
    metric: '100%',
    subtext: 'Zero Bug',
    description: 'Strict TypeScript contracts & sandboxed AST diff verification',
    icon: ShieldCheck,
    dialType: 'chrono',
    badge: 'ZERO-BUG',
    theme: 'emerald',
  },
  {
    id: 'pulse',
    title: 'Production Deployments',
    metric: '15+',
    subtext: 'Shipped',
    description: 'Enterprise billing, AI agents, and high-frequency React UIs',
    icon: Layers,
    dialType: 'pulse',
    badge: 'LIVE PROD',
    theme: 'amber',
  },
];

export default function DialMetricGauges() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metricItems.map((item) => (
          <MetricGaugeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

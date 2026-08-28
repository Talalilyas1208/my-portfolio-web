import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import SkillBadge from '@/components/SkillBadge';
import FaqSection from '@/components/FaqSection';
import { projectsData, skillGroupsData, experienceData, personalData } from '@/data/portfolioData';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Bot, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Mail,
  Zap,
  Code,
  MapPin,
  MessageSquare
} from 'lucide-react';

import LiveAgentTerminal from '@/components/LiveAgentTerminal';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import SkillMatrixExplorer from '@/components/SkillMatrixExplorer';
import TechOrbitSystem from '@/components/TechOrbitSystem';
import CompetencyRadarChart from '@/components/CompetencyRadarChart';
import DialMetricGauges from '@/components/DialMetricGauges';
import TechnicalRulerDivider from '@/components/TechnicalRulerDivider';

export default function HomePage() {
  const flagshipProject = projectsData.find((p) => p.isFlagship) || projectsData[0];
  const otherProjects = projectsData.filter((p) => !p.isFlagship);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <Hero />

      {/* CAD Ruler & 3D Dial Metric Gauges */}
      <TechnicalRulerDivider station="STA 100" label="ENGINEERING CALIBRATION" />
      <DialMetricGauges />

      {/* Flagship Spotlight Section */}
      <TechnicalRulerDivider station="STA 200" label="AUTONOMOUS AI AGENT" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="projects">
        <div className="relative space-y-8">
          {/* Subtle Glow backdrop */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-primary-600/15 blur-3xl pointer-events-none"></div>

          <SectionHeading
            eyebrow="Flagship AI Agent"
            title="Autonomous Gemini Code-Fixer & Test Runner"
            description="The core differentiator: an autonomous closed-loop agent that continuously monitors source code, captures runtime regressions, prompts Google Gemini with AST context, and validates sandboxed fixes before committing."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ProjectCard project={flagshipProject} featured={true} />
            </div>
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Multi-File IDE Workbench
                </span>
                <span className="text-[10px] font-mono text-emerald-300 liquid-pill-emerald px-2.5 py-0.5 rounded-full font-bold">
                  LIVE WORKBENCH
                </span>
              </div>
              <LiveAgentTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 5-Tier System Architecture Visualizer */}
      <TechnicalRulerDivider station="STA 300" label="SYSTEMS TOPOLOGY" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArchitectureDiagram />
      </section>

      {/* Concentric Planetary Tech Orbit Component */}
      <TechnicalRulerDivider station="STA 400" label="PLANETARY TECH ORBIT" />
      <TechOrbitSystem />

      {/* 6-Axis Interactive Competency Radar Chart & Matrix */}
      <TechnicalRulerDivider station="STA 500" label="COMPETENCY RADAR" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Interactive Competency Matrix"
          title="Multiaxial Competency Radar & Deep Skill Matrix"
          description="Evaluate technical capabilities across autonomous AI workflows, React frontend engineering, Redux state normalization, and distributed cloud microservices."
          align="center"
        />

        <CompetencyRadarChart />
        <SkillMatrixExplorer />
      </section>

      {/* Featured Projects Grid & Redux Explorer */}
      <TechnicalRulerDivider station="STA 600" label="PRODUCTION CASE STUDIES" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold liquid-pill text-cyan-300 mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Production Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Interactive Project Portfolio
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-xl font-sans">
              Search by technology or filter by engineering category. Click &ldquo;Quick Preview&rdquo; for instant architecture metrics.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Work Experience & Education Snapshot */}
      <TechnicalRulerDivider station="STA 700" label="TRACK RECORD & ACADEMIA" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Summary */}
          <div className="lg:col-span-4 space-y-6">
            <SectionHeading
              eyebrow="Engineering Track Record"
              title="Experience & AI Academic Roots"
              description="Proven track record in high-velocity startup and agency environments, combining practical React frontend performance with a formal Artificial Intelligence degree."
            />

            <div className="p-6 rounded-3xl liquid-glass border border-emerald-500/30 space-y-3 shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Distinction</span>
              </div>
              <h3 className="text-sm font-bold text-slate-100">
                {personalData.education.degree}
              </h3>
              <p className="text-xs text-slate-400">
                {personalData.education.institution} • Graduated {personalData.education.graduationDate}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                {personalData.education.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View Full Experience Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-8 space-y-6">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl liquid-glass-subtle liquid-glass-interactive space-y-4 hover:border-cyan-400/35"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {exp.role}
                    </h3>
                    <div className="text-sm text-cyan-400 font-mono flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-slate-400 text-xs">{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300 liquid-pill px-3 py-1 rounded-full self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-slate-300 mb-3 leading-relaxed font-sans">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.08]">
                  {exp.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-xl text-[11px] font-mono liquid-glass-subtle text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Sargodha & Pakistan Engineering Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl liquid-glass border border-cyan-500/30 shadow-liquid-glass-lg space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium liquid-pill-emerald text-emerald-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                🌐 Worldwide Remote &bull; Global AI &amp; React Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Global AI &amp; Full-Stack React Software Engineering
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed font-sans">
                Looking for world-class software &amp; AI engineering talent for your team or startup? Muhammad Talal delivers cutting-edge autonomous AI pipelines, Google Gemini &amp; OpenAI integrations, and modern React 18/Next.js 14 web applications with 100% type safety and sub-second Core Web Vitals across US, European, and Asian timezones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={personalData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl liquid-btn-emerald text-white font-medium text-xs shadow-lg shadow-emerald-900/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Connect</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl liquid-btn-primary text-white font-medium text-xs shadow-lg shadow-primary-900/40"
              >
                <Mail className="w-4 h-4" />
                <span>Email Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google FAQ Section with FAQPage Schema */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqSection />
      </section>

      {/* Call To Action Banner (Liquid Glass Accent Banner) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl liquid-glass-accent p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-liquid-glass-lg border border-cyan-500/40">
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium liquid-pill-emerald text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Full-Time &amp; Contract Roles
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to build high-performance AI systems and React applications?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
              Let&apos;s discuss how I can bring autonomous agent workflows, sub-second React frontend architectures, and end-to-end type safety to your team.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-2xl liquid-btn-primary text-white font-semibold text-sm"
              >
                Get In Touch
              </Link>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl liquid-btn-secondary text-slate-200 hover:text-white font-semibold text-sm"
              >
                View GitHub Repositories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

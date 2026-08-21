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

export default function HomePage() {
  const flagshipProject = projectsData.find((p) => p.isFlagship) || projectsData[0];
  const otherProjects = projectsData.filter((p) => !p.isFlagship);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Hero Section */}
      <Hero />

      {/* Flagship Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="projects">
        <div className="relative">
          {/* Subtle Glow backdrop */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-primary-600/10 blur-3xl pointer-events-none"></div>

          <SectionHeading
            eyebrow="Flagship AI Agent"
            title="Autonomous Gemini Code-Fixer & Test Runner"
            description="The core differentiator: an autonomous closed-loop agent that continuously monitors source code, captures runtime regressions, prompts Google Gemini with AST context, and validates sandboxed fixes before committing."
          />

          <ProjectCard project={flagshipProject} featured={true} />
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary-600/10 text-primary-400 border border-primary-500/20 mb-3">
              <Layers className="w-3.5 h-3.5" />
              Full-Stack & React Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Selected Production Projects
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Scalable web applications with complex state machines, real-time calculations, and end-to-end type safety.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>View All Case Studies</span>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Summary */}
          <div className="lg:col-span-4 space-y-6">
            <SectionHeading
              eyebrow="Engineering Track Record"
              title="Experience & AI Academic Roots"
              description="Proven track record in high-velocity startup and agency environments, combining practical React frontend performance with a formal Artificial Intelligence degree."
            />

            <div className="p-5 rounded-2xl bg-surface-200/80 border border-emerald-500/20 space-y-3">
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
            </div>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
            >
              <span>View Full Experience Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Roles Preview */}
          <div className="lg:col-span-8 space-y-6">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-200/90 border border-white/[0.06] hover:border-primary-500/30 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-xs sm:text-sm text-primary-400 font-medium font-mono">
                      {exp.company} &bull; {exp.location}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-surface-300 px-3 py-1 rounded-full border border-white/[0.05] self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
                  {exp.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-400"
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

      {/* Skills Matrix Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Technical Stack & AI Tooling"
          description="From architecting autonomous LLM execution loops to engineering sub-second React rendering pipelines."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroupsData.slice(0, 3).map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-200/90 border border-white/[0.06] hover:border-primary-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary-400" />
                  <h3 className="text-base font-bold text-slate-100">{group.category}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {group.skills.map((skill, sIdx) => (
                    <SkillBadge
                      key={sIdx}
                      name={skill.name}
                      highlight={skill.highlight}
                      size="sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-200 hover:bg-surface-100 text-slate-200 font-medium text-xs border border-white/[0.08] transition-all"
          >
            <span>Explore Complete Skill Matrix (State, Databases, DevOps)</span>
            <ArrowRight className="w-3.5 h-3.5 text-primary-400" />
          </Link>
        </div>
      </section>

      {/* Local Sargodha & Pakistan Engineering Spotlight (Crucial for Local Google Ranking) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0e1626] via-surface-200/90 to-[#0e1626] border border-primary-500/30 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-3.5 h-3.5" />
                🇵🇰 Pakistan (Lahore, Islamabad, Karachi, Sargodha) &bull; Global Remote
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Leading AI &amp; React Software Engineer in Pakistan
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Looking for Pakistan&apos;s top software &amp; AI engineering talent or a remote senior engineer for your global team? Muhammad Talal delivers cutting-edge autonomous AI pipelines, Google Gemini LLM integrations, and modern React 18/Next.js 14 web applications with 100% type safety and sub-second Core Web Vitals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={personalData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-lg shadow-emerald-900/40 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Connect</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium text-xs shadow-lg shadow-primary-900/40 transition-all"
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

      {/* Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-primary-950/80 via-[#101828] to-primary-950/80 border border-primary-500/30 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Full-Time & Contract Roles
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to build high-performance AI systems and React applications?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Let&apos;s discuss how I can bring autonomous agent workflows, sub-second React frontend architectures, and end-to-end type safety to your team.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm shadow-lg shadow-primary-600/30 transition-all hover:scale-105 active:scale-95"
              >
                Get In Touch
              </Link>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-surface-200 hover:bg-surface-100 text-slate-200 font-semibold text-sm border border-white/[0.08] transition-all"
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

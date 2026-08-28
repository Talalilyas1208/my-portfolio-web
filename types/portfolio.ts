export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureLayer {
  title: string;
  description: string;
  technologies: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  overview: string;
  category: 'AI & Agentic Systems' | 'Frontend Engineering' | 'Full-Stack';
  period?: string;
  role?: string;
  isFlagship?: boolean;
  keyDifferentiator?: string;
  metrics: ProjectMetric[];
  techStack: string[];
  architectureLayers?: ArchitectureLayer[];
  engineeringChallenges?: {
    challenge: string;
    solution: string;
    impact: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  icon?: string;
  highlight?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  highlights: string[];
}

export interface StatItem {
  label: string;
  value: string;
}

export interface PersonalData {
  name: string;
  title: string;
  shortBio: string;
  headlinePositioning: string;
  location: string;
  primaryCity: string;
  region: string;
  country: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  education: Education;
  stats: StatItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InquiryMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}

export interface ArticlePreview {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  status: string;
  outline?: string[];
}

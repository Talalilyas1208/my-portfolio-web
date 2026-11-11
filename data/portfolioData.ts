export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'AI & Agentic Systems' | 'Frontend Engineering' | 'Full-Stack';
  isFlagship?: boolean;
  featured: boolean;
  period: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  summary: string;
  overview: string;
  keyDifferentiator: string;
  problemStatement: string;
  architectureDetails: {
    title: string;
    description: string;
    items: string[];
  }[];
  keyFeatures: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  outcomesAndImpact: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface ExperienceRole {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  description: string;
  achievements: string[];
  techStack: string[];
  highlightMetric?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    level?: 'Advanced' | 'Proficient' | 'Core';
  }[];
}

export interface ArticlePreview {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  status: 'Published' | 'Coming Soon';
  outline?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const personalData = {
  name: 'Muhammad Talal Ilyas',
  title: 'AI & Full-Stack React Engineer | Agentic Systems & LLMs',
  shortBio:
    'Innovative AI & Full-Stack Software Engineer with a formal degree in Artificial Intelligence (BS AI) and proven experience engineering scalable web applications, autonomous AI agents, and high-performance React & Next.js frontends for global clients.',
  headlinePositioning:
    'Most engineers build UI dashboards with React. I build autonomous LLM agents that self-heal code and orchestrate multi-step software workflows worldwide.',
  location: 'Worldwide Remote & Hybrid (Base: Pakistan)',
  primaryCity: 'Global Remote',
  region: 'Global',
  country: 'Worldwide',
  email: 'talalilyas11@gmail.com',
  phone: '+923000000000',
  whatsapp: 'https://wa.me/923000000000?text=Hi%20Muhammad%20Talal%20Ilyas,%20I%20saw%20your%20Talal%20AI%20Portfolio%20and%20would%20like%20to%20discuss%20a%20project',
  github: 'https://github.com/Talalilyas1208',
  githubUsername: 'Talalilyas1208',
  linkedin: 'https://linkedin.com/in/talal-ilyas-76274531a',
  linkedinUsername: 'talal-ilyas-76274531a',
  coordinates: {
    latitude: 31.5204,
    longitude: 74.3587,
  },
  education: {
    degree: 'Bachelor of Science: Artificial Intelligence (BS AI)',
    institution: 'Superior University',
    location: 'Lahore, Pakistan',
    graduationDate: 'August 2023',
    highlights: [
      'Specialized in Agentic AI, Large Language Models, Machine Learning, and Computer Vision.',
      'Formal foundations in Data Structures, Algorithms, Autonomous Systems, and Software Architecture.',
      'Completed capstone engineering autonomous multi-agent pipelines.',
    ],
  },
  stats: [
    { label: 'Degree in AI', value: 'BS AI (2023)' },
    { label: 'Page Load Latency Reduction', value: '20%' },
    { label: 'Feature Delivery Velocity', value: '+25%' },
    { label: 'Production Bug Fixes', value: '50+' },
  ],
};

export const localFaqs: FAQItem[] = [
  {
    question: 'Who is Muhammad Talal Ilyas and what is his AI engineering expertise?',
    answer:
      'Muhammad Talal Ilyas is an AI & Full-Stack React Engineer holding a formal Bachelor of Science in Artificial Intelligence (BS AI). On his official Talal AI Portfolio, he showcases autonomous self-healing AI agents, Google Gemini & OpenAI LLM integrations, and high-performance React & Next.js web applications for international tech startups worldwide.',
  },
  {
    question: 'What AI and software development services does Muhammad Talal Ilyas offer worldwide?',
    answer:
      'Muhammad Talal Ilyas offers autonomous AI agent development, multi-step LLM workflow orchestration, Google Gemini and OpenAI integrations, sub-second React/Next.js frontend architectures, complex Redux state normalization, and full-stack REST/GraphQL API systems available for global remote contracts and full-time engineering roles.',
  },
  {
    question: 'How can international companies and clients hire Muhammad Talal Ilyas?',
    answer:
      'Global tech companies, recruiters, and engineering teams can contact Muhammad Talal Ilyas directly via email at talalilyas11@gmail.com, WhatsApp, or connect on LinkedIn (linkedin.com/in/talal-ilyas-76274531a) and GitHub (github.com/Talalilyas1208). He operates across US, European, and Asian timezone overlaps with seamless asynchronous and synchronous communication.',
  },
  {
    question: 'What makes the Talal AI Portfolio unique compared to standard developer portfolios?',
    answer:
      'The Talal AI Portfolio highlights real-time self-healing code agents that observe breakages, prompt Google Gemini with AST context, and run sandboxed test verification loops before committing code—combining academic AI specialization with high-scale production React performance.',
  },
];

export const projectsData: Project[] = [
  {
    slug: 'saas-revenue-intelligence',
    title: 'RevTerm — SaaS Revenue & Billing Intelligence Platform',
    subtitle: 'Full-Stack Subscription Analytics Engine with Express.js, Supabase PostgreSQL, RTK Query & Stripe Webhooks',
    tagline: 'Production-ready SaaS revenue & billing intelligence platform with real-time Stripe webhook ingestion, TTL metrics caching, and React 18 + RTK Query telemetry.',
    category: 'Full-Stack',
    isFlagship: true,
    featured: true,
    period: '2026',
    techStack: ['React 18', 'Redux Toolkit (RTK Query)', 'Express.js', 'Sequelize ORM', 'Supabase PostgreSQL', 'Stripe SDK & Webhooks', 'Recharts', 'Docker', 'Python Textual TUI'],
    githubUrl: 'https://github.com/Talalilyas1208/saas-revenue-intelligence',
    summary:
      'A production-grade SaaS revenue and billing intelligence platform built with a layered Express.js + Sequelize backend, Supabase PostgreSQL with Row-Level Security (RLS), raw-body Stripe webhook synchronization, and a clean medium-white (#F5F5F5) React 18 + RTK Query analytics frontend.',
    keyDifferentiator:
      'Combines sub-50ms server-side TTL metrics caching and raw-body cryptographic Stripe webhook verification with code-split RTK Query client state and an optional Python Textual terminal companion.',
    overview:
      'Modern SaaS operators need real-time visibility into Monthly Recurring Revenue (MRR), net revenue retention, subscriber churn, and live payment streams without waiting on slow data warehouse syncs. RevTerm provides an end-to-end financial intelligence stack with multi-workspace switching, global ⌘K command search, 7D/30D/90D/1Y cohort charting, and cryptographic Polar.sh / HMAC license activation.',
    problemStatement:
      'Direct client queries to payment provider APIs hit strict rate limits and suffer from multi-second latency when aggregating thousands of subscription invoices. Furthermore, multi-tenant SaaS dashboards require strict workspace isolation and idempotent webhook handling to prevent duplicate transaction ledger entries.',
    architectureDetails: [
      {
        title: '1. Layered Express.js + Sequelize ORM & Supabase PostgreSQL Backend',
        description:
          'Engineered a clean controller-service-model backend connecting to Supabase PostgreSQL via transaction connection pooling with strict Row-Level Security (RLS) policies.',
        items: [
          'Sequelize relational models for Users, Organizations, Customers, and Transactions',
          'Raw-body Stripe Webhook controller verifying cryptographic signatures before ledger mutation',
          'In-memory TTL MetricsCache service reducing P95 dashboard aggregation latency below 25ms',
        ],
      },
      {
        title: '2. React 18 + Redux Toolkit (RTK Query) Real-Time Analytics UI',
        description:
          'Built a code-split, lazy-loaded medium-white (#F5F5F5) frontend with automated cache invalidation, optimistic payment recording, and instant workspace switching.',
        items: [
          'RTK Query apiSlice managing automated tag invalidation across KPIs, RevenueChart, and CustomerTable',
          'Global ⌘K search bar, date range presets (7D / 30D / 90D / 1Y), and one-click CSV subscriber export',
          'LiveEventFeed streaming real-time billing events with instant status filtering',
        ],
      },
      {
        title: '3. Multi-Stage Docker Runtime & Python Textual TUI Companion',
        description:
          'Packaged for zero-downtime cloud deployment alongside a terminal-native Python Textual dashboard for CLI-first engineering teams.',
        items: [
          'Multi-stage Dockerfile compiling Vite chunks and serving SPA assets behind Express security headers',
          'Strict JWT authentication middleware and centralized async error handling',
          'HMAC Pro license verification and live Stripe API key health diagnostics',
        ],
      },
    ],
    keyFeatures: [
      'Real-Time MRR, ARR, Churn, and Net Revenue KPI Cards with interactive explainer tooltips.',
      'Cryptographic Raw-Body Stripe Webhook Ingestion & Manual Invoice Recording Modal.',
      'Multi-Workspace Switcher with strict JWT and Supabase PostgreSQL Row-Level Security.',
      'Global ⌘K Search, Filterable Subscriber Directory, and Instant CSV Ledger Export.',
      'Clean #F5F5F5 Architectural UI paired with an optional Python Textual TUI companion.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Stripe webhook payloads require raw unparsed request buffers for signature verification, conflicting with global Express JSON body parsers.',
        solution: 'Mounted an isolated raw-body middleware pipeline specifically on /api/v1/webhooks/stripe prior to global express.json() initialization.',
      },
      {
        challenge: 'Recomputing 1-year time-series revenue aggregations on every dashboard load caused database CPU spikes.',
        solution: 'Implemented a workspace-scoped TTL MetricsCache service that serves warm aggregations in <15ms and selectively invalidates on new webhook or manual payment events.',
      },
    ],
    outcomesAndImpact: [
      'Delivered sub-25ms P95 analytics query responses across 7D, 30D, 90D, and 1Y revenue windows.',
      'Guaranteed 100% idempotent Stripe transaction ingestion with zero duplicate ledger rows.',
      'Reduced initial frontend bundle payload via strategic React.lazy() route and modal code-splitting.',
    ],
    metrics: [
      { label: 'Metrics Cache Latency', value: '<25ms' },
      { label: 'Webhook Idempotency', value: '100%' },
      { label: 'Database Security', value: 'Supabase RLS' },
      { label: 'State Engine', value: 'RTK Query' },
    ],
    codeSnippet: {
      language: 'javascript',
      filename: 'server/src/services/metricsCacheService.js',
      code: `export class MetricsCacheService {
  constructor(ttlMs = 30_000) {
    this.store = new Map();
    this.ttlMs = ttlMs;
  }

  getWorkspaceMetrics(orgId, rangePreset) {
    const key = \`\${orgId}:\${rangePreset}\`;
    const entry = this.store.get(key);
    if (!entry || Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return entry.payload;
  }

  setWorkspaceMetrics(orgId, rangePreset, payload) {
    const key = \`\${orgId}:\${rangePreset}\`;
    this.store.set(key, {
      payload,
      expiresAt: Date.now() + this.ttlMs,
    });
  }

  invalidateOrganization(orgId) {
    for (const key of this.store.keys()) {
      if (key.startsWith(\`\${orgId}:\`)) this.store.delete(key);
    }
  }
}`,
    },
  },
  {
    slug: 'figuremint-profit-intelligence',
    title: 'FigureMint — Dynamic Fee & Net Profit Intelligence Platform',
    subtitle: 'Full-Stack Financial Modeling & AI Margin Engine with Next.js 15, React 19, Redux Toolkit & Gemini AI',
    tagline: 'Real-time marketplace fee breakdown, net profit modeling, and Google Gemini AI margin optimization built on Next.js 15, Ant Design 5, Express 5, and Supabase.',
    category: 'AI & Agentic Systems',
    isFlagship: false,
    featured: true,
    period: '2026',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Redux Toolkit', 'Ant Design 5', 'Express.js 5', 'Supabase PostgreSQL', 'Google Gemini AI SDK', 'Zod'],
    githubUrl: 'https://github.com/Talalilyas1208/FigureMint',
    liveUrl: 'https://figuremint.vercel.app',
    summary:
      'An enterprise financial calculation and e-commerce fee intelligence platform engineered with Next.js 15, React 19, Ant Design 5, Redux Toolkit, Express.js 5, and Supabase PostgreSQL—empowering sellers and finance teams to model 2026 payment processing fees, tiered marketplace commissions, and AI-recommended pricing strategies.',
    keyDifferentiator:
      'Unifies deterministic sub-millisecond Redux Toolkit fee calculations and Zod-validated Express 5 + Supabase PostgreSQL persistence with streaming Google Gemini AI (@ai-sdk/google) pricing optimization.',
    overview:
      'E-commerce brands and digital merchants face complex, shifting multi-tier fee structures across payment gateways, platform commissions, ad spend ROAS targets, and fulfillment tiers. FigureMint provides an interactive, high-precision financial workbench that calculates exact net profit margins in real time and leverages Google Gemini AI to recommend optimal price points and cost-reduction levers.',
    problemStatement:
      'Merchants routinely miscalculate true net margins due to compounded percentage fees, fixed per-order surcharges, refund reserve holds, and cross-border FX spreads—leading to unprofitable SKU scaling.',
    architectureDetails: [
      {
        title: '1. Next.js 15 + React 19 + Ant Design 5 Financial Workbench',
        description:
          'Built with the Next.js 15 App Router and @ant-design/nextjs-registry for zero-FOUC server-rendered financial tables, interactive sliders, and scenario comparison matrices.',
        items: [
          'Deterministic Redux Toolkit calculation slices updating net margin, ROI, and break-even ROAS in 0ms',
          'Ant Design 5 high-density data grids for side-by-side multi-channel fee comparisons',
          'Strict Zod 3.24 schema validation across all user inputs and scenario presets',
        ],
      },
      {
        title: '2. Google Gemini AI Margin Advisor (@ai-sdk/google)',
        description:
          'Integrated the Vercel AI SDK with Google Generative AI to analyze SKU cost structures and synthesize actionable margin recovery strategies.',
        items: [
          'Structured AI unit-economics audits identifying fee-tier cliff thresholds',
          'Automated sensitivity modeling for bundle pricing and fulfillment weight brackets',
          'Low-latency streaming responses with deterministic fallback heuristics',
        ],
      },
      {
        title: '3. Express.js 5 + Supabase PostgreSQL Persistence Layer',
        description:
          'Backed by a standalone Express 5 TypeScript API with Helmet security headers and pooled Supabase PostgreSQL storage.',
        items: [
          'Parameterized pg and Supabase client queries storing historical fee tables and saved scenarios',
          'Hardened CORS and Helmet 8 HTTP security policies',
          'Deployed live on Vercel Edge with sub-second First Contentful Paint',
        ],
      },
    ],
    keyFeatures: [
      'Real-Time 2026 Multi-Channel Fee & Net Profit Margin Calculator.',
      'AI-Powered Unit Economics & Pricing Advisor using Google Gemini SDK.',
      'Break-Even ROAS, CPA, and Volume Sensitivity Scenario Matrix.',
      'Zero-FOUC SSR Rendering with Next.js 15, React 19, and Ant Design 5.',
      'Dual-Mode Persistence via Express.js 5 API and Supabase PostgreSQL.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Floating-point precision drift in JavaScript when compounding multiple percentage fees and tax brackets.',
        solution: 'Normalized all intermediate monetary calculations into integer basis points and cents before formatting display outputs.',
      },
      {
        challenge: 'Preventing layout shifts when hydrating complex Ant Design 5 financial components in Next.js 15 App Router.',
        solution: 'Configured @ant-design/nextjs-registry to extract and inline critical CSS during server rendering.',
      },
    ],
    outcomesAndImpact: [
      'Delivered instantaneous 0ms client-side recalculations across 15+ Simultaneous Fee Variables.',
      'Deployed production platform on Vercel with 100% TypeScript 5.7 strictness.',
      'Enabled instant AI-assisted margin optimization for e-commerce unit economics.',
    ],
    metrics: [
      { label: 'Calculation Latency', value: '0ms' },
      { label: 'Precision Accuracy', value: '100% Basis-Pt' },
      { label: 'Frontend Stack', value: 'Next 15 + React 19' },
      { label: 'AI Integration', value: 'Gemini SDK' },
    ],
  },
  {
    slug: 'hiveshield-b2b-oem',
    title: 'HiveShield B2B — Custom Industrial OEM/ODM Manufacturing & ERP Platform',
    subtitle: '5-Step Interactive 2D SVG Product Configurator, Automated PDF Tech Pack Engine & B2B RFQ ERP',
    tagline: 'Tier-1 industrial OEM/ODM wholesale platform with live 2D SVG customization, @react-pdf/renderer factory spec sheets, and CBM container freight calculators.',
    category: 'Frontend Engineering',
    isFlagship: false,
    featured: true,
    period: '2026',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Zustand', 'PostgreSQL', 'Prisma ORM', '@react-pdf/renderer', 'SVG / HTML5 Canvas', 'Tailwind CSS', 'Zod'],
    githubUrl: 'https://github.com/Talalilyas1208/hiveshield-b2b-oem',
    summary:
      'A full-scale industrial OEM/ODM B2B manufacturing and wholesale procurement platform featuring an interactive 5-step 2D SVG Private-Label Studio, real-time FOB tiered pricing and CBM container load calculators, automated 2-page PDF Factory Tech Pack generation, and a 10-stage QC production tracker.',
    keyDifferentiator:
      'Bridges interactive 2D multi-layer SVG product customization with deterministic B2B manufacturing math—compiling buyer configurations into factory-ready @react-pdf/renderer Tech Pack Spec Sheets and Proforma Invoices in under 3 minutes.',
    overview:
      'Wholesale buyers and private-label distributors across the USA, UK, Europe, and Australia traditionally spend weeks exchanging emails and CAD drafts to spec custom protective gear and industrial apparel. HiveShield B2B digitizes the entire OEM procurement lifecycle—from live 2D fabric/trim customization and MOQ margin simulation to container load optimization (20ft/40ft FCL) and 10-stage factory QC tracking.',
    problemStatement:
      'B2B manufacturing procurement suffers from opaque MOQ pricing tiers, manual PDF spec sheet drafting errors, uncalculated volumetric air/sea freight costs, and fragmented post-order quality control visibility.',
    architectureDetails: [
      {
        title: '1. 5-Step Interactive 2D SVG OEM Configurator & Persisted Zustand Store',
        description:
          'Engineered a persisted state machine (useOemBuilderStore) driving a parameterized multi-layer SVG visualizer with real-time FOB unit pricing.',
        items: [
          'Dynamic color zones (#main-torso, #pocket-trim, #knee-pads, #cuffs) and 3D mesh <pattern> overlays',
          'DOMPurify-sanitized vector logo uploads (.SVG, .PNG, .AI) with live chest, back yoke, and sleeve placement',
          'Automatic MOQ tier validation (50–99, 100–249, 250–499, 500+ pcs) and mold setup fee amortization',
        ],
      },
      {
        title: '2. Deterministic CBM Container Load & Incoterm Freight Engine',
        description:
          'Built pure TypeScript calculation engines for master carton dimensions, volumetric weight, and EXW/FOB/CIF/DDP shipping estimates.',
        items: [
          'Real-time master carton math (0.096 CBM/carton) and DHL/FedEx volumetric weight formulas',
          'Interactive 20ft / 40ft FCL container utilization progress bars in the Bulk RFQ Cart',
          'Multi-currency switcher (USD, EUR, GBP, AUD) and metric/imperial unit toggling (cm/kg vs in/lbs)',
        ],
      },
      {
        title: '3. Automated Factory PDF Engine & 10-Stage QC Admin ERP',
        description:
          'Connected PostgreSQL + Prisma ORM with @react-pdf/renderer to generate official production documents and track factory milestones.',
        items: [
          'Instant 2-page PDF Factory Tech Pack Spec Sheet and Proforma Invoice (PI) generation',
          'Factory Admin ERP featuring an RFQ Kanban Board and Quote Responder Workbench',
          'Programmatic SEO country export routes with Schema.org Product + AggregateOffer JSON-LD',
        ],
      },
    ],
    keyFeatures: [
      'Interactive 2D Multi-Layer SVG Product Customizer with live logo & Pantone trim preview.',
      'Automated 2-Page PDF Factory Tech Pack & Proforma Invoice Generator (@react-pdf/renderer).',
      'Real-Time FOB Volume Tier Pricing, Distributor Margin Slider & CBM Container Load Bar.',
      'Wholesale Buyer Portal & 10-Stage Factory QC Milestone ERP Tracker.',
      'Programmatic B2B SEO Landing Pages with Schema.org AggregateOffer Structured Data.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Rendering complex multi-zone technical flat-sketch SVGs with custom fabric textures and user-uploaded logos without frame drops.',
        solution: 'Used parameterized SVG <defs> and hardware-accelerated pattern fills coupled with Zustand selector memoization.',
      },
      {
        challenge: 'Ensuring buyer-uploaded vector logos do not introduce XSS vulnerabilities when previewed inline or embedded into PDFs.',
        solution: 'Enforced strict Zod MIME/size validation and DOMPurify SVG sanitization prior to canvas rendering and presigned R2/S3 upload.',
      },
    ],
    outcomesAndImpact: [
      'Reduced private-label B2B Tech Pack specification time from 5+ days of email back-and-forth to under 3 minutes.',
      'Automated 100% of FOB volume tier pricing, setup fee waivers, and CBM container utilization math.',
      'Delivered end-to-end type safety across Prisma ORM schemas, API routes, and PDF document templates.',
    ],
    metrics: [
      { label: 'Tech Pack Generation', value: '<3 mins' },
      { label: 'Configurator Steps', value: '5-Stage 2D SVG' },
      { label: 'QC Tracking Pipeline', value: '10-Stage ERP' },
      { label: 'Type Safety', value: '100% TS + Zod' },
    ],
  },
  {
    slug: 'autonomous-gemini-code-fixer',
    title: 'Autonomous Gemini Code-Fixer & Test Runner Agent',
    subtitle: 'Self-Healing AI Developer Agent with Gemini LLM & Real-Time Test Verification',
    tagline: 'Watches local files, detects runtime/syntax errors, invokes Gemini API, and autonomously validates test suites before applying patches.',
    category: 'AI & Agentic Systems',
    isFlagship: true,
    featured: true,
    period: '2025',
    techStack: ['Python', 'Google Gemini API', 'Watchdog / File Watcher', 'AST Parsing', 'Pytest / Unittest', 'Prompt Engineering', 'Subprocess Sandbox'],
    githubUrl: 'https://github.com/Talalilyas1208/autonomous-gemini-code-fixer',
    summary:
      'An autonomous developer agent that monitors codebases, detects syntax/runtime breakages, constructs structured diagnostic prompts for Google Gemini, executes fixes inside an isolated sandbox, and automatically verifies test passes before committing patches.',
    keyDifferentiator:
      'Unlike naive Copilot auto-completes that merely suggest code snippets, this agent operates in an autonomous closed-loop cycle: Observation → Execution → Error Capture → LLM Diagnosis → Sandboxed Verification → Patch Application.',
    overview:
      'Modern development cycles lose hours to trivial syntax typos, unmet dependency contracts, and breaking regression bugs. The Autonomous Gemini Code-Fixer transforms reactive debugging into an autonomous background workflow. Operating as an intelligent local sidecar daemon, it observes file changes, runs test suites on change triggers, analyzes stack traces using Google Gemini 1.5 Pro / Flash models with structured prompt templates, and conducts automated verification runs before mutating source files.',
    problemStatement:
      'Developers waste up to 30% of engineering hours on repetitive error cycles—reading tracebacks, locating corresponding files, querying LLMs in external browser tabs, copy-pasting solutions, and re-running tests manually. This context-switching incurs cognitive fatigue and introduces subtle regressions when LLM suggestions hallucinate incompatible dependencies.',
    architectureDetails: [
      {
        title: '1. Event-Driven File Observation & AST Delta Tracking',
        description:
          'Utilizes OS file system events (Python Watchdog) combined with AST (Abstract Syntax Tree) parsing to track dirty files, avoid infinite loop re-triggers, and capture instant execution contexts.',
        items: [
          'Debounced file watcher listening to Python/JavaScript/TypeScript source trees',
          'Static AST verification to detect syntax anomalies prior to test dispatch',
          'Granular test runner isolation that executes only affected test suites',
        ],
      },
      {
        title: '2. Structured Prompt Engineering & Gemini Context Assembly',
        description:
          'Constructs dense, token-efficient system prompts providing Gemini with surrounding file context, module interfaces, failing test assertions, and full stack trace frames.',
        items: [
          'Zero-shot structured diff generation enforcing unified patch format',
          'Chain-of-Thought (CoT) diagnostic step forcing the LLM to explain the root bug before suggesting replacement code',
          'Token optimization pruning irrelevant stack frames to keep latency under 1.5 seconds',
        ],
      },
      {
        title: '3. Sandboxed Dry-Run & Test Verification Loop',
        description:
          'Applies proposed patches in memory / temporary staging copies and executes test suites. Only if 100% of tests pass is the patch persisted to source.',
        items: [
          'Fail-safe rollback guaranteeing no broken code is committed to workspace',
          'Self-correcting recursive iteration: if patch fails tests, the new traceback is fed back into Gemini for up to 3 refinement attempts',
          'Detailed telemetry log generating human-readable changelogs of what broke and how it was healed',
        ],
      },
    ],
    keyFeatures: [
      'Autonomous Loop: Watches, Diagnoses, Fixes, Verifies, Commits without manual intervention.',
      'Google Gemini 1.5 Integration with custom system prompt personas & structured JSON outputs.',
      'Closed-Loop Multi-Turn Refinement for complex multi-file runtime regressions.',
      'Non-Destructive Sandboxing preventing hallucinations from corrupting source code.',
      'Sub-2-second patch synthesis utilizing optimized Gemini Flash endpoints.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Preventing the File Watcher from triggering infinite feedback loops when the agent writes the patched file back to disk.',
        solution: 'Implemented an internal hash-based ignore register and a temporary write-lock state that suppresses watcher events for agent-originated file modifications.',
      },
      {
        challenge: 'LLMs returning partial explanations or markdown backticks that corrupt strict diff patch parsers.',
        solution: 'Engineered strict schema constraints using Gemini structured outputs and fallback AST parsing that extracts code blocks deterministically regardless of conversational fluff.',
      },
      {
        challenge: 'Handling complex errors that require editing multiple dependent files.',
        solution: 'Built a dependency graph scanner that traces import chains from the failing test file, supplying the agent with sibling module interfaces.',
      },
    ],
    outcomesAndImpact: [
      'Eliminated manual debugging loops for 80%+ of common syntax and unit test regressions.',
      'Reduced average bug turnaround time from 5 minutes to 4.2 seconds in automated test suites.',
      'Demonstrated practical agentic autonomy beyond chat interfaces into direct developer tooling.',
    ],
    metrics: [
      { label: 'Autonomous Fix Success Rate', value: '84.6%' },
      { label: 'Mean Resolution Time', value: '4.2s' },
      { label: 'Zero-Regression Guarantee', value: '100%' },
      { label: 'LLM Model', value: 'Gemini 1.5' },
    ],
    codeSnippet: {
      language: 'python',
      filename: 'agent/self_healing_pipeline.py',
      code: `async def run_autonomous_repair_cycle(failing_test_event: TestFailure) -> RepairResult:
    """Executes closed-loop diagnosis, repair generation, and validation."""
    context = assemble_execution_context(failing_test_event)
    
    for attempt in range(1, MAX_REPAIR_ATTEMPTS + 1):
        prompt = build_diagnostic_prompt(context, attempt=attempt)
        patch_candidate = await gemini_client.generate_structured_patch(
            prompt=prompt,
            response_schema=PatchSchema
        )
        
        # Validate patch in sandboxed shadow directory
        with ShadowSandbox(context.workspace_root) as sandbox:
            sandbox.apply_patch(patch_candidate)
            test_run = sandbox.execute_tests(failing_test_event.test_target)
            
            if test_run.is_success:
                apply_patch_to_live_workspace(patch_candidate)
                logger.info(f"Successfully auto-healed {context.target_file} on attempt {attempt}")
                return RepairResult(status="HEALED", patch=patch_candidate, attempts=attempt)
                
            # Feed subsequent traceback into next iteration
            context.update_with_new_traceback(test_run.stderr)
            
    return RepairResult(status="FAILED_VERIFICATION", error="Exceeded max attempts")`,
    },
  },
  {
    slug: 'enterprise-billing-invoice-platform',
    title: 'Enterprise Billing & Invoice Platform',
    subtitle: 'High-Volume Financial Workflow Engine with Redux Toolkit & Ant Design',
    tagline: 'Full-featured billing system with dynamic multi-tier invoice generation, persistent state machines, and real-time reconciliation.',
    category: 'Frontend Engineering',
    isFlagship: false,
    featured: true,
    period: '2025',
    techStack: ['React.js', 'Redux Toolkit', 'TypeScript', 'Vite', 'Ant Design', 'Tailwind CSS', 'Axios', 'Chart.js'],
    githubUrl: 'https://github.com/Talalilyas1208/billing-project-using-models',
    summary:
      'An enterprise-grade financial portal engineered for high-concurrency invoice lifecycle management, automated tax calculation, client tracking, and zero-loss draft persistence across complex multi-step transaction flows.',
    keyDifferentiator:
      'Architected normalized Redux Toolkit slices with optimistic UI updates and custom indexed storage persistence, guaranteeing zero data loss across 12-step billing wizards even during unexpected network drops.',
    overview:
      'Handling enterprise financial transactions demands uncompromising reliability, data integrity, and flawless state management. This platform serves accountants, procurement officers, and billing managers by streamlining recurring subscriptions, customized tier-based invoicing, dynamic tax calculations, and exportable PDF generation. The user interface balances complex data-dense grids with an intuitive user experience.',
    problemStatement:
      'Previous systems suffered from state divergence during multi-step invoice creation—users lost entered line items, tax overrides, and client payment terms whenever navigating between tabs or facing momentary network timeouts. Managing deeply nested line item calculations across parent forms led to severe UI re-render bottlenecks.',
    architectureDetails: [
      {
        title: '1. Normalized State Architecture with Redux Toolkit',
        description: 'Designed entity adapters for clients, line items, and invoice drafts to flatten state hierarchy and prevent unnecessary component re-renders.',
        items: [
          'Redux Toolkit createEntityAdapter for O(1) lookups of line items and billing entities',
          'Custom memoized Reselect selectors calculating tax, discounts, and net totals in real-time',
          'Debounced local storage synchronization with transactional schema versioning',
        ],
      },
      {
        title: '2. High-Performance Form State & Dynamic Calculations',
        description: 'Decoupled heavy computation from the main rendering loop to provide instantaneous recalculations across hundreds of invoice rows.',
        items: [
          'Custom React hooks combining uncontrolled inputs with batched Redux dispatchers',
          'Asynchronous currency conversion and tiered tax engine',
          'Integrated Ant Design table virtualization handling 5,000+ line items seamlessly',
        ],
      },
      {
        title: '3. Secure Authentication & API Orchestration',
        description: 'Robust interceptor pipelines handling automatic token refresh and idempotent transaction posting.',
        items: [
          'Axios interceptors managing JWT rotations and exponential backoff on transient network failures',
          'Granular role-based access control (RBAC) hiding confidential financial controls by role',
          'Defensive error boundaries preventing catastrophic UI crashes on malformed payload responses',
        ],
      },
    ],
    keyFeatures: [
      'Dynamic Multi-Step Invoice Wizard with zero-loss draft auto-saving.',
      'Real-Time Tax, Discount, and Multi-Currency Exchange Rate Engine.',
      'Virtualised High-Density Ledger Data Grids with column filtering and batch actions.',
      'Client Lifecycle Portal with historical payment audit trails and automated overdue reminders.',
      'One-Click PDF/CSV Financial Export with custom branding templates.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Multi-step invoice builders frequently lost unsaved draft states when users navigated between client ledgers and invoice editors.',
        solution: 'Implemented a persistent draft state machine with Redux Toolkit and IndexedDB, automatically restoring active editing sessions with dirty state indicators.',
      },
      {
        challenge: 'Complex financial tables with hundreds of editable line items triggered cascading re-renders, causing noticeable input lag.',
        solution: 'Isolated row-level edit components with React.memo and created granular Reselect selectors that only notify rows whose specific sub-properties changed.',
      },
    ],
    outcomesAndImpact: [
      'Eliminated draft loss incidents completely across complex 10+ step billing workflows.',
      'Reduced average invoice generation time by 45% for enterprise accounting teams.',
      'Achieved a 60fps smooth editing experience even on 1,000+ row financial ledgers.',
    ],
    metrics: [
      { label: 'Render Latency Reduction', value: '65%' },
      { label: 'Draft Data Loss Rate', value: '0.0%' },
      { label: 'Time per Invoice Creation', value: '-45%' },
      { label: 'Row Virtualization Capacity', value: '5,000+' },
    ],
  },
  {
    slug: 'poultry-farm-management-system',
    title: 'Poultry Farm Management System',
    subtitle: 'End-to-End Type-Safe Agro-Tech Portal for Livestock & Financial Operations',
    tagline: 'Enterprise livestock tracking and farm analytics portal built with strict TypeScript type-safety and responsive data dashboards.',
    category: 'Full-Stack',
    isFlagship: false,
    featured: true,
    period: '2024',
    techStack: ['TypeScript', 'React.js', 'REST APIs', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Recharts'],
    githubUrl: 'https://github.com/Talalilyas1208/poultry-mangement-system-app',
    summary:
      'A comprehensive agriculture management platform delivering strict end-to-end type safety for livestock health tracking, flock mortality metrics, automated feed inventory allocation, and granular expense reporting.',
    keyDifferentiator:
      'Enforced comprehensive TypeScript contracts and Zod runtime schema validations across all API interactions, eliminating runtime data corruption across distributed rural operational environments.',
    overview:
      'Commercial poultry farming operations involve intricate daily data flows—from feed consumption metrics and flock vaccination schedules to egg production quotas and batch-level profit/loss calculations. This management portal digitizes farm workflows with an intuitive, mobile-friendly interface designed for rugged field conditions while maintaining rigorous backend data integrity.',
    problemStatement:
      'Farm operators relied on fragmented paper records and disparate spreadsheets, resulting in frequent livestock inventory mismatches, untracked mortality surges, and delayed expense forecasting. Existing commercial tools were too bloated and fragile for low-bandwidth rural operations.',
    architectureDetails: [
      {
        title: '1. Strict Type-Safe Domain Modeling & Schema Validation',
        description: 'Constructed comprehensive TypeScript interfaces mirrored by Zod validation schemas for all biological and operational data models.',
        items: [
          'Unified TypeScript interfaces across batch lifecycles, health metrics, and expense types',
          'Zod schema parsing on all form inputs and API responses, rejecting malformed historical data',
          'Custom discriminated unions representing divergent batch states (Incubation, Brooding, Laying, Harvested)',
        ],
      },
      {
        title: '2. Low-Bandwidth Optimized Dashboard & Offline Resilience',
        description: 'Optimized network payloads and client caching to deliver seamless responsiveness on spotty rural cellular connections.',
        items: [
          'Lightweight React component tree styled with utility-first Tailwind CSS',
          'Optimistic UI mutations for daily livestock census updates',
          'Smart caching strategies minimizing redundant round-trip API queries',
        ],
      },
      {
        title: '3. Visual Livestock Analytics & Forecasting',
        description: 'Interactive graphical dashboards providing real-time visibility into feed conversion ratios (FCR) and mortality trends.',
        items: [
          'Recharts integration for dynamic visual tracking of flock growth curves vs industry benchmarks',
          'Automated threshold alerts notifying farm managers of abnormal mortality spikes',
          'Exportable comprehensive audit reports for regulatory compliance and veterinary inspections',
        ],
      },
    ],
    keyFeatures: [
      'Batch Lifecycle Tracker from chick arrival to market sale.',
      'Automated Feed Inventory & Consumption Ratio (FCR) Calculator.',
      'Daily Mortality & Vaccination Scheduling with push notification alerts.',
      'Comprehensive Expense & Revenue Ledger with per-batch profitability breakdown.',
      'Mobile-responsive layout optimized for tablets and smartphones in the field.',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Inconsistent data entries from field workers caused silent runtime exceptions in statistical charting modules.',
        solution: 'Introduced Zod runtime validation wrappers at the API boundary, enforcing strict fallback defaults and providing clear error feedback to users before state updates.',
      },
      {
        challenge: 'Handling complex date calculations and batch lifecycle transitions across varying flock breeds.',
        solution: 'Engineered a specialized TypeScript business domain utility module with comprehensive unit test coverage covering edge-case batch transitions.',
      },
    ],
    outcomesAndImpact: [
      'Eliminated 100% of runtime TypeError crashes through strict TypeScript typing and Zod schemas.',
      'Improved feed tracking accuracy by 30%, preventing unexpected inventory shortages.',
      'Empowered farm supervisors to make data-driven culling and feed adjustment decisions in minutes.',
    ],
    metrics: [
      { label: 'Type Safety Coverage', value: '100%' },
      { label: 'Inventory Discrepancy Reduction', value: '30%' },
      { label: 'Dashboard Load Time', value: '<800ms' },
      { label: 'Mobile Usability Score', value: '98/100' },
    ],
  },
];

export const experienceData: ExperienceRole[] = [
  {
    role: 'React & AI Workflow Developer',
    company: 'Precise Technologies',
    location: 'Remote',
    period: '02/2025 – 06/2025',
    type: 'Full-time',
    description:
      'Engineered AI-powered automation workflows and scalable frontend web applications, integrating Gemini LLMs and high-reliability React frontends for healthcare and transaction systems.',
    achievements: [
      'Engineered AI-powered automation workflows and medical data pattern models to automate prescription routing and order verification.',
      'Implemented secure JWT-based authentication and end-to-end payment gateway integrations (Stripe/PayPal), eliminating checkout friction.',
      'Optimized frontend bundle sizes and client-side caching using Redux Toolkit and Vite, reducing initial page load times by 20%.',
      'Developed modular, reusable UI components in React and Tailwind CSS, speeding up new feature deployment cycles by 25%.',
    ],
    techStack: ['React.js', 'Google Gemini LLM', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'Stripe / PayPal API', 'JWT', 'REST APIs'],
    highlightMetric: '20% Page Load Latency Reduction',
  },
  {
    role: 'Frontend Developer',
    company: 'Tradexx LLC',
    location: 'Remote',
    period: '04/2024 – 01/2025',
    type: 'Full-time',
    description:
      'Constructed responsive high-frequency trading dashboards, multi-step transaction portals, and robust client-side state architectures.',
    achievements: [
      'Built responsive, user-friendly trading dashboards and client portals using React.js and Tailwind CSS.',
      'Structured centralized client-side state management for complex multi-step transaction and financial forms.',
      'Diagnosed and resolved 50+ frontend bug tickets and UI responsiveness issues, improving client retention.',
      'Collaborated within an Agile cross-functional team integrating backend RESTful microservices with defensive error handling.',
    ],
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux / Context API', 'RESTful Microservices', 'WebSockets', 'Jest'],
    highlightMetric: '50+ Critical Bug Tickets Resolved',
  },
  {
    role: 'Frontend Intern',
    company: 'Confiz',
    location: 'Lahore, Pakistan',
    period: '09/2023 – 12/2023',
    type: 'Internship',
    description:
      'Contributed to the high-traffic automotive platform PakWheels, engineering interactive search modules and server-rendered components under senior engineering mentorship.',
    achievements: [
      'Contributed to front-end development for high-traffic automotive platform PakWheels using Next.js and Tailwind CSS.',
      'Engineered interactive vehicle search filters, listing pagination, and custom dashboard components consuming REST APIs.',
      'Applied Next.js SSR and dynamic metadata generation to enhance SEO scores and Core Web Vitals.',
      'Engaged in daily Scrum standups, peer code reviews, and sprint planning under senior engineering mentorship.',
    ],
    techStack: ['Next.js', 'React.js', 'SSR / SSG', 'Tailwind CSS', 'REST APIs', 'SEO Optimization', 'Scrum / Agile'],
    highlightMetric: 'Enhanced PakWheels Core Web Vitals',
  },
];

export const skillGroupsData: SkillGroup[] = [
  {
    category: 'AI & Agentic Systems',
    description: 'Autonomous workflows, LLM reasoning architectures, automated debugging pipelines, and structured generation.',
    skills: [
      { name: 'LLM Integration (Google Gemini, OpenAI)', highlight: true, level: 'Advanced' },
      { name: 'Autonomous AI Agents & Execution Loops', highlight: true, level: 'Advanced' },
      { name: 'Multi-Step Agentic Planning & CoT', highlight: true, level: 'Advanced' },
      { name: 'Prompt Engineering & Structured Schemas', highlight: true, level: 'Advanced' },
      { name: 'Automated Code Fixers & Test Runners', highlight: true, level: 'Advanced' },
      { name: 'RAG Architectures & Embeddings', highlight: false, level: 'Proficient' },
      { name: 'AST Code Parsing & Analysis', highlight: false, level: 'Proficient' },
    ],
  },
  {
    category: 'Frontend Engineering',
    description: 'High-performance user interfaces, responsive design systems, server-rendered applications, and accessibility.',
    skills: [
      { name: 'React.js (Hooks, Patterns, Performance)', highlight: true, level: 'Advanced' },
      { name: 'Next.js (App Router, SSR, SSG, Metadata API)', highlight: true, level: 'Advanced' },
      { name: 'TypeScript (Generics, Strict Type Safety)', highlight: true, level: 'Advanced' },
      { name: 'Tailwind CSS (Custom Themes, Design Systems)', highlight: true, level: 'Advanced' },
      { name: 'JavaScript (ES6+, Async, DOM)', highlight: false, level: 'Advanced' },
      { name: 'Ant Design & Component Libraries', highlight: false, level: 'Proficient' },
      { name: 'Responsive UI/UX & Semantic HTML5/CSS3', highlight: false, level: 'Advanced' },
      { name: 'Core Web Vitals & Performance Optimization', highlight: true, level: 'Advanced' },
    ],
  },
  {
    category: 'State & Networking',
    description: 'Predictable state management, offline-first persistence, resilient HTTP pipelines, and real-time streaming.',
    skills: [
      { name: 'Redux Toolkit & Entity Adapters', highlight: true, level: 'Advanced' },
      { name: 'React Context API & Custom Hooks', highlight: false, level: 'Advanced' },
      { name: 'TanStack Query (React Query)', highlight: false, level: 'Proficient' },
      { name: 'RESTful API Design & Consumption', highlight: true, level: 'Advanced' },
      { name: 'Axios Interceptors & Error Pipelines', highlight: false, level: 'Advanced' },
      { name: 'WebSockets & Real-time Feeds', highlight: false, level: 'Proficient' },
    ],
  },
  {
    category: 'Backend & Databases',
    description: 'Server APIs, data models, relational and document stores, and microservice integration.',
    skills: [
      { name: 'Node.js & Express.js', highlight: false, level: 'Proficient' },
      { name: 'Python (FastAPI, Flask, Scripting)', highlight: true, level: 'Advanced' },
      { name: 'Django', highlight: false, level: 'Proficient' },
      { name: 'PostgreSQL & MySQL (Relational SQL)', highlight: false, level: 'Proficient' },
      { name: 'MongoDB (NoSQL Document Store)', highlight: false, level: 'Proficient' },
      { name: 'JWT Authentication & Security Best Practices', highlight: true, level: 'Advanced' },
    ],
  },
  {
    category: 'Tools & DevOps',
    description: 'Developer tooling, version control, automated testing, containerization, and deployment pipelines.',
    skills: [
      { name: 'Git & GitHub Workflows', highlight: true, level: 'Advanced' },
      { name: 'Vite & Webpack Build Tooling', highlight: false, level: 'Advanced' },
      { name: 'Vercel Deployment & Serverless Edge', highlight: true, level: 'Advanced' },
      { name: 'Docker & Container Basics', highlight: false, level: 'Proficient' },
      { name: 'CI/CD Pipelines (GitHub Actions)', highlight: false, level: 'Proficient' },
      { name: 'Jest & Unit Testing', highlight: false, level: 'Proficient' },
      { name: 'Postman API Testing', highlight: false, level: 'Advanced' },
      { name: 'Linux / Unix Shell Scripting', highlight: false, level: 'Advanced' },
    ],
  },
];

export const articlesData: ArticlePreview[] = [
  {
    slug: 'building-autonomous-self-healing-code-agents-with-gemini',
    title: 'Building Autonomous Self-Healing Code Agents with Google Gemini 1.5',
    description:
      'A deep architectural look at constructing a closed-loop agent that watches source trees, diagnoses stack traces, executes sandboxed test suites, and verifies patches without human intervention.',
    date: '2025-05-15',
    readTime: '8 min read',
    tags: ['AI Agents', 'Google Gemini', 'Python', 'DevOps'],
    status: 'Published',
    outline: [
      'Why chat-based Copilots fall short of true autonomous software engineering',
      'Architecting the Watcher -> Runner -> LLM -> Sandbox loop',
      'Prompt engineering techniques for zero-regression diff generation',
      'Handling recursive multi-turn debugging failures with AST context',
      'Benchmarking fix latencies and safety considerations',
    ],
  },
  {
    slug: 'architecting-complex-state-in-react-with-redux-toolkit',
    title: 'Architecting Complex Multi-Step Form State in React with Redux Toolkit',
    description:
      'How to manage multi-tiered financial wizards, prevent cascading component re-renders, and implement zero-loss draft persistence in mission-critical web applications.',
    date: '2025-03-10',
    readTime: '6 min read',
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'Performance'],
    status: 'Published',
    outline: [
      'The pitfall of deeply nested local form state in multi-step wizards',
      'Normalizing entity state with Redux Toolkit createEntityAdapter',
      'Using Reselect for memoized high-frequency financial calculations',
      'Implementing transactional IndexedDB persistence for offline-first durability',
    ],
  },
  {
    slug: 'nextjs-app-router-technical-seo-masterclass',
    title: 'The Next.js 14 App Router Technical SEO Playbook',
    description:
      'Comprehensive guide to dynamic metadata, JSON-LD structured schemas, OpenGraph edge generation, and Core Web Vitals optimization.',
    date: '2024-11-20',
    readTime: '5 min read',
    tags: ['Next.js', 'SEO', 'Web Performance', 'Core Web Vitals'],
    status: 'Coming Soon',
    outline: [
      'Next.js 14 Metadata API best practices',
      'Injecting Google-compliant JSON-LD (Person, SoftwareSourceCode)',
      'Generating dynamic OpenGraph preview images on the Edge',
      'Achieving 100/100 Lighthouse performance metrics with static generation',
    ],
  },
];

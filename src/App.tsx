import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Award, 
  Code2, 
  Download, 
  Mail, 
  Linkedin, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  ArrowUpRight, 
  FileText, 
  Check, 
  X,
  Send,
  Building2,
  FileCheck,
  Printer,
  ShieldCheck,
  Palette,
  Shuffle,
  Layers,
  ChevronRight
} from 'lucide-react';

// 6 Dynamic Professional Light Themes (Refined, Subtle & Understated)
const COLOR_THEMES = [
  {
    id: 'nordic-blue',
    name: 'Nordic Slate Blue',
    primary: 'from-slate-700 to-sky-800',
    primarySolid: 'bg-slate-800 hover:bg-slate-900 text-white',
    accentText: 'text-sky-700',
    accentBadge: 'bg-sky-50/70 border-sky-200/80 text-sky-900',
    orb1: 'from-sky-100/40 via-slate-100/30 to-transparent',
    orb2: 'from-blue-50/30 via-slate-50/40 to-transparent',
    orb3: 'from-slate-100/40 via-sky-50/20 to-transparent',
    tabActive: 'bg-slate-800 text-white shadow-xs',
    ring: 'focus:ring-slate-400',
    cardHighlight: 'border-slate-200 hover:border-slate-300',
    borderAccent: 'border-l-slate-700',
    badgeGlow: 'bg-sky-600'
  },
  {
    id: 'subtle-sage',
    name: 'Mineral Sage',
    primary: 'from-stone-700 to-teal-800',
    primarySolid: 'bg-emerald-900/90 hover:bg-emerald-950 text-white',
    accentText: 'text-emerald-800',
    accentBadge: 'bg-emerald-50/60 border-emerald-200/70 text-emerald-900',
    orb1: 'from-teal-100/30 via-stone-100/30 to-transparent',
    orb2: 'from-emerald-50/30 via-slate-50/30 to-transparent',
    orb3: 'from-stone-100/30 via-teal-50/20 to-transparent',
    tabActive: 'bg-emerald-900 text-white shadow-xs',
    ring: 'focus:ring-emerald-600',
    cardHighlight: 'border-slate-200 hover:border-slate-300',
    borderAccent: 'border-l-emerald-800',
    badgeGlow: 'bg-emerald-700'
  },
  {
    id: 'soft-indigo',
    name: 'Refined Indigo',
    primary: 'from-slate-800 to-indigo-900',
    primarySolid: 'bg-indigo-900/90 hover:bg-indigo-950 text-white',
    accentText: 'text-indigo-800',
    accentBadge: 'bg-indigo-50/60 border-indigo-200/70 text-indigo-950',
    orb1: 'from-indigo-100/30 via-slate-100/30 to-transparent',
    orb2: 'from-purple-50/20 via-slate-50/30 to-transparent',
    orb3: 'from-slate-100/30 via-indigo-50/20 to-transparent',
    tabActive: 'bg-indigo-900 text-white shadow-xs',
    ring: 'focus:ring-indigo-500',
    cardHighlight: 'border-slate-200 hover:border-slate-300',
    borderAccent: 'border-l-indigo-900',
    badgeGlow: 'bg-indigo-600'
  },
  {
    id: 'warm-sand',
    name: 'Warm Taupe',
    primary: 'from-stone-700 to-neutral-800',
    primarySolid: 'bg-stone-800 hover:bg-stone-900 text-white',
    accentText: 'text-stone-800',
    accentBadge: 'bg-stone-100 border-stone-200 text-stone-900',
    orb1: 'from-amber-50/40 via-stone-100/30 to-transparent',
    orb2: 'from-orange-50/20 via-neutral-100/30 to-transparent',
    orb3: 'from-stone-100/30 via-amber-50/20 to-transparent',
    tabActive: 'bg-stone-800 text-white shadow-xs',
    ring: 'focus:ring-stone-400',
    cardHighlight: 'border-stone-200 hover:border-stone-300',
    borderAccent: 'border-l-stone-700',
    badgeGlow: 'bg-stone-600'
  },
  {
    id: 'titanium-slate',
    name: 'Titanium Graphite',
    primary: 'from-zinc-800 to-neutral-900',
    primarySolid: 'bg-zinc-800 hover:bg-zinc-900 text-white',
    accentText: 'text-zinc-800',
    accentBadge: 'bg-zinc-100 border-zinc-200 text-zinc-900',
    orb1: 'from-zinc-100/40 via-slate-100/30 to-transparent',
    orb2: 'from-neutral-100/40 via-zinc-50/30 to-transparent',
    orb3: 'from-slate-100/30 via-zinc-50/20 to-transparent',
    tabActive: 'bg-zinc-800 text-white shadow-xs',
    ring: 'focus:ring-zinc-500',
    cardHighlight: 'border-zinc-200 hover:border-zinc-300',
    borderAccent: 'border-l-zinc-800',
    badgeGlow: 'bg-zinc-700'
  },
  {
    id: 'dusty-steel',
    name: 'Dusty Steel',
    primary: 'from-slate-700 to-blue-900',
    primarySolid: 'bg-slate-800 hover:bg-slate-900 text-white',
    accentText: 'text-slate-800',
    accentBadge: 'bg-slate-100 border-slate-200 text-slate-900',
    orb1: 'from-slate-100/40 via-cyan-50/30 to-transparent',
    orb2: 'from-blue-50/20 via-slate-100/30 to-transparent',
    orb3: 'from-slate-100/30 via-stone-50/20 to-transparent',
    tabActive: 'bg-slate-800 text-white shadow-xs',
    ring: 'focus:ring-slate-400',
    cardHighlight: 'border-slate-200 hover:border-slate-300',
    borderAccent: 'border-l-slate-700',
    badgeGlow: 'bg-slate-700'
  }
];

// 4 Distinct Architectural Design Layout Styles
const DESIGN_STYLES = [
  {
    id: 'apple-glass',
    name: 'Apple Glass',
    cardClass: 'bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-xs hover:shadow-md transition-all overflow-hidden',
    pillClass: 'rounded-full',
    panelClass: 'rounded-3xl',
    headerBadge: 'rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-sm',
    projectGrid: 'grid grid-cols-1 xl:grid-cols-2 gap-6',
    tagClass: 'rounded-full text-[11px] bg-slate-50 border border-slate-200 px-3 py-1 font-medium',
    heroCard: 'rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-md overflow-hidden',
    fontStyle: 'tracking-tight',
    metricCard: 'bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden'
  },
  {
    id: 'material-bento',
    name: 'Google Bento',
    cardClass: 'bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden',
    pillClass: 'rounded-xl',
    panelClass: 'rounded-2xl',
    headerBadge: 'rounded-xl border border-slate-200 bg-white shadow-2xs',
    projectGrid: 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5',
    tagClass: 'rounded-lg text-[11px] bg-slate-100 text-slate-800 font-mono px-2.5 py-1',
    heroCard: 'rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden',
    fontStyle: 'tracking-normal font-sans',
    metricCard: 'bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all overflow-hidden'
  },
  {
    id: 'editorial',
    name: 'Executive Editorial',
    cardClass: 'bg-white border-y border-r border-slate-200 border-l-4 rounded-xl shadow-xs hover:shadow-md transition-all overflow-hidden',
    pillClass: 'rounded-md',
    panelClass: 'rounded-xl',
    headerBadge: 'rounded-md border border-slate-300 bg-white',
    projectGrid: 'grid grid-cols-1 xl:grid-cols-2 gap-6',
    tagClass: 'rounded-sm text-[11px] bg-slate-50 border border-slate-200 px-2 py-0.5 font-mono uppercase tracking-wider',
    heroCard: 'rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden',
    fontStyle: 'tracking-tight font-serif sm:font-sans',
    metricCard: 'bg-white p-5 rounded-xl border border-slate-200 border-t-2 border-t-slate-700 shadow-xs overflow-hidden'
  },
  {
    id: 'modernist',
    name: 'Futuristic Modernist',
    cardClass: 'bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl hover:border-slate-400 shadow-2xs transition-all overflow-hidden',
    pillClass: 'rounded-xl',
    panelClass: 'rounded-2xl',
    headerBadge: 'rounded-lg border border-slate-200 bg-slate-50',
    projectGrid: 'grid grid-cols-1 xl:grid-cols-2 gap-6',
    tagClass: 'rounded-md text-[11px] bg-white border border-slate-200 shadow-2xs font-mono px-2.5 py-1',
    heroCard: 'rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm overflow-hidden',
    fontStyle: 'tracking-tight',
    metricCard: 'bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-200 shadow-2xs overflow-hidden'
  }
];

export default function App() {
  const [activeProjectTab, setActiveProjectTab] = useState('all');
  const [copiedLabel, setCopiedLabel] = useState('');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Dynamic Theme & Design Layout State
  const [currentTheme, setCurrentTheme] = useState(COLOR_THEMES[0]);
  const [currentStyle, setCurrentStyle] = useState(DESIGN_STYLES[0]);

  // Randomize BOTH theme and design on every reload / component mount
  useEffect(() => {
    const randomTheme = COLOR_THEMES[Math.floor(Math.random() * COLOR_THEMES.length)];
    const randomStyle = DESIGN_STYLES[Math.floor(Math.random() * DESIGN_STYLES.length)];
    setCurrentTheme(randomTheme);
    setCurrentStyle(randomStyle);
  }, []);

  const handleShuffleDesignAndTheme = () => {
    const remainingThemes = COLOR_THEMES.filter(t => t.id !== currentTheme.id);
    const remainingStyles = DESIGN_STYLES.filter(s => s.id !== currentStyle.id);
    setCurrentTheme(remainingThemes[Math.floor(Math.random() * remainingThemes.length)]);
    setCurrentStyle(remainingStyles[Math.floor(Math.random() * remainingStyles.length)]);
  };

  // Recruiter in-app inquiry state
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterCompany, setRecruiterCompany] = useState('');
  const [recruiterRole, setRecruiterRole] = useState('Senior Software Engineer / Frontend Lead');
  const [recruiterMessage, setRecruiterMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(''), 2400);
  };

  const triggerMailto = (sub?: string, body?: string) => {
    const s = sub || `Senior Software Engineer Opportunity - ${recruiterCompany || 'Hiring Inquiry'}`;
    const b = body || recruiterMessage || `Hi Sai Krishna,\n\nI reviewed your portfolio and would like to connect regarding a ${recruiterRole} opportunity at ${recruiterCompany || 'our team'}.\n\nBest regards,\n${recruiterName || 'Talent Acquisition'}`;
    window.location.href = `mailto:saikrishnachintam482@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    triggerMailto();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setIsContactModalOpen(false);
    }, 2000);
  };

  // Word Document Resume (.doc format)
  const downloadWordResume = () => {
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Sai Krishna Chintam Resume</title>
      <style>
        body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.35; color: #111827; }
        h1 { font-size: 20pt; margin-bottom: 2pt; color: #0f172a; }
        h2 { font-size: 13pt; border-bottom: 1.5pt solid #0284c7; padding-bottom: 2pt; margin-top: 14pt; margin-bottom: 6pt; color: #0369a1; text-transform: uppercase; }
        .sub { font-size: 10pt; color: #475569; margin-bottom: 12pt; }
        .role-header { font-weight: bold; font-size: 11.5pt; color: #0f172a; margin-top: 8pt; }
        .company-meta { font-style: italic; color: #475569; font-size: 10.5pt; margin-bottom: 4pt; }
        ul { margin-top: 3pt; margin-bottom: 8pt; padding-left: 20px; }
        li { margin-bottom: 3.5pt; }
        .skills-table { width: 100%; border-collapse: collapse; margin-top: 4pt; }
        .skills-table td { padding: 3pt 0; vertical-align: top; }
        .skill-cat { font-weight: bold; width: 140pt; color: #0f172a; }
      </style>
      </head>
      <body>
        <h1>SAI KRISHNA CHINTAM</h1>
        <div class="sub">Senior Software Engineer | React, Angular, Node.js, TypeScript<br/>saikrishnachintam482@gmail.com | linkedin.com/in/saikrishnachintam | Hyderabad, India</div>
        
        <h2>Professional Summary</h2>
        <p>Software engineer with over 5 years of experience building scalable React and Angular front ends, along with robust Node.js services connecting them to enterprise platforms. Proven track record across tier-1 enterprise clients at Deloitte including Okuma, Mercedes-Benz, Henry Schein, and the International Olympic Committee (LA28 Olympic mapping platform). Strongest at structuring front-end architectures that scale across multi-developer teams, mission-critical offline-first web applications backed by IndexedDB, micro-frontend state isolation, and geospatial mapping features using Google Maps API and OpenLayers. Power user of Claude Code for rapid development workflows and legacy refactoring.</p>

        <h2>Technical Skills</h2>
        <table class="skills-table">
          <tr><td class="skill-cat">Languages:</td><td>JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS</td></tr>
          <tr><td class="skill-cat">Front End:</td><td>React.js, Redux, Angular, Micro-Frontends (MFE), Progressive Web Apps (PWA), IndexedDB, Design Systems, Reusable Component Libraries</td></tr>
          <tr><td class="skill-cat">Back End & APIs:</td><td>Node.js, REST APIs, BigCommerce REST APIs, API Middleware, Contract Standardization</td></tr>
          <tr><td class="skill-cat">E-Commerce:</td><td>BigCommerce, Stencil Theme Engine, Handlebars</td></tr>
          <tr><td class="skill-cat">Mapping & GIS:</td><td>Google Maps API, OpenLayers (Live polygon boundary drawing, geodesic area calculation)</td></tr>
          <tr><td class="skill-cat">Tools & Practices:</td><td>Claude Code, Git, Code Reviews, Performance Tuning (Core Web Vitals), Agile/Scrum</td></tr>
        </table>

        <h2>Professional Experience</h2>
        
        <div class="role-header">Deloitte — Senior Software Engineer</div>
        <div class="company-meta">06/2025 – Present | Hyderabad, India</div>
        
        <p><b>Okuma - BigCommerce E-Commerce Platform:</b></p>
        <ul>
          <li>Designed the front-end structure from scratch in React.js and Node.js; modular components established the core standard the entire engineering organization builds upon.</li>
          <li>Engineered seamless integration of React components into the BigCommerce Stencil theme, establishing a clean handoff between component modules and theme work to expedite releases.</li>
          <li>Architected the Node.js middleware layer connecting storefront modules to BigCommerce REST APIs, ensuring uniform data fetching and caching across the application.</li>
          <li>Utilized Claude Code to speed up feature scaffolding and refactor legacy codebases.</li>
          <li>Honored with the <b>High Five Award (USI)</b> for outstanding architectural delivery.</li>
        </ul>

        <p><b>Mercedes-Benz - Micro-Frontend Portfolio:</b></p>
        <ul>
          <li>Tracked down and resolved complex state bleeding between Vehicle Creation (VC) and Vehicle Documentation (VD) micro-frontends, restoring stability across dependent tools.</li>
          <li>Decreased deployment regressions across disparate MFE pipelines by spearheading code review criteria and pre-deploy release-readiness checklists.</li>
        </ul>

        <p><b>Henry Schein - Global E-Commerce:</b></p>
        <ul>
          <li>Engineered high-performance front-end components for a high-traffic healthcare e-commerce platform with zero Cumulative Layout Shift (CLS).</li>
          <li>Translated complex healthcare business rules into robust, modular technical plans that accelerated team release velocity.</li>
          <li>Awarded the <b>Henry Schein Appreciation Certificate</b> by client stakeholders for turning around critical production defects.</li>
        </ul>

        <p><b>International Olympic Committee (LA28) - Olympic Mapping Platform:</b></p>
        <ul>
          <li>Built the mapping module from scratch in React using the Google Maps API, handling high-density event coordinates smoothly.</li>
          <li>Implemented live navigation updates and custom SVG venue markers so audiences can track events and routes in real time.</li>
          <li>Packaged the module as a secure, cross-origin embeddable iframe for seamless integration into global Olympic partner portals.</li>
          <li>Awarded the <b>Deloitte Applause Award</b> for on-time delivery and mapping innovation.</li>
        </ul>

        <div class="role-header">Worth Consultancy Services Pvt Ltd — Senior Front-End Developer / Front-End Lead</div>
        <div class="company-meta">02/2021 – 06/2025 | Hyderabad, India</div>

        <p><b>eBDN (Electronic Bunker Delivery Note) - Maritime Bunkering Platform:</b></p>
        <ul>
          <li>Built an offline-first Angular and TypeScript web application (PWA) backed by IndexedDB, enabling offshore crews to manage bunker delivery notes without internet connectivity.</li>
          <li>Engineered a custom delta-sync routine resolving local-cloud record conflicts without data loss upon vessel dockside reconnection.</li>
          <li>Recognized with the <b>WCS Performer Award</b> for delivery excellence on mission-critical platforms.</li>
        </ul>

        <p><b>AgriTech - Geospatial Farm Management System:</b></p>
        <ul>
          <li>Established front-end architecture, directory conventions, and coding guidelines for an early-stage startup, accelerating feature release cadence.</li>
          <li>Added Google Maps and OpenLayers vector drawing tools, allowing farmers to plot field boundaries with real-time geodesic acreage calculation.</li>
          <li>Engineered an interactive analytics dashboard and established a shared React design system saving 40%+ duplicate UI development.</li>
        </ul>

        <p><b>iSMS - Integrated Ship Management System:</b></p>
        <ul>
          <li>Engineered a React.js price-comparison procurement engine for maritime purchase orders that significantly reduced operational spend.</li>
          <li>Designed real-time tracking dashboards that eliminated approval bottlenecks and transitioned manual workflows into automated approval cycles.</li>
        </ul>

        <h2>Honors & Awards</h2>
        <ul>
          <li><b>High Five Award (USI)</b> – Deloitte: Recognized for architectural impact on the Okuma BigCommerce platform.</li>
          <li><b>Deloitte Applause Award</b> – Deloitte: Awarded for React and Google Maps integration that kept the LA28 Olympic project on schedule.</li>
          <li><b>Henry Schein Appreciation Certificate</b> – Henry Schein Stakeholders: Awarded for resolving critical production blockers and improving site resilience.</li>
          <li><b>WCS Performer Award</b> – Worth Consultancy Services: Awarded for high-quality enterprise delivery and technical leadership.</li>
        </ul>
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sai_Krishna_Chintam_Senior_Software_Engineer_Resume.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const triggerPrintPdf = () => {
    window.print();
  };

  const allProjects = [
    {
      id: 'okuma',
      name: 'Okuma BigCommerce E-Commerce Platform',
      client: 'Okuma (Deloitte)',
      timeline: '06/2025 – Present',
      role: 'Frontend Lead & Middleware Architect',
      category: 'E-Commerce & Architecture',
      tagline: 'Decoupled React Storefront Integration & Node.js API Middleware Layer',
      award: 'High Five Award (USI)',
      overview: 'Okuma is a global industrial machinery enterprise requiring a modern, high-speed storefront built on BigCommerce. Sai architected the front-end foundation from scratch, bridging React.js components into BigCommerce’s Stencil engine and establishing the foundational code standard for the full engineering team.',
      highlights: [
        'Designed modular React component hierarchy from scratch, establishing reusable UI patterns adopted company-wide.',
        'Solved the integration boundary between React components and BigCommerce Stencil theme engine, defining clear developer handoffs.',
        'Wrote the custom Node.js middleware layer mediating storefront clients and BigCommerce REST APIs for uniform data ingestion and caching.',
        'Integrated Claude Code workflows into daily development, accelerating complex feature delivery by ~35% and automating refactoring cycles.'
      ],
      impact: 'Established the core codebase standard, expedited team deployment cycles, and earned the USI High Five Award for technical design excellence.',
      stack: ['React.js', 'Node.js', 'BigCommerce REST APIs', 'Stencil Theme', 'Handlebars', 'TypeScript', 'Claude Code']
    },
    {
      id: 'mercedes',
      name: 'Mercedes-Benz Micro-Frontend Architecture',
      client: 'Mercedes-Benz (Deloitte)',
      timeline: '06/2025 – Present',
      role: 'Senior Software Engineer',
      category: 'Enterprise Micro-Frontends',
      tagline: 'Cross-Pipeline Micro-Frontend State Isolation & Release Gating',
      overview: 'Mercedes-Benz operates complex internal dealer workflows divided across independent micro-frontends (MFEs). Sai diagnosed and resolved deep state leakage bugs between the Vehicle Creation (VC) and Vehicle Documentation (VD) applications.',
      highlights: [
        'Tracked down obscure memory leaks and cross-pollinated state between VC and VD micro-frontends that caused silent form corruption.',
        'Implemented strict event bus encapsulation and localized state stores, preventing global window pollution.',
        'Instituted mandatory release-readiness review checklists across distributed CI/CD pipelines.',
        'Collaborated with offshore teams across multiple timezones to align micro-frontend runtime contracts and shared component dependencies.'
      ],
      impact: 'Restored full stability across enterprise vehicle lifecycle management, eliminating multi-pipeline deployment regressions.',
      stack: ['Micro-Frontends', 'React.js', 'Redux Toolkit', 'TypeScript', 'Module Federation', 'Webpack 5', 'Jest']
    },
    {
      id: 'la28',
      name: 'International Olympic Committee (LA28) Mapping Platform',
      client: 'IOC / LA28 (Deloitte)',
      timeline: 'Deloitte Engagement',
      role: 'Lead Geospatial Engineer',
      category: 'Geospatial & Mapping',
      tagline: 'High-Density Real-Time Olympic Map Engine & Secure Embeddable Iframe',
      award: 'Deloitte Applause Award',
      overview: 'For the upcoming Los Angeles 2028 Olympic and Paralympic Games, Sai engineered the dedicated interactive mapping module from scratch using React and Google Maps API, handling high-density event coordinates, live routing, and third-party media embeds.',
      highlights: [
        'Built the interactive map engine entirely from scratch in React, rendering hundreds of simultaneous Olympic venues smoothly at 60 FPS.',
        'Engineered live turn-by-turn navigation telemetry and custom SVG venue pin rendering based on live spectator coordinate feeds.',
        'Packaged the complete mapping module into a secure, cross-origin isolated iframe enabling hundreds of global news partners to embed it seamlessly.',
        'Optimized map viewport debouncing, dynamic cluster rendering, and layer caches to handle peak global traffic spikes.'
      ],
      impact: 'Delivered the interactive geospatial system on schedule, winning the prestigious Deloitte Applause Award for architectural innovation.',
      stack: ['React.js', 'Google Maps JavaScript API', 'TypeScript', 'Secure Iframe Bridge', 'GeoJSON', 'Tailwind CSS']
    },
    {
      id: 'henry-schein',
      name: 'Henry Schein Global Healthcare E-Commerce',
      client: 'Henry Schein (Deloitte)',
      timeline: 'Deloitte Engagement',
      role: 'Senior Frontend Engineer',
      category: 'E-Commerce & Performance',
      tagline: 'High-Concurrency Healthcare Commerce & Core Web Vitals Optimization',
      award: 'Client Appreciation Certificate',
      overview: 'Henry Schein is a Fortune 500 provider of healthcare products and services. Sai developed high-performance customer-facing components that could seamlessly withstand intense concurrent order traffic while strictly honoring intricate medical procurement rules.',
      highlights: [
        'Architected front-end storefront modules tailored for rapid catalog search, bulk inventory ordering, and checkout pipelines.',
        'Translated deeply intricate medical compliance and multi-tier pricing business rules into modular, self-documenting technical designs.',
        'Diagnosed and eliminated critical layout shifts (CLS) and reduced Largest Contentful Paint (LCP) under peak traffic conditions.',
        'Directly addressed and resolved urgent production blockers reported during global release cutovers.'
      ],
      impact: 'Received formal Henry Schein Appreciation Certificate from client leadership for outstanding technical diligence and site stability.',
      stack: ['React.js', 'Redux', 'Node.js', 'REST APIs', 'Core Web Vitals Tuning', 'Accessibility (a11y)']
    },
    {
      id: 'ebdn',
      name: 'eBDN Maritime Bunkering Platform',
      client: 'Worth Consultancy Services',
      timeline: '02/2021 – 06/2025',
      role: 'Front-End Lead',
      category: 'Offline-First PWA',
      tagline: 'Offline-First Progressive Web App with Custom IndexedDB Delta-Sync',
      award: 'WCS Performer Award',
      overview: 'Bunker fuel transfers occur deep offshore where maritime crews experience zero cellular or satellite internet for days. Sai designed and led an offline-first Angular PWA that enables ship crews to process Electronic Bunker Delivery Notes without connectivity.',
      highlights: [
        'Architected offline-first Progressive Web App (PWA) with Angular, TypeScript, and browser-native IndexedDB client storage.',
        'Engineered a custom bidirectional delta-sync reconciliation engine that logs transactional mutations with immutable timestamps.',
        'Implemented automatic network sniffers that seamlessly sync pending offshore notes upon shore Wi-Fi/LTE reconnection.',
        'Built full cryptographic signature capture and tamper-evident local audit records to satisfy maritime legal compliance.'
      ],
      impact: 'Delivered flawless offline-to-cloud transaction integrity across offshore operations; earned the WCS Performer Award.',
      stack: ['Angular', 'TypeScript', 'IndexedDB', 'Service Workers', 'PWA', 'REST APIs', 'Delta Sync']
    },
    {
      id: 'agritech',
      name: 'AgriTech Geospatial Farm Management System',
      client: 'Worth Consultancy Services',
      timeline: '02/2021 – 06/2025',
      role: 'Frontend Architect & Design System Lead',
      category: 'Geospatial & Design Systems',
      tagline: 'Interactive Boundary Polygon Vectorization & Real-Time Acreage Calculation',
      award: 'Design System Lead',
      overview: 'An agricultural intelligence platform empowering farm managers to monitor crop health, delineate land parcels, and analyze yield metrics. Sai established the initial technical architecture and built the vector mapping engine from the ground up.',
      highlights: [
        'Set up the foundational front-end boilerplate, linting standards, and architectural blueprints for a fast-growing startup.',
        'Built interactive polygon and multi-point vector drawing tools using OpenLayers and Google Maps, allowing farmers to trace boundaries.',
        'Implemented real-time geodesic math routines computing acreage, perimeter distances, and perimeter overlaps on the fly.',
        'Authored and maintained a shared React component library that eliminated duplicate styling and reduced feature turnaround times by 40%.'
      ],
      impact: 'Enabled seamless field surveying across tens of thousands of agricultural acres while unifying the entire platform UI under one design system.',
      stack: ['React.js', 'OpenLayers', 'Google Maps API', 'TypeScript', 'Design Systems', 'GeoJSON']
    },
    {
      id: 'isms',
      name: 'iSMS - Integrated Ship Management System',
      client: 'Worth Consultancy Services',
      timeline: '02/2021 – 06/2025',
      role: 'Senior Front-End Developer',
      category: 'Enterprise Logistics & Procurement',
      tagline: 'Procurement Price Comparison Engine & Real-Time Approval Pipelines',
      award: 'Enterprise Efficiency Recognition',
      overview: 'A full-scale marine vessel fleet management system handling logistics, crew rotations, dry-dock maintenance, and multi-currency equipment procurement across international waters.',
      highlights: [
        'Built a high-performance React.js price-comparison matrix allowing fleet managers to analyze quotes across competing global marine vendors.',
        'Replaced outdated manual paperwork with an automated, role-based approval pipeline that drastically shortened requisition turnaround times.',
        'Engineered real-time telemetry dashboards monitoring vessel maintenance schedules and critical spare parts inventory.',
        'Ensured full cross-browser compatibility and responsive performance for onboard terminals with constrained viewport resolutions.'
      ],
      impact: 'Directly lowered operational maritime procurement costs and eradicated multi-day administrative approval bottlenecks.',
      stack: ['React.js', 'JavaScript (ES6+)', 'REST APIs', 'CSS3 / SCSS', 'HTML5', 'Agile']
    }
  ];

  const filteredProjects = activeProjectTab === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category.toLowerCase().includes(activeProjectTab.toLowerCase()));

  const skillsData = [
    {
      category: 'Languages & Core',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'JSON / REST']
    },
    {
      category: 'Frontend Frameworks',
      skills: ['React.js', 'Redux / Redux Toolkit', 'Angular', 'Micro-Frontends (MFE)', 'Design Systems', 'Tailwind CSS']
    },
    {
      category: 'Backend & Middleware',
      skills: ['Node.js', 'Express', 'BigCommerce REST APIs', 'Stencil Engine', 'API Middleware', 'Handlebars']
    },
    {
      category: 'Geospatial & Offline',
      skills: ['Google Maps API', 'OpenLayers', 'IndexedDB', 'PWA / Service Workers', 'Delta-Sync Reconciliation', 'GeoJSON']
    },
    {
      category: 'Practices & AI Velocity',
      skills: ['Claude Code (Daily AI Workflows)', 'Code Reviews & Gating', 'Git / GitHub', 'Core Web Vitals', 'Agile / Scrum']
    }
  ];

  const awards = [
    {
      title: 'High Five Award (USI)',
      organization: 'Deloitte',
      badge: 'Architecture Excellence',
      project: 'Okuma BigCommerce Platform',
      description: 'Conferred for architecting the front-end foundation in React and the Node.js middleware layer connecting storefronts with BigCommerce REST APIs.'
    },
    {
      title: 'Deloitte Applause Award',
      organization: 'Deloitte',
      badge: 'Delivery & Innovation',
      project: 'LA28 Olympic Games Mapping Platform',
      description: 'Recognized by leadership for rapid delivery and performance tuning of the Google Maps interactive module for the International Olympic Committee.'
    },
    {
      title: 'Appreciation Certificate',
      organization: 'Henry Schein',
      badge: 'Client Stakeholder Honor',
      project: 'Global Healthcare E-Commerce',
      description: 'Awarded by client executives for solving high-priority production blockers and engineering performant components that stabilized user traffic.'
    },
    {
      title: 'WCS Performer Award',
      organization: 'Worth Consultancy Services',
      badge: 'Technical Leadership',
      project: 'eBDN Maritime Bunkering Platform',
      description: 'Honored for building the offline-first Angular PWA with IndexedDB that delivered seamless synchronization across offshore vessel operations.'
    }
  ];

  return (
    <div className={`min-h-screen w-full bg-[#f8fafc] text-slate-900 ${currentStyle.fontStyle} selection:bg-slate-200 selection:text-slate-900 antialiased print:bg-white print:text-black relative overflow-x-hidden`}>
      
      {/* Ambient background orbs shifting dynamically with the active theme */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-[8%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] bg-gradient-to-br ${currentTheme.orb1} rounded-full blur-3xl opacity-80 transition-all duration-1000`} />
        <div className={`absolute top-[35%] right-[-5%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] bg-gradient-to-bl ${currentTheme.orb2} rounded-full blur-3xl opacity-70 transition-all duration-1000`} />
        <div className={`absolute bottom-[-10%] left-[0%] w-[60vw] h-[50vw] max-w-[900px] max-h-[700px] bg-gradient-to-tr ${currentTheme.orb3} rounded-full blur-3xl opacity-60 transition-all duration-1000`} />
        <div 
          className="absolute inset-0 opacity-[0.035]" 
          style={{ backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`, backgroundSize: '24px 24px' }} 
        />
      </div>

      {/* Toast Feedback */}
      {copiedLabel && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-slate-900/95 backdrop-blur-md text-white px-4 py-3 rounded-xl shadow-2xl text-xs font-medium animate-in fade-in slide-in-from-bottom-3 print:hidden border border-slate-700/50">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Copied {copiedLabel} to clipboard</span>
        </div>
      )}

      {/* FULL-WIDTH HEADER: Responsive & Dynamic across layouts */}
      <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-xl border-b border-slate-200/80 transition-all print:hidden shadow-xs">
        <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 h-16 flex items-center justify-between gap-4">
          
          <a href="#about" className="flex items-center gap-3 group shrink-0">
            <div className={`w-9 h-9 ${currentStyle.pillClass} bg-gradient-to-br ${currentTheme.primary} text-white font-semibold text-xs flex items-center justify-center shadow-xs group-hover:scale-105 transition-all`}>
              SK
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-slate-900 block leading-tight">
                Sai Krishna Chintam
              </span>
              <span className="text-slate-500 text-[11px] font-normal leading-tight">
                Senior Software Engineer @ Deloitte
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">Overview</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
            <a href="#awards" className="hover:text-slate-900 transition-colors">Awards</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Randomize / Shuffle Design & Palette */}
            <button
              onClick={handleShuffleDesignAndTheme}
              className={`text-xs font-medium text-slate-700 hover:text-slate-900 px-3 py-1.5 ${currentStyle.pillClass} border border-slate-200 bg-white hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs`}
              title="Click to randomize both Design Layout and Color Palette"
            >
              <Shuffle className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline font-mono text-[11px]">{currentStyle.name} • {currentTheme.name}</span>
              <span className="sm:hidden font-mono text-[11px]">Shuffle</span>
            </button>

            <button
              onClick={() => setIsResumeModalOpen(true)}
              className={`text-xs font-medium text-slate-700 hover:text-slate-900 px-3.5 py-1.5 ${currentStyle.pillClass} border border-slate-200 bg-white hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs`}
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            <button
              onClick={() => setIsContactModalOpen(true)}
              className={`text-xs font-medium ${currentTheme.primarySolid} px-4 py-1.5 ${currentStyle.pillClass} transition-all flex items-center gap-1.5 cursor-pointer shadow-sm`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>

        </div>
      </header>

      {/* FULL-WIDTH MAIN CONTENT AREA */}
      <main className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 pt-8 sm:pt-12 pb-24 space-y-20 relative z-10">

        {/* HERO SECTION */}
        <section id="about" className="space-y-8 pt-2">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 ${currentStyle.headerBadge} text-slate-700 text-xs font-medium shadow-2xs`}>
              <span className={`w-2 h-2 rounded-full ${currentTheme.badgeGlow} animate-pulse`} />
              <span>Deloitte Senior Software Engineer • 5+ Years Production Experience</span>
            </div>

            <div className="text-xs text-slate-500 font-mono hidden md:flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span>Layout: {currentStyle.name} | Theme: {currentTheme.name}</span>
            </div>
          </div>

          <div className="space-y-4 max-w-5xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.12]">
              Architecting resilient frontend systems, scalable middleware & offline web applications.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl">
              Software engineer with over 5 years of production experience building enterprise React and Angular applications backed by Node.js services. Delivered mission-critical systems for Deloitte tier-1 clients including <strong className="text-slate-900 font-medium">Okuma, Mercedes-Benz, Henry Schein</strong>, and the <strong className="text-slate-900 font-medium">LA28 Olympic Games</strong> mapping engine. Known for clean architectures, robust offline synchronization, and daily AI-assisted development with Claude Code.
            </p>
          </div>

          {/* Direct Actions Bar */}
          <div className={`w-full ${currentStyle.heroCard} p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4`}>
            
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <button
                onClick={() => triggerMailto()}
                className={`flex items-center gap-2 px-3.5 py-2 ${currentStyle.pillClass} bg-slate-50/80 hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium transition-colors cursor-pointer group`}
                title="Click to compose an email"
              >
                <Mail className="w-4 h-4 text-slate-500 group-hover:text-slate-900" />
                <span className="font-mono text-[11.5px] sm:text-xs">saikrishnachintam482@gmail.com</span>
              </button>

              <button
                onClick={() => handleCopy('saikrishnachintam482@gmail.com', 'email address')}
                className={`p-2 ${currentStyle.pillClass} hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer border border-transparent hover:border-slate-200`}
                title="Copy email to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-slate-500 font-normal text-xs">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Hyderabad, India • Open to Relocation & Remote</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <a
                href="https://linkedin.com/in/saikrishnachintam"
                target="_blank"
                rel="noreferrer"
                className={`text-xs font-medium text-slate-700 hover:text-slate-900 px-3.5 py-2 ${currentStyle.pillClass} border border-slate-200 bg-white hover:bg-slate-50 flex items-center gap-1.5 transition-colors shadow-2xs`}
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className={`text-xs font-medium ${currentTheme.primarySolid} px-4 py-2 ${currentStyle.pillClass} flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs`}
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF / Word)</span>
              </button>
            </div>

          </div>

          {/* Full-width Responsive Metrics Grid (Without the removed Offline Data Loss card) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <div className={currentStyle.metricCard}>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Experience</span>
              <div className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-1">5+ Years</div>
              <p className="text-xs text-slate-500 mt-0.5">Enterprise React, Angular, Node.js & TS</p>
            </div>
            
            <div className={currentStyle.metricCard}>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Current Organization</span>
              <div className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-1">Deloitte</div>
              <p className="text-xs text-slate-500 mt-0.5">Senior Software Engineer</p>
            </div>

            <div className={currentStyle.metricCard}>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Verified Recognition</span>
              <div className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-1">4 Awards</div>
              <p className="text-xs text-slate-500 mt-0.5">Deloitte, USI & Tier-1 Global Clients</p>
            </div>
          </div>

        </section>

        {/* FULL-WIDTH DETAILED PROJECTS SECTION */}
        <section id="projects" className="space-y-8 w-full">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-200/80 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Track Record</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mt-1">
                Featured Engineering Projects & Case Studies
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-lg">
              Detailed technical breakdown of front-end architecture, API middleware, and production achievements across Deloitte and WCS client engagements.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-1">
            <span className="text-xs font-medium text-slate-400 mr-2">Filter Domain:</span>
            {[
              { id: 'all', label: 'All Projects (7)' },
              { id: 'e-commerce', label: 'E-Commerce' },
              { id: 'micro-frontend', label: 'Micro-Frontends' },
              { id: 'geospatial', label: 'Geospatial & Maps' },
              { id: 'offline-first', label: 'Offline PWAs' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveProjectTab(tab.id)}
                className={`text-xs px-3.5 py-1.5 ${currentStyle.pillClass} transition-all cursor-pointer font-medium ${
                  activeProjectTab === tab.id
                    ? currentTheme.tabActive
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Responsive Projects Grid */}
          <div className={currentStyle.projectGrid}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className={`${currentStyle.cardClass} ${currentStyle.id === 'editorial' ? currentTheme.borderAccent : ''} p-5 sm:p-7 flex flex-col justify-between space-y-6 min-w-0`}
              >
                <div className="space-y-4 min-w-0">
                  {/* Clean Structured Header Row with wrapping safety */}
                  <div className="space-y-3 border-b border-slate-100 pb-4 min-w-0">
                    
                    {/* Top Row: Client & Dates */}
                    <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 text-xs">
                        <span className="font-semibold uppercase tracking-wider text-slate-500">
                          {project.client}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="font-medium text-slate-500">
                          {project.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Badge Row: Always wrapped cleanly, never overflows container */}
                    <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                      {project.award && (
                        <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 ${currentStyle.pillClass} bg-amber-50/90 border border-amber-200 text-amber-900 shrink-0`}>
                          <Award className="w-3 h-3 text-amber-600 shrink-0" />
                          <span className="truncate max-w-[220px]">{project.award}</span>
                        </span>
                      )}
                      <span className={`text-[11px] font-medium px-2.5 py-0.5 ${currentStyle.pillClass} bg-slate-100 border border-slate-200 text-slate-700 shrink-0`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title & Tagline */}
                    <div className="space-y-1 pt-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-snug break-words">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 leading-snug break-words">
                        {project.tagline}
                      </p>
                    </div>

                  </div>

                  {/* Overview */}
                  <p className="text-sm text-slate-700 leading-relaxed font-normal break-words">
                    {project.overview}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 min-w-0">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Key Technical Deliverables & Architecture
                    </h4>
                    <div className="space-y-2">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className={`flex items-start gap-2.5 p-2.5 ${currentStyle.pillClass} bg-slate-50/80 border border-slate-100 text-xs text-slate-700 min-w-0`}>
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed break-words">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer of Card: Impact & Stack */}
                <div className="space-y-3.5 pt-2 min-w-0">
                  <div className={`bg-emerald-50/70 border border-emerald-100 ${currentStyle.pillClass} p-3 sm:p-3.5 flex items-center gap-3 min-w-0`}>
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div className="text-xs text-emerald-950 leading-relaxed min-w-0">
                      <strong className="font-semibold text-emerald-950">Impact: </strong>
                      <span className="break-words">{project.impact}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1 min-w-0">
                    {project.stack.map(st => (
                      <span 
                        key={st} 
                        className={`${currentStyle.tagClass} shrink-0`}
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* FULL-WIDTH SKILLS MATRIX */}
        <section id="skills" className="space-y-8 w-full">
          
          <div className="border-b border-slate-200/80 pb-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Core Competencies</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mt-1">
              Technical Stack & Domain Expertise
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Technologies leveraged across production systems, high-traffic e-commerce storefronts, and offline environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full">
            {skillsData.map((grp, idx) => (
              <div key={idx} className={`${currentStyle.cardClass} p-5 shadow-xs space-y-3.5 flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                      {grp.category}
                    </h3>
                    <Code2 className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {grp.skills.map(skill => (
                      <span 
                        key={skill}
                        className={`text-xs bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium px-2.5 py-1 ${currentStyle.pillClass} border border-slate-200 transition-colors`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Daily Velocity Card: Styled consistently with neighboring cards */}
            <div className={`${currentStyle.cardClass} p-5 shadow-xs space-y-3.5 flex flex-col justify-between`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">Daily Velocity</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">
                    Tooling
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-slate-900">Claude Code CLI</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Employed daily in engineering workflows to accelerate scaffolding, automated test generation, and structured refactoring cycles.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="text-[11px] text-slate-500">Cadence Boost</span>
                <span className="font-semibold text-slate-800">~35% Faster</span>
              </div>
            </div>
          </div>

        </section>

        {/* FULL-WIDTH AWARDS & VERIFIED HONORS */}
        <section id="awards" className="space-y-8 w-full">
          
          <div className="border-b border-slate-200/80 pb-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Recognition</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mt-1">
              Honors & Engineering Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
            {awards.map((award, idx) => (
              <div key={idx} className={`${currentStyle.cardClass} p-6 shadow-xs space-y-3 flex flex-col justify-between`}>
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {award.organization}
                    </span>
                    <span className={`text-[10px] font-medium bg-amber-50 border border-amber-200 text-amber-900 px-2 py-0.5 ${currentStyle.pillClass} shrink-0`}>
                      {award.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {award.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-600">
                    Project: {award.project}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* FULL-WIDTH CONTACT SECTION */}
        <section id="contact" className={`w-full ${currentStyle.heroCard} p-6 sm:p-10 lg:p-12 shadow-xs space-y-8`}>
          
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Direct Inquiries</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
              Let's Discuss Senior Software Engineering Opportunities
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Available for Senior Frontend Engineer, Full-Stack Lead, or Technical Architect roles. Reach out directly via email, connect on LinkedIn, or download my resume.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            
            {/* Direct Email Card */}
            <div className={`bg-slate-50/80 border border-slate-200 ${currentStyle.panelClass} p-6 space-y-5 flex flex-col justify-between`}>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <Mail className="w-4 h-4 text-slate-700" />
                  <span>Direct Email</span>
                </div>
                <div className={`bg-white border border-slate-200 ${currentStyle.pillClass} p-3.5 flex items-center justify-between gap-3`}>
                  <span className="font-mono text-xs sm:text-sm text-slate-800 select-all">saikrishnachintam482@gmail.com</span>
                  <button
                    onClick={() => handleCopy('saikrishnachintam482@gmail.com', 'email address')}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Click below to compose directly in your default email client or open Gmail in one click.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => triggerMailto()}
                  className={`w-full ${currentTheme.primarySolid} font-medium text-xs py-2.5 px-4 ${currentStyle.pillClass} flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email (Default Client)</span>
                </button>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=saikrishnachintam482@gmail.com&su=Senior%20Software%20Engineer%20Opportunity"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium text-xs py-2.5 px-4 ${currentStyle.pillClass} flex items-center justify-center gap-2 transition-colors text-center`}
                >
                  <span>Open in Gmail</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Quick In-App Message Card */}
            <form onSubmit={handleFormSubmit} className={`bg-slate-50/80 border border-slate-200 ${currentStyle.panelClass} p-6 space-y-3.5`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900">Send an Inquiry</span>
                <span className="text-[11px] text-slate-400">Direct to Sai Krishna</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={recruiterName}
                  onChange={(e) => setRecruiterName(e.target.value)}
                  className={`bg-white border border-slate-200 ${currentStyle.pillClass} px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-400`}
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  value={recruiterCompany}
                  onChange={(e) => setRecruiterCompany(e.target.value)}
                  className={`bg-white border border-slate-200 ${currentStyle.pillClass} px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-400`}
                />
              </div>

              <input
                type="text"
                placeholder="Role / Opportunity"
                value={recruiterRole}
                onChange={(e) => setRecruiterRole(e.target.value)}
                className={`w-full bg-white border border-slate-200 ${currentStyle.pillClass} px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-400`}
              />

              <textarea
                placeholder="Brief message or role overview..."
                rows={3}
                value={recruiterMessage}
                onChange={(e) => setRecruiterMessage(e.target.value)}
                className={`w-full bg-white border border-slate-200 ${currentStyle.pillClass} px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-400 resize-none`}
              />

              <button
                type="submit"
                className={`w-full ${currentTheme.primarySolid} font-medium text-xs py-2.5 px-4 ${currentStyle.pillClass} flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs`}
              >
                {isSent ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Launching Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message via Email</span>
                  </>
                )}
              </button>
            </form>

          </div>

        </section>

      </main>

      {/* FULL-WIDTH FOOTER */}
      <footer className="w-full border-t border-slate-200/80 py-8 px-4 sm:px-8 lg:px-12 2xl:px-16 text-xs text-slate-500 bg-white/70 backdrop-blur-md relative z-10 print:hidden">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-semibold text-slate-800">Sai Krishna Chintam</div>
            <div>Senior Software Engineer • React | Angular | Node.js | TypeScript</div>
          </div>
          <div className="flex items-center gap-5 font-medium">
            <a href="https://linkedin.com/in/saikrishnachintam" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            <button onClick={() => triggerMailto()} className="hover:text-slate-900 transition-colors cursor-pointer">Email</button>
            <button onClick={() => setIsResumeModalOpen(true)} className="hover:text-slate-900 transition-colors cursor-pointer">Resume</button>
            <button onClick={handleShuffleDesignAndTheme} className="hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1">
              <Shuffle className="w-3 h-3" />
              <span>{currentStyle.name} • {currentTheme.name}</span>
            </button>
          </div>
        </div>
      </footer>

      {/* RESUME DOWNLOAD MODAL (PDF / WORD CHOICES) */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-lg p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Official Document</span>
              <h3 className="text-xl font-semibold text-slate-900">Download Professional Resume</h3>
              <p className="text-xs text-slate-500">
                Choose your preferred format for Applicant Tracking Systems (ATS) or internal client evaluation.
              </p>
            </div>

            {/* Resume Format Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* PDF Option */}
              <div className="border border-slate-200 hover:border-slate-400 rounded-2xl p-4.5 space-y-3 transition-colors bg-slate-50/50 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 font-bold text-xs">
                    PDF
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">Adobe PDF Document</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Clean document layout formatted for print-to-PDF, sharing, and digital archives.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsResumeModalOpen(false);
                    setTimeout(() => triggerPrintPdf(), 200);
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print to PDF</span>
                </button>
              </div>

              {/* Word Option */}
              <div className="border border-slate-200 hover:border-slate-400 rounded-2xl p-4.5 space-y-3 transition-colors bg-slate-50/50 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xs">
                    DOC
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">Microsoft Word (.doc)</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Editable format ready for Applicant Tracking Systems (ATS) and internal recruiter notes.
                  </p>
                </div>
                <button
                  onClick={() => {
                    downloadWordResume();
                    setIsResumeModalOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Word (.doc)</span>
                </button>
              </div>

            </div>

            {/* Quick Resume Text Preview Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-600 space-y-1">
              <div className="font-semibold text-slate-800 flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Resume Key Highlights:</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-500">
                <li>5+ Years Experience (Deloitte, Worth Consultancy Services)</li>
                <li>Okuma, Mercedes-Benz, Henry Schein, IOC LA28 Olympic Games</li>
                <li>High Five Award (USI), Deloitte Applause Award recipient</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 px-4 py-2 cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CONTACT MODAL */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-lg p-6 sm:p-8 space-y-5 shadow-2xl relative">
            
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Direct Inquiries</span>
              <h3 className="text-xl font-semibold text-slate-900">Reach Out to Sai Krishna</h3>
              <p className="text-xs text-slate-500">
                Send an email inquiry or launch directly in Gmail.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={recruiterName}
                  onChange={(e) => setRecruiterName(e.target.value)}
                  className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-400"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  value={recruiterCompany}
                  onChange={(e) => setRecruiterCompany(e.target.value)}
                  className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-400"
                />
              </div>

              <input
                type="text"
                placeholder="Role / Position"
                value={recruiterRole}
                onChange={(e) => setRecruiterRole(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-400"
              />

              <textarea
                placeholder="Message..."
                rows={3}
                value={recruiterMessage}
                onChange={(e) => setRecruiterMessage(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-400 resize-none"
              />

              <button
                type="submit"
                className={`w-full ${currentTheme.primarySolid} font-medium text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Launch Email Client</span>
              </button>
            </form>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono text-[11px]">saikrishnachintam482@gmail.com</span>
              <button
                onClick={() => handleCopy('saikrishnachintam482@gmail.com', 'email address')}
                className="text-slate-700 hover:text-slate-900 font-medium cursor-pointer"
              >
                Copy Email
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
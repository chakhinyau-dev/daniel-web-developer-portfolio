import { motion } from "framer-motion";
import {
  Smartphone, Globe, Gamepad2, Server, Bot, Monitor,
  Blocks, Cloud, TestTube, Zap, Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── Skill data ───────────────────────────────────────────────────────────────

const VIOLET  = "hsl(263 85% 68%)";
const CYAN    = "hsl(185 100% 45%)";
const ORANGE  = "hsl(25 95% 60%)";
const BLUE    = "hsl(220 70% 60%)";
const GREEN   = "hsl(145 70% 50%)";
const AMBER   = "hsl(50 90% 55%)";
const PINK    = "hsl(340 80% 65%)";
const SLATE   = "hsl(221 15% 62%)";

interface Skill { name: string; years: string; }
interface Category {
  title: string;
  icon: React.ElementType;
  color: string;
  featured?: boolean;
  skills: Skill[];
}

const skillCategories: Category[] = [
  // ── Featured row ──────────────────────────────────────────────────────────
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: VIOLET,
    featured: true,
    skills: [
      { name: "Android (Java)",       years: "12 yrs" },
      { name: "Android (Kotlin)",     years: "10 yrs" },
      { name: "Jetpack Compose",      years: "5 yrs"  },
      { name: "Flutter / Dart",       years: "7 yrs"  },
      { name: "React Native",         years: "7 yrs"  },
      { name: "iOS (Swift)",          years: "6 yrs"  },
    ],
  },
  {
    title: "Web & Full-Stack",
    icon: Globe,
    color: CYAN,
    featured: true,
    skills: [
      { name: "React 18 / Next.js 14 (App Router)", years: "9 yrs" },
      { name: "TypeScript",                         years: "10 yrs" },
      { name: "Node.js / Express / Fastify",        years: "9 yrs" },
      { name: "PostgreSQL / Prisma / Supabase",     years: "8 yrs" },
      { name: "tRPC / REST / GraphQL",              years: "8 yrs" },
      { name: "Auth — JWT / OAuth2 / NextAuth",     years: "8 yrs" },
      { name: "Redis / BullMQ / Job Queues",        years: "7 yrs" },
      { name: "Tailwind CSS / shadcn/ui",           years: "8 yrs" },
    ],
  },
  {
    title: "Unity / Game Dev",
    icon: Gamepad2,
    color: ORANGE,
    featured: true,
    skills: [
      { name: "Unity 3D",               years: "6 yrs" },
      { name: "C# (Unity / .NET)",      years: "6 yrs" },
      { name: "2D & 3D scenes",         years: "6 yrs" },
      { name: "Physics & Animation",    years: "5 yrs" },
      { name: "Photon (Multiplayer)",   years: "4 yrs" },
      { name: "In-app Purchases / Ads", years: "6 yrs" },
      { name: "Roblox / Luau",          years: "3 yrs" },
      { name: "Construct",              years: "3 yrs" },
    ],
  },

  // ── Secondary row ─────────────────────────────────────────────────────────
  {
    title: "AI & Automation",
    icon: Bot,
    color: GREEN,
    skills: [
      { name: "API Orchestration & Integration", years: "10 yrs" },
      { name: "Webhook & Event-Driven Systems",  years: "8 yrs"  },
      { name: "Python & Data Processing",        years: "5 yrs"  },
      { name: "FastAPI & AI Backends",           years: "3 yrs"  },
      { name: "LLM Integration (OpenAI/Claude)", years: "2 yrs"  },
      { name: "LangChain & Agentic Pipelines",   years: "2 yrs"  },
    ],
  },
  {
    title: "Desktop & Native",
    icon: Monitor,
    color: AMBER,
    skills: [
      { name: "Electron + IPC Architecture",      years: "3 yrs" },
      { name: "C# / WPF / MVVM",                 years: "4 yrs" },
      { name: ".NET 8 / .NET Core",               years: "3 yrs" },
      { name: "SQLite / SQL Server",              years: "6 yrs" },
      { name: "Windows Native APIs & System Tray",years: "4 yrs" },
      { name: "Auto-updater & App Packaging",     years: "3 yrs" },
    ],
  },
  {
    title: "E-commerce & Payments",
    icon: Server,
    color: PINK,
    skills: [
      { name: "Shopify / WooCommerce / Headless",          years: "5 yrs" },
      { name: "Stripe (Checkout, Webhooks, Subscriptions)", years: "4 yrs" },
      { name: "PayPal / Apple Pay / Google Pay",            years: "3 yrs" },
      { name: "Shopping Cart & Order Architecture",         years: "5 yrs" },
      { name: "Subscription & Recurring Billing",          years: "4 yrs" },
      { name: "Product & Inventory Management",            years: "5 yrs" },
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: Blocks,
    color: BLUE,
    skills: [
      { name: "MVVM / MVI",          years: "8 yrs" },
      { name: "Clean Architecture",  years: "8 yrs" },
      { name: "Repository Pattern",  years: "8 yrs" },
      { name: "Dependency Injection",years: "7 yrs" },
      { name: "Coroutines & Flow",   years: "7 yrs" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: BLUE,
    skills: [
      { name: "Firebase",           years: "8 yrs"  },
      { name: "Google Cloud",       years: "5 yrs"  },
      { name: "CI/CD (GitHub Actions)", years: "6 yrs" },
      { name: "App Store Publishing",   years: "10 yrs" },
      { name: "Docker (basics)",    years: "3 yrs"  },
    ],
  },
  {
    title: "Testing & Tools",
    icon: TestTube,
    color: SLATE,
    skills: [
      { name: "JUnit / Espresso", years: "10 yrs" },
      { name: "Mockito / MockK",  years: "8 yrs"  },
      { name: "Vitest / Playwright",years: "3 yrs"  },
      { name: "Git / GitHub",     years: "10 yrs" },
      { name: "Figma / Postman",  years: "5 yrs"  },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const SkillsSection = () => {
  const { tr } = useLanguage();
  const featured  = skillCategories.filter((c) => c.featured);
  const secondary = skillCategories.filter((c) => !c.featured);

  const catTitleMap: Record<string, string> = {
    "Mobile Development":    tr.skills.categories.mobile,
    "Web & Full-Stack":      tr.skills.categories.web,
    "Unity / Game Dev":      tr.skills.categories.unity,
    "AI & Automation":       tr.skills.categories.ai,
    "Desktop & Native":      tr.skills.categories.desktop,
    "E-commerce & Payments": tr.skills.categories.ecommerce,
    "Architecture & Patterns": tr.skills.categories.architecture,
    "Cloud & DevOps":        tr.skills.categories.cloud,
    "Testing & Tools":       tr.skills.categories.testing,
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      {/* ── Sticky header ────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gradient"
        >
          {tr.skills.title}
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-1">
          {tr.skills.subtitle}
        </p>
      </div>

      {/* ── Featured cards (3 columns) ──────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        {featured.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -5 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${cat.color}22, 0 0 0 1px ${cat.color}45`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
            className="rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden group stripe-bg-card"
            style={{ borderColor: `${cat.color}30` }}
          >
            {/* Radial glow */}
            <div
              className="absolute -top-20 -right-20 w-52 h-52 opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none"
              style={{ background: `radial-gradient(circle, ${cat.color}14 0%, transparent 70%)` }}
            />

            {/* Header */}
            <div className="relative flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}35` }}
                >
                  <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{catTitleMap[cat.title] ?? cat.title}</h3>
              </div>
              <span
                className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold"
                style={{ color: cat.color, background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
              >
                {tr.skills.coreBadge}
              </span>
            </div>

            {/* Skills list */}
            <ul className="relative space-y-2">
              {cat.skills.map((skill, si) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + si * 0.03, duration: 0.3 }}
                  className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-white/[0.03] transition-colors duration-200"
                >
                  <span className="text-muted-foreground">{skill.name}</span>
                  <span
                    className="text-[11px] tabular-nums font-semibold px-2 py-0.5 rounded-full"
                    style={{ color: cat.color, background: `${cat.color}12` }}
                  >
                    {skill.years}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ── Platform Expertise strip ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-6 p-5 rounded-xl border border-border stripe-bg-card"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Automation tools */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}30` }}>
                <Zap className="w-3.5 h-3.5" style={{ color: GREEN }} />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: GREEN }}>{tr.skills.automationTitle}</p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Zapier',            years: '6 yrs' },
                { name: 'Make (Integromat)', years: '4 yrs' },
                { name: 'n8n',               years: '3 yrs' },
                { name: 'HubSpot Workflows', years: '4 yrs' },
              ].map(({ name, years }) => (
                <motion.div
                  key={name}
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between px-3 py-2 rounded-lg cursor-default transition-all duration-200"
                  style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25` }}
                >
                  <span className="text-[12px] font-medium" style={{ color: GREEN }}>{name}</span>
                  <span className="text-[10px] tabular-nums font-semibold px-2 py-0.5 rounded-full" style={{ color: GREEN, background: `${GREEN}20` }}>{years}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CRM platforms */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `${PINK}18`, border: `1px solid ${PINK}30` }}>
                <Users className="w-3.5 h-3.5" style={{ color: PINK }} />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: PINK }}>{tr.skills.crmTitle}</p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Kommo (amoCRM)', years: '5 yrs' },
                { name: 'GoHighLevel',    years: '4 yrs' },
                { name: 'HubSpot CRM',   years: '4 yrs' },
                { name: 'Zoho CRM',      years: '4 yrs' },
                { name: 'Odoo',          years: '3 yrs' },
              ].map(({ name, years }) => (
                <motion.div
                  key={name}
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between px-3 py-2 rounded-lg cursor-default transition-all duration-200"
                  style={{ background: `${PINK}10`, border: `1px solid ${PINK}25` }}
                >
                  <span className="text-[12px] font-medium" style={{ color: PINK }}>{name}</span>
                  <span className="text-[10px] tabular-nums font-semibold px-2 py-0.5 rounded-full" style={{ color: PINK, background: `${PINK}20` }}>{years}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CMS & Website Builders */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `${CYAN}18`, border: `1px solid ${CYAN}30` }}>
                <Globe className="w-3.5 h-3.5" style={{ color: CYAN }} />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: CYAN }}>{tr.skills.cmsTitle}</p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: 'WordPress',  years: '8 yrs' },
                { name: 'Wix',        years: '5 yrs' },
                { name: 'Webflow',    years: '3 yrs' },
              ].map(({ name, years }) => (
                <motion.div
                  key={name}
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between px-3 py-2 rounded-lg cursor-default transition-all duration-200"
                  style={{ background: `${CYAN}10`, border: `1px solid ${CYAN}25` }}
                >
                  <span className="text-[12px] font-medium" style={{ color: CYAN }}>{name}</span>
                  <span className="text-[10px] tabular-nums font-semibold px-2 py-0.5 rounded-full" style={{ color: CYAN, background: `${CYAN}20` }}>{years}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Secondary cards (3 columns) ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {secondary.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px ${cat.color}18, 0 0 0 1px ${cat.color}30`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
            className="rounded-xl p-5 border border-border transition-all duration-300 relative overflow-hidden group stripe-bg-card"
          >
            <div className="relative flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
              >
                <cat.icon className="w-4 h-4" style={{ color: cat.color }} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{catTitleMap[cat.title] ?? cat.title}</h3>
            </div>

            <ul className="relative space-y-2">
              {cat.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <span
                    className="text-[11px] tabular-nums font-medium px-2 py-0.5 rounded-full"
                    style={{ color: cat.color, background: `${cat.color}10` }}
                  >
                    {skill.years}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;

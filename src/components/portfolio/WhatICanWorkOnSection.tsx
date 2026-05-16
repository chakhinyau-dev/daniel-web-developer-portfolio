import { motion } from "framer-motion";
import {
  Smartphone, Globe, Gamepad2, ShoppingBag, Bot, Monitor,
  Wrench, Blocks,
} from "lucide-react";

const workAreas = [
  {
    title: "Mobile App Development",
    icon: Smartphone,
    color: "hsl(263 85% 68%)",
    description: "Build complete Android, iOS, and cross-platform apps from concept to store.",
    details: [
      "Native Android development with Kotlin, Java, and Jetpack Compose",
      "Cross-platform apps with Flutter and React Native for iOS & Android",
      "API integration, local DB, authentication, push notifications, and analytics",
    ],
  },
  {
    title: "Web & SaaS Development",
    icon: Globe,
    color: "hsl(185 100% 45%)",
    description: "Architect and ship production-grade web products — React/Next.js SaaS platforms, high-throughput APIs, real-time systems, and multi-tenant backends with battle-tested auth and data layers.",
    details: [
      "Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS + shadcn/ui — SSR, SSG, ISR, and edge-ready front-ends",
      "Scalable backends with Node.js, tRPC, REST, and GraphQL — secured with JWT / OAuth2 / NextAuth, rate-limited, and OpenAPI-documented",
      "PostgreSQL + Prisma ORM + Supabase + Redis — schema migrations, query optimisation, caching layers, and BullMQ background job queues",
    ],
  },
  {
    title: "Unity Game Development",
    icon: Gamepad2,
    color: "hsl(25 95% 60%)",
    description: "Build and ship mobile games with real-time multiplayer and polished gameplay.",
    details: [
      "Unity (C#) game features for casual, competitive, and hyper-casual titles",
      "Real-time 1v1 battles, leaderboards, battle pass, and reward systems",
      "Ad integration, in-app purchases, and analytics for monetised games",
    ],
  },
  {
    title: "E-commerce & Payments",
    icon: ShoppingBag,
    color: "hsl(340 80% 65%)",
    description: "Build full-stack commerce platforms — from single-vendor storefronts to multi-vendor marketplaces — with production-ready payment and subscription infrastructure.",
    details: [
      "Product catalogue, cart, checkout, order management, and returns — end to end",
      "Stripe (Checkout, Payment Intents, webhooks, subscriptions) · PayPal · Apple Pay · Google Pay",
      "Multi-vendor marketplace with Stripe Connect: seller onboarding, commission splits, and payout flows",
    ],
  },
  {
    title: "AI & Automation",
    icon: Bot,
    color: "hsl(145 70% 50%)",
    description: "Design and ship production-grade AI integrations and automation systems — from no-code platforms to custom LLM pipelines, built on a decade of API orchestration engineering.",
    details: [
      "No-code automation with Zapier, Make, and n8n — connecting apps, CRMs, and data sources",
      "CRM implementation and customisation: GoHighLevel, Kommo, Odoo, Zoho, HubSpot",
      "Custom LLM integrations (OpenAI, Claude) via LangChain with retrieval and agentic pipelines",
    ],
  },
  {
    title: "Desktop Applications",
    icon: Monitor,
    color: "hsl(50 90% 55%)",
    description: "Build cross-platform and native Windows desktop software with system-level integration, offline-first data, and automated distribution pipelines.",
    details: [
      "Cross-platform apps with Electron + React: IPC, system tray, file-system watchers, auto-updater",
      "Native Windows tools with C# + WPF + MVVM: SQL Server backend, barcode/peripheral integration",
      "Offline-first SQLite databases, background Windows services, and installer/packaging (NSIS, Squirrel)",
    ],
  },
  {
    title: "Architecture & Technical Planning",
    icon: Blocks,
    color: "hsl(220 70% 60%)",
    description: "Plan robust technical foundations before development begins.",
    details: [
      "Full-stack system design, API contracts, and module architecture",
      "Sprint-ready technical roadmaps and scalable codebase standards",
      "Engineering best practices for code quality, testing, and team collaboration",
    ],
  },
  {
    title: "Refactor, Optimisation & Support",
    icon: Wrench,
    color: "hsl(263 60% 75%)",
    description: "Improve quality, performance, and long-term maintainability of existing products.",
    details: [
      "Refactor legacy codebases to modern architecture and cleaner modules",
      "Performance tuning for load time, rendering, memory, and API latency",
      "Ongoing feature delivery, dependency upgrades, and release management",
    ],
  },
];

const WhatICanWorkOnSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gradient"
        >
          Services
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-1">
          End-to-end delivery across mobile, web, games, AI, e-commerce, and desktop.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workAreas.map((area, index) => (
          <motion.article
            key={area.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${area.color}22, 0 0 0 1px ${area.color}35`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
            className="rounded-xl p-5 border border-border stripe-bg-card transition-all duration-300"
          >
            {/* Top accent stripe in category color */}
            <div className="h-[2px] -mx-5 -mt-5 mb-5 rounded-t-xl" style={{ background: `linear-gradient(90deg, ${area.color}, ${area.color}44, transparent)` }} />

            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${area.color}18`, border: `1px solid ${area.color}35` }}
              >
                <area.icon className="w-4.5 h-4.5" style={{ color: area.color }} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{area.title}</h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {area.description}
            </p>

            <ul className="space-y-1.5">
              {area.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: area.color }} />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatICanWorkOnSection;

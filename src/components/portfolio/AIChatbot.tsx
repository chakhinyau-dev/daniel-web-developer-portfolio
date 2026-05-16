import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquare, Sparkles } from "lucide-react";

// ─── Knowledge base ───────────────────────────────────────────────────────────

interface KnowledgeEntry {
  patterns: RegExp[];
  response: string;
}

const KNOWLEDGE: KnowledgeEntry[] = [
  {
    patterns: [/^(hi|hello|hey|good (morning|afternoon|evening)|howdy|greetings)/i],
    response: "Hi there! 👋 I'm **Ray**, Daniel's AI assistant. I can tell you all about his skills, projects, and experience.\n\nWhat would you like to know?",
  },
  {
    patterns: [/skill|know|tech|technolog|stack|expert|speciali|capable|proficien/i],
    response:
      "Daniel is a **full-stack developer** with 12+ years of expertise:\n\n**Mobile**\nAndroid (Java/Kotlin) · Flutter · React Native\n\n**Games & AR**\nUnity (C#) · ARCore · sensor APIs\n\n**Web & Backend**\nReact · Next.js · TypeScript · Node.js · tRPC · PostgreSQL · Firebase\n\n**AI & Automation**\nPython · LangChain · Claude API · FastAPI\n\n**Desktop**\nElectron · C# · WPF · .NET 8",
  },
  {
    patterns: [/experience|year|career|histor|work|background|how long/i],
    response:
      "Daniel has **12+ years** of professional experience:\n\n• 2021–2025 · Amazic Fun Hub — 7 Android apps\n• 2019–2021 · HypGames — 4 Unity mobile games\n• 2017–2018 · Manchester United Ltd — 2 Kotlin apps\n• 2016–2017 · Myarx Apps — 3 travel apps\n• 2014–2015 · MonetizeGo — 3 utility apps\n\nHe's shipped **50+ mobile products** and continues to grow into full-stack and AI development.",
  },
  {
    patterns: [/project|portfolio|app|game|product|built|made|shipped|work/i],
    response:
      "Some highlights from Daniel's portfolio:\n\n🎮 **Sniper Strike** — Unity 1v1 shooter\n📱 **Man Utd App** — official Kotlin streaming app\n🗺 **GPS Tracker** — family safety with live maps\n🛒 **ShopForge** — Next.js + Stripe e-commerce\n🤖 **AutoFlow AI** — LangChain workflow automation\n\nBrowse the **Project Catalog** section to filter by category!",
  },
  {
    patterns: [/hire|available|work|freelance|contract|remote|opportunit|open|looking/i],
    response:
      "Daniel is currently **open to opportunities**:\n\n✅ Freelance & contract work (via Workana)\n✅ Full-time remote roles\n✅ Short or long-term projects\n\nHis Workana profile shows real-time availability. Click the link in the hero to get in touch!",
  },
  {
    patterns: [/contact|reach|email|message|talk|connect|workana|get in touch/i],
    response:
      "You can reach Daniel through:\n\n• **Workana** — freelancer profile (linked at the top of the page)\n• **Figma** — design portfolio (also linked)\n\nHe typically responds within **24 hours** ⚡",
  },
  {
    patterns: [/locat|where|based|timezone|city|state|tennessee|lafayette/i],
    response:
      "Daniel is based in **Lafayette, Tennessee** 🇺🇸 (Central Time).\n\nHe works **100% remote** and has delivered projects for clients across the US, Europe, Latin America, and Asia.",
  },
  {
    patterns: [/educ|school|college|universit|degree|certif|credential|award/i],
    response:
      "**Education:**\n🎓 Volunteer State Community College — Gallatin, TN\n\n**Certifications:**\n🏆 Google Associate Android Developer\n🏆 Google Certified App Developer\n🥇 CodinGame Dart — Top 1% globally\n🥇 CodinGame Dart — with Honors\n• CodinGame TypeScript\n• CodinGame C++\n• CodinGame Python 3",
  },
  {
    patterns: [/language|speak|english|spanish|portuguese|german|japanese|multilingual/i],
    response:
      "Daniel is multilingual:\n\n🇺🇸 English — Native\n🇪🇸 Spanish — Fluent\n🇧🇷 Portuguese — Fluent\n🇩🇪 German — Proficient\n🇯🇵 Japanese — Proficient\n\nThis has been invaluable when working with international teams and global clients!",
  },
  {
    patterns: [/android|kotlin|java|flutter|react native|ios|mobile/i],
    response:
      "Mobile is Daniel's core strength:\n\n**Android** (Java & Kotlin) — 12 years, 15+ apps\n**Flutter** — cross-platform iOS & Android\n**React Native** — TypeScript-first mobile apps\n\nExperience with:\n• FCM push notifications\n• Google Play lifecycle & billing\n• In-app subscriptions\n• ARCore & hardware sensor APIs",
  },
  {
    patterns: [/unity|game|c#|gaming|shooter|billiard|fishing|multiplayer/i],
    response:
      "Daniel built **4 competitive mobile games** at HypGames using Unity + C#:\n\n🎯 Sniper Strike: Special Ops\n🪖 War Sniper: FPS Shooting Game\n🎱 8 Ball Smash: Pool & Billiards\n🎣 Fishing Clash: Catching Fish\n\nAll featured real-time 1v1 multiplayer, leaderboards, and battle-pass progression systems.",
  },
  {
    patterns: [/ai|automation|langchain|openai|claude|chatbot|machine learning|llm|gpt|zapier|n8n|make|workflow/i],
    response:
      "Daniel covers the full automation spectrum — from no-code platforms to custom LLM engineering:\n\n**No-code & Platform Automation**\n• Zapier · n8n · Make (Integromat) · HubSpot Automation\n\n**CRM Implementation & Customisation**\n• GoHighLevel · Kommo (amoCRM) · Odoo · Zoho CRM · HubSpot CRM\n\n**Custom AI & Code-based Automation**\n• LLM integration (OpenAI / Claude) via LangChain\n• Event-driven pipelines: webhooks, queues, scheduled runs\n• FastAPI AI backends — built on 10 yrs of API orchestration\n\n🤖 **AutoFlow AI** — production workflow automation platform\n💬 **SmartBot Studio** — vector-KB AI chatbot SaaS",
  },
  {
    patterns: [/zapier|n8n|make|integromat|crm|kommo|gohighlevel|odoo|zoho|hubspot|amocrm/i],
    response:
      "Daniel is proficient with major automation and CRM platforms:\n\n**Automation Tools**\n• Zapier — multi-step zap workflows, app integrations\n• n8n — self-hosted automation with custom nodes\n• Make (Integromat) — visual scenario builder\n• HubSpot Automation — marketing workflows & sequences\n\n**CRM Platforms**\n• GoHighLevel — full agency/sales funnel management\n• Kommo (amoCRM) — pipeline & lead automation\n• Odoo — ERP + CRM customisation\n• Zoho CRM — workflow rules, blueprints & integrations\n• HubSpot CRM — contact management & deal pipelines\n\nHe connects these platforms with custom code when the built-in tools aren't enough.",
  },
  {
    patterns: [/web|saas|react|next|typescript|node|backend|full.?stack|frontend/i],
    response:
      "Daniel's web & full-stack capabilities:\n\n**Frontend:** React 18 · Next.js 14 · TypeScript · Tailwind CSS\n**Backend:** Node.js · Express · tRPC · REST · GraphQL\n**Database:** PostgreSQL · Supabase · Firebase · MongoDB\n**Auth & Payments:** Clerk · Auth.js · Stripe · Paddle",
  },
  {
    patterns: [/desktop|electron|windows|wpf|c#|winui|native app|exe|installer|pos|point.?of.?sale/i],
    response:
      "Daniel builds both cross-platform and native Windows desktop software:\n\n**Cross-platform (Electron + React)**\n• Full IPC architecture (main ↔ renderer processes)\n• AES-256 encrypted local SQLite storage\n• Squirrel auto-updater for Windows, macOS & Linux\n• System tray, file-system watchers, native OS dialogs\n\n**Native Windows (C# / WPF / WinUI 3 / .NET 8)**\n• MVVM architecture with dependency injection\n• SQL Server backend via Entity Framework\n• Barcode scanner / HID peripheral integration\n• Thermal receipt printing (ESC/POS protocol)\n• NSIS installer with silent enterprise update\n\n**Featured projects:**\n🖥️ **DevSync Desktop** — cross-platform developer toolkit\n🏪 **StockPulse POS** — Windows retail point-of-sale system\n📋 **DataForm Pro** — enterprise data-entry with PDF reporting",
  },
  {
    patterns: [/ecommerce|e-commerce|shop|store|marketplace|stripe|payment|checkout|cart|woocommerce|shopify|vendor|billing|subscription/i],
    response:
      "Daniel has built full commerce systems end to end:\n\n**Storefront & Catalogue**\n• Variant-aware product catalogues, search & filters\n• Persistent cart with offline support\n• Headless Shopify & WooCommerce storefronts\n\n**Payments & Billing**\n• Stripe: Checkout, Payment Intents, webhooks, subscriptions\n• PayPal · Apple Pay · Google Pay (mobile SDK)\n• Stripe Connect for multi-vendor split payments\n\n**Advanced Commerce Features**\n• Multi-vendor marketplace: seller onboarding, KYC, commission engine\n• Escrow payout scheduling & buyer dispute resolution\n• Loyalty points, discount codes & tier pricing\n• Order fulfilment emails, inventory tracking & sales analytics\n\n**Featured projects:**\n🛒 **ShopForge** — full-stack e-commerce platform\n🏪 **VendorHub** — Stripe Connect multi-vendor marketplace\n📱 **NexCart** — iOS & Android commerce app",
  },
  {
    patterns: [/rate|price|cost|charge|fee|budget|quote/i],
    response:
      "For rates and pricing, please reach out directly via **Workana** (link in the hero section). Daniel works with a variety of budgets and can provide a custom quote based on your project scope.",
  },
  {
    patterns: [/who are you|what are you|tell me about (yourself|daniel|him)/i],
    response:
      "I'm **Ray**, Daniel's AI portfolio assistant! 🤖\n\nDaniel Ray is a **Senior Full-Stack Developer** from Lafayette, Tennessee. He has 12+ years building mobile apps, Unity games, web SaaS platforms, AI automation tools, and desktop applications.\n\nHe's passionate about clean architecture, pixel-perfect UIs, and shipping products that actually get used. What aspect of his work interests you?",
  },
  {
    patterns: [/thank|thanks|great|awesome|nice|good|cool|perfect/i],
    response:
      "You're welcome! 😊 Is there anything else you'd like to know about Daniel's work or skills?",
  },
];

const FALLBACK =
  "That's a great question! I can tell you about Daniel's **skills**, **experience**, **projects**, **availability**, **location**, **education**, or **languages**. What interests you?";

const SUGGESTIONS = [
  "What are your skills?",
  "Are you available for hire?",
  "Tell me about your projects",
  "What's your tech stack?",
  "Where are you based?",
  "What certifications do you have?",
];

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const entry of KNOWLEDGE) {
    if (entry.patterns.some((re) => re.test(lower))) return entry.response;
  }
  return FALLBACK;
}

// ─── Markdown-lite renderer ───────────────────────────────────────────────────

function renderMessage(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line === "") {
      elements.push(<br key={key++} />);
      continue;
    }

    // Bold: **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((p, i) => {
      if (p.startsWith("**") && p.endsWith("**")) {
        return <strong key={i} className="text-foreground font-semibold">{p.slice(2, -2)}</strong>;
      }
      return p;
    });

    elements.push(<span key={key++} className="block leading-relaxed">{rendered}</span>);
  }

  return elements;
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
  partial?: boolean;
}

const GREETING: Message = {
  id: 0,
  role: "bot",
  text: "Hi! I'm **Ray**, Daniel's AI assistant. Ask me anything about his skills, projects, experience, or availability! 🚀",
};

let msgId = 1;

// ─── Component ────────────────────────────────────────────────────────────────

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () =>
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || typing) return;

      const userMsg: Message = { id: msgId++, role: "user", text: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setTyping(true);

      const fullResponse = getResponse(trimmed);
      const delay = 700 + Math.min(fullResponse.length * 2, 800);

      // Show typing indicator, then stream the response
      setTimeout(() => {
        const botMsg: Message = { id: msgId++, role: "bot", text: "", partial: true };
        setMessages((prev) => [...prev, botMsg]);
        setTyping(false);

        let charIdx = 0;
        const interval = setInterval(() => {
          charIdx += 3;
          const slice = fullResponse.slice(0, charIdx);
          setMessages((prev) =>
            prev.map((m) =>
              m.id === botMsg.id
                ? { ...m, text: slice, partial: charIdx < fullResponse.length }
                : m
            )
          );
          if (charIdx >= fullResponse.length) clearInterval(interval);
        }, 14);
      }, delay);
    },
    [typing]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── Floating trigger button ──────────────────────────────────────── */}
      <motion.button
        aria-label={open ? "Close chat" : "Chat with Ray, Daniel's AI assistant"}
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{
          background: "linear-gradient(135deg, hsl(263 85% 68%), hsl(185 100% 45%))",
          boxShadow: "0 0 0 0 hsl(263 85% 68% / 0.6)",
          animation: open ? "none" : "glow-pulse 2.5s ease-in-out infinite",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }} transition={{ duration: 0.18 }} className="relative">
              <MessageSquare className="w-6 h-6 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-background" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Chat window ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-24px))] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "hsl(221 28% 8%)",
              border: "1px solid hsl(221 18% 18%)",
              maxHeight: "min(580px, calc(100vh - 120px))",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px hsl(263 85% 68% / 0.15)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 shrink-0"
              style={{ background: "linear-gradient(135deg, hsl(263 85% 68% / 0.12), hsl(185 100% 45% / 0.06))", borderBottom: "1px solid hsl(221 18% 16%)" }}
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, hsl(263 85% 68%), hsl(185 100% 45%))" }}
                >
                  R
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[hsl(221_28%_8%)]" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-foreground leading-none">Ray</p>
                  <Sparkles className="w-3 h-3 text-violet-400" />
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-none">Daniel's AI Assistant · Online</p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-highlight transition-colors text-muted-foreground hover:text-foreground shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" style={{ scrollbarWidth: "thin" }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
                >
                  {msg.role === "bot" && (
                    <div
                      className="w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-white text-[9px] font-bold"
                      style={{ background: "linear-gradient(135deg, hsl(263 85% 68%), hsl(185 100% 45%))" }}
                    >
                      R
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-relaxed ${
                      msg.role === "user"
                        ? "text-white rounded-tr-sm"
                        : "text-foreground/90 rounded-tl-sm"
                    }`}
                    style={
                      msg.role === "user"
                        ? { background: "linear-gradient(135deg, hsl(263 85% 60%), hsl(263 85% 52%))" }
                        : { background: "hsl(221 22% 12%)", border: "1px solid hsl(221 18% 18%)" }
                    }
                  >
                    {renderMessage(msg.text)}
                    {msg.partial && (
                      <span className="inline-block w-1.5 h-3.5 bg-violet-400 ml-0.5 animate-pulse align-middle rounded-sm" />
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold shrink-0"
                      style={{ background: "linear-gradient(135deg, hsl(263 85% 68%), hsl(185 100% 45%))" }}
                    >
                      R
                    </div>
                    <div className="flex items-center gap-1 px-3 py-2 rounded-2xl rounded-tl-sm" style={{ background: "hsl(221 22% 12%)", border: "1px solid hsl(221 18% 18%)" }}>
                      {[0, 0.15, 0.3].map((d, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-violet-400"
                          style={{ animation: `typing-dot 1.2s ease-in-out ${d}s infinite` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-3 py-2 flex gap-1.5 overflow-x-auto no-scrollbar shrink-0" style={{ borderTop: "1px solid hsl(221 18% 14%)" }}>
              {SUGGESTIONS.filter((s) => !messages.some((m) => m.role === "user" && m.text === s))
                .slice(0, 3)
                .map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    disabled={typing}
                    className="shrink-0 text-[10px] font-medium px-2.5 py-1 rounded-full border transition-all whitespace-nowrap disabled:opacity-40"
                    style={{
                      color: "hsl(263 85% 75%)",
                      background: "hsl(263 85% 68% / 0.08)",
                      borderColor: "hsl(263 85% 68% / 0.25)",
                    }}
                  >
                    {s}
                  </button>
                ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 pb-3 pt-1 shrink-0"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                disabled={typing}
                className="flex-1 text-[13px] px-3.5 py-2.5 rounded-xl bg-surface-highlight border border-border text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg, hsl(263 85% 68%), hsl(185 100% 45%))" }}
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/i18n/translations";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

const Header = () => {
  const { lang, setLang, tr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: tr.nav.services,       href: "#services" },
    { label: tr.nav.skills,         href: "#skills" },
    { label: tr.nav.education,      href: "#education" },
    { label: tr.nav.certifications, href: "#certifications" },
    { label: tr.nav.projects,       href: "#projects" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((item) => item.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [tr]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/50 shadow-[0_1px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="text-sm font-extrabold tracking-tight"
        >
          <span className="text-gradient">DR</span>
          <span className="text-primary">.</span>
        </motion.a>

        {/* Nav + Lang switcher */}
        <div className="flex items-center gap-2">
          {/* Nav links — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative text-xs px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={
                    isActive
                      ? { background: "hsl(200 100% 68% / 0.10)", border: "1px solid hsl(200 100% 68% / 0.22)" }
                      : {}
                  }
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full"
                      style={{ background: "hsl(200 100% 68%)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Language switcher — always visible */}
          <div className="flex items-center gap-1 md:ml-2 md:pl-2 md:border-l md:border-border/50">
            <Globe className="w-3 h-3 text-muted-foreground/50 shrink-0" />
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`text-[11px] font-bold px-2 py-1 rounded-md transition-all duration-200 ${
                  lang === code
                    ? "text-primary bg-primary/10 border border-primary/25"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

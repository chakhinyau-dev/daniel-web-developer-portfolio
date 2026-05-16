import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, Code2, ExternalLink, Layers } from "lucide-react";
import { profile } from "@/data/portfolio";
import profileImg from "@/assets/profile.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden aurora-bg">
      {/* ── Background orbs ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Violet orb — top-left */}
        <div
          className="absolute -top-1/3 -left-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(263 85% 68% / 0.14) 0%, transparent 65%)",
            animation: "mesh-float 14s ease-in-out infinite",
          }}
        />
        {/* Cyan orb — top-right */}
        <div
          className="absolute top-0 -right-1/3 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(185 100% 45% / 0.09) 0%, transparent 65%)",
            animation: "mesh-float 11s ease-in-out infinite reverse",
          }}
        />
        {/* Blue orb — bottom */}
        <div
          className="absolute -bottom-1/3 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(220 70% 55% / 0.07) 0%, transparent 65%)",
            animation: "mesh-float 17s ease-in-out infinite 3s",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative px-6 pt-28 pb-12 md:px-10 md:pt-36 max-w-5xl mx-auto text-center"
      >
        {/* ── Profile image ──────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex justify-center mb-7">
          <div className="relative">
            {/* Spinning gradient ring */}
            <div
              className="absolute -inset-[3px] rounded-full"
              style={{
                background: "conic-gradient(from 0deg, hsl(263 85% 68%), hsl(185 100% 45%), hsl(220 70% 60%), hsl(263 85% 68%))",
                animation: "rotate-slow 6s linear infinite",
              }}
            />
            {/* Glow */}
            <div
              className="absolute -inset-3 rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(263 85% 68% / 0.22) 0%, transparent 70%)",
                animation: "pulse-glow 3s ease-in-out infinite",
              }}
            />
            <img
              src={profileImg}
              alt={profile.name}
              className="relative w-28 h-28 md:w-40 md:h-40 rounded-full object-cover bg-background"
              style={{ padding: "3px" }}
            />
          </div>
        </motion.div>

        {/* ── Role badge ─────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-5">
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em]"
            style={{
              background: "hsl(263 85% 68% / 0.12)",
              border: "1px solid hsl(263 85% 68% / 0.3)",
              color: "hsl(263 85% 80%)",
            }}
          >
            <Code2 className="w-3 h-3" />
            Senior Full-Stack Developer
          </div>
        </motion.div>

        {/* ── Name ──────────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-5 text-gradient">
            {profile.name}
          </h1>
        </motion.div>

        {/* ── Bio ───────────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <p
            className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed"
            style={{ textWrap: "pretty" as never }}
          >
            12 years building production-grade software across mobile, web, AI, and desktop.
            Full-stack architect shipping React/Next.js SaaS platforms, scalable APIs, and real-time systems — delivering products that scale.
          </p>
        </motion.div>

        {/* ── CTA links ─────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-3">
          {/* Figma */}
          <motion.a
            href={profile.figmaPortfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.035, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="group relative inline-flex rounded-full p-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              background: "linear-gradient(120deg, #A259FF 0%, #F24E1E 45%, #0ACF83 85%, #1ABCFE 100%)",
              boxShadow: "0 0 40px -10px hsl(280 55% 45% / 0.4)",
            }}
            aria-label="Open Figma design portfolio"
          >
            <span className="flex items-center gap-2.5 rounded-full bg-background/95 px-5 py-2.5 md:px-6 md:py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors group-hover:bg-background">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#2C2C2C]" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#0ACF83" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                  <path fill="#A259FF" d="M8 16h4V8H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                  <path fill="#F24E1E" d="M8 8h4V0H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                  <path fill="#FF7262" d="M16 8h4c0-2.208-1.792-4-4-4S12 5.792 12 8v4h4z" />
                  <path fill="#1ABCFE" d="M12 16h4c2.208 0 4-1.792 4-4s-1.792-4-4-4h-4v8z" />
                </svg>
              </span>
              <span className="tracking-tight">Figma portfolio</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
            </span>
          </motion.a>

          {/* Workana */}
          <motion.a
            href={profile.workanaUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.035, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="group relative inline-flex rounded-full p-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              background: "linear-gradient(120deg, #00B189 0%, #00D4A8 100%)",
              boxShadow: "0 0 40px -10px rgba(0,177,137,0.35)",
            }}
            aria-label="Open Workana freelancer profile"
          >
            <span className="flex items-center gap-2.5 rounded-full bg-background/95 px-5 py-2.5 md:px-6 md:py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors group-hover:bg-background">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#00B189]" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 3h-17A.5.5 0 0 0 3 3.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5zm-2.3 5.8-3.6 8.4h-1.5l-1.6-5-1.6 5H8.4L4.8 8.8h1.7l2.4 6 1.7-5.1h1.8l1.7 5.1 2.4-6h1.7z" />
                </svg>
              </span>
              <span className="tracking-tight">Workana profile</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-[#00B189]" />
            </span>
          </motion.a>
        </motion.div>

        {/* ── Meta info ─────────────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mt-8 mb-6"
        >
          {[
            { icon: MapPin,        label: profile.location },
            { icon: GraduationCap, label: profile.university },
            { icon: Award,         label: `${profile.certifications.length} Certifications` },
          ].map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 transition-colors hover:text-primary cursor-default"
            >
              <Icon className="w-3.5 h-3.5 text-primary" />
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Language badges ───────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-10">
          {profile.languages.map((lang) => (
            <motion.span
              key={lang}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-xs px-4 py-1.5 rounded-full bg-surface-highlight text-muted-foreground border border-border cursor-default"
            >
              {lang}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Stats ─────────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex items-baseline justify-center gap-10 md:gap-16">
          {[
            { value: profile.totalYears,      label: "Years" },
            { value: `${profile.totalApps}+`, label: "Products" },
            { value: "6",                     label: "Disciplines" },
            { value: "36",                    label: "Projects" },
          ].map(({ value, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-default text-center"
            >
              <span className="block text-4xl md:text-6xl font-extrabold text-gradient tabular-nums leading-none">
                {value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1 block">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Discipline chips ──────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            { label: "Mobile",        color: "hsl(263 85% 68%)" },
            { label: "Web SaaS",      color: "hsl(185 100% 45%)" },
            { label: "AI Automation", color: "hsl(145 70% 50%)" },
            { label: "E-commerce",    color: "hsl(340 80% 65%)" },
            { label: "Unity / Games", color: "hsl(25 95% 60%)"  },
            { label: "Desktop",       color: "hsl(50 90% 55%)"  },
          ].map(({ label, color }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full"
              style={{
                color,
                background: `${color}15`,
                border: `1px solid ${color}35`,
              }}
            >
              <Layers className="w-2.5 h-2.5" />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

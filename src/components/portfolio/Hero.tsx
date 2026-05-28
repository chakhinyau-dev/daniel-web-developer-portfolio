import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, Code2, ExternalLink, Snowflake } from "lucide-react";
import { profile } from "@/data/portfolio";
import profileImg from "@/assets/profile.png";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Stable snowflake particle data — computed once, never re-randomised
const snowParticles = Array.from({ length: 75 }, (_, i) => ({
  id: i,
  left: `${(i * 1.334) % 100}%`,
  delay: `${(i * 0.19) % 14}s`,
  duration: `${7 + (i * 0.21) % 10}s`,
  size: 1.2 + (i % 6) * 0.7,
  sway: `${-45 + (i % 9) * 10}px`,
  opacity: 0.25 + (i % 6) * 0.12,
}));

const SnowParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
    {snowParticles.map((f) => (
      <div
        key={f.id}
        className="absolute rounded-full"
        style={{
          left: f.left,
          top: "-12px",
          width: `${f.size}px`,
          height: `${f.size}px`,
          background: `hsl(200 80% 95% / ${f.opacity})`,
          animationName: "snowfall",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDuration: f.duration,
          animationDelay: f.delay,
          ["--snow-sway" as string]: f.sway,
        }}
      />
    ))}
  </div>
);

// Decorative snowflake SVG placed around the profile frame
const IceFlake = ({ size = 20, style }: { size?: number; style?: CSSProperties }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="hsl(200 100% 75%)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    <circle cx="12" cy="2"    r="1.2" fill="hsl(200 100% 80%)" stroke="none" />
    <circle cx="12" cy="22"   r="1.2" fill="hsl(200 100% 80%)" stroke="none" />
    <circle cx="2"  cy="12"   r="1.2" fill="hsl(200 100% 80%)" stroke="none" />
    <circle cx="22" cy="12"   r="1.2" fill="hsl(200 100% 80%)" stroke="none" />
    <circle cx="4.93" cy="4.93"   r="1" fill="hsl(200 100% 80%)" stroke="none" />
    <circle cx="19.07" cy="19.07" r="1" fill="hsl(200 100% 80%)" stroke="none" />
    <circle cx="4.93"  cy="19.07" r="1" fill="hsl(200 100% 80%)" stroke="none" />
    <circle cx="19.07" cy="4.93"  r="1" fill="hsl(200 100% 80%)" stroke="none" />
  </svg>
);

const Hero = () => {
  const { tr } = useLanguage();

  return (
    <div className="relative overflow-hidden aurora-bg">
      {/* ── Falling snow particles ──────────────────────────────────────── */}
      <SnowParticles />

      {/* ── Winter background orbs (ice blues instead of violet) ─────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ice blue orb — top-left */}
        <div
          className="absolute -top-1/3 -left-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(200 100% 55% / 0.13) 0%, transparent 65%)",
            animation: "mesh-float 14s ease-in-out infinite",
          }}
        />
        {/* Frost orb — top-right */}
        <div
          className="absolute top-0 -right-1/3 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(210 80% 65% / 0.08) 0%, transparent 65%)",
            animation: "mesh-float 11s ease-in-out infinite reverse",
          }}
        />
        {/* Deep ice orb — bottom */}
        <div
          className="absolute -bottom-1/3 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(215 70% 40% / 0.10) 0%, transparent 65%)",
            animation: "mesh-float 17s ease-in-out infinite 3s",
          }}
        />
        {/* Ground frost shimmer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28"
          style={{
            background: "linear-gradient(to top, hsl(200 100% 70% / 0.06) 0%, transparent 100%)",
          }}
        />
        {/* Subtle frost grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(200 100% 85% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(200 100% 85% / 0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative px-6 pt-28 pb-16 md:px-10 md:pt-36 max-w-5xl mx-auto"
      >
        {/* ── Two-column layout ────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-14">

          {/* ─── LEFT COLUMN: Ice-framed photo + meta ──────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start gap-6 md:w-64 flex-shrink-0"
          >
            {/* ── Snow-themed profile photo frame ── */}
            <div className="relative self-center">
              {/* Outer ambient glow */}
              <div
                className="absolute -inset-10 rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(200 100% 68% / 0.16) 0%, transparent 70%)",
                  animation: "pulse-glow 3.5s ease-in-out infinite",
                }}
              />
              {/* Outer ice-crystal ring (clockwise spin) */}
              <div
                className="absolute -inset-[5px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(200 100% 72%), hsl(210 80% 90%), hsl(190 90% 78%), hsl(205 100% 85%), hsl(195 80% 70%), hsl(200 100% 72%))",
                  animation: "rotate-slow 8s linear infinite",
                }}
              />
              {/* Inner counter-spin frost ring */}
              <div
                className="absolute -inset-[2px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 180deg, hsl(215 70% 88%), hsl(200 100% 72%), hsl(195 85% 80%), hsl(215 70% 88%))",
                  animation: "rotate-slow 5s linear infinite reverse",
                  opacity: 0.65,
                }}
              />
              {/* Profile photo */}
              <img
                src={profileImg}
                alt={profile.name}
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover"
                style={{ padding: "4px", background: "hsl(220 48% 4%)" }}
              />

              {/* ── Corner snowflake decorations ── */}
              {[
                { top: "-13px", left: "-13px", size: 20, dur: "7s", dir: "" },
                { top: "-11px", right: "-11px", size: 16, dur: "9s", dir: "reverse" },
                { bottom: "-13px", left: "-11px", size: 16, dur: "8s", dir: "reverse" },
                { bottom: "-11px", right: "-13px", size: 20, dur: "6s", dir: "" },
              ].map((pos, i) => {
                const { dur, dir, size, ...stylePos } = pos;
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      ...stylePos,
                      animation: `rotate-slow ${dur} linear infinite ${dir}`,
                      filter: "drop-shadow(0 0 4px hsl(200 100% 75% / 0.6))",
                    }}
                  >
                    <IceFlake size={size} />
                  </div>
                );
              })}
            </div>

            {/* ── Location / University / Certs meta ── */}
            <div className="flex flex-col gap-3 text-sm w-full">
              {[
                { icon: MapPin,        label: profile.location },
                { icon: GraduationCap, label: profile.university },
                { icon: Award,         label: `${profile.certifications.length} Certifications` },
              ].map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03, x: 4 }}
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "hsl(200 100% 68% / 0.10)",
                      border: "1px solid hsl(200 100% 68% / 0.24)",
                    }}
                  >
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-xs leading-tight">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* ── Language badges ── */}
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((lang) => (
                <motion.span
                  key={lang}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-xs px-3 py-1.5 rounded-full cursor-default"
                  style={{
                    background: "hsl(200 100% 68% / 0.08)",
                    border: "1px solid hsl(200 100% 68% / 0.22)",
                    color: "hsl(200 100% 82%)",
                  }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>

            {/* ── Floating ambient snowflakes (left panel decoration) ── */}
            <div className="hidden md:flex items-center gap-3 mt-2 opacity-40">
              {[18, 12, 16].map((size, i) => (
                <div
                  key={i}
                  style={{
                    animation: `rotate-slow ${8 + i * 2}s linear infinite ${i % 2 ? "reverse" : ""}`,
                    filter: "drop-shadow(0 0 3px hsl(200 100% 75% / 0.5))",
                  }}
                >
                  <IceFlake size={size} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Name, bio, CTAs, stats, chips ────────────────── */}
          <div className="flex-1 flex flex-col gap-6">

            {/* ── Role badge ── */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <div
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em]"
                style={{
                  background: "hsl(200 100% 68% / 0.10)",
                  border: "1px solid hsl(200 100% 68% / 0.28)",
                  color: "hsl(200 100% 82%)",
                }}
              >
                <Code2 className="w-3 h-3" />
                {tr.hero.badge}
              </div>
            </motion.div>

            {/* ── Name ── */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.9] text-gradient">
                {profile.name}
              </h1>
            </motion.div>

            {/* ── Bio ── */}
            <motion.div variants={itemVariants}>
              <p
                className="text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed"
                style={{ textWrap: "pretty" as never }}
              >
                {tr.hero.bio1}{" "}
                {tr.hero.bio2}
              </p>
            </motion.div>

            {/* ── CTA links ── */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
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
                  <span className="tracking-tight">{tr.hero.figmaBtn}</span>
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
                  <span className="tracking-tight">{tr.hero.workanaBtn}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-[#00B189]" />
                </span>
              </motion.a>
            </motion.div>

            {/* ── Stats ── */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-baseline gap-8 md:gap-12 py-4 px-6 rounded-2xl"
              style={{
                background: "hsl(200 100% 68% / 0.04)",
                border: "1px solid hsl(200 100% 68% / 0.12)",
              }}
            >
              {[
                { value: profile.totalYears,      label: tr.hero.stats.years },
                { value: `${profile.totalApps}+`, label: tr.hero.stats.products },
                { value: "6",                     label: tr.hero.stats.disciplines },
                { value: "36",                    label: tr.hero.stats.projects },
              ].map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-default text-center flex-1 min-w-[60px]"
                >
                  <span className="block text-3xl md:text-4xl font-extrabold text-gradient tabular-nums leading-none">
                    {value}
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1.5 block">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* ── Discipline chips (snowflake icon = winter theme) ── */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {[
                { label: tr.hero.chips.mobile,    color: "hsl(200 100% 70%)" },
                { label: tr.hero.chips.webSaas,   color: "hsl(185 100% 60%)" },
                { label: tr.hero.chips.ai,        color: "hsl(155 60% 62%)" },
                { label: tr.hero.chips.ecommerce, color: "hsl(210 80% 72%)" },
                { label: tr.hero.chips.unity,     color: "hsl(195 90% 65%)" },
                { label: tr.hero.chips.desktop,   color: "hsl(220 70% 75%)" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full"
                  style={{
                    color,
                    background: `${color}18`,
                    border: `1px solid ${color}38`,
                  }}
                >
                  <Snowflake className="w-2.5 h-2.5" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

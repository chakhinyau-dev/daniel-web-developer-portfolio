import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { profile } from "@/data/portfolio";

// ── Pre-computed 6-arm snowflake crystal geometry ─────────────────────────────
const C = 40, IR = 21, OR = 37, BR = 29, BL = 7.5;
const crystalArms = Array.from({ length: 6 }, (_, i) => {
  const a = ((i * 60 - 90) * Math.PI) / 180;
  const pa = a + Math.PI / 2;
  const bx = C + BR * Math.cos(a);
  const by = C + BR * Math.sin(a);
  return {
    sx: C + IR * Math.cos(a),  sy: C + IR * Math.sin(a),
    ex: C + OR * Math.cos(a),  ey: C + OR * Math.sin(a),
    bx, by,
    b1x: bx + BL * Math.cos(pa), b1y: by + BL * Math.sin(pa),
    b2x: bx - BL * Math.cos(pa), b2y: by - BL * Math.sin(pa),
  };
});

const HireTag = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { tr } = useLanguage();

  return (
    <>
      {/* ── Floating snowflake-crystal hire button ───────────────────────── */}
      <div className="fixed bottom-[5.5rem] right-6 z-[49]">
        <div className="relative w-20 h-20">

          {/* Outer ambient pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={{
              boxShadow: [
                "0 0 0 0px   hsl(200 100% 68% / 0.70)",
                "0 0 0 22px  hsl(200 100% 68% / 0)",
              ],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Slowly rotating 6-arm ice crystal */}
          <motion.svg
            viewBox="0 0 80 80"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ filter: "drop-shadow(0 0 6px hsl(200 100% 72% / 0.6))" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {crystalArms.map((arm, i) => (
              <g key={i}>
                {/* Main arm */}
                <line
                  x1={arm.sx} y1={arm.sy} x2={arm.ex} y2={arm.ey}
                  stroke="hsl(200 100% 76%)" strokeWidth="2.2" strokeLinecap="round"
                />
                {/* Branch A */}
                <line
                  x1={arm.bx} y1={arm.by} x2={arm.b1x} y2={arm.b1y}
                  stroke="hsl(200 100% 83%)" strokeWidth="1.4" strokeLinecap="round"
                />
                {/* Branch B */}
                <line
                  x1={arm.bx} y1={arm.by} x2={arm.b2x} y2={arm.b2y}
                  stroke="hsl(200 100% 83%)" strokeWidth="1.4" strokeLinecap="round"
                />
                {/* Crystal tip */}
                <circle cx={arm.ex} cy={arm.ey} r="2.6" fill="hsl(200 100% 90%)" />
              </g>
            ))}
            {/* Inner ring accent */}
            <circle
              cx={C} cy={C} r={IR}
              fill="none"
              stroke="hsl(200 100% 78% / 0.35)"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
          </motion.svg>

          {/* Counter-rotating inner frost ring (subtle) */}
          <motion.svg
            viewBox="0 0 80 80"
            className="absolute inset-0 w-full h-full pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx={C} cy={C} r={OR + 2}
              fill="none"
              stroke="hsl(200 100% 80% / 0.12)"
              strokeWidth="1"
              strokeDasharray="3 8"
            />
          </motion.svg>

          {/* Center clickable button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.14 }}
              whileTap={{ scale: 0.90 }}
              className="w-[52px] h-[52px] rounded-full flex flex-col items-center justify-center text-white overflow-hidden cursor-pointer select-none relative"
              style={{
                background: "linear-gradient(135deg, hsl(200 100% 56%), hsl(195 85% 68%))",
                boxShadow:
                  "0 0 0 2px hsl(200 100% 80% / 0.25), 0 4px 20px hsl(200 100% 62% / 0.55), inset 0 1px 0 hsl(200 80% 95% / 0.25)",
              }}
              aria-label={tr.hire.tag}
            >
              {/* Shimmer sweep */}
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.32), transparent)",
                }}
                animate={{ x: ["-110%", "210%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8,
                  ease: "linear",
                  repeatDelay: 1.6,
                }}
              />
              {/* Frost vignette */}
              <span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, hsl(200 80% 95% / 0.15) 0%, transparent 65%)",
                }}
              />
              <span className="relative z-10 text-[8.5px] font-extrabold uppercase tracking-[0.14em] leading-tight text-center">
                {tr.hire.tag.split(" ").map((word, wi) => (
                  <span key={wi} className="block">{word}</span>
                ))}
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Modal ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.84)", backdropFilter: "blur(14px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-lg bg-[hsl(218_38%_7%)] rounded-2xl border border-border overflow-hidden shadow-2xl"
              initial={{ scale: 0.86, y: 48, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ice blue shimmer accent bar */}
              <motion.div
                className="h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(200 100% 62%), hsl(195 85% 78%), hsl(200 100% 62%))",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["0% 0", "200% 0", "0% 0"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Small decorative crystal in top corner */}
              <div className="absolute top-5 left-5 opacity-20 pointer-events-none">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="hsl(200 100% 78%)" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
              </div>

              {/* Close button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-surface-highlight hover:bg-border transition-colors text-muted-foreground hover:text-foreground z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 pt-7">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.55, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.08, type: "spring", stiffness: 280 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "hsl(200 100% 68% / 0.12)",
                    border: "1px solid hsl(200 100% 68% / 0.35)",
                  }}
                >
                  <Handshake
                    className="w-8 h-8"
                    style={{ color: "hsl(200 100% 72%)" }}
                  />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.13 }}
                  className="text-2xl font-extrabold text-center text-gradient mb-5"
                >
                  {tr.hire.modalTitle}
                </motion.h2>

                {/* Body */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.19 }}
                  className="text-sm text-muted-foreground leading-relaxed text-center whitespace-pre-line"
                  style={{ textWrap: "pretty" as never }}
                >
                  {tr.hire.modalBody}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.26 }}
                  className="flex flex-col sm:flex-row gap-3 mt-8"
                >
                  <motion.a
                    href={profile.workanaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200 100% 58%), hsl(195 85% 70%))",
                      boxShadow: "0 4px 20px hsl(200 100% 68% / 0.35)",
                    }}
                  >
                    {tr.hire.workanaBtn}
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </motion.a>

                  <button
                    onClick={() => setModalOpen(false)}
                    className="flex-1 px-6 py-3 rounded-xl text-sm font-medium text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all duration-200"
                  >
                    {tr.hire.close}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HireTag;

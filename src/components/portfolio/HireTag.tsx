import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ExternalLink, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { profile } from "@/data/portfolio";

const HireTag = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { tr } = useLanguage();

  return (
    <>
      {/* ── Floating hire tag ────────────────────────────────────── */}
      <motion.div
        className="fixed bottom-[5.5rem] right-6 z-[49]"
        initial={{ opacity: 0, x: 64, scale: 0.75 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 22 }}
      >
        {/* Pulsing outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 0 0px hsl(38 92% 52% / 0.75)",
              "0 0 0 14px hsl(38 92% 52% / 0)",
            ],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />

        <motion.button
          onClick={() => setModalOpen(true)}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex items-center gap-2 px-4 py-[9px] rounded-full text-white font-bold shadow-xl overflow-hidden cursor-pointer select-none"
          style={{
            background: "linear-gradient(135deg, hsl(38 92% 52%), hsl(22 95% 58%))",
            boxShadow: "0 6px 28px hsl(38 92% 50% / 0.45), 0 2px 8px hsl(22 95% 58% / 0.3)",
          }}
          aria-label={tr.hire.tag}
        >
          {/* Shimmer sweep */}
          <motion.span
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              width: "55%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent)",
            }}
            animate={{ x: ["-120%", "230%"] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: "linear", repeatDelay: 1.4 }}
          />

          {/* Rotating star icon */}
          <motion.span
            className="relative z-10 shrink-0"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 1 }}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
          </motion.span>

          <span className="relative z-10 text-[11px] font-extrabold uppercase tracking-[0.12em] leading-none whitespace-nowrap">
            {tr.hire.tag}
          </span>
        </motion.button>
      </motion.div>

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
              className="relative w-full max-w-lg bg-[hsl(221_28%_8%)] rounded-2xl border border-border overflow-hidden shadow-2xl"
              initial={{ scale: 0.86, y: 48, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Amber accent bar */}
              <motion.div
                className="h-[3px]"
                style={{
                  background: "linear-gradient(90deg, hsl(38 92% 52%), hsl(22 95% 58%), hsl(38 92% 52%))",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["0% 0", "200% 0", "0% 0"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

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
                    background: "hsl(38 92% 52% / 0.12)",
                    border: "1px solid hsl(38 92% 52% / 0.35)",
                  }}
                >
                  <Handshake className="w-8 h-8 text-amber-400" />
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
                      background: "linear-gradient(135deg, hsl(38 92% 52%), hsl(22 95% 58%))",
                      boxShadow: "0 4px 20px hsl(38 92% 50% / 0.35)",
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

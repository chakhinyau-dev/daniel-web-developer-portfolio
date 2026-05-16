import { motion } from "framer-motion";
import {
  Smartphone, Globe, Gamepad2, ShoppingBag, Bot, Monitor,
  Wrench, Blocks,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS = [Smartphone, Globe, Gamepad2, ShoppingBag, Bot, Monitor, Blocks, Wrench];
const COLORS = [
  "hsl(263 85% 68%)", "hsl(185 100% 45%)", "hsl(25 95% 60%)",  "hsl(340 80% 65%)",
  "hsl(145 70% 50%)", "hsl(50 90% 55%)",   "hsl(220 70% 60%)", "hsl(263 60% 75%)",
];

const WhatICanWorkOnSection = () => {
  const { tr } = useLanguage();
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
          {tr.services.title}
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-1">
          {tr.services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tr.services.areas.map((area, index) => {
          const Icon = ICONS[index];
          const color = COLORS[index];
          return (
          <motion.article
            key={area.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${color}22, 0 0 0 1px ${color}35`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
            className="rounded-xl p-5 border border-border stripe-bg-card transition-all duration-300"
          >
            <div className="h-[2px] -mx-5 -mt-5 mb-5 rounded-t-xl" style={{ background: `linear-gradient(90deg, ${color}, ${color}44, transparent)` }} />

            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${color}18`, border: `1px solid ${color}35` }}
              >
                <Icon className="w-4.5 h-4.5" style={{ color }} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{area.title}</h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {area.description}
            </p>

            <ul className="space-y-1.5">
              {area.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: color }} />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default WhatICanWorkOnSection;

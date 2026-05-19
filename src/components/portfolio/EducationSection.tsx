import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EducationSection = () => {
  const { tr } = useLanguage();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="sticky top-14 z-10 frost-header py-4 mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gradient"
        >
          {tr.education.title}
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-1">
          {tr.education.subtitle}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ boxShadow: "0 16px 48px hsl(200 100% 68% / 0.1)" }}
        className="bg-card rounded-xl p-6 md:p-8 border border-border relative overflow-hidden group transition-all duration-300 snowflake-mark ice-card-hover"
      >
        {/* Gradient accent top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 glow-primary transition-all duration-300"
            style={{ background: "hsl(200 100% 68% / 0.12)", border: "1px solid hsl(200 100% 68% / 0.3)" }}
          >
            <GraduationCap className="w-7 h-7 text-primary" />
          </motion.div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground">De La Salle University (DLSU)</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {tr.education.degree}
            </p>

            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>{tr.education.graduated}</span>
              </div>
            </div>

            {/* Key subjects */}
            <div className="mt-6 pt-5 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-semibold text-foreground">{tr.education.keyAreas}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {tr.education.subjects.map((subject, i) => (
                  <motion.span
                    key={subject}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.07 }}
                    className="text-xs px-3 py-1.5 rounded-full bg-surface-highlight text-muted-foreground border border-border cursor-default transition-all duration-200 hover:border-primary/40 hover:text-foreground"
                  >
                    {subject}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="mt-6 pt-5 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-semibold text-foreground">{tr.education.campusLocation}</h4>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl overflow-hidden border border-border shadow-lg"
              >
                <iframe
                  title="DLSU Location"
                  src="https://maps.google.com/maps?q=De+La+Salle+University,+2401+Taft+Avenue,+Malate,+Manila,+Philippines&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;

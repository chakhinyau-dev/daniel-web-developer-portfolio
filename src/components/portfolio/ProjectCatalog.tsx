import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone, Gamepad2, Globe, ShoppingBag, Bot, Monitor,
  LayoutGrid, ExternalLink, ChevronLeft, ChevronRight, X, Sparkles,
} from "lucide-react";
import {
  projects, categoryMeta, type ProjectCategory, type ProjectItem,
} from "@/data/portfolio";
import { getScreenshots } from "@/data/appScreenshots";

// ─── Category config ──────────────────────────────────────────────────────────

type FilterKey = 'all' | ProjectCategory;

interface FilterOption {
  key: FilterKey;
  label: string;
  icon: React.ElementType;
  colorVar: string;
}

const FILTERS: FilterOption[] = [
  { key: 'all',       label: 'All Projects',   icon: LayoutGrid,   colorVar: 'hsl(263 85% 68%)' },
  { key: 'mobile',    label: 'Mobile Apps',    icon: Smartphone,   colorVar: 'hsl(263 85% 68%)' },
  { key: 'web-saas',  label: 'Web SaaS',       icon: Globe,        colorVar: 'hsl(185 100% 45%)'},
  { key: 'ai',        label: 'AI Automation',  icon: Bot,          colorVar: 'hsl(145 70% 50%)' },
  { key: 'ecommerce', label: 'E-commerce',     icon: ShoppingBag,  colorVar: 'hsl(340 80% 65%)' },
  { key: 'unity',     label: 'Unity / Games',  icon: Gamepad2,     colorVar: 'hsl(25 95% 60%)'  },
  { key: 'desktop',   label: 'Desktop',        icon: Monitor,      colorVar: 'hsl(50 90% 55%)'  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const statusLabel: Record<ProjectItem['status'], string> = {
  live:      'Live',
  shipped:   'Shipped',
  freelance: 'Freelance',
  contract:  'Contract',
};

const statusColor: Record<ProjectItem['status'], string> = {
  live:      'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  shipped:   'text-blue-400 bg-blue-400/10 border-blue-400/20',
  freelance: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  contract:  'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

// ─── Screenshot modal ─────────────────────────────────────────────────────────

const Modal = ({
  project,
  screenshots,
  onClose,
}: {
  project: ProjectItem;
  screenshots: string[];
  onClose: () => void;
}) => {
  const [idx, setIdx] = useState(0);
  const meta = categoryMeta[project.category];

  const prev = () => setIdx((i) => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setIdx((i) => (i + 1) % screenshots.length);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10 bg-black/85 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-[hsl(221_28%_8%)] rounded-2xl border border-border overflow-hidden shadow-2xl"
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 10, opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md"
              style={{
                color: meta.colorVar,
                background: `${meta.colorVar}18`,
                border: `1px solid ${meta.colorVar}35`,
              }}
            >
              {meta.label}
            </span>
            <h3 className="text-sm font-bold text-foreground">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-highlight hover:bg-border transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Screenshot area */}
          {screenshots.length > 0 ? (
            <div className="relative bg-black/40 flex items-center justify-center min-h-[280px]">
              <img
                src={screenshots[idx]}
                alt={`${project.title} preview ${idx + 1}`}
                className="max-h-[360px] w-full object-contain"
              />
              {screenshots.length > 1 && (
                <>
                  <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1">
                    {screenshots.map((_, i) => (
                      <button key={i} onClick={() => setIdx(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'w-4 bg-white' : 'bg-white/40'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div
              className="relative flex items-center justify-center min-h-[280px]"
              style={{ background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${meta.colorVar}18 0%, transparent 70%), hsl(221 28% 8%)` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${meta.colorVar}20`, border: `1px solid ${meta.colorVar}35` }}>
                  {(() => {
                    const F = FILTERS.find(f => f.key === project.category)?.icon ?? LayoutGrid;
                    return <F className="w-8 h-8" style={{ color: meta.colorVar }} />;
                  })()}
                </div>
                <p className="text-xs text-muted-foreground">No screenshots</p>
              </div>
            </div>
          )}

          {/* Details */}
          <div className="p-5 flex flex-col gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">{project.subtitle}</p>
              <h2 className="text-lg font-bold text-foreground mb-2">{project.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-surface-highlight border border-border text-foreground/80 font-medium">{t}</span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold mb-2">Features</p>
              <ul className="space-y-1">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: meta.colorVar }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer: year + status + store link */}
            <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/50">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground">{project.year}</span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${statusColor[project.status]}`}>
                  {statusLabel[project.status]}
                </span>
              </div>
              {project.playStoreId && (
                <a
                  href={`https://play.google.com/store/apps/details?id=${project.playStoreId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] font-medium transition-colors hover:text-primary"
                  style={{ color: meta.colorVar }}
                >
                  Play Store <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Project Card ─────────────────────────────────────────────────────────────

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: ProjectItem;
  index: number;
  onOpen: (p: ProjectItem, screenshots: string[]) => void;
}) => {
  const meta = categoryMeta[project.category];
  const screenshots = getScreenshots(project.screenshots);
  const FilterIcon = FILTERS.find(f => f.key === project.category)?.icon ?? LayoutGrid;

  return (
    <motion.div
      layout
      key={project.id}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      onClick={() => onOpen(project, screenshots)}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden cursor-pointer flex flex-col"
      style={{
        boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 12px 40px ${meta.colorVar}22, 0 0 0 1px ${meta.colorVar}35`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 20px rgba(0,0,0,0.4)";
      }}
    >
      {/* Top stripe — category color */}
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${meta.colorVar}, ${meta.colorVar}55, transparent)` }} />

      {/* Visual area */}
      <div className="relative h-40 overflow-hidden">
        {screenshots.length > 0 ? (
          <>
            <img
              src={screenshots[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `radial-gradient(ellipse 90% 80% at 50% 60%, ${meta.colorVar}18 0%, transparent 70%), hsl(221 28% 8%)`,
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: `${meta.colorVar}15`, border: `1px solid ${meta.colorVar}30` }}
            >
              <FilterIcon className="w-7 h-7 transition-transform group-hover:scale-110 duration-300" style={{ color: meta.colorVar }} />
            </div>
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-sm text-amber-300 border border-amber-400/25">
            <Sparkles className="w-2.5 h-2.5" /> Featured
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-sm border"
          style={{ color: meta.colorVar, borderColor: `${meta.colorVar}40` }}>
          <FilterIcon className="w-2.5 h-2.5" />
          {meta.label}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
          <span className="text-xs font-semibold text-white flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
            View Details <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-bold text-foreground leading-tight line-clamp-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className={`shrink-0 text-[9px] font-semibold px-1.5 py-0.5 rounded-full border ${statusColor[project.status]}`}>
            {statusLabel[project.status]}
          </span>
        </div>

        <p className="text-[11px] text-muted-foreground mb-3 line-clamp-2 leading-relaxed">{project.description}</p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1 mt-auto">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-md bg-surface-highlight border border-border text-muted-foreground font-medium">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-surface-highlight border border-border text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const ProjectCatalog = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const [modalScreenshots, setModalScreenshots] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const countFor = (key: FilterKey) =>
    key === 'all' ? projects.length : projects.filter((p) => p.category === key).length;

  const openModal = (project: ProjectItem, screenshots: string[]) => {
    setModalProject(project);
    setModalScreenshots(screenshots);
  };

  return (
    <>
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.06 }}
        transition={{ duration: 0.5 }}
        className="mb-20 scroll-mt-24"
      >
        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-highlight border border-border text-[11px] text-muted-foreground uppercase tracking-widest mb-4"
          >
            <LayoutGrid className="w-3 h-3" />
            Full-Stack Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl md:text-4xl font-extrabold text-gradient mb-3"
          >
            Project Catalog
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-sm text-muted-foreground max-w-md mx-auto"
          >
            {projects.length} projects across {FILTERS.length - 1} disciplines — browse by category
          </motion.p>
        </div>

        {/* ── Filter tabs ────────────────────────────────────────────────── */}
        <div ref={scrollRef} className="overflow-x-auto no-scrollbar pb-1 mb-8">
          <div className="flex items-center gap-2 min-w-max mx-auto px-2 w-fit">
            {FILTERS.map((f) => {
              const isActive = f.key === activeFilter;
              return (
                <motion.button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap select-none"
                  style={
                    isActive
                      ? {
                          color: f.colorVar,
                          background: `${f.colorVar}18`,
                          border: `1px solid ${f.colorVar}50`,
                          boxShadow: `0 0 18px ${f.colorVar}28`,
                        }
                      : {
                          color: 'hsl(221 15% 62%)',
                          background: 'transparent',
                          border: '1px solid hsl(221 18% 16%)',
                        }
                  }
                >
                  <f.icon className="w-3.5 h-3.5" />
                  {f.label}
                  <span
                    className="ml-0.5 text-[10px] font-bold px-1.5 py-0 rounded-full"
                    style={
                      isActive
                        ? { background: `${f.colorVar}30`, color: f.colorVar }
                        : { background: 'hsl(221 22% 13%)', color: 'hsl(221 15% 55%)' }
                    }
                  >
                    {countFor(f.key)}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Grid ──────────────────────────────────────────────────────── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={openModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Empty state ───────────────────────────────────────────────── */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-muted-foreground text-sm"
          >
            No projects in this category yet.
          </motion.div>
        )}
      </motion.section>

      {/* ── Modal ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {modalProject && (
          <Modal
            project={modalProject}
            screenshots={modalScreenshots}
            onClose={() => setModalProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCatalog;

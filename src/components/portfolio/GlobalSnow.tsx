// Full-page fixed snow overlay — 350 particles, subtle opacity, covers entire viewport
// Particles are generated deterministically (no Math.random) so they're stable across renders.

const COUNT = 350;

const particles = Array.from({ length: COUNT }, (_, i) => ({
  id: i,
  left:     `${(i * 0.2857)  % 100}%`,
  delay:    `${(i * 0.173)   % 22}s`,
  duration: `${8 + (i * 0.19) % 18}s`,
  size:      0.6 + (i % 12) * 0.28,
  sway:     `${-70 + (i % 15) * 10}px`,
  opacity:   0.08 + (i % 10) * 0.022,
}));

const GlobalSnow = () => (
  <div
    aria-hidden="true"
    className="fixed inset-0 pointer-events-none overflow-hidden"
    style={{ zIndex: 6 }}
  >
    {particles.map((p) => (
      <div
        key={p.id}
        className="absolute rounded-full"
        style={{
          left:     p.left,
          top:      "-8px",
          width:    `${p.size}px`,
          height:   `${p.size}px`,
          background: `hsl(200 70% 95% / ${p.opacity})`,
          animationName:            "snowfall",
          animationTimingFunction:  "linear",
          animationIterationCount:  "infinite",
          animationDuration:        p.duration,
          animationDelay:           p.delay,
          ["--snow-sway" as string]: p.sway,
        }}
      />
    ))}
  </div>
);

export default GlobalSnow;

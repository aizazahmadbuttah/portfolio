import { useRef } from "react";
import { motion } from "framer-motion";

/* ---------- Orchestration variants ---------- */
export const stagger = (gap = 0.08, delay = 0.05) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

export const rise = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 110, damping: 20 },
  },
};

/** Staggers all `rise` descendants when scrolled into view. */
export function Reveal({ children, className = "", gap, delay, as = "div", immediate = false }) {
  const Tag = motion[as];
  const trigger = immediate
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-80px" } };
  return (
    <Tag className={className} variants={stagger(gap, delay)} initial="hidden" {...trigger}>
      {children}
    </Tag>
  );
}

export const Rise = ({ as = "div", ...props }) => {
  const Tag = motion[as];
  return <Tag variants={rise} {...props} />;
};

/* ---------- Spring button ---------- */
const spring = { type: "spring", stiffness: 420, damping: 18 };

export function Button({ variant = "primary", className = "", children, ...props }) {
  const styles =
    variant === "primary"
      ? "border-accent/40 bg-accent/10 text-white shadow-glow hover:border-accent/70 hover:bg-accent/20"
      : "border-white/10 bg-white/[0.03] text-slate-200 hover:border-white/20 hover:bg-white/[0.06]";
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={spring}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-xl border px-5 text-sm font-medium backdrop-blur transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${styles} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}

/* ---------- Cursor-tracking spotlight card ---------- */
export function SpotlightCard({ children, className = "", glow = "rgba(59,130,246,0.16)", size = 380 }) {
  const ref = useRef(null);

  // Writes CSS variables directly — no React re-render per mouse move.
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      variants={rise}
      whileHover={{ y: -2 }}
      onMouseMove={onMove}
      className={`group relative isolate overflow-hidden rounded-2xl surface transition-colors duration-300 hover:border-white/10 ${className}`}
    >
      {/* spotlight fill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%), ${glow}, transparent 65%)` }}
      />
      {/* spotlight border highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: 1,
          background: `radial-gradient(${size * 0.6}px circle at var(--mx, 50%) var(--my, 50%), rgba(59,130,246,0.55), transparent 70%)`,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {children}
    </motion.div>
  );
}

export const Pill = ({ children, accent = false }) => (
  <span
    className={`rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none ${
      accent
        ? "border-accent/30 bg-accent/10 text-blue-200"
        : "border-white/[0.07] bg-white/[0.03] text-muted"
    }`}
  >
    {children}
  </span>
);

export const Eyebrow = ({ children }) => (
  <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
    <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" aria-hidden="true" />
    {children}
  </p>
);

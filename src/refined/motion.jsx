import { motion, useReducedMotion } from "framer-motion";

/** Brief (<200ms) fade-in when scrolled into view. */
export function FadeIn({ children, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: reduce ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}

/** Surface card with a subtle -2px Y lift on hover. */
export function HoverCard({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

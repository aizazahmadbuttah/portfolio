import { motion } from "framer-motion";
import { profile } from "../data";

const links = [
  ["Capabilities", "#capabilities"],
  ["Case Study", "#case-study"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="sticky top-0 z-50 px-4 pt-4"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border border-white/[0.06] bg-[#0a0f1c]/60 px-4 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl backdrop-saturate-150">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
          <span className="grid h-6 w-6 place-items-center rounded-md border border-accent/40 bg-accent/15 font-mono text-[10px] text-blue-200 shadow-glow">
            AB
          </span>
          <span className="hidden sm:inline">Aizaz Ahmad Buttah</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hidden rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white md:block"
            >
              {label}
            </a>
          ))}
          <motion.a
            href={profile.resume}
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
            className="ml-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:border-accent/40"
          >
            Resume
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}

import { profile } from "../data";
import { Reveal, Rise } from "../ui";

export default function Footer() {
  const link =
    "text-sm text-muted transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
  return (
    <footer id="contact" className="relative mt-10 border-t border-white/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <div className="mx-auto max-w-5xl px-6 py-14">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Rise>
            <h2 className="text-gradient text-2xl font-semibold tracking-tight sm:text-3xl">
              Let's build something dependable.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-block font-mono text-sm text-blue-300 transition-colors hover:text-white"
            >
              {profile.email}
            </a>
          </Rise>
          <Rise as="nav" aria-label="Contact" className="flex gap-6">
            <a href={`mailto:${profile.email}`} className={link}>Email</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn ↗</a>
          </Rise>
        </Reveal>
        <p className="mt-12 text-xs text-muted/70">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}

import { projects } from "../data";
import { Reveal, Rise, SpotlightCard, Pill, Eyebrow } from "../ui";

function ProjectCard({ p }) {
  const large = Boolean(p.highlights);
  return (
    <SpotlightCard className={`${p.span} flex flex-col p-6`}>
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{p.kind}</span>
        {p.links.length > 0 && (
          <div className="flex gap-4">
            {p.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted transition-colors hover:text-white"
              >
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <h3 className={`font-semibold tracking-tight ${large ? "text-xl" : "text-base"}`}>{p.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>

      {large && (
        <ul className="mt-5 space-y-2 border-t border-white/5 pt-4 text-sm text-slate-300">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_8px_1px_rgba(59,130,246,0.8)]" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {p.tech.map((t) => (
          <li key={t}>
            <Pill>{t}</Pill>
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-10 max-w-2xl">
          <Rise>
            <Eyebrow>Selected Projects</Eyebrow>
          </Rise>
          <Rise as="h2" className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
            Systems shipped across the stack.
          </Rise>
        </Reveal>

        <Reveal gap={0.07} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

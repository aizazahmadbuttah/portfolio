import { caseStudy as cs } from "../data";
import { Reveal, Rise, SpotlightCard, Pill, Eyebrow } from "../ui";
import xray from "../../assets/FYP/pneumonia_result.jpg";

function Metric({ m }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border p-5 ${
        m.primary
          ? "border-accent/30 bg-gradient-to-b from-accent/[0.14] to-accent/[0.03] shadow-glow"
          : "border-white/[0.06] bg-bg/50"
      }`}
    >
      {m.primary && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-accent/30 blur-2xl"
        />
      )}
      <p className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{m.label}</p>
      <p
        className={`relative mt-2 text-4xl font-semibold tracking-tight tabular-nums ${
          m.primary ? "text-white" : "text-slate-200"
        }`}
      >
        {m.value}
      </p>
      <p className="relative mt-1 text-xs text-muted">{m.sub}</p>
    </div>
  );
}

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal gap={0.1}>
          <SpotlightCard glow="rgba(59,130,246,0.12)" size={700} className="p-6 sm:p-10 lg:p-12">
            {/* ambient glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-accent/15 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-12">
              {/* Narrative */}
              <div className="lg:col-span-7">
                <Rise>
                  <Eyebrow>{cs.eyebrow}</Eyebrow>
                </Rise>
                <Rise as="h2" className="text-gradient text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                  {cs.title}
                </Rise>
                <Rise as="p" className="mt-5 max-w-xl leading-relaxed text-muted sm:text-lg">
                  {cs.summary}
                </Rise>

                {/* Pipeline stages */}
                <Rise as="ol" className="mt-8 grid gap-3 sm:grid-cols-2">
                  {cs.stages.map(([n, t, d]) => (
                    <li key={n} className="rounded-xl border border-white/[0.06] bg-bg/40 p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-accent">{n}</span>
                        <h3 className="text-sm font-semibold">{t}</h3>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">{d}</p>
                    </li>
                  ))}
                </Rise>

                <Rise className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <ul className="flex flex-wrap gap-2">
                    {cs.tech.map((t) => (
                      <li key={t}>
                        <Pill accent={t === "CNN" || t === "U-Net"}>{t}</Pill>
                      </li>
                    ))}
                  </ul>
                  {cs.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-300 transition-colors hover:text-white"
                    >
                      {l.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </Rise>
              </div>

              {/* Metric modules + product shot */}
              <div className="lg:col-span-5">
                <Rise className="grid grid-cols-2 gap-3">
                  {cs.metrics.map((m) => (
                    <Metric key={m.sub} m={m} />
                  ))}
                </Rise>

                <Rise className="relative mt-3 overflow-hidden rounded-xl border border-white/[0.06] bg-bg/60">
                  <img
                    src={xray}
                    alt="Pneumonia prediction result screen from the diagnostic interface"
                    loading="lazy"
                    className="h-44 w-full object-cover object-top opacity-90 sm:h-52"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                  />
                  <p className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-300">
                    Live inference UI
                  </p>
                </Rise>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}

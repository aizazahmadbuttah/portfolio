import { capabilities as c, education, coreStack } from "../data";
import { Reveal, Rise, SpotlightCard, Pill, Eyebrow } from "../ui";

const Tile = ({ className = "", children }) => (
  <SpotlightCard className={`p-6 sm:p-7 ${className}`}>{children}</SpotlightCard>
);

const Title = ({ children, icon }) => (
  <div className="mb-3 flex items-center gap-3">
    <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/25 bg-accent/10 font-mono text-xs text-blue-200">
      {icon}
    </span>
    <h3 className="text-lg font-semibold tracking-tight">{children}</h3>
  </div>
);

const Tags = ({ items, accent }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((t) => (
      <li key={t}>
        <Pill accent={accent}>{t}</Pill>
      </li>
    ))}
  </ul>
);

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-12 max-w-2xl">
          <Rise>
            <Eyebrow>Engineering Capabilities</Eyebrow>
          </Rise>
          <Rise as="h2" className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
            One engineer across the model, the API, and the interface.
          </Rise>
        </Reveal>

        {/* Asymmetric 6-col bento: AI (4×2) | Backend (2×1) / Frontend (2×1) | Stack (4×1) + Education (2×1) */}
        <Reveal gap={0.09} className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(150px,auto)]">
          {/* AI / ML — hero tile */}
          <Tile className="md:col-span-4 md:row-span-2 flex flex-col">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />
            <Title icon="AI">{c.ai.title}</Title>
            <p className="max-w-md text-sm leading-relaxed text-muted">{c.ai.blurb}</p>

            {/* pipeline diagram */}
            <ol className="my-7 grid flex-1 content-center gap-2 sm:grid-cols-5">
              {c.ai.pipeline.map((step, i) => (
                <li
                  key={step}
                  className="relative rounded-xl border border-white/[0.06] bg-bg/60 p-3 text-center"
                >
                  <span className="mb-1 block font-mono text-[10px] text-accent">0{i + 1}</span>
                  <span className="text-xs font-medium text-slate-200">{step}</span>
                  {i < c.ai.pipeline.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 -right-2 z-10 hidden -translate-y-1/2 text-xs text-accent sm:block"
                    >
                      ›
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <Tags items={c.ai.tags} accent />
          </Tile>

          {/* Backend */}
          <Tile className="md:col-span-2">
            <Title icon="{ }">{c.backend.title}</Title>
            <p className="mb-5 text-sm text-muted">{c.backend.blurb}</p>
            <Tags items={c.backend.tags} />
          </Tile>

          {/* Frontend */}
          <Tile className="md:col-span-2">
            <Title icon="</>">{c.frontend.title}</Title>
            <p className="mb-5 text-sm text-muted">{c.frontend.blurb}</p>
            <Tags items={c.frontend.tags} />
          </Tile>

          {/* Core stack — wide */}
          <Tile className="md:col-span-4">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Core stack</p>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {coreStack.map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-white/[0.06] bg-bg/50 px-3 py-2 text-sm font-medium transition-colors hover:border-accent/30"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Tile>

          {/* Education */}
          <Tile className="md:col-span-2">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Education</p>
            <p className="text-lg font-semibold leading-snug tracking-tight">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-4 font-mono text-xs text-blue-300">{education.years}</p>
          </Tile>
        </Reveal>
      </div>
    </section>
  );
}

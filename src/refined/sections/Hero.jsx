import { profile, education, coreStack } from "../data";
import { Reveal, Rise, Button, Pill } from "../ui";

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal immediate gap={0.1} delay={0.15}>
          <Rise className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] py-1.5 pr-4 pl-2 text-xs text-muted backdrop-blur">
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-accent/15">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]" />
            </span>
            {education.degree} · {education.school} · {education.years}
          </Rise>

          <Rise as="h1" className="text-gradient text-5xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-7xl">
            {profile.name}
          </Rise>

          <Rise as="p" className="mt-5 text-xl font-medium tracking-tight text-blue-300 sm:text-2xl">
            {profile.headline}
          </Rise>

          <Rise as="p" className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.copy}
          </Rise>

          <Rise className="mt-10 flex flex-wrap gap-3">
            <Button href={profile.resume} download>
              Download Resume <span aria-hidden="true">↓</span>
            </Button>
            <Button variant="ghost" href="#case-study">
              View Case Study <span aria-hidden="true">→</span>
            </Button>
          </Rise>

          <Rise as="ul" aria-label="Core stack" className="mt-14 flex flex-wrap gap-2 border-t border-white/5 pt-6">
            {coreStack.map((s) => (
              <li key={s}>
                <Pill>{s}</Pill>
              </li>
            ))}
          </Rise>
        </Reveal>
      </div>
    </section>
  );
}

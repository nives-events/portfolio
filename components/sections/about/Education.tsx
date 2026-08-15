import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

export function Education() {
  return (
    <section aria-labelledby="education-heading" className="bg-surface">
      <div className="container-page py-24">
        <Reveal>
          <h2
            id="education-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Education
          </h2>
        </Reveal>

        <div className="mt-4 divide-y divide-border border-t border-border">
          {aboutPage.education.map((entry, index) => (
            <Reveal
              key={entry.credential}
              delay={index * 80}
              className="grid gap-4 py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <h3 className="font-display text-xl font-bold leading-tight text-primary">
                  {entry.credential}
                </h3>
                <p className="mt-1 text-base text-accent">{entry.institution}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
                  {entry.period} · {entry.grade}
                </p>
              </div>

              <div className="md:col-span-8">
                {entry.modules ? (
                  <p className="text-base leading-relaxed text-primary/80">{entry.modules}</p>
                ) : null}
                {entry.note ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{entry.note}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

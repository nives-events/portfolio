import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

/**
 * Compact education strip. Credential, institution and years only: module
 * lists and grades live in the CV, so the professional story on this page
 * keeps the spotlight.
 */
export function Education() {
  return (
    <section aria-labelledby="education-heading" className="container-page py-24">
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
            className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold leading-tight text-primary">
                {entry.credential}
              </h3>
              <p className="mt-1 text-base text-primary/80">
                {entry.institution}
                {entry.note ? <span className="text-muted"> · {entry.note}</span> : null}
              </p>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">{entry.period}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

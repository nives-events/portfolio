import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="container-page py-24">
      <Reveal>
        <h2
          id="experience-heading"
          className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          Experience
        </h2>
      </Reveal>

      <div className="mt-4 divide-y divide-border border-t border-border">
        {aboutPage.experience.map((entry, index) => (
          <Reveal
            key={`${entry.role}-${entry.company}`}
            delay={index * 80}
            className="grid gap-4 py-10 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-4">
              <h3 className="font-display text-xl font-bold leading-tight text-primary">
                {entry.role}
              </h3>
              <p className="mt-1 text-base text-accent">{entry.company}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
                {entry.period}
              </p>
            </div>

            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-primary/80">{entry.summary}</p>

              {entry.achievements.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {entry.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-primary/80">
                      <span aria-hidden="true" className="text-accent">
                        –
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

/**
 * What he actually works in, grouped by job rather than listed alphabetically.
 * Deliberately plain: a hiring reader scans this for one or two names.
 */
export function Toolkit() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-heading" className="container-page scroll-mt-24 py-24">
      <Reveal>
        <h2
          id="toolkit-heading"
          className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          What I work in
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {aboutPage.toolkit.map((group, index) => (
          <Reveal key={group.heading} delay={index * 80} className="border-t border-border pt-6">
            <h3 className="font-display text-xl font-bold text-primary">{group.heading}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-none border border-border px-3 py-1 text-sm text-primary/75"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

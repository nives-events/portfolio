import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

/**
 * How I work as a compact box of principles rather than essays. The concept
 * takes its cue from the values box on bastienmoiroux.fr/about (compact,
 * editorial, strong typography, easy to scan), rebuilt entirely in this
 * site's own visual system: one bordered container, hairline dividers, a
 * keyword heading and one supporting line per principle.
 */
export function HowIWork() {
  const { heading, principles } = aboutPage.howIWork;

  return (
    <section aria-labelledby="how-i-work-heading" className="container-page py-24">
      <Reveal>
        <h2
          id="how-i-work-heading"
          className="font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
        >
          {heading}
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <div className="rounded-[28px] border-2 border-primary bg-surface shadow-[0_24px_60px_-28px_var(--shadow-card)]">
          <ol className="grid sm:grid-cols-2">
            {principles.map((point, i) => (
              <li
                key={point.heading}
                className={`flex gap-4 px-6 py-6 sm:px-8 ${
                  i > 0 ? "border-t border-border" : ""
                } ${i === 1 ? "sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l sm:border-l-border" : ""}`}
              >
                <span aria-hidden="true" className="pt-1 font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase leading-none tracking-tight text-primary">
                    {point.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/75">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}

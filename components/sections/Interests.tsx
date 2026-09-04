import { Reveal } from "@/components/motion/Reveal";
import { homepage } from "@/lib/content";

/**
 * Intermission. What I do when the mic is off. Text only, set in readable
 * full-strength type, no stock photos.
 */
export function Interests() {
  const { kicker, heading, items } = homepage.interests;

  return (
    <section aria-labelledby="interests-heading">
      <div className="container-page py-24">
        <Reveal>
          <p className="kicker">{kicker}</p>
          <h2
            id="interests-heading"
            className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
          >
            {heading}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-10 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 90} as="li" className="border-t border-border pt-5">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary">
                {item.label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-primary/80">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

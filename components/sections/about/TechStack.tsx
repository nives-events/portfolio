import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

/**
 * The Tech Stack: one large container with the tools grouped by job, each
 * rendered as a chip that floats gently inside its category. The animation is
 * pure CSS (see .stack-chip in globals.css): a small bob with per-chip
 * duration and delay so the motion never syncs, hover pauses and lifts the
 * chip, and prefers-reduced-motion renders everything static. Chips stay in
 * normal flow, so nothing overlaps and every category keeps its tools.
 */
export function TechStack({ id = "tech-stack" }: { id?: string }) {
  const { heading, intro, groups } = aboutPage.techStack;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 bg-surface">
      <div className="container-page py-24">
        <Reveal>
          <h2
            id={`${id}-heading`}
            className="font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-3 max-w-prose text-lg text-primary/80">{intro}</p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="rounded-[28px] border-2 border-primary bg-bg px-6 py-10 shadow-[0_24px_60px_-28px_var(--shadow-card)] sm:px-10 sm:py-12">
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              {groups.map((group, gi) => (
                <div
                  key={group.heading}
                  className={gi === 0 ? "md:col-span-2" : undefined}
                >
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                    {group.heading}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {group.tools.map((tool, ti) => {
                      // Deterministic variation so the bobbing never syncs.
                      const seed = gi * 7 + ti * 3;
                      const dur = 5 + (seed % 5) * 0.7;
                      const delay = -((seed * 1.3) % 6);
                      const rot = ((seed % 5) - 2) * 0.8;
                      return (
                        <li
                          key={tool}
                          className="stack-chip select-none rounded-full border border-primary/50 bg-surface px-4 py-2 text-sm font-medium text-primary"
                          style={
                            {
                              "--chip-dur": `${dur}s`,
                              "--chip-delay": `${delay}s`,
                              "--chip-rot": `${rot}deg`,
                            } as React.CSSProperties
                          }
                        >
                          {tool}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

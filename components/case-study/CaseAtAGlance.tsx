import { Reveal } from "@/components/motion/Reveal";
import type { AtAGlance } from "@/lib/types";

export function CaseAtAGlance({ data }: { data: AtAGlance }) {
  return (
    <section aria-labelledby="at-a-glance" className="container-page py-12 md:py-16">
      <Reveal>
        <h2
          id="at-a-glance"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          At a glance
        </h2>

        <dl className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">Project</dt>
            <dd className="mt-2 max-w-prose text-sm leading-relaxed text-primary/85">
              {data.project}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">My role</dt>
            <dd className="mt-2 max-w-prose text-sm leading-relaxed text-primary/85">
              {data.role}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">Key outputs</dt>
            <dd className="mt-2">
              <ul className="space-y-1.5">
                {data.outputs.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-primary/85 before:mr-2 before:text-muted before:content-['·']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">Primary result</dt>
            <dd className="mt-2 font-mono text-2xl text-primary">{data.primaryResult}</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}

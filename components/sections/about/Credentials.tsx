import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

/**
 * Credentials: verified certifications rendered as distinct badge cards, plus
 * the CV download. Deliberately short. Each card is a certificate-shaped
 * object with a mono seal mark, so the section reads as credentials rather
 * than another bullet list.
 */
export function Credentials() {
  const { heading, intro, certs } = aboutPage.credentials;

  return (
    <section aria-labelledby="credentials-heading" className="bg-surface">
      <div className="container-page py-24">
        <Reveal>
          <h2
            id="credentials-heading"
            className="font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-3 max-w-prose text-lg text-primary/80">{intro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, i) => (
            <Reveal
              as="li"
              key={cert.title}
              delay={i * 60}
              className="list-none border-2 border-primary bg-bg p-5"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary font-mono text-xs font-bold text-primary"
              >
                ✓
              </span>
              <h3 className="mt-3 font-display text-xl font-bold leading-tight text-primary">
                {cert.title}
              </h3>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {cert.issuer}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140}>
          <a
            href={aboutPage.cv.href}
            download
            className="group relative mt-12 inline-flex items-center gap-3 overflow-hidden rounded-lg border border-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary transition-transform duration-100 active:scale-[0.97]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 rounded-lg bg-primary transition-transform duration-200 ease-out-strong group-hover:scale-x-100"
            />
            <span className="relative transition-colors duration-200 group-hover:text-bg">
              {aboutPage.cv.label}
            </span>
            <span
              aria-hidden="true"
              className="relative transition-colors duration-200 group-hover:text-bg"
            >
              ↓
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

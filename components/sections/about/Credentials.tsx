import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

export function Credentials() {
  return (
    <section aria-labelledby="credentials-heading" className="bg-surface">
      <div className="container-page py-24">
        <Reveal>
          <h2
            id="credentials-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Credentials and certifications
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {aboutPage.credentials.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-primary/80">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          {/* CV download — place your CV file at /public/Niall_Awogboro_CV.pdf */}
          <a
            href={aboutPage.cv.href}
            download
            className="group relative mt-12 inline-flex items-center gap-3 overflow-hidden border border-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-accent transition-transform duration-100 active:scale-[0.97]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out-strong group-hover:scale-x-100"
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

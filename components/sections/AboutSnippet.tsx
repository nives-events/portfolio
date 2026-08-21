import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/lib/content";

export function AboutSnippet() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 bg-surface">
      <div className="container-page grid gap-10 py-24 md:grid-cols-12">
        <h2 id="about-heading" className="sr-only">
          About Niall
        </h2>

        <Reveal className="md:col-span-7">
          <div className="max-w-prose space-y-4 text-lg leading-relaxed text-primary/85">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={about.link.href}
            className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {about.link.label}
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal delay={120} className="md:col-span-5 md:pl-8">
          <ul className="space-y-3 border-l border-border pl-6 text-sm text-muted">
            {about.credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

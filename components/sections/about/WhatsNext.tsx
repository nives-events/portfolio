import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

export function WhatsNext() {
  return (
    <section aria-labelledby="about-next-heading" className="container-page py-24">
      <Reveal>
        <h2
          id="about-next-heading"
          className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          What&apos;s next
        </h2>
      </Reveal>

      <ol className="mt-10 grid gap-6 sm:grid-cols-3">
        {aboutPage.whatsNext.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 80} className="list-none">
            <Link
              href={item.href}
              className="group flex h-full flex-col gap-4 border-[0.5px] border-border bg-surface p-6 transition-all duration-200 ease-out-strong hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_32px_rgba(96,165,250,0.08)] active:scale-[0.98]"
            >
              <span aria-hidden="true" className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-bold text-primary transition-colors duration-200 group-hover:text-accent">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              <span
                aria-hidden="true"
                className="mt-auto text-lg text-accent transition-transform duration-200 ease-out-strong group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

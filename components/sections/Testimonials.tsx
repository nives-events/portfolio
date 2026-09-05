"use client";

import { Reveal } from "@/components/motion/Reveal";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-bg py-24">
      <div className="container-page">
        <Reveal>
          <p className="kicker">Kind words</p>
          <h2
            id="testimonials-heading"
            className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
          >
            Testimonials
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <blockquote className="flex h-full flex-col rounded-xl border border-border bg-surface p-8">
                <svg
                  className="mb-5 h-8 w-8 shrink-0 text-primary/15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>
                <p className="flex-1 text-lg leading-relaxed text-primary/80">
                  {item.quote}
                </p>
                {item.author && (
                  <footer className="mt-6 border-t border-border pt-4">
                    <cite className="not-italic">
                      <span className="font-medium text-primary">
                        {item.author}
                      </span>
                      {item.role && (
                        <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.18em] text-primary/50">
                          {item.role}
                        </span>
                      )}
                    </cite>
                  </footer>
                )}
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

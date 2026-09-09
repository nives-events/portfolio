"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  stars?: number;
};

const CTA_SLIDE = {
  quote: "",
  author: "",
  role: "",
  stars: 5,
  isCta: true,
} as const;

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-current text-primary"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type SlideItem = Testimonial & { isCta?: boolean };

export function Testimonials({ items }: { items: Testimonial[] }) {
  const allSlides: SlideItem[] = [...items, CTA_SLIDE];
  const total = allSlides.length;

  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActive(((idx % total) + total) % total);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning, total],
  );

  const advance = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    if (pausedRef.current) return;
    timerRef.current = setTimeout(advance, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, advance]);

  const prevIdx = ((active - 1) % total + total) % total;
  const nextIdx = (active + 1) % total;

  function getTransform(i: number) {
    if (i === active)
      return { x: "-50%", scale: 1, opacity: 1, z: 20 };
    if (i === prevIdx)
      return { x: "calc(-50% - 60%)", scale: 0.8, opacity: 0.35, z: 10 };
    if (i === nextIdx)
      return { x: "calc(-50% + 60%)", scale: 0.8, opacity: 0.35, z: 10 };
    return { x: "calc(-50% + 120%)", scale: 0.6, opacity: 0, z: 0 };
  }

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

        <div
          className="relative mt-16 overflow-hidden"
          style={{ height: "380px" }}
          onMouseEnter={() => {
            pausedRef.current = true;
            if (timerRef.current) clearTimeout(timerRef.current);
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
            timerRef.current = setTimeout(advance, 3000);
          }}
        >
          {allSlides.map((slide, i) => {
            const t = getTransform(i);
            const visible = i === active || i === prevIdx || i === nextIdx;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-[88%] max-w-2xl"
                style={{
                  transform: `translateX(${t.x}) translateY(-50%) scale(${t.scale})`,
                  opacity: t.opacity,
                  zIndex: t.z,
                  transition:
                    "transform 600ms cubic-bezier(0.23, 1, 0.32, 1), opacity 600ms cubic-bezier(0.23, 1, 0.32, 1)",
                  pointerEvents: i === active ? "auto" : "none",
                  willChange: visible ? "transform, opacity" : undefined,
                }}
                aria-hidden={i !== active}
              >
                <blockquote className="flex flex-col items-center rounded-xl border border-border bg-surface px-6 py-10 text-center sm:px-10 sm:py-12">
                  <Stars count={slide.stars ?? 5} />

                  {slide.isCta ? (
                    <p className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-primary sm:text-3xl">
                      Why not you?
                    </p>
                  ) : (
                    <p className="mt-8 text-lg leading-relaxed text-primary/80 sm:text-xl">
                      &ldquo;{slide.quote}&rdquo;
                    </p>
                  )}

                  {slide.author ? (
                    <footer className="mt-8">
                      <cite className="not-italic">
                        <span className="block font-medium text-primary">
                          {slide.author}
                        </span>
                        {slide.role && (
                          <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.18em] text-primary/50">
                            {slide.role}
                          </span>
                        )}
                      </cite>
                    </footer>
                  ) : slide.isCta ? (
                    <footer className="mt-6">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary/50">
                        Your testimonial could be here
                      </span>
                    </footer>
                  ) : null}
                </blockquote>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {allSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-primary"
                  : "w-2 bg-primary/25 hover:bg-primary/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

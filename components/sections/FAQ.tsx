"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

type FAQItem = {
  question: string;
  answer: string;
};

function Accordion({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 80}>
      <div className="border-b border-border">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors"
          aria-expanded={open}
        >
          <span className="text-lg font-medium text-primary">
            {item.question}
          </span>
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center text-primary/50 transition-transform duration-200"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
            aria-hidden="true"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 3v12M3 9h12" />
            </svg>
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-base leading-relaxed text-primary/70">
                {item.answer}
              </p>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section aria-labelledby="faq-heading" className="bg-surface py-24">
      <div className="container-page">
        <Reveal>
          <p className="kicker">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-3 max-w-prose text-base leading-relaxed text-primary/80">
            The questions I get asked most about working together.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl">
          {items.map((item, i) => (
            <Accordion key={item.question} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

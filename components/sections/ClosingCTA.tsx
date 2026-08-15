import { Reveal } from "@/components/motion/Reveal";
import { closing } from "@/lib/content";

export function ClosingCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="closing-heading"
      className="scroll-mt-24 border-t border-border"
    >
      <div className="container-page py-32 text-center">
        <Reveal>
          <h2
            id="closing-heading"
            className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            {closing.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            {closing.body}
          </p>
          {/* CV download — place your CV file at /public/Niall_Awogboro_CV.pdf */}
          <a
            href="/Niall_Awogboro_CV.pdf"
            download
            className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden border border-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-accent transition-transform duration-100 active:scale-[0.97]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out-strong group-hover:scale-x-100"
            />
            <span className="relative transition-colors duration-200 group-hover:text-bg">
              Download my CV
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

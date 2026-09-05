import { Reveal } from "@/components/motion/Reveal";

export function CaseWhatILearned({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section aria-labelledby="what-i-learned" className="bg-surface">
      <div className="container-page grid gap-8 py-20 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-4">
          <Reveal className="md:sticky md:top-28">
            <p className="font-mono text-sm text-primary">Reflection</p>
            <h2
              id="what-i-learned"
              className="mt-4 font-display text-2xl font-bold leading-tight text-primary sm:text-3xl"
            >
              What I learned
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal delay={100} className="max-w-prose space-y-5 text-lg leading-relaxed text-primary/85">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

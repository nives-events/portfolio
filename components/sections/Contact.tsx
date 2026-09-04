"use client";

import { usePathname, useRouter } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { homepage } from "@/lib/content";

const btn =
  "group relative inline-flex min-h-[44px] items-center justify-center overflow-hidden rounded-lg border border-primary px-8 py-3 text-sm font-medium uppercase tracking-widest text-primary transition-transform duration-100 active:scale-[0.97]";

const fill =
  "absolute inset-0 origin-left scale-x-0 rounded-lg bg-primary transition-transform duration-200 ease-out-strong group-hover:scale-x-100";

export function Contact() {
  const { kicker, heading, emailCta, randomRoutes } = homepage.contact;
  const router = useRouter();
  const pathname = usePathname();

  const goRandom = () => {
    // Never land on the page you're already on, so it doesn't feel broken.
    const pool = randomRoutes.filter((route) => route !== pathname);
    const routes = pool.length > 0 ? pool : randomRoutes;
    const next = routes[Math.floor(Math.random() * routes.length)] ?? "/work";
    router.push(next);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
      <div className="container-page py-28">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="kicker">{kicker}</p>
          <h2
            id="contact-heading"
            className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-tight text-primary sm:text-5xl lg:text-6xl"
          >
            {heading}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={emailCta.href} aria-label="Email Niall" className={btn}>
              <span aria-hidden="true" className={fill} />
              <span className="relative transition-colors duration-200 group-hover:text-bg">
                {emailCta.label}
              </span>
            </a>

            <button type="button" onClick={goRandom} className={btn}>
              <span aria-hidden="true" className={fill} />
              <span className="relative transition-colors duration-200 group-hover:text-bg">
                Random
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

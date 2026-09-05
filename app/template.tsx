"use client";

import { m } from "framer-motion";

let initialLoad = true;

export default function Template({ children }: { children: React.ReactNode }) {
  const skip = initialLoad;
  initialLoad = false;

  return (
    <m.div
      initial={skip ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}

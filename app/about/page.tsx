import type { Metadata } from "next";
import { AwayFromDesk } from "@/components/sections/about/AwayFromDesk";
import { ClosingCTA } from "@/components/sections/about/ClosingCTA";
import { Credentials } from "@/components/sections/about/Credentials";
import { Education } from "@/components/sections/about/Education";
import { Experience } from "@/components/sections/about/Experience";
import { Hero } from "@/components/sections/about/Hero";
import { HowIWork } from "@/components/sections/about/HowIWork";
import { Intro } from "@/components/sections/about/Intro";
import { TechStack } from "@/components/sections/about/TechStack";
import { openGraphFor } from "@/lib/seo";

const description =
  "A commercially minded marketer combining strategy, creative execution and digital growth across B2B and B2C: solo marketing lead at a MedTech company, and founder of a consumer sports brand.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: openGraphFor({ title: "About Niall Awogboro", description, path: "/about" }),
  twitter: { title: "About Niall Awogboro", description, images: ["/og.png"] },
};

/**
 * Page order follows the September 2026 revision document exactly:
 * Meet Niall, who I am, away from the desktop, tech stack, how I work,
 * experience, credentials, (compact) education, let's talk.
 */
export default function AboutPage() {
  return (
    <>
      <Hero />
      <Intro />
      <AwayFromDesk />
      <TechStack />
      <HowIWork />
      <Experience />
      <Credentials />
      <Education />
      <ClosingCTA />
    </>
  );
}

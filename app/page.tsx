import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeWork } from "@/components/sections/HomeWork";
import { KeyStats } from "@/components/sections/KeyStats";
import { TechStack } from "@/components/sections/about/TechStack";
import { faqItems } from "@/lib/content";

/**
 * Homepage order per the September 2026 revision: hero, Act I (positioning),
 * Act II (key achievements), Act III (selected work), tech stack, FAQ,
 * contact. "Away from the desktop" moved to the About page.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <KeyStats />
      <HomeWork />
      <TechStack id="home-tech-stack" />
      <FAQ items={faqItems} />
      <Contact />
    </>
  );
}

import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeWork } from "@/components/sections/HomeWork";
import { Interests } from "@/components/sections/Interests";
import { KeyStats } from "@/components/sections/KeyStats";
import { Testimonials } from "@/components/sections/Testimonials";
import { faqItems, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <KeyStats />
      <Interests />
      <HomeWork />
      <Testimonials items={testimonials} />
      <FAQ items={faqItems} />
      <Contact />
    </>
  );
}

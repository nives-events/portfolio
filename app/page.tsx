import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { AthlonesFinestBlock } from "@/components/sections/AthlonesFinestBlock";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Disciplines } from "@/components/sections/Disciplines";
import { FeelTectBlock } from "@/components/sections/FeelTectBlock";
import { Hero } from "@/components/sections/Hero";
import { StrategyBlock } from "@/components/sections/StrategyBlock";
import { WhatsNext } from "@/components/sections/WhatsNext";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Disciplines />
      <FeelTectBlock />
      <AthlonesFinestBlock />
      <StrategyBlock />
      <AboutSnippet />
      <WhatsNext />
      <ClosingCTA />
    </>
  );
}

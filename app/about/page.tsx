import type { Metadata } from "next";
import { Credentials } from "@/components/sections/about/Credentials";
import { Education } from "@/components/sections/about/Education";
import { Experience } from "@/components/sections/about/Experience";
import { HowIWork } from "@/components/sections/about/HowIWork";
import { Opening } from "@/components/sections/about/Opening";
import { OutsideWork } from "@/components/sections/about/OutsideWork";
import { Panels } from "@/components/sections/about/Panels";
import { Toolkit } from "@/components/sections/about/Toolkit";
import { WhatsNext } from "@/components/sections/about/WhatsNext";
import { openGraphFor } from "@/lib/seo";

const description =
  "Marketing across brand, product marketing, growth, content and events. Nine months on a MedTech marketing team, and the founder of a consumer sports brand with sponsors, suppliers and a paid media budget.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: openGraphFor({ title: "About Niall Awogboro", description, path: "/about" }),
  twitter: { title: "About Niall Awogboro", description, images: ["/og.png"] },
};

export default function AboutPage() {
  return (
    <>
      <Opening />
      <Panels />
      <HowIWork />
      <Experience />
      <Toolkit />
      <Education />
      <OutsideWork />
      <Credentials />
      <WhatsNext />
    </>
  );
}

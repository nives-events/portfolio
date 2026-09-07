import type { Metadata } from "next";
import { TechStack } from "@/components/sections/about/TechStack";
import { CaseStudiesGrid } from "@/components/sections/work/CaseStudiesGrid";
import { Closing } from "@/components/sections/work/Closing";
import { Craft } from "@/components/sections/work/Craft";
import { Opening } from "@/components/sections/work/Opening";
import { openGraphFor } from "@/lib/seo";

const description =
  "Six case studies: solo marketing lead at a MedTech company, a website rebuilt for first commercial markets, an international conference campaign, four years of a consumer sports brand with 467% ROAS, and two applied strategy projects.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: openGraphFor({ title: "Work · Niall Awogboro", description, path: "/work" }),
  twitter: { title: "Work · Niall Awogboro", description, images: ["/og.png"] },
};

export default function WorkPage() {
  return (
    <>
      <Opening />
      <TechStack id="work-tech-stack" />
      <CaseStudiesGrid />
      <Craft />
      <Closing />
    </>
  );
}

import type { Metadata } from "next";
import { CaseStudiesGrid } from "@/components/sections/work/CaseStudiesGrid";
import { Closing } from "@/components/sections/work/Closing";
import { Craft } from "@/components/sections/work/Craft";
import { Opening } from "@/components/sections/work/Opening";
import { openGraphFor } from "@/lib/seo";

const description =
  "Ten case studies: a marketing strategy for a MedTech business, 467% ROAS on paid social, four years of a consumer sports brand, an international conference, a website rebuild, a video series, and a GA4 conversion analysis.";

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
      <CaseStudiesGrid />
      <Craft />
      <Closing />
    </>
  );
}

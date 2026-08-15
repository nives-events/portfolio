import type { Metadata } from "next";
import { CaseStudiesGrid } from "@/components/sections/work/CaseStudiesGrid";
import { Closing } from "@/components/sections/work/Closing";
import { Craft } from "@/components/sections/work/Craft";
import { Opening } from "@/components/sections/work/Opening";
import { openGraphFor } from "@/lib/seo";

const description =
  "Seven case studies: a go-to-market strategy adopted by a MedTech business, 467% ROAS on paid social, an international conference in Vienna, a website rebuild, live event delivery, and a GA4 conversion analysis.";

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

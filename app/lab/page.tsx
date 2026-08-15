import type { Metadata } from "next";
import { Opening } from "@/components/sections/lab/Opening";
import { ProjectsGrid } from "@/components/sections/lab/ProjectsGrid";
import { openGraphFor } from "@/lib/seo";

const description =
  "Personal projects outside of work: website designs and production experiments, including athlonesfinest.com and an AI video pipeline that ran in a live Meta campaign.";

export const metadata: Metadata = {
  title: "Lab",
  description,
  alternates: { canonical: "/lab" },
  openGraph: openGraphFor({ title: "Lab · Niall Awogboro", description, path: "/lab" }),
  twitter: { title: "Lab · Niall Awogboro", description, images: ["/og.png"] },
};

export default function LabPage() {
  return (
    <>
      <Opening />
      <ProjectsGrid />
    </>
  );
}

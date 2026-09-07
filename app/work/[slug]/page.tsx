import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseAtAGlance } from "@/components/case-study/CaseAtAGlance";
import { CaseHero } from "@/components/case-study/CaseHero";
import { CaseResults } from "@/components/case-study/CaseResults";
import { CaseSectionBlock } from "@/components/case-study/CaseSectionBlock";
import { CaseWhatILearned } from "@/components/case-study/CaseWhatILearned";
import { CaseWhatsNext } from "@/components/case-study/CaseWhatsNext";
import { TechStack } from "@/components/sections/about/TechStack";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { openGraphFor } from "@/lib/seo";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.intro,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: openGraphFor({
      title: study.title,
      description: study.intro,
      path: `/work/${study.slug}`,
      type: "article",
    }),
    twitter: { title: study.title, description: study.intro, images: ["/og.png"] },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const next = getCaseStudy(study.nextSlug);

  return (
    <>
      <CaseHero study={study} />
      {study.atAGlance ? <CaseAtAGlance data={study.atAGlance} /> : null}
      <TechStack id={`case-${study.slug}-tech`} />
      {study.sections.map((section, index) => (
        <CaseSectionBlock key={section.kicker} section={section} banded={index % 2 === 0} />
      ))}
      <CaseResults study={study} />
      {study.whatILearned ? <CaseWhatILearned paragraphs={study.whatILearned} /> : null}
      <CaseWhatsNext next={next} />
    </>
  );
}

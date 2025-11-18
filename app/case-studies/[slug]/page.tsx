import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import CoverSection from "@/components/case-study/CoverSection";
import IntroductionSection from "@/components/case-study/IntroductionSection";
import ProblemSection from "@/components/case-study/ProblemSection";
import InsightsSection from "@/components/case-study/InsightsSection";
import ApproachesSection from "@/components/case-study/ApproachesSection";
import WireframesSection from "@/components/case-study/WireframesSection";
import FinalProductSection from "@/components/case-study/FinalProductSection";
import EcosystemSection from "@/components/case-study/EcosystemSection";
import CustomSection from "@/components/case-study/CustomSection";
import ProgressBar from "@/components/case-study/ProgressBar";
import BackToTop from "@/components/case-study/BackToTop";
import CaseStudyNavbar from "@/components/case-study/CaseStudyNavbar";
import Footer from "@/components/Footer";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

function renderSection(section: any, index: number, slug: string) {
  switch (section.type) {
    case "introduction":
      return <IntroductionSection key={index} section={section} />;
    case "problem":
      return <ProblemSection key={index} section={section} caseStudySlug={slug} />;
    case "insights":
      return <InsightsSection key={index} section={section} />;
    case "approaches":
      return <ApproachesSection key={index} section={section} />;
    case "wireframes":
      return (
        <WireframesSection key={index} section={section} sectionIndex={index} />
      );
    case "final-product":
      return <FinalProductSection key={index} section={section} />;
    case "ecosystem":
      return <EcosystemSection key={index} section={section} />;
    case "custom":
      return <CustomSection key={index} section={section} />;
    default:
      return null;
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const hasRichContent = caseStudy.sections && caseStudy.sections.length > 0;
  const sectionsForProgress = caseStudy.sections
    ? caseStudy.sections.map((s, i) => ({ id: `section-${i}`, title: s.title }))
    : [];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navbar */}
      <CaseStudyNavbar />
      {/* Progress Bar */}
      {hasRichContent && sectionsForProgress.length > 0 && (
        <ProgressBar sections={sectionsForProgress} />
      )}

      {/* Back to Top */}
      <BackToTop />

      {/* Cover Section */}
      {caseStudy.coverImage && caseStudy.tagline && (
        <CoverSection
          tagline={caseStudy.tagline}
          coverImage={caseStudy.coverImage}
        />
      )}

      {/* Header - only show if no cover */}
      {(!caseStudy.coverImage || !caseStudy.tagline) && (
        <div className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {caseStudy.category}
              </span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{caseStudy.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-600">{caseStudy.description}</p>
          </div>
        </div>
      )}

      {/* Hero Image - only if no cover section */}
      {caseStudy.image &&
        (!caseStudy.coverImage || !caseStudy.tagline) &&
        !hasRichContent && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

      {/* Rich Content Sections */}
      {hasRichContent ? (
        <>
          {/* Render all sections */}
          {caseStudy.sections!.map((section, index) => (
            <div key={index} id={`section-${index}`}>
              {renderSection(section, index, caseStudy.slug)}
              {index < caseStudy.sections!.length - 1 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <hr className="my-8 sm:my-20 border-black/15" />
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        /* Simple Content - backward compatibility */
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.content.overview}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Challenge
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.content.challenge}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Solution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.content.solution}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.content.results}
              </p>
            </section>

            {caseStudy.content.technologies &&
              caseStudy.content.technologies.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.content.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 pt-8">
        <Footer />
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";

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

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Case Studies
          </Link>
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

      {/* Hero Image */}
      {caseStudy.image && (
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

      {/* Content */}
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

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}


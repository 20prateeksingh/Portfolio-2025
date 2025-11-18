import { CaseStudySection } from "@/lib/case-studies";
import ImageComparison from "./ImageComparison";

interface EcosystemSectionProps {
  section: CaseStudySection;
}

export default function EcosystemSection({
  section,
}: EcosystemSectionProps) {
  return (
    <section className="py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif mb-8 sticky top-[122px] sm:top-[130px] lg:top-[154px]">
              {section.title}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base leading-[180%] mb-6 lg:mb-10">{section.content}</p>

            {section.comparisons &&
              section.comparisons.map((comparison, index) => (
                <div key={index} className="mb-6 lg:mb-10">
                  <ImageComparison
                    before={comparison.before}
                    after={comparison.after}
                    caption={comparison.caption}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}


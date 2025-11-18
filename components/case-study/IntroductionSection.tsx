import { CaseStudySection } from "@/lib/case-studies";

interface IntroductionSectionProps {
  section: CaseStudySection;
}

export default function IntroductionSection({
  section,
}: IntroductionSectionProps) {
  const { content, metadata } = section;

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
            <div className="mb-6">
              <p className="text-lg font-semibold mb-3">Context</p>
              <p className="text-base leading-[180%] mb-4">{content}</p>
            </div>

            {metadata && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {metadata.role && (
                  <div>
                    <p className="font-semibold mb-2">Role</p>
                    <p className="text-base leading-[180%]">{metadata.role}</p>
                  </div>
                )}
                {metadata.team && (
                  <div>
                    <p className="font-semibold mb-2">Team</p>
                    <p className="text-base leading-[180%]">{metadata.team}</p>
                  </div>
                )}
                {metadata.duration && (
                  <div>
                    <p className="font-semibold mb-2">Duration</p>
                    <p className="text-base leading-[180%]">
                      {metadata.duration}
                    </p>
                  </div>
                )}
              </div>
            )}

            <hr className="my-6 lg:my-10 border-black/15" />

            {metadata?.impact && metadata.impact.length > 0 && (
              <div>
                <p className="text-lg font-semibold mb-4">Impact</p>
                <ul className="space-y-2 list-disc ml-6">
                  {metadata.impact.map((impact, index) => {
                    // Convert bold spans to styled spans
                    const formattedText = impact
                      .replace(
                        /<span class="bold">(.*?)<\/span>/g,
                        '<span class="font-bold bg-[#CFFFB0]">$1</span>'
                      )
                      .replace(
                        /<span class="bold">(.*?)<\/span>/g,
                        '<span class="font-bold bg-[#CFFFB0]">$1</span>'
                      );
                    return (
                      <li
                        key={index}
                        className="text-base leading-[180%]"
                        dangerouslySetInnerHTML={{ __html: formattedText }}
                      />
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


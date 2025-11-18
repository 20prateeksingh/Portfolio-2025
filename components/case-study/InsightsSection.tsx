import { CaseStudySection } from "@/lib/case-studies";
import FormattedContent from "./FormattedContent";
import Image from "next/image";

interface InsightsSectionProps {
  section: CaseStudySection;
}

// Map of which fields should be lighter for each item
const lighterFieldMap: Record<string, number[]> = {
  "Partner Details": [2, 3], // Email, description
  "Invoice Particulars": [3, 4], // Due date, Description
  "Invoice Item": [3, 4, 5], // SAC Code, Discount, Taxes
  "Payment Info": [], // None are lighter
  "Branding": [2], // Font
  "User Details": [4, 5], // GST, Website
};

export default function InsightsSection({ section }: InsightsSectionProps) {
  // Special layout for "The maths" section
  const isMathsSection = section.title === "The maths";

  if (isMathsSection) {
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
              {/* Introduction content */}
              <div className="mb-6 lg:mb-10">
                <FormattedContent content={section.content} />
              </div>

              {/* Main diagram image */}
              {section.images && section.images.length > 0 && (
                <div className="mb-6 lg:mb-10 h-[200px] sm:h-[280px] lg:h-[344px] relative w-full">
                  <Image
                    src={section.images[0]}
                    alt="Fee calculation diagram"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    unoptimized
                  />
                </div>
              )}

              {/* Divider */}
              <hr className="my-6 lg:my-10 border-black/15" />

              {/* Calculating Payout Fee section */}
              <div className="mb-6 lg:mb-10">
                <h3 className="text-base font-bold mb-1">Calculating Payout Fee</h3>
                <p className="text-base leading-[200%] mb-6 lg:mb-10">
                  Payout fee can be charged in multiple different configurations
                  based on how we calculate it:
                </p>

                {/* Fee type items with images */}
                {section.items && section.items.length > 0 && (
                  <div className="space-y-6 lg:space-y-10">
                    {section.items.map((item, index) => (
                      <div key={index}>
                        <div className="flex flex-col lg:flex-row gap-6 items-start">
                          {/* Text on left */}
                          <div className="flex-1 space-y-2.5">
                            <h4 className="text-base font-bold">{item.title}</h4>
                            {item.fields.map((field, fieldIndex) => (
                              <p
                                key={fieldIndex}
                                className="text-base leading-[200%]"
                              >
                                {field}
                              </p>
                            ))}
                          </div>
                          {/* Image on right */}
                          {item.image && (
                          <div className="w-full lg:flex-1 relative">
                            {index === 0 && (
                              <div className="h-[150px] sm:h-[180px] lg:h-[213px] relative w-full">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-contain object-center"
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                                  unoptimized
                                />
                              </div>
                            )}
                            {index === 1 && (
                              <div className="h-[180px] sm:h-[220px] lg:h-[255px] relative w-full">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-contain object-center"
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                                  unoptimized
                                />
                              </div>
                            )}
                            {index === 2 && (
                              <div className="h-[170px] sm:h-[210px] lg:h-[242px] relative w-full">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-contain object-center"
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                                  unoptimized
                                />
                              </div>
                            )}
                          </div>
                          )}
                        </div>
                        {/* Divider line between sections */}
                        {section.items && index < section.items.length - 1 && (
                          <hr className="mt-6 lg:mt-10 border-black/15" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Original layout for other insights sections
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
            <FormattedContent content={section.content} />

            {section.items && section.items.length > 0 && (
              <div className="masonry-container">
                {section.items.map((item, index) => {
                  const lighterFields = lighterFieldMap[item.title] || [];
                  // Payment Info doesn't use 2-column layout
                  const useTwoColumns = item.title !== "Payment Info";
                  return (
                    <div
                      key={index}
                      className="bg-[#fefefe] p-8 rounded-2xl shadow-[0px_5px_7px_#cdcdcd20] brick"
                    >
                      <div className="mb-3">
                        <h3 className="text-xl font-serif">{item.title}</h3>
                      </div>
                      <div className="brick-body">
                        {useTwoColumns ? (
                          <div className="grid grid-cols-2 lg:grid-cols-1 gap-0">
                            {item.fields.map((field, fieldIndex) => {
                              const isLighter = lighterFields.includes(fieldIndex);
                              return (
                                <div
                                  key={fieldIndex}
                                  className={`text-base leading-[180%] ${
                                    isLighter ? "lighter" : ""
                                  }`}
                                >
                                  {field}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="space-y-0">
                            {item.fields.map((field, fieldIndex) => (
                              <div
                                key={fieldIndex}
                                className="text-base leading-[180%]"
                              >
                                {field}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


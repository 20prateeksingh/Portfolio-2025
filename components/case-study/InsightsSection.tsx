import { CaseStudySection } from "@/lib/case-studies";

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
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif mb-8 sticky top-[100px]">
              {section.title}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base leading-[180%] mb-6">{section.content}</p>

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
                          <div className="grid grid-cols-2 gap-0">
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


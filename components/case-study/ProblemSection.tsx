"use client";

import { useState } from "react";
import Image from "next/image";
import { CaseStudySection } from "@/lib/case-studies";
import ImageModal from "./ImageModal";
import FormattedContent from "./FormattedContent";

interface ProblemSectionProps {
  section: CaseStudySection;
  caseStudySlug?: string;
}

export default function ProblemSection({ section, caseStudySlug }: ProblemSectionProps) {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
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

              {section.images && section.images.length > 0 && (
                <div className="space-y-6 lg:space-y-10">
                  {section.images.map((image, index) => {
                    // Use full-width auto-height for invoicing case study
                    const isInvoicing = caseStudySlug === "invoicing";
                    
                    if (isInvoicing) {
                      return (
                        <div
                          key={index}
                          className="w-full cursor-pointer"
                          onClick={() =>
                            setModalImage({
                              src: image,
                              alt: `${section.title} image ${index + 1}`,
                            })
                          }
                        >
                          <Image
                            src={image}
                            alt={`${section.title} image ${index + 1}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                            unoptimized
                          />
                        </div>
                      );
                    }
                    
                    // Default rendering for other case studies
                    return (
                      <div
                        key={index}
                        className="h-[200px] sm:h-[280px] md:aspect-[1914/694] md:h-auto relative w-full"
                      >
                        <Image
                          src={image}
                          alt={`${section.title} image ${index + 1}`}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                          onClick={() =>
                            setModalImage({
                              src: image,
                              alt: `${section.title} image ${index + 1}`,
                            })
                          }
                          unoptimized
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ""}
        alt={modalImage?.alt || ""}
      />
    </>
  );
}


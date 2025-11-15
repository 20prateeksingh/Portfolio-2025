"use client";

import { useState } from "react";
import Image from "next/image";
import { CaseStudySection } from "@/lib/case-studies";
import ImageModal from "./ImageModal";

interface ProblemSectionProps {
  section: CaseStudySection;
}

export default function ProblemSection({ section }: ProblemSectionProps) {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
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

              {section.images && section.images.length > 0 && (
                <div className="space-y-6">
                  {section.images.map((image, index) => (
                    <div key={index}>
                      <Image
                        src={image}
                        alt={`${section.title} image ${index + 1}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-lg shadow-[0px_5px_7px_0px_rgba(205,205,205,0.20)] cursor-zoom-in hover:opacity-90 transition-opacity"
                        onClick={() =>
                          setModalImage({
                            src: image,
                            alt: `${section.title} image ${index + 1}`,
                          })
                        }
                        unoptimized
                      />
                      {index === section.images!.length - 1 && (
                        <div className="text-xs leading-[150%] text-center mt-3">
                          Sample of invoices that we went through to understand
                          what really makes an invoice
                        </div>
                      )}
                    </div>
                  ))}
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


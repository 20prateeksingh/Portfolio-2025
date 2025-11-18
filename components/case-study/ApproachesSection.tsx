"use client";

import { useState } from "react";
import Image from "next/image";
import { CaseStudySection } from "@/lib/case-studies";
import ImageModal from "./ImageModal";

interface ApproachesSectionProps {
  section: CaseStudySection;
}

export default function ApproachesSection({
  section,
}: ApproachesSectionProps) {
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
              <p className="text-base leading-[180%] mb-6 lg:mb-10">{section.content}</p>

              {section.approaches &&
                section.approaches.map((approach, index) => (
                  <div key={index} className="mb-6 lg:mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                      <div className="lg:col-span-9">
                        <Image
                          src={approach.image}
                          alt={approach.title}
                          width={1200}
                          height={800}
                          className="w-full h-auto rounded-lg shadow-[0px_5px_7px_0px_rgba(205,205,205,0.20)] cursor-zoom-in hover:opacity-90 transition-opacity"
                          onClick={() =>
                            setModalImage({
                              src: approach.image,
                              alt: approach.title,
                            })
                          }
                          unoptimized
                        />
                      </div>
                      <div className="lg:col-span-3">
                        <div className="text-xs leading-[150%]">
                          <p className="font-semibold mb-2">{approach.title}</p>
                          <p>{approach.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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


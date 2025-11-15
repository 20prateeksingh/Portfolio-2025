"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CaseStudySection } from "@/lib/case-studies";
import ImageModal from "./ImageModal";

interface WireframesSectionProps {
  section: CaseStudySection;
  sectionIndex: number;
}

export default function WireframesSection({
  section,
  sectionIndex,
}: WireframesSectionProps) {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [opacities, setOpacities] = useState<number[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!section.steps) return;

    const initialOpacities = section.steps.map(() => 1);
    setOpacities(initialOpacities);

    const handleScroll = () => {
      const newOpacities = section.steps!.map((_, index) => {
        const current = imageRefs.current[index];
        const next = imageRefs.current[index + 1];

        if (!current || !next) return 1;

        const currentRect = current.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();

        const currentHeight = currentRect.height;
        const overlap = currentRect.bottom - nextRect.top;

        if (overlap >= 0.1 * currentHeight && overlap <= currentHeight) {
          const overlapRatio = overlap / currentHeight;
          const fadeRatio = 1 - (overlapRatio - 0.1) / 0.9;
          return Math.max(0, Math.min(1, fadeRatio));
        } else if (overlap > currentHeight) {
          return 0;
        }
        return 1;
      });

      setOpacities(newOpacities);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [section.steps]);

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
              {section.steps &&
                section.steps.map((step, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                    className="sticky top-[100px] bg-[#FAFAFA] pb-5 mb-5 transition-opacity duration-600"
                    style={{ opacity: opacities[index] ?? 1 }}
                  >
                    <Image
                      src={step.image}
                      alt={step.caption}
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-lg shadow-[0px_5px_7px_0px_rgba(205,205,205,0.20)] mb-3 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={() =>
                        setModalImage({
                          src: step.image,
                          alt: step.caption,
                        })
                      }
                      unoptimized
                    />
                    <div className="text-xs leading-[150%]">
                      <strong>{step.caption}</strong>
                    </div>
                    {index < section.steps!.length - 1 && (
                      <hr className="my-8 border-black/30" />
                    )}
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


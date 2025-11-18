"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { CaseStudySection } from "@/lib/case-studies";
import ImageModal from "./ImageModal";

interface WireframesSectionProps {
  section: CaseStudySection;
  sectionIndex: number;
}

interface Subsection {
  title: string;
  description: string;
  images: Array<{ image: string; caption: string }>;
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
  const [imageStickyTops, setImageStickyTops] = useState<Record<number, string>>({});
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Parse content into subsections - memoized to prevent infinite loops
  const subsections = useMemo((): Subsection[] => {
    if (!section.steps) return [];

    // If no content, show images without text block
    if (!section.content || section.content.trim() === "") {
      return [
        {
          title: "",
          description: "",
          images: section.steps.map((step) => ({
            image: step.image,
            caption: step.caption,
          })),
        },
      ];
    }

    // Split content by double newlines to get subsections
    const parts = section.content.split("\n\n").filter((p) => p.trim());
    
    if (parts.length === 0) {
      // If content exists but no parts after splitting, treat as single subsection
      return [
        {
          title: "",
          description: section.content,
          images: section.steps.map((step) => ({
            image: step.image,
            caption: step.caption,
          })),
        },
      ];
    }

    // If only one part, treat as single subsection
    if (parts.length === 1) {
      const lines = parts[0].split("\n");
      const title = lines[0] || "";
      const description = lines.slice(1).join("\n") || "";
      
      return [
        {
          title,
          description,
          images: section.steps.map((step) => ({
            image: step.image,
            caption: step.caption,
          })),
        },
      ];
    }

    // Multiple subsections - need to distribute images
    const subsections: Subsection[] = [];
    let imageIndex = 0;
    const totalImages = section.steps.length;

    for (let i = 0; i < parts.length; i++) {
      const lines = parts[i].split("\n");
      const title = lines[0] || "";
      const description = lines.slice(1).join("\n") || "";

      // Determine how many images this subsection should have
      // For the last subsection, give it all remaining images
      let imageCount: number;
      if (i === parts.length - 1) {
        imageCount = totalImages - imageIndex;
      } else {
        // Smart distribution: check if there's a pattern in the content
        // For "Platform Earnings" sections, first gets 3, second gets 5 (out of 8)
        if (title.includes("Platform Earnings") && totalImages === 8 && parts.length === 2) {
          imageCount = i === 0 ? 3 : 5;
        } else if (title.includes("Editing fee for a Connected User") && description.includes("Multi-currency") && totalImages === 8 && parts.length === 2) {
          // For multi-currency wireframes: first subsection gets 4, second gets 4
          imageCount = 4;
        } else if (title.includes("Adding a new Fee pair") && totalImages === 8 && parts.length === 2) {
          // Second subsection of multi-currency wireframes gets 4
          imageCount = 4;
        } else if (totalImages === 10 && parts.length === 4) {
          // For FX AI Analyst wireframes: 1, 1, 3, 5 distribution
          // Check more specific titles first to avoid partial matches
          if (title.includes("Details of FX Market Trend")) {
            imageCount = 3;
          } else if (title.includes("Market Trend")) {
            imageCount = 1;
          } else if (title.includes("Payout Calculator")) {
            imageCount = 1;
          } else if (title.includes("Setting a Limit Order")) {
            imageCount = 5;
          } else {
            const remainingSubsections = parts.length - i;
            imageCount = Math.max(1, Math.floor((totalImages - imageIndex) / remainingSubsections));
          }
        } else {
          // Distribute images evenly, or use specific logic based on content
          const remainingSubsections = parts.length - i;
          imageCount = Math.max(1, Math.floor((totalImages - imageIndex) / remainingSubsections));
        }
      }

      const subsectionImages = section.steps
        .slice(imageIndex, imageIndex + imageCount)
        .map((step) => ({
          image: step.image,
          caption: step.caption,
        }));

      subsections.push({
        title,
        description,
        images: subsectionImages,
      });

      imageIndex += imageCount;
    }

    return subsections;
  }, [section.steps, section.content]);

  useEffect(() => {
    // Calculate image sticky position for each subsection based on text height + 24px gap
    const calculateImageStickyTop = (textIndex: number) => {
      const textRef = textRefs.current[textIndex];
      if (!textRef) return "";

      // Get the actual rendered height including padding
      const textHeight = textRef.offsetHeight;
      const gap = 24; // 24px gap

      const getBaseTop = () => {
        if (typeof window !== "undefined") {
          if (window.innerWidth >= 1024) return 154; // lg
          if (window.innerWidth >= 640) return 130; // sm
        }
        return 122; // mobile
      };

      const baseTop = getBaseTop();
      // Calculate: base sticky top + text height + 24px gap
      const calculatedTop = baseTop + textHeight + gap;
      return `${calculatedTop}px`;
    };

    // Recalculate all sticky positions for all subsections
    const recalculateAll = () => {
      const newStickyTops: Record<number, string> = {};
      
      subsections.forEach((subsection, index) => {
        // Only calculate if this subsection has text
        if (subsection.title || subsection.description) {
          const stickyTop = calculateImageStickyTop(index);
          if (stickyTop) {
            newStickyTops[index] = stickyTop;
          }
        }
      });
      
      setImageStickyTops(newStickyTops);
    };

    // Use multiple timeouts to ensure DOM is fully rendered
    const timeoutId1 = setTimeout(recalculateAll, 50);
    const timeoutId2 = setTimeout(recalculateAll, 200);
    const timeoutId3 = setTimeout(recalculateAll, 500);
    
    if (typeof window !== "undefined") {
      window.addEventListener("resize", recalculateAll);
      window.addEventListener("scroll", recalculateAll);
    }

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", recalculateAll);
        window.removeEventListener("scroll", recalculateAll);
      }
    };
  }, [subsections]);

  useEffect(() => {
    if (!section.steps) return;

    const allImages = subsections.flatMap((sub) => sub.images);
    const initialOpacities = allImages.map(() => 1);
    setOpacities(initialOpacities);

    const handleScroll = () => {
      const newOpacities = allImages.map((_, index) => {
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
  }, [section.steps, subsections]);

  if (subsections.length === 0) return null;

  let globalImageIndex = 0;

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
              <div className="flex flex-col gap-6 lg:gap-10">
                {subsections.map((subsection, subsectionIndex) => {
                  const isFirstSubsection = subsectionIndex === 0;
                  const isLastSubsection = subsectionIndex === subsections.length - 1;
                  
                  return (
                    <div key={subsectionIndex} className="flex flex-col">
                      {/* Text Block - only show if there's content */}
                      {(subsection.title || subsection.description) && (
                        <div
                          ref={(el) => {
                            textRefs.current[subsectionIndex] = el;
                          }}
                          className="sticky top-[122px] sm:top-[130px] lg:top-[154px] bg-[#FAFAFA] pb-6 lg:pb-10"
                        >
                          {subsection.title && (
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 leading-[2]">
                              {subsection.title}
                            </h3>
                          )}
                          {subsection.description && (
                            <>
                              {subsection.description.includes("•") ? (
                                <ul className="text-base leading-[180%] text-gray-700 list-disc list-inside space-y-1">
                                  {subsection.description
                                    .split(/•/)
                                    .filter((line) => line.trim())
                                    .map((line, idx) => (
                                      <li key={idx}>{line.trim()}</li>
                                    ))}
                                </ul>
                              ) : subsection.description.includes(" - ") ? (
                                <ul className="text-base leading-[180%] text-gray-700 list-disc list-inside space-y-1">
                                  {subsection.description
                                    .split(/ - /)
                                    .filter((line) => line.trim())
                                    .map((line, idx) => (
                                      <li key={idx}>{line.trim()}</li>
                                    ))}
                                </ul>
                              ) : (
                                <p className="text-base leading-[180%] text-gray-700">
                                  {subsection.description}
                                </p>
                              )}
                            </>
                          )}
                        </div>
                      )}

                      {/* Images */}
                      {subsection.images.map((imageData, imageIndex) => {
                        const currentGlobalIndex = globalImageIndex++;
                        return (
                          <div
                            key={currentGlobalIndex}
                            ref={(el) => {
                              imageRefs.current[currentGlobalIndex] = el;
                            }}
                            className={`sticky pb-5 mb-5 transition-opacity duration-600 ${
                              !subsection.title && !subsection.description
                                ? "top-[122px] sm:top-[130px] lg:top-[154px]"
                                : ""
                            }`}
                            style={{
                              opacity: opacities[currentGlobalIndex] ?? 1,
                              ...(subsection.title || subsection.description
                                ? { top: imageStickyTops[subsectionIndex] || "146px" }
                                : {}),
                            }}
                          >
                            <div className="bg-[#FAFAFA] pb-3">
                              <div className="bg-[rgba(0,0,0,0.2)] p-[8px] lg:p-3 rounded-[12px] lg:rounded-[20px] shadow-[0px_5px_7px_0px_rgba(205,205,205,0.2)]">
                                <div className="h-auto relative rounded-[4px] lg:rounded-[8px] w-full overflow-hidden">
                                  <Image
                                    src={imageData.image}
                                    alt={imageData.caption}
                                    width={2560}
                                    height={1600}
                                    className="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                                    onClick={() =>
                                      setModalImage({
                                        src: imageData.image,
                                        alt: imageData.caption,
                                      })
                                    }
                                    unoptimized
                                  />
                                </div>
                              </div>
                            </div>
                            {imageData.caption && (
                              <div className="bg-[#FAFAFA] text-xs leading-[150%]">
                                <strong>{imageData.caption}</strong>
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {/* Divider between subsections */}
                      {!isLastSubsection && (
                        <div className="h-px bg-gray-300 w-full my-6" />
                      )}
                    </div>
                  );
                })}
              </div>
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


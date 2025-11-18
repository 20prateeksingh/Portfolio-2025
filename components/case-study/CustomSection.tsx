"use client";

import React, { useEffect, useRef, useState } from "react";
import { CaseStudySection } from "@/lib/case-studies";
import FormattedContent from "./FormattedContent";

interface CustomSectionProps {
  section: CaseStudySection;
}

export default function CustomSection({ section }: CustomSectionProps) {
  // Special layouts for FX AI Analyst sections
  const isResearchApproach = section.title === "Research Approach";
  const isOpportunity = section.title === "Opportunity";
  const isImpactAndNextSteps = section.title === "Impact and Next Steps";

  // Research Approach Section - merged with User Stories and Information Architecture
  if (isResearchApproach) {
    const userStories = section.metadata?.userStories || [];
    const architectureTitle = section.metadata?.architectureTitle || "";
    const architectureDescription = section.metadata?.architectureDescription || "";
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif mb-8 sticky top-[122px] sm:top-[130px] lg:top-[154px]">
              {section.title}
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-10">
            {/* Research approach intro text */}
            {section.content && (
              <FormattedContent
                content={section.content}
                className="text-gray-700 text-base leading-[2]"
              />
            )}
            
            {/* User Stories - bordered box */}
            {userStories.length > 0 && (
              <div className="border border-black/20 rounded-[24px] px-0 py-8 flex flex-col gap-6 items-center">
                <p className="text-lg font-semibold text-center px-6">{userStories[0]}</p>
                {userStories.slice(1).map((story, idx) => (
                  <React.Fragment key={idx}>
                    <div className="h-px bg-black/20 w-[75%]" />
                    <p 
                      className="text-base italic text-center px-6 leading-[2]"
                      dangerouslySetInnerHTML={{ __html: story }}
                    />
                  </React.Fragment>
                ))}
              </div>
            )}
            
            {/* Divider */}
            <div className="h-px bg-gray-300 w-full" />
            
            {/* Information Architecture subsection */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#0c120c] mb-2">{architectureTitle}</h3>
                <p className="text-base text-[#0c120c] leading-[2]">{architectureDescription}</p>
              </div>
              
              {/* Architecture cards - 3 column grid */}
              {section.items && section.items.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#fefefe] p-8 rounded-2xl shadow-[0px_5px_7px_#cdcdcd20]"
                    >
                      <div className="mb-3">
                        <h3 className="text-xl font-serif">{item.title}</h3>
                      </div>
                      <div className="pl-4">
                        <div className="space-y-0">
                          {item.fields.map((field, fieldIdx) => (
                            <div
                              key={fieldIdx}
                              className="text-base leading-[180%]"
                            >
                              {field}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Opportunity Section - merged section with diagram, products, and overview
  if (isOpportunity) {
    const imageCaption = section.metadata?.imageCaption || "";
    const afterImageText = section.metadata?.afterImageText || "";
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif mb-8 sticky top-[122px] sm:top-[130px] lg:top-[154px]">
              {section.title}
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {/* Intro text */}
            {section.content && (
              <FormattedContent
                content={section.content}
                className="text-gray-700 text-base leading-[2]"
              />
            )}
            
            {/* Diagram image with caption */}
            {section.images && section.images.length > 0 && (
              <div className="flex flex-col gap-3">
                <div className="w-full">
                  <img
                    src={section.images[0]}
                    alt="Opportunity diagram"
                    className="w-full h-auto"
                  />
                </div>
                {imageCaption && (
                  <p className="text-xs text-[#0c120c] leading-[1.5]">
                    {imageCaption}
                  </p>
                )}
              </div>
            )}
            
            {/* After image text */}
            {afterImageText && (
              <p className="text-base text-[#0c120c] leading-[2]">
                {afterImageText}
              </p>
            )}
            
            {/* Product items */}
            {section.items && section.items.length > 0 && (
              <div className="space-y-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-[#0c120c] leading-[1.5]">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#0c120c] leading-[2]">
                      {item.fields[0]}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            {/* Products overview image */}
            <div className="w-full">
              <img
                src="/images/fx-ai-analyst/products-overview.png"
                alt="Products overview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Impact and Next Steps Section
  if (isImpactAndNextSteps) {
    const contentParts = section.content?.split('\n\n') || [];
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif mb-8 sticky top-[122px] sm:top-[130px] lg:top-[154px]">
              {section.title}
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {contentParts.map((part, idx) => {
              if (part.startsWith('Impact:')) {
                const bullets = part.split('\n').slice(1);
                return (
                  <div key={idx}>
                    <p className="text-lg font-semibold mb-4">Impact</p>
                    <ul className="space-y-2 list-disc ml-6">
                      {bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="text-base text-[#0c120c] leading-[2]">
                          {bullet.replace('• ', '')}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else if (part.startsWith('FX AI update:') || part.startsWith('Pricing update:')) {
                // Detect which type of update section this is
                const updateType = part.startsWith('FX AI update:') ? 'FX AI update' : 'Pricing update';
                const updatePrefix = part.startsWith('FX AI update:') ? 'FX AI update:' : 'Pricing update:';
                
                const content = part.replace(updatePrefix, '').trim();
                const linkMatch = part.match(/View Xflowpay website: (https?:\/\/[^\s]+)/);
                const textContent = content.split('View Xflowpay website:')[0].trim();
                return (
                  <div key={idx} className="space-y-4">
                    <div className="h-px bg-gray-300 w-full" />
                    <p className="text-lg font-semibold">{updateType}</p>
                    <p className="text-base text-[#0c120c] leading-[2]">{textContent}</p>
                    {linkMatch && (
                      <a
                        href={linkMatch[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0088ff] underline text-base font-semibold inline-flex items-center gap-2 hover:opacity-80"
                      >
                        View Xflowpay website
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block"
                        >
                          <path
                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  }

  // Special centered layout for these sections
  const isCenteredLayout =
    section.title === "Iterations for fee configurability" ||
    section.title === "We went multi-currency!" ||
    section.title === "Design Iterations";

  if (isCenteredLayout) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-[40px] py-8 sm:py-16">
        <div className="flex flex-col gap-6 lg:gap-10 items-center">
          {/* Centered Title and Content */}
          <div className="flex flex-col gap-6 items-center text-center max-w-[924px]">
            <h2 className="text-4xl font-serif text-gray-900">
              {section.title}
            </h2>
            {section.content && (
              <FormattedContent
                content={section.content}
                className="text-gray-700 text-base leading-[200%] max-w-[630px]"
              />
            )}
          </div>

          {/* Full-width Images with edge-to-edge layout */}
          {section.images && section.images.length > 0 && (
            <div className="w-full">
              {section.images.map((image, idx) => {
                const isIterations = section.title === "Iterations for fee configurability";
                const isDesignIterations = section.title === "Design Iterations";
                const isMultiCurrency = section.title === "We went multi-currency!";

                if (isIterations || isDesignIterations) {
                  return (
                      <img
                      key={idx}
                        src={image}
                        alt={`${section.title} - Image ${idx + 1}`}
                      className="w-full h-auto"
                      />
                  );
                }

                if (isMultiCurrency) {
                  return (
                    <div key={idx} className="h-[300px] sm:h-[500px] md:h-[900px] lg:h-[1291px] relative w-full">
                      <img
                        src={image}
                        alt={`${section.title} - Image ${idx + 1}`}
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                  );
                }

                return null;
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special layout for Negative Earnings section
  const isNegativeEarnings = section.title === "Negative Earnings";

  if (isNegativeEarnings) {
    return <NegativeEarningsSection section={section} />;
  }

  // Special layout for Platform Usecase section
  const isPlatformUsecase = section.title === "Platform Usecase";

  if (isPlatformUsecase) {
    // Parse content to extract different parts
    const contentParts = section.content?.split("\n\n") || [];
    const introText = contentParts[0] || "";

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sticky Title */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif mb-8 sticky top-[122px] sm:top-[130px] lg:top-[154px]">
              {section.title}
            </h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-6 lg:space-y-10">
            {/* Intro Text */}
            {introText && (
              <FormattedContent
                content={introText}
                className="text-gray-700 text-base leading-[2]"
              />
            )}

            {/* Funds flow and fees section */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-base text-gray-900 leading-[2]">
                Funds flow and fees
              </h3>
              
              {/* Platform flow image */}
              {section.images && section.images.length > 0 && (
                <div className="h-[200px] sm:h-[250px] lg:h-[319px] relative w-full">
                  <img
                    src={section.images[0]}
                    alt="Platform flow diagram"
                    className="absolute inset-0 w-full h-full object-contain object-center"
                  />
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-300 w-full" />

            {/* Formula Section - replaced with image */}
            {section.images && section.images.length > 1 && (
              <div className="w-full">
                <div className="h-[180px] sm:h-[220px] md:h-[240px] lg:h-[263px] relative w-full">
                  <img
                    src={section.images[1]}
                    alt="Fee formula diagram"
                    className="absolute inset-0 w-full h-full object-contain object-center"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Standard left-right layout for other sections
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sticky Title */}
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-serif mb-8 sticky top-[122px] sm:top-[130px] lg:top-[154px]">
            {section.title}
          </h2>
        </div>

        {/* Content */}
        <div className="lg:col-span-8 space-y-6 lg:space-y-10">
          {/* Text Content */}
          {section.content && (
            <FormattedContent
              content={section.content}
              className="text-gray-700 text-base md:text-lg leading-relaxed"
            />
          )}

          {/* Images */}
          {section.images && section.images.length > 0 && (
            <div className="space-y-6 lg:space-y-10">
              {section.images.map((image, idx) => {
                // Different styling based on section
                const isIterations = section.title === "Iterations for fee configurability";
                const isDesignIterations = section.title === "Design Iterations";
                const isMultiCurrency = section.title === "We went multi-currency!";
                
                if (isIterations || isDesignIterations) {
                  return (
                      <img
                      key={idx}
                        src={image}
                        alt={`${section.title} - Image ${idx + 1}`}
                      className="w-full h-auto"
                      />
                  );
                }
                
                if (isMultiCurrency) {
                  return (
                    <div key={idx} className="h-[300px] sm:h-[500px] md:h-[900px] lg:h-[1291px] relative w-full">
                      <img
                        src={image}
                        alt={`${section.title} - Image ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-contain object-center"
                      />
                    </div>
                  );
                }
                
                // Default styling for other images
                return (
                  <div key={idx} className="relative w-full">
                    <img
                      src={image}
                      alt={`${section.title} - Image ${idx + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* Items (if any, similar to insights section) */}
          {section.items && section.items.length > 0 && (
            <div className="space-y-6 lg:space-y-10">
              {section.items.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.fields.map((field, fieldIdx) => (
                      <li
                        key={fieldIdx}
                        className="text-gray-700 text-base md:text-lg leading-relaxed flex"
                      >
                        <span className="mr-3 text-gray-400">•</span>
                        <span>{field}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Negative Earnings Section Component
function NegativeEarningsSection({ section }: CustomSectionProps) {
  // Parse content
  const contentParts = section.content?.split("\n\n") || [];
  const introText = contentParts[0] || "";
  const questionText = contentParts[1] || "";
  const earningsText = contentParts[2] || "";
  const preFundingText = contentParts[3] || "";

  // Extract bullet points from Platform's Earnings section
  const earningsBullets = earningsText
    .split("\n")
    .filter((line) => line.trim().startsWith("•"))
    .map((line) => line.trim().substring(1).trim());

  // Refs for animations
  const feeBreakdownRef = useRef<HTMLDivElement>(null);
  const circlesContainerRef = useRef<HTMLDivElement>(null);
  const totalFeeCircleRef = useRef<HTMLDivElement>(null);
  const userFeeCircleRef = useRef<HTMLDivElement>(null);
  const deficitTextRef = useRef<HTMLDivElement>(null);
  const platformEarningsRef = useRef<HTMLDivElement>(null);
  const earningsGridRef = useRef<HTMLDivElement>(null);
  const preFundingRef = useRef<HTMLDivElement>(null);

  // State for animations
  const [feeCircleProgress, setFeeCircleProgress] = useState(0);
  const [showDeficit, setShowDeficit] = useState(false);
  const [redCircles, setRedCircles] = useState(0);
  const [netEarning, setNetEarning] = useState<"Positive" | "Negative">("Positive");
  const [preFundingAmount, setPreFundingAmount] = useState(10000.0);
  const [greenCircles, setGreenCircles] = useState(0);
  const [preFundingNetEarning, setPreFundingNetEarning] = useState<"Positive" | "Negative">("Negative");

  // Stage 1: Fee circles movement
  useEffect(() => {
    const handleScroll = () => {
      if (!circlesContainerRef.current || !totalFeeCircleRef.current || !userFeeCircleRef.current) return;

      const rect = circlesContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const endThreshold = windowHeight / 2; // Center of screen
      
      // Start animation when element comes into view, finish when it reaches center
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      // Check if element is in viewport
      if (elementTop < windowHeight && elementBottom > 0) {
        // Calculate progress: 0 when element enters viewport, 1 when top reaches center
        const startPoint = windowHeight; // When element top enters viewport
        const animationRange = startPoint - endThreshold;
        const distanceFromStart = startPoint - elementTop;
        const scrollProgress = Math.max(0, Math.min(1, distanceFromStart / animationRange));
        setFeeCircleProgress(scrollProgress);

        // Check if circles overlap
        const totalFeeRect = totalFeeCircleRef.current.getBoundingClientRect();
        const userFeeRect = userFeeCircleRef.current.getBoundingClientRect();
        const overlap = totalFeeRect.right > userFeeRect.left;
        setShowDeficit(overlap && scrollProgress > 0.3);
      } else if (elementTop >= windowHeight) {
        // Reset when element hasn't entered viewport yet
        setFeeCircleProgress(0);
        setShowDeficit(false);
      } else if (elementTop < endThreshold) {
        // Complete when element has passed center
        setFeeCircleProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stage 2: Platform Earnings - Animation starts when bottom enters viewport, concludes at center
  useEffect(() => {
    const handleScroll = () => {
      if (!platformEarningsRef.current) return;
      
      const rect = platformEarningsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerThreshold = windowHeight / 2; // Center of screen
      
      // Start animation when bottom of element enters viewport
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      // Check if bottom has entered viewport
      if (elementBottom < windowHeight && elementBottom > 0) {
        // Calculate progress: 0 when bottom enters viewport, 1 when top reaches center
        const startPoint = windowHeight; // When element bottom enters viewport
        const animationRange = startPoint - centerThreshold;
        const distanceFromStart = startPoint - elementTop;
        const scrollProgress = Math.max(0, Math.min(1, distanceFromStart / animationRange));
        
        // Turn circles red progressively (9 circles total) - use smoother calculation
        // Multiply by 9.99 instead of 9 to ensure we reach exactly 9 at progress = 1
        const circleProgress = Math.max(0, Math.min(9, Math.floor(scrollProgress * 9.99)));
        setRedCircles(circleProgress);
        
        // Update net earning label after 9 circles turn red
        if (circleProgress >= 9) {
          setNetEarning("Negative");
        } else {
          setNetEarning("Positive");
        }
      } else if (elementBottom >= windowHeight) {
        // Reset when element bottom hasn't entered viewport yet
        setRedCircles(0);
        setNetEarning("Positive");
      } else if (elementTop < centerThreshold) {
        // Complete when element top has passed center
        setRedCircles(9);
        setNetEarning("Negative");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stage 3: Pre-funding Balance - Smooth animation when section reaches center
  useEffect(() => {
    if (!preFundingRef.current) return;
    
    let animationTriggered = false;
    
    const handleScroll = () => {
      if (!preFundingRef.current || animationTriggered) return;
      
      const rect = preFundingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerThreshold = windowHeight / 2;
      const elementTop = rect.top;
      
      // Trigger animation when section reaches center
      if (elementTop <= centerThreshold) {
        animationTriggered = true;
        
        // Smooth animation over 2 seconds
        const duration = 2000;
        const startTime = Date.now();
        const startAmount = 10000;
        const endAmount = 5189;
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(1, elapsed / duration);
          
          // Smooth easing function (ease-out)
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          
          // 1. Count down amount from 10,000 to 5,189
          const currentAmount = startAmount - (easedProgress * (startAmount - endAmount));
          setPreFundingAmount(currentAmount);
          
          // 2. Turn 9 circles from red to green one by one
          const greenProgress = Math.floor(easedProgress * 9);
          setGreenCircles(greenProgress);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setPreFundingAmount(endAmount);
            setGreenCircles(9);
            setPreFundingNetEarning("Positive");
          }
        };
        
        animate();
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate circle positions for fee breakdown
  // Use percentage-based positioning for responsive behavior
  const containerWidth = 925; // max-w-[925px]
  const totalFeeCircleWidth = 122; // Large circle width
  const userFeeCircleWidth = 60; // Small circle width
  const marginPercent = 0.1; // 10% margin
  
  // Calculate positions as percentages
  // Left circle: left edge at 10% margin from left
  const totalFeeStartPercent = marginPercent; // 10% from left
  // Right circle: right edge at 10% margin from right
  const userFeeStartPercent = 1 - marginPercent - (userFeeCircleWidth / containerWidth); // Adjust for circle width
  
  // End positions (centered - both circles' centers align at container center)
  // When animation completes, both circles should be centered at 50% with translateX(-50%)
  const totalFeeEndPercent = 0.5; // Center position, will use translateX(-50%) to center
  const userFeeEndPercent = 0.5; // Center position, will use translateX(-50%) to center
  
  // Interpolate between start and end positions
  // Clamp progress to ensure smooth animation without overshoot
  const clampedProgress = Math.min(1, Math.max(0, feeCircleProgress));
  
  // Calculate smooth interpolation for circle CENTERS
  // Use calc() with both percentage and pixels for precise positioning
  
  // Start positions:
  // - Large circle: left edge at 10% of container
  // - Small circle: left edge at ~83.5% of container (90% - 60px/925px)
  
  // End positions (both circles centered at 50%):
  // - Large circle: center at 50%, so left = 50% - 61px
  // - Small circle: center at 50%, so left = 50% - 30px
  
  // Calculate interpolation using pixel values for precision
  const totalFeeStartPx = totalFeeStartPercent * 100; // Convert to CSS percentage value
  const userFeeStartPx = userFeeStartPercent * 100;
  
  // At progress = 1, we want:
  // - Large circle left: calc(50% - 61px) for centered at 50%
  // - Small circle left: calc(50% - 30px) for centered at 50%
  
  if (clampedProgress >= 1) {
    // Final centered position - use calc for perfect centering
    var totalFeeLeft = `calc(50% - ${totalFeeCircleWidth / 2}px)`;
    var userFeeLeft = `calc(50% - ${userFeeCircleWidth / 2}px)`;
  } else {
    // During animation, interpolate from start to final position
    // Interpolate the percentage part
    const totalFeePercentPart = totalFeeStartPx + clampedProgress * (50 - totalFeeStartPx);
    const userFeePercentPart = userFeeStartPx - clampedProgress * (userFeeStartPx - 50);
    
    // Interpolate the pixel offset (0px at start, -61px/-30px at end)
    const totalFeePixelOffset = -clampedProgress * (totalFeeCircleWidth / 2);
    const userFeePixelOffset = -clampedProgress * (userFeeCircleWidth / 2);
    
    var totalFeeLeft = totalFeePixelOffset === 0 
      ? `${totalFeePercentPart}%`
      : `calc(${totalFeePercentPart}% + ${totalFeePixelOffset}px)`;
    var userFeeLeft = userFeePixelOffset === 0
      ? `${userFeePercentPart}%`
      : `calc(${userFeePercentPart}% + ${userFeePixelOffset}px)`;
  }
  
  const isFullyCentered = clampedProgress >= 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sticky Title */}
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-serif mb-2 sticky top-[122px] sm:top-[130px] lg:top-[154px]">
            {section.title}
          </h2>
          <p className="text-base italic text-[#0c120c] leading-[2]">
            Oxymoronic much?
          </p>
        </div>

        {/* Content */}
        <div className="lg:col-span-8 space-y-10">
          {/* Introduction Text */}
          <div className="text-[#0c120c] text-base leading-[2]">
            <p className="mb-0">{introText}</p>
            {questionText && (
              <p className="font-bold italic mt-4">{questionText}</p>
            )}
          </div>

          {/* Fee Breakdown Section */}
          <div ref={feeBreakdownRef} className="space-y-4">
            {/* Formula */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-base text-[#0c120c] leading-[2] px-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.40)' }}>
                    Xflow Passthrough Fee
                  </p>
                  <p className="text-base text-[#0c120c] leading-normal">Xflow's share of fee</p>
                </div>
                <p className="font-bold text-2xl text-[#0c120c]">+</p>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-base text-[#0c120c] leading-[2] px-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.40)' }}>
                    Platform User (PU) Fee
                  </p>
                  <p className="text-base text-[#0c120c] leading-normal">Platform's share of fee</p>
                </div>
              </div>
              <p className="font-bold text-2xl text-[#0c120c]">=</p>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-base text-[#0c120c] leading-[2] w-fit px-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.10)' }}>
                  Connected User (CU) Fee
                </p>
                <p className="text-base text-[#0c120c] leading-normal">Fee charged to connected Users</p>
              </div>
            </div>

            {/* Dashed Line */}
            <div className="h-px border-t border-dashed border-gray-400 w-full" />

            {/* Fee Circles */}
            <div ref={circlesContainerRef} className="h-[122px] relative w-full max-w-[925px]" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
              <div
                ref={totalFeeCircleRef}
                className="absolute w-[122px] h-[122px] rounded-full top-0"
                style={{ 
                  left: totalFeeLeft,
                  backgroundColor: 'rgba(0, 0, 0, 0.40)',
                  // No transform needed - we're positioning the left edge directly
                  // The calculation ensures the circle center reaches 50%
                }}
              />
              <div
                ref={userFeeCircleRef}
                className="absolute w-[60px] h-[60px] rounded-full top-[31px]"
                style={{ 
                  left: userFeeLeft,
                  backgroundColor: 'rgba(0, 0, 0, 0.10)',
                  border: '1px solid #FFF',
                  // No transform needed - we're positioning the left edge directly
                  // The calculation ensures the circle center reaches 50%
                }}
              />
              {/* Straight dotted line from circle to deficit badge */}
              {showDeficit && (
                <>
                  {/* Straight dotted line - responsive width */}
                  <div
                    className="absolute z-0 pointer-events-none"
                    style={{
                      top: '61px', // Center of circles (122px / 2 = 61px) - align with circle center
                      left: 'calc(50% + 61px)', // Start from right edge of centered circle
                      // Responsive width: shorter on mobile, full length on larger screens
                      width: 'clamp(40px, 10vw, 106px)',
                      height: '2px',
                    }}
                  >
                    <svg 
                      width="100%" 
                      height="2" 
                      viewBox="0 0 106 2" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      style={{ width: '100%', height: '100%' }}
                    >
                      <line
                        x1="0"
                        y1="1"
                        x2="106"
                        y2="1"
                        stroke="#0c120c"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                  {/* Deficit badge - positioned after the responsive line */}
                  <div
                    ref={deficitTextRef}
                    className="absolute flex items-center z-10 pointer-events-none"
                    style={{
                      top: '39px',
                      // Position badge after the line with responsive offset
                      // Mobile: closer (50% + 61px + 40px), Desktop: further (50% + 61px + 106px)
                      left: 'calc(50% + 61px + clamp(40px, 10vw, 106px))',
                    }}
                  >
                    <div className="bg-[#d9d9d9] box-border flex gap-[10px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0">
                      <p className="font-normal leading-[2] not-italic relative shrink-0 text-base text-black whitespace-pre">
                        Deficit
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Line Separator */}
            <div className="h-px bg-gray-300 w-full" />
          </div>

          {/* Platform's Earnings Section */}
          <div ref={platformEarningsRef} className="space-y-6">
            <p className="font-bold text-base text-[#0c120c] leading-[2]">Platform's Earnings</p>
            
            <div className="flex gap-10 items-start flex-col lg:flex-row">
              {/* Bullet Points */}
              <div className="flex flex-col gap-2.5 w-full lg:w-[451px]">
                {earningsBullets.map((bullet, index) => (
                  <div key={index}>
                    <ul className="list-disc ml-6">
                      <li className="text-base text-[#0c120c] leading-[2]">
                        {index === 2 ? (
                          <>
                            {bullet.split("Negative Earning")[0]}
                            <span className="font-bold text-[#ff383c]">Negative Earning</span>
                            {bullet.split("Negative Earning")[1]}
                          </>
                        ) : (
                          bullet
                        )}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>

              {/* Earnings Grid */}
              <div ref={earningsGridRef} className="hidden lg:flex flex-col gap-2.5 w-full lg:w-[434px]">
                <div className="border border-black/40 rounded-xl p-4">
                  <div className="flex flex-col gap-12">
                    {[0, 1, 2].map((row) => (
                      <div key={row} className="flex items-center justify-between">
                        {[0, 1, 2, 3, 4].map((col) => {
                          const circleIndex = row * 5 + col;
                          // Circles turn red one by one as user scrolls
                          const backgroundColor = circleIndex < redCircles ? "#FDD3D0" : "#BFE4CB";
                          
                          return (
                            <div
                              key={col}
                              className="w-12 h-12 rounded-full transition-colors duration-300"
                              style={{ backgroundColor }}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-base text-[#0c120c] leading-[2]">
                  Net Earning ={" "}
                  <span
                    className={`font-bold ${
                      netEarning === "Positive" ? "text-[#4a9d6d]" : "text-[#e85d52]"
                    }`}
                  >
                    {netEarning}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Pre-funding Balance Section */}
          <div ref={preFundingRef} className="space-y-6">
            <p className="font-bold text-base text-[#0c120c] leading-[2]">Pre-funding Balance</p>
            
            <div className="flex gap-10 items-start flex-col lg:flex-row">
              {/* Left Column: Bullet Point and Balance Card */}
              <div className="flex flex-col gap-8 items-center w-full lg:w-[451px]">
                {/* Bullet Point */}
                <div className="w-full">
                  <ul className="list-disc ml-6">
                    <li className="text-base text-[#0c120c] leading-[2]">
                      The <span className="font-bold">Pre-funding Balance</span> helps avoid negative earnings by nullifying them. This helps maintain business continuity
                    </li>
                  </ul>
                </div>
                
                {/* Pre-funding Balance Card */}
                <div className="w-full px-8 hidden lg:block">
                  <div className="border border-black/30 rounded-md p-6 bg-white">
                    <p className="text-base text-[#0c120c] leading-[2] mb-0">
                      USD Pre-funding Balance
                    </p>
                    <p className="text-4xl font-serif text-[#0c120c] leading-[1.5] mt-0">
                      USD {preFundingAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Earnings Grid */}
              <div className="hidden lg:flex flex-col gap-2.5 w-full lg:w-[434px]">
                <div className="border border-black/40 rounded-xl p-4">
                  <div className="flex flex-col gap-12">
                    {[0, 1, 2].map((row) => (
                      <div key={row} className="flex items-center justify-between">
                        {[0, 1, 2, 3, 4].map((col) => {
                          const circleIndex = row * 5 + col;
                          // First 9 circles turn from red to green in REVERSE order (starting from last red circle)
                          // Last 6 circles (indices 9-14) remain green throughout
                          let backgroundColor;
                          if (circleIndex < 9) {
                            // First 9 circles: red initially, turn green starting from index 8 backwards
                            // Circle 8 turns green first, then 7, 6, 5, 4, 3, 2, 1, 0
                            backgroundColor = circleIndex >= (9 - greenCircles) ? "#BFE4CB" : "#FDD3D0";
                          } else {
                            // Last 6 circles: always green
                            backgroundColor = "#BFE4CB";
                          }
                          
                          return (
                            <div
                              key={col}
                              className="w-12 h-12 rounded-full transition-colors duration-300"
                              style={{ backgroundColor }}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-base text-[#0c120c] leading-[2]">
                  Net Earning ={" "}
                  <span
                    className={`font-bold ${
                      preFundingNetEarning === "Positive" ? "text-[#4a9d6d]" : "text-[#e85d52]"
                    }`}
                  >
                    {preFundingNetEarning}
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


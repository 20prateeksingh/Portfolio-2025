"use client";

import Image from "next/image";

interface CoverSectionProps {
  tagline: string;
  coverImage: string;
}

export default function CoverSection({ tagline, coverImage }: CoverSectionProps) {
  // For fee-settings and FX AI Analyst, we need special layout with centered image
  const isFeeSettings = coverImage.includes("fee-settings");
  const isFxAiAnalyst = coverImage.includes("fx-ai-analyst");

  // Original layout for invoicing and other case studies
  if (!isFeeSettings && !isFxAiAnalyst) {
    return (
      <section className="relative h-screen bg-[#6666FF] mb-20 overflow-hidden">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 z-10 w-full text-center">
          <h1 className="text-4xl md:text-6xl text-white font-serif">
            {tagline}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src={coverImage}
            alt="Cover"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
            unoptimized
          />
        </div>
      </section>
    );
  }

  // FX AI Analyst specific layout
  if (isFxAiAnalyst) {
    return (
      <section className="relative h-screen bg-[#6666FF] mb-20 overflow-hidden">
        {/* Title - positioned at top to match other case studies */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 z-10 w-full text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-serif mb-4">
            {tagline}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-montserrat">
            Moving money with market insights
          </p>
        </div>
        
        {/* AI Insights Card Illustration - positioned in lower half */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[calc(50%-10vh)] z-0 w-[90%] md:w-[70%] lg:w-[35vw] max-w-[600px]">
          <Image
            src={coverImage}
            alt="AI FX Insights"
            width={824}
            height={495}
            className="w-full h-auto"
            priority
            unoptimized
          />
        </div>
      </section>
    );
  }

  // Fee-settings specific layout with consolidated image
  return (
    <section className="relative h-screen bg-[#6666FF] mb-20 overflow-hidden">
      {/* Title - positioned at top to match other case studies */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 z-10 w-full text-center px-4">
        <h1 className="text-4xl md:text-6xl text-white font-serif mb-4">
          {tagline}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-montserrat">
          Solving fees for us, our users and their users
        </p>
      </div>
      {/* Consolidated image - centered at bottom */}
      <div className="absolute -bottom-[57px] md:bottom-[55px] left-1/2 -translate-x-1/2 md:translate-y-[50%] z-0 w-[90%] md:w-full max-w-[942px] h-[571px]">
        <Image
          src={coverImage}
          alt="Cover"
          width={942}
          height={571}
          className="w-full h-full object-contain"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}


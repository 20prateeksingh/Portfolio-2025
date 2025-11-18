"use client";

import Image from "next/image";

interface CoverSectionProps {
  tagline: string;
  coverImage: string;
}

export default function CoverSection({ tagline, coverImage }: CoverSectionProps) {
  // For fee-settings, we need special layout with consolidated image
  const isFeeSettings = coverImage.includes("fee-settings");

  // Original layout for invoicing and other case studies
  if (!isFeeSettings) {
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
        <div className="absolute bottom-[7vh] left-1/2 -translate-x-1/2 animate-bounce z-10">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
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
      <div className="absolute bottom-[7vh] left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}


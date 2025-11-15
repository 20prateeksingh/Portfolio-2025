"use client";

import Image from "next/image";

interface CoverSectionProps {
  tagline: string;
  coverImage: string;
}

export default function CoverSection({ tagline, coverImage }: CoverSectionProps) {
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
      <div className="absolute bottom-[7vh] left-1/2 -translate-x-1/2 animate-bounce">
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


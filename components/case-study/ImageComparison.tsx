"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageComparisonProps {
  before: string;
  after: string;
  caption?: string;
}

export default function ImageComparison({
  before,
  after,
  caption,
}: ImageComparisonProps) {
  const [sliderValue, setSliderValue] = useState(20);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value));
  };

  const handleSliderInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSliderValue(parseInt((e.target as HTMLInputElement).value));
  };

  return (
    <div className="max-w-[856px] mx-auto my-5 rounded-xl overflow-hidden">
      <div className="relative flex">
        {/* After image (background) */}
        <div className="w-full">
          <Image
            src={after}
            alt="After"
            width={856}
            height={600}
            className="w-full h-full object-cover object-left"
            unoptimized
          />
        </div>

        {/* Before image (overlay) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderValue}%` }}
        >
          <Image
            src={before}
            alt="Before"
            width={856}
            height={600}
            className="w-full h-full object-cover object-left"
            unoptimized
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_4px_rgba(0,0,0,0.2)] z-10 pointer-events-none"
          style={{ left: `${sliderValue}%`, transform: "translateX(-50%)" }}
        />

        {/* Slider icon */}
        <div
          className="absolute top-1/2 z-20 w-12 h-12 bg-white/80 border-2 border-black/25 rounded-full flex items-center justify-center shadow-md pointer-events-none"
          style={{
            left: `${sliderValue}%`,
            transform: "translate(-50%, -50%) rotate(90deg)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black/70"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>

        {/* Slider input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onInput={handleSliderInput}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-grab active:cursor-grabbing z-30"
        />
      </div>
      {caption && (
        <div className="mt-3 text-xs leading-[150%] text-center font-normal">
          {caption}
        </div>
      )}
    </div>
  );
}


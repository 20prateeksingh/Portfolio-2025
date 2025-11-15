"use client";

import { useState, useEffect, useRef } from "react";

interface ProgressBarProps {
  sections: Array<{ id: string; title: string }>;
}

export default function ProgressBar({ sections }: ProgressBarProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Find all section elements
    sectionRefs.current = sections.map((_, index) => {
      const section = document.getElementById(`section-${index}`);
      return section;
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const OFFSET = 80;

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const current = sectionRefs.current[i];
        const next = sectionRefs.current[i + 1];

        if (!current) continue;

        const currentTop = current.offsetTop - OFFSET;
        const nextTop = next
          ? next.offsetTop - OFFSET
          : document.body.scrollHeight;

        if (scrollY >= currentTop && scrollY < nextTop) {
          setActiveSection(i);

          // Calculate progress within current section
          const sectionHeight = nextTop - currentTop;
          const sectionProgress = (scrollY - currentTop) / sectionHeight;
          const totalProgress = (i + sectionProgress) / sections.length;

          setProgress(totalProgress * 100);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      const scrollTo = section.offsetTop - 80;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-6 z-[1000] pointer-events-none hidden md:block">
      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-1.5 bg-[#6666FF] transition-all duration-200 pointer-events-auto"
        style={{ width: `${progress}%` }}
      />

      {/* Milestone segments */}
      <div className="absolute bottom-0 left-0 w-full h-full flex pointer-events-none">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="flex-1 relative self-end h-1.5 bg-transparent pointer-events-all cursor-pointer transition-all duration-200 hover:h-3 hover:bg-black/60 group"
            onClick={() => scrollToSection(index)}
          >
            {/* Tooltip */}
            <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 text-xs whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {section.title}
            </div>

            {/* Active indicator */}
            {activeSection === index && (
              <div className="absolute inset-0 bg-black/40" />
            )}

            {/* Divider */}
            {index < sections.length - 1 && (
              <div className="absolute top-1/2 right-0 w-0.5 h-full -translate-y-1/2 bg-[#6666FF]/60 rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


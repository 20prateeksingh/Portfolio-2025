"use client";

import React from "react";

interface FormattedContentProps {
  content: string;
  className?: string;
}

export default function FormattedContent({
  content,
  className = "text-base leading-[180%]",
}: FormattedContentProps) {
  // Split content by double newlines to get paragraphs
  const paragraphs = content.split("\n\n");

  return (
    <div className={className}>
      {paragraphs.map((paragraph, idx) => {
        // Check if paragraph contains bullet points
        const lines = paragraph.split("\n").map((line) => line.trim());
        const hasBullets = lines.some((line) => line.startsWith("•"));

        if (hasBullets) {
          // Separate text and bullets
          const textLines: string[] = [];
          const bulletItems: string[] = [];

          lines.forEach((line) => {
            if (line.startsWith("•")) {
              bulletItems.push(line.substring(1).trim());
            } else if (line.length > 0) {
              textLines.push(line);
            }
          });

          return (
            <div key={idx} className="mb-6">
              {textLines.length > 0 && (
                <p className="mb-4">{textLines.join(" ")}</p>
              )}
              {bulletItems.length > 0 && (
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {bulletItems.map((item, itemIdx) => (
                    <li key={itemIdx} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        } else {
          // Render as regular paragraph
          const cleanParagraph = paragraph.trim();
          if (cleanParagraph.length === 0) return null;
          return (
            <p key={idx} className="mb-6">
              {cleanParagraph}
            </p>
          );
        }
      })}
    </div>
  );
}


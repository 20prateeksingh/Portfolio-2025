"use client";

import React from "react";

interface FormattedContentProps {
  content: string;
  className?: string;
}

// Helper function to parse text and convert **text** to bold
function parseTextWithBold(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add bold text
    parts.push(
      <strong key={match.index} className="font-semibold">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
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
                <p className="mb-4">{parseTextWithBold(textLines.join(" "))}</p>
              )}
              {bulletItems.length > 0 && (
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {bulletItems.map((item, itemIdx) => (
                    <li key={itemIdx} className="mb-1">
                      {parseTextWithBold(item)}
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
              {parseTextWithBold(cleanParagraph)}
            </p>
          );
        }
      })}
    </div>
  );
}


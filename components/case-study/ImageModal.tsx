"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  alt,
}: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh] w-full h-auto">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold"
        >
          ×
        </button>
        <Image
          src={imageSrc}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-auto rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          unoptimized
        />
      </div>
    </div>
  );
}


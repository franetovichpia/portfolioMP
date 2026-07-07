"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectGalleryProps {
  title: string;
  images?: string[];
}

export function ProjectGallery({ title, images = [] }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!images.length) return null;

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const previousImage = () => {
    if (activeIndex === null) return;
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setActiveIndex(index)}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-2 text-left"
          >
            <Image
              src={image}
              alt={`${title} captura ${index + 1}`}
              width={1200}
              height={800}
              className="aspect-[16/10] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-2 rounded-xl bg-black/0 transition-colors group-hover:bg-black/20" />

            <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black opacity-0 transition-opacity group-hover:opacity-100">
              Ver detalle
            </span>
          </button>
        ))}
      </div>

      {activeImage && activeIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/90 p-4">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute right-6 top-6 z-10 rounded-full bg-white p-3 text-black"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={previousImage}
            className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-black"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-black"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="flex h-full items-center justify-center">
            <Image
              src={activeImage}
              alt={`${title} detalle`}
              width={1800}
              height={1200}
              className="max-h-[90vh] w-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
// src/components/Gallery.tsx
"use client";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Card from "@/components/ui/Card";

const images = [
  
  { src: "photos/capstone.jpg", alt: "Event photo 6" }, 
  { src: "photos/banda.jpg", alt: "Event photo 6" },
  { src: "photos/photo4.jpg", alt: "Event photo 4" },
  { src: "photos/awardbanda2.jpg", alt: "Event photo 6" },
  { src: "photos/awardbanda.jpg", alt: "Event photo 1" },
  { src: "photos/photo7.jpg", alt: "Event photo 2" },
  { src: "photos/photo5.jpg", alt: "Event photo 4" },
  { src: "photos/photo3.jpg", alt: "Event photo 4" }, 
  { src: "photos/capstone2.jpg", alt: "Event photo 6" },
  { src: "photos/photo8.jpg", alt: "Event photo 6" }
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % images.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const lightboxModal = lightbox !== null && (
    <div
      onClick={() => setLightbox(null)}
      className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center px-4"
    >
      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
          rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Image */}
      <img
        src={images[lightbox].src}
        alt={images[lightbox].alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[85vw] max-h-[80vh] sm:max-w-[90vw] sm:max-h-[90vh] rounded-lg object-contain shadow-2xl"
      />

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
          rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Close */}
      <button
        onClick={() => setLightbox(null)}
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
          rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

    </div>
  );

  return (
    <>
    <Card className="p-5">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Gallery</h2>

      <div className="relative group min-w-0">
        {/* Left button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10
            w-8 h-8 flex items-center justify-center
            bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm
            text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400
            opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-scroll scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setLightbox(index)}
              className="shrink-0 overflow-hidden rounded-sm cursor-pointer"
              style={{ width: 220, height: 220 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover block transition-transform duration-300 ease-out"
                style={{ transform: hoveredIndex === index ? "scale(1.07)" : "scale(1)" }}
              />
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10
            w-8 h-8 flex items-center justify-center
            bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm
            text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400
            opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </Card>

    {typeof document !== "undefined" && createPortal(lightboxModal, document.body)}
    </>
  );
}
// src/components/Gallery.tsx
"use client";

import { useRef, useState } from "react";

const images = [
  { src: "/photo6.jpg", alt: "Event photo 1" },
  { src: "/photo7.jpg", alt: "Event photo 2" },
  { src: "/photo3.jpg", alt: "Event photo 3" },
  { src: "/photo4.jpg", alt: "Event photo 4" },
  { src: "/photo5.jpg", alt: "Event photo 5" },
  { src: "/photo8.jpg", alt: "Event photo 6" },
  { src: "/photo2.jpg", alt: "Event photo 6" },
  { src: "/photo9.jpg", alt: "Event photo 6" },
  { src: "/photo10.jpg", alt: "Event photo 6" }
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4">
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
              className="shrink-0 overflow-hidden cursor-pointer"
              style={{
                width: 220,
                height: 220,
                transform: hoveredIndex === index ? "translateY(-6px)" : "translateY(0)",
                transition: "transform 0.25s ease",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
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
    </div>
  );
}
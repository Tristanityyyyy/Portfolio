// src/components/Gallery.tsx
"use client";
import { useRef, useState } from "react";
import Card from "@/components/ui/Card";

const images = [
  
  { src: "photos/banda.jpg", alt: "Event photo 6" },
  { src: "photos/photo4.jpg", alt: "Event photo 4" },
  { src: "photos/awardbanda2.jpg", alt: "Event photo 6" },
  { src: "photos/awardbanda.jpg", alt: "Event photo 1" },
  { src: "photos/photo7.jpg", alt: "Event photo 2" },
  { src: "photos/photo5.jpg", alt: "Event photo 4" },
  { src: "photos/photo3.jpg", alt: "Event photo 4" },
  { src: "photos/capstone.jpg", alt: "Event photo 6" }, 
  { src: "photos/tabletennis.jpg", alt: "Event photo 6" }, 
  { src: "photos/capstone2.jpg", alt: "Event photo 6" },
  { src: "photos/photo8.jpg", alt: "Event photo 6" },
  { src: "photos/drums.jpg", alt: "Event photo 6" },
  { src: "photos/panthera.jpg", alt: "Event photo 6" },
  { src: "photos/tabletennis2.jpg", alt: "Event photo 6" }
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
              className="shrink-0 overflow-hidden cursor-pointer"
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
  );
}
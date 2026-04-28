// src/components/ExperienceCard.tsx
"use client";
import { useState } from "react";
import Card from "@/components/ui/Card";

interface Experience {
  role: string;
  company: string;
  year: string;
}

const experiences: Experience[] = [
  { role: "Full-Stack Developer (Intern)", company: "Odecci Solutions Inc.", year: "2026" },
  { role: "Backend Developer (Intern)", company: "Odecci Solutions Inc.", year: "2026" },
  { role: "Backend Developer", company: "Capstone Project", year: "2025" },
  { role: "BS Information Technology", company: "STI College Balagtas", year: "2022" },
];

const ROW_HEIGHT = 80;
const PADDING_TOP = 20;
const CX = 12;

export default function ExperienceCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const svgHeight = PADDING_TOP + (experiences.length - 1) * ROW_HEIGHT + PADDING_TOP;

  return (
    <Card className="p-5 h-full">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Experience</h2>

      <div className="flex gap-0">
        {/* Straight vertical line with dots */}
        <svg
          width={28}
          height={svgHeight}
          viewBox={`0 0 28 ${svgHeight}`}
          fill="none"
          className="shrink-0 text-white dark:text-zinc-900"
        >
          <line
            x1={CX}
            y1={PADDING_TOP + 5}
            x2={CX}
            y2={PADDING_TOP + (experiences.length - 1) * ROW_HEIGHT - 5}
            className="stroke-zinc-300 dark:stroke-zinc-700"
            strokeWidth={2}
            strokeLinecap="round"
          />
          {experiences.map((_, i) => (
            <circle
              key={i}
              cx={CX}
              cy={PADDING_TOP + i * ROW_HEIGHT}
              r={5}
              strokeWidth={2}
              className="stroke-zinc-300 dark:stroke-zinc-700"
              fill={hoveredIndex === i ? "#71717a" : "currentColor"}
              style={{
                transition: "fill 0.2s ease, transform 0.2s ease",
                transform: hoveredIndex === i ? `translateY(-3px)` : "translateY(0)",
              }}
            />
          ))}
        </svg>

        {/* Experience list */}
        <div className="flex-1 flex flex-col pl-2">
          {experiences.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex items-start justify-between gap-4 cursor-default"
              style={{
                height: ROW_HEIGHT,
                paddingTop: PADDING_TOP - 8,
                transform: hoveredIndex === index ? "translateY(-3px)" : "translateY(0)",
                transition: "transform 0.2s ease",
              }}
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.company}</span>
              </div>
              <span className="text-xs text-zinc-400 shrink-0">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
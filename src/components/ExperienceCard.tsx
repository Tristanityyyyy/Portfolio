// src/components/ExperienceCard.tsx

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
  const svgHeight = PADDING_TOP + (experiences.length - 1) * ROW_HEIGHT + PADDING_TOP;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-zinc-900">Experience</h2>

      <div className="flex gap-0">
        {/* Straight vertical line with dots */}
        <svg
          width={28}
          height={svgHeight}
          viewBox={`0 0 28 ${svgHeight}`}
          fill="none"
          className="shrink-0"
        >
          {/* Vertical line from first to last dot */}
          <line
            x1={CX}
            y1={PADDING_TOP}
            x2={CX}
            y2={PADDING_TOP + (experiences.length - 1) * ROW_HEIGHT}
            stroke="#d1d5db"
            strokeWidth={2}
            strokeLinecap="round"
          />
          {/* Dots for each experience */}
          {experiences.map((_, i) => (
            <circle
              key={i}
              cx={CX}
              cy={PADDING_TOP + i * ROW_HEIGHT}
              r={5}
              stroke="#d1d5db"
              strokeWidth={2}
              fill="white"
            />
          ))}
        </svg>

        {/* Experience list */}
        <div className="flex-1 flex flex-col pl-2">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4"
              style={{ height: ROW_HEIGHT, paddingTop: PADDING_TOP - 8 }}
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-zinc-900">{item.role}</span>
                <span className="text-xs text-zinc-500">{item.company}</span>
              </div>
              <span className="text-xs text-zinc-400 shrink-0">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
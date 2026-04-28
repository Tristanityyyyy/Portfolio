// src/components/TechStack.tsx
import Card from "@/components/ui/Card";

const techStack = {
  Frontend: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "PHP", ".NET", "MySQL", "C#", "Postman"],
  "Version Control": ["Git", "GitHub"],
};

export default function TechStack() {
  return (
    <Card className="p-5 h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Tech Stack</h2>
        <button className="text-xs text-zinc-400 hover:text-zinc-200 dark:text-zinc-500 dark:hover:text-zinc-300 flex items-center gap-1 shrink-0">
          View All →
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-4 mt-4">
        {Object.entries(techStack).map(([category, skills]) => (
          <div key={category} className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">{category}</span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm text-zinc-900 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 rounded-full hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
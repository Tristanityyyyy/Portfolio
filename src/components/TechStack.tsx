// src/components/TechStack.tsx

const techStack = {
  Frontend: ["JavaScript", "React", "Next.js", "Blazor", "Tailwind CSS"],
  Backend: ["Node.js", "PHP", ".NET", "MySQL", "C#", "Postman", "Swagger"],
  "DevOps & Cloud": ["Git", "GitHub"],
};

export default function TechStack() {
  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-zinc-900">Tech Stack</h2>
        <button className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-800 transition-colors">
          View All
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-4">
        {Object.entries(techStack).map(([category, skills]) => (
          <div key={category} className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-900">{category}</span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm text-zinc-900 border border-zinc-200 rounded-full hover:border-zinc-400 hover:text-zinc-900 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
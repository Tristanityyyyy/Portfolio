// src/components/ProjectCard.tsx

interface Project {
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  { title: "Task Management App", description: "A simple task management application built with React and Node.js", url: "project-one.com" },
  { title: "AOPC Content Management System", description: "A content management system for the AOPC organization", url: "project-two.com" },
  { title: "Teacher's Report Management System", description: "A system for managing and generating teacher reports", url: "project-three.com" },
  { title: "Web Scraper Extension", description: "A web scraper built with next.js", url: "project-four.com" }
];

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-zinc-900">Recent Projects</h2>
        <a href="/projects" className="text-xs text-zinc-400 hover:text-zinc-700 flex items-center gap-1">
          View All →
        </a>
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-3">
        {projects.map((project) => (
            <a
            key={project.title}
            href={`https://${project.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1.5 p-4 rounded-xl
              border border-zinc-200 bg-white
              hover:border-zinc-400 hover:shadow-sm
              transition-all duration-150"
          >
            <span className="text-sm font-bold text-zinc-900">{project.title}</span>
            <span className="text-xs text-zinc-500">{project.description}</span>
            <span className="text-[11px] font-mono text-zinc-400 bg-zinc-100 
              px-2 py-0.5 rounded-md w-fit mt-1">
              {project.url}
            </span>
          </a>
        ))}
      </div>

    </div>
  );
}
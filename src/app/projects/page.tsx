import Link from "next/link";

interface Project {
  title: string;
  description: string;
  url: string;
  tech?: string[];
}

const allProjects: Project[] = [
  { 
    title: "Task Management App", 
    description: "A simple task management application built with React and Node.js", 
    url: "http://ec2-52-77-117-213.ap-southeast-1.compute.amazonaws.com:1014/",
    tech: ["React", "Node.js", "AWS"]
  },
  { 
    title: "AOPC Content Management System", 
    description: "A content management system for the AOPC organization", 
    url: "github.com/Tristanityyyyy/AOPC",
    tech: ["Next.js", "Database"]
  },
  { 
    title: "Teacher's Report Management System", 
    description: "A system for managing and generating teacher reports", 
    url: "terms.kiri8tives.com/",
    tech: ["Web Development", "Database"]
  },
  { 
    title: "Web Scraper Extension", 
    description: "A web scraper built with next.js", 
    url: "github.com/Tristanityyyyy/WebScraper",
    tech: ["Next.js", "Web Scraping"]
  }
];

export default function ProjectsPage() {
  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col gap-6 py-6 px-4 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="flex items-center gap-4">
        <Link 
          href="/"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">All Projects</h1>
      </div>

      <div className="grid gap-6">
        {allProjects.map((project, i) => (
          <a
            key={i}
            href={project.url.startsWith('http') ? project.url : `https://${project.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded-lg group"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
            </div>

            {project.tech && (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">
                {project.url}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                className="shrink-0 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
              >
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
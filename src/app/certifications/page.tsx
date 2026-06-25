import Link from "next/link";

const allCertifications = [
  { title: "Claude 101", issuer: "Anthropic", pdf: "/certifications/Claude101.pdf" },
  { title: "Java Fundamentals 1", issuer: "Oracle Academy", pdf: "/certifications/JavaCertificate1.pdf" },
  { title: "Java Fundamentals 2", issuer: "Oracle Academy", pdf: "/certifications/JavaCertificate2.pdf" },
  { title: "Claude Code 101", issuer: "Anthropic", pdf: "/certifications/ClaudeCode101.pdf" },
  { title: "Systems Administration and Maintenance", issuer: "STI College Balagtas", pdf: "/certifications/SystemsAdminCertificate.pdf" }
];

export default function CertificationsPage() {
  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col gap-6 py-6 px-4 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="flex items-center gap-4">
        <Link 
          href="/"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">All Certifications</h1>
      </div>

      <div className="grid gap-4">
        {allCertifications.map((cert, i) => (
          <a
            key={i}
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded-lg group"
          >
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                {cert.title}
              </span>
              <span className="text-sm text-zinc-500">{cert.issuer}</span>
            </div>

            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              className="shrink-0 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
            >
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </div>
    </main>
  );
}
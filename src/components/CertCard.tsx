// src/components/CertCard.tsx
"use client";
import Card from "@/components/ui/Card";

const certifications = [
  { title: "Java Fundamentals 1", issuer: "Oracle Academy", pdf: "/certifications/SystemAdCertificate.pdf" },
  { title: "Java Fundamentals 2", issuer: "Oracle Academy", pdf: "/certifications/JavaCertificate1.pdf" },
  { title: "Systems Administration and Maintenance", issuer: "STI College Balagtas", pdf: "/certifications/JavaCertificate2.pdf" }
];

export default function CertCard() {
  return (
    <Card className="p-5 h-full">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Recent Certifications</h2>
        <button className="text-xs text-zinc-400 hover:text-zinc-200 dark:text-zinc-500 dark:hover:text-zinc-300 flex items-center gap-1 shrink-0">
          View All →
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {certifications.map((cert, i) => (
          <a
            key={i}
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 p-3 bg-zinc-100 dark:bg-zinc-950 group cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-950 transition-colors rounded-none"
          >
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                {cert.title}
              </span>
              <span className="text-xs text-zinc-500">{cert.issuer}</span>
            </div>

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="shrink-0 text-zinc-300 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors"
            >
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </div>
    </Card>
  );
}
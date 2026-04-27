
"use client";
import { Mail, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section className="w-full">
      {/* Profile Row */}
      <div className="flex flex-col sm:flex-row items-start gap-6">
 
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-50 sm:h-50 rounded-2xl overflow-hidden shadow-sm">
            {/* Replace src with your actual photo in /public/profile.png */}
            <img
              src="/profile-tristan.png"
              alt="Tristan Labjata"
              className="w-full h-full object-cover object-top"
            />
            {/* Fallback initials — shown only when image fails */}
          </div>
 
          {/* Online dot */}
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
        </div>
 
        {/* Info */}
        <div className="flex flex-col sm:mt-10 gap-1.5 flex-1 min-w-0">
          {/* Name + Dark mode toggle */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight leading-none">
              Tristan Labjata
            </h1>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle dark mode"
                className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                  theme === "dark" ? "bg-zinc-700" : "bg-zinc-200"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 flex items-center justify-center ${
                    theme === "dark" ? "translate-x-5" : "translate-x-0"
                  }`}
                >
                  {theme === "dark" ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                  )}
                </span>
              </button>
            )}
          </div>
 
          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
            <MapPin size={13} />
            <span>Quezon City, Philippines</span>
          </div>
 
          {/* Role */}
          <p className="text-lg font-normal text-zinc-700 dark:text-zinc-300">
            Backend Developer \ Full-stack Developer \ UI \ UX
          </p>
 
          {/* Action Buttons */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {/* Email button — filled */}
            <a
              href="mailto:labjatatristan@gmail.com"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg
                bg-zinc-900 text-white text-md font-semibold
                hover:bg-zinc-700 hover:-translate-y-0.5 transition-all duration-150
                shadow-sm"
            >
              <Mail size={14} />
              Send Email
            </a>
 
            {/* GitHub button — outlined */}
            <a
              href="https://github.com/Tristanityyyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg
                border border-zinc-200 text-zinc-700 text-md font-semibold
                hover:border-zinc-400 hover:text-zinc-900 hover:-translate-y-0.5
                transition-all duration-150 bg-white shadow-sm"
            >
              {/* GitHub SVG */}
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
 
      {/* Divider */}
      <div className="mt-8 border-t border-zinc-100" />
    </section>
  );
}
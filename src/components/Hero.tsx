
"use client";
import { Mail, MapPin } from "lucide-react";
 
export default function Hero() {
  return (
    <section className="w-full">
      {/* Profile Row */}
      <div className="flex items-start gap-8">
 
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-50 h-50 rounded-2xl overflow-hidden shadow-sm">
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
        <div className="flex flex-col mt-10 gap-1.5 flex-1 min-w-0">
          {/* Name */}
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight leading-none">
            Tristan Labjata
          </h1>
 
          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-zinc-900">
            <MapPin size={13} />
            <span>Quezon City, Philippines</span>
          </div>
 
          {/* Role */}
          <p className="text-lg font-normal">
            Backend Developer \ Full-stack Developer \ UI \ UX
          </p>
 
          {/* Action Buttons */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {/* Email button — filled */}
            <a
              href="mailto:labjatatristan@gmail.com"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg
                bg-zinc-900 text-white text-md font-semibold
                hover:bg-zinc-700 transition-colors duration-150
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
                hover:border-zinc-400 hover:text-zinc-900
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
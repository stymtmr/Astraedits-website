"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              AstraEdits
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <Link
                href="#how-it-works"
                className="relative text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 group"
              >
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#projects"
                className="relative text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/portfolio"
                className="relative text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#testimonials"
                className="relative text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 group"
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="relative text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

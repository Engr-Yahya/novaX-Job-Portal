import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

// ---- Inline SVG Icons (no external icon dependency) -----------------------
const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const BriefcaseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 3H8v4h8V3Z" />
  </svg>
);

const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const MapPinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ---- Component ------------------------------------------------------------
export const HeroSection = ({ onSearch }) => {
  const prefersReducedMotion = useReducedMotion();
  const [query, setQuery] = useState("");
  const [loc, setLoc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof onSearch === "function") {
      onSearch(query.trim(), loc.trim());
    } else {
      // Temporary fallback — replace with router push or search logic
      // eslint-disable-next-line no-console
      console.log("Search submitted:", { query, loc });
    }
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen w-full flex items-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950"
    >
      {/* Decorative floating blobs ------------------------------------------------ */}
      {!prefersReducedMotion && (
        <>
          <motion.span
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl"
            aria-hidden="true"
            animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
            aria-hidden="true"
            animate={{ y: [0, -25, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl"
            aria-hidden="true"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Content Wrapper --------------------------------------------------------- */}
      <motion.div
        className="relative z-10 w-full mx-auto max-w-7xl flex flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:px-8 md:flex-row md:gap-16"
        variants={containerStagger}
        initial="hidden"
        animate="visible"
      >
        {/* --- Left: Copy ---------------------------------------------------- */}
        <motion.div
          className="w-full text-center md:text-left md:w-1/2"
          variants={fadeLeft}
        >
          <motion.h1
            className="font-bold tracking-tight text-gray-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl"
            variants={fadeUp(0.1)}
          >
            NovaXccelerate
          </motion.h1>

          <motion.p
            className="mt-4 text-xl sm:text-2xl max-w-xl mx-auto md:mx-0 text-indigo-600 dark:text-indigo-300"
            variants={fadeUp(0.25)}
          >
            Accelerating Ideas Into Innovation
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300 text-base sm:text-lg"
            variants={fadeUp(0.4)}
          >
            Welcome! Discover opportunities that match your passion. Post jobs, find top talent, and turn visionary ideas into real-world impact.
          </motion.p>

          {/* CTA Buttons ------------------------------------------------------ */}
          <motion.div
            className="mt-8 flex justify-center md:justify-start gap-4"
            variants={fadeUp(0.55)}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            ><Link
              to="/get-started"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
                Get Started
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.a
              href="#jobs"
              className="inline-flex items-center gap-2 rounded-md border border-indigo-600 px-8 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Browse Jobs
              <BriefcaseIcon className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Search Bar ------------------------------------------------------- */}
          <motion.div
            className="mt-10 max-w-xl mx-auto md:mx-0 w-full"
            variants={fadeUp(0.7)}
          >
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-5 gap-3"
              aria-label="Quick job search"
            >
              {/* Job Query */}
              <div className="relative col-span-1 sm:col-span-2">
                <label htmlFor="hero-job-query" className="sr-only">
                  Job title or keywords
                </label>
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <SearchIcon className="h-4 w-4" />
                </span>
                <input
                  id="hero-job-query"
                  type="text"
                  placeholder="Job title, keywords..."
                  aria-label="Job title or keywords"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-white pl-9 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm sm:text-base"
                />
              </div>

              {/* Location */}
              <div className="relative col-span-1 sm:col-span-2">
                <label htmlFor="hero-job-loc" className="sr-only">
                  Location
                </label>
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                <input
                  id="hero-job-loc"
                  type="text"
                  placeholder="City, country..."
                  aria-label="Location"
                  value={loc}
                  onChange={(e) => setLoc(e.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-white pl-9 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm sm:text-base"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="col-span-1 w-full rounded-md bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <SearchIcon className="h-4 w-4" />
                Search
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* --- Right: Illustration / Stats Placeholder ---------------------- */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeRight}
        >
          <div className="relative aspect-square w-72 sm:w-96 md:w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-xl flex items-center justify-center text-center p-6">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-300">Find Your Next Role</p>
                <p className="mt-3 text-gray-600 dark:text-gray-300">Thousands of jobs. Smart matching. Fast.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative background grid ---------------------------------------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg
          className="absolute left-1/2 top-0 h-[40rem] w-[80rem] -translate-x-1/2 stroke-indigo-200/40 dark:stroke-indigo-800/40"
          fill="none"
        >
          <defs>
            <pattern id="nvxGrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M.5 32V.5H32" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke="none" fill="url(#nvxGrid)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
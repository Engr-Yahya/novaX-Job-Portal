import React from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------
 * AboutUs (Improved)
 * ------------------------------------------------------------------
 * Enhancements:
 * 1. Framer Motion fade-up animations for headings and paragraphs.
 * 2. Added a 3-column "Our Values" section (Mission, Vision, Values).
 * 3. Improved spacing and responsive typography.
 * 4. Optional decorative SVG or gradient accent behind heading.
 * 5. Dark-mode refinements.
 * ------------------------------------------------------------------ */

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const AboutUs = () => (
  <section
    id="about"
    className="relative bg-white dark:bg-slate-900 py-16 sm:py-20 md:py-24 border-t border-gray-200 dark:border-slate-700 overflow-hidden"
  >
    {/* Decorative Background */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-indigo-200/30 dark:bg-indigo-800/20 blur-3xl" />
    </div>

    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp(0.1)}
      >
        About NovaXccelerate
      </motion.h2>

      <motion.p
        className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp(0.3)}
      >
        NovaXccelerate is an innovation-driven job and talent platform that connects startups, scaleups, and growing companies with top talent. Our mission is to bring great ideas to the right people.
      </motion.p>

      <motion.p
        className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp(0.5)}
      >
        Our future roadmap includes AI-powered skill matching, mentorship networks, and global remote hiring tools to ensure that every ambitious professional gets equal opportunities wherever they are.
      </motion.p>

      {/* Values Section */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Mission",
            text: "Empowering innovators and professionals to collaborate seamlessly, driving rapid growth and success.",
          },
          {
            title: "Vision",
            text: "To become the global hub where ideas meet talent, creating an ecosystem of innovation without boundaries.",
          },
          {
            title: "Values",
            text: "Transparency, inclusivity, and continuous learning guide every aspect of NovaXccelerate's journey.",
          },
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            className="rounded-xl bg-gray-50 dark:bg-slate-800 p-6 shadow hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp(0.6 + idx * 0.2)}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;
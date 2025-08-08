import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// === Icons (Same Style as HeroSection) ===
const BriefcaseIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 3H8v4h8V3Z" />
  </svg>
);

const UserIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const GetStarted = () => {
  const navigate = useNavigate();

  const options = [
    {
      label: "I'm a Job Seeker",
      description: "Find jobs that match your skills and passion.",
      target: "/register/jobseeker",
      icon: <UserIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-300" />,
    },
    {
      label: "I'm an Employer",
      description: "Post job listings and find top talent.",
      target: "/register/employer",
      icon: <BriefcaseIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-300" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-100 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          How do you want to get started?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {options.map((opt, idx) => (
            <motion.div
              key={opt.label}
              onClick={() => navigate(opt.target)}
              className="cursor-pointer rounded-xl p-8 min-h-[220px] bg-white dark:bg-slate-800 shadow hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700 flex flex-col justify-center items-center text-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.2, duration: 0.6 }}
            >
              {opt.icon}
              <h3 className="mt-4 text-xl font-semibold text-indigo-600 dark:text-indigo-300">
                {opt.label}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {opt.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    // Only allow known domains
    const validDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com"];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      const domain = email.split("@")[1];
      if (!validDomains.includes(domain)) {
        setEmailError("Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      return;
    }

    console.log("Login Submitted:", form);
    // TODO: Add real authentication logic
    navigate("/employer/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-slate-900 dark:to-slate-950 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 sm:p-10"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-300 mb-6">
          Employer Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
              className={`w-full rounded-lg border ${
                emailError ? "border-red-500" : "border-gray-300 dark:border-slate-600"
              } dark:bg-slate-700 dark:text-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white px-4 py-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2">
              <span
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-indigo-600 dark:text-indigo-300 hover:underline cursor-pointer"
              >
                Forgot Password?
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </section>
  );
};

/* Icons */
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.89-11-8a11.54 11.54 0 012.176-3.22M3 3l18 18M17.94 17.94A10.97 10.97 0 0112 20c-5 0-9.27-3.89-11-8 .74-1.78 1.88-3.4 3.26-4.71m3.1-2.22A10.96 10.96 0 0112 4c5 0 9.27 3.89 11 8-1.07 2.58-2.89 4.87-5.06 6.32" />
  </svg>
);

export default Signin;

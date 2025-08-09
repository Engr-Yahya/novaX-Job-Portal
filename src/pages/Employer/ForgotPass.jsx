import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ForgotPass() {
  const [form, setForm] = useState({ email: "" });
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      validateEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) return;

    // Simulate sending reset link
    setSuccessMessage("If this email is registered, a reset link has been sent.");
    setForm({ email: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-slate-900 dark:to-slate-950 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md p-8"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className={`w-full rounded-lg border ${
                emailError ? "border-red-500" : "border-gray-300 dark:border-slate-600"
              } dark:bg-slate-700 dark:text-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Send Reset Link
          </motion.button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-500 text-center mt-4 text-sm">{successMessage}</p>
        )}
      </motion.div>
    </div>
  );
}

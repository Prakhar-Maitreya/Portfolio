"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

export default function Button({ children, variant = "primary", className, ...props }) {
  const base =
    "relative inline-flex items-center justify-center px-7 py-2.5 font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0f1a] text-sm";

  const variants = {
    primary:   "bg-blue-600 hover:bg-blue-500 text-white",
    secondary: "bg-white/5 border border-white/10 hover:bg-white/10 text-white",
    outline:   "border border-blue-500 text-blue-400 hover:bg-blue-500/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

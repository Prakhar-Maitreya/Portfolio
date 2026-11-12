"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function AnimatedCard({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className={clsx(
        "bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

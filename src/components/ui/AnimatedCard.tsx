"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={clsx(
        "glass glass-hover rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group hover-shake",
        className
      )}
    >
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Neon border glow effect on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-neon-cyan/30 rounded-2xl transition-all duration-300 pointer-events-none box-glow opacity-0 group-hover:opacity-100" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

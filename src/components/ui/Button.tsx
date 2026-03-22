"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden rounded-full transition-all hover-shake focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-background";
  
  const variants = {
    primary: "bg-neon-cyan text-background hover:bg-neon-cyan/90 hover:box-glow",
    secondary: "glass text-white glass-hover hover:border-neon-purple/50",
    outline: "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:box-glow",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Glossy overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
    </motion.button>
  );
}

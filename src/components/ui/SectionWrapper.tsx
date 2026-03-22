"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({ id, children, className, title, subtitle }: SectionWrapperProps) {
  return (
    <section id={id} className={clsx("min-h-screen py-24 flex flex-col justify-center relative", className)}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                {title.split(" ").map((word, i, arr) => (
                  <span key={i} className={i === arr.length - 1 ? "text-neon-cyan text-glow" : "text-white"}>
                    {word}{" "}
                  </span>
                ))}
              </h2>
            )}
            {subtitle && <p className="text-gray-400 max-w-2xl text-lg">{subtitle}</p>}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

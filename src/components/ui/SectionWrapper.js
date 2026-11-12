"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function SectionWrapper({ id, children, className, title, subtitle }) {
  return (
    <section id={id} className={clsx("py-24 relative", className)}>
      {/* Subtle background dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-white">
                {title}
                <span className="block w-12 h-1 bg-blue-500 mt-3 rounded-full" />
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-400 max-w-2xl text-base leading-relaxed mt-4">{subtitle}</p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

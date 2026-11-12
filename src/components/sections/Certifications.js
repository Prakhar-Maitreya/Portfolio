"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Python Django Development",
    issuer: "CipherSchools",
    date: "July 2025",
    color: "blue",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera (Google)",
    date: "September 2024",
    color: "indigo",
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera",
    date: "September 2024",
    color: "violet",
  },
];

const colorMap = {
  blue:   { icon: "bg-blue-500/10 text-blue-400 border-blue-500/20",   badge: "text-blue-400"   },
  indigo: { icon: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", badge: "text-indigo-400" },
  violet: { icon: "bg-violet-500/10 text-violet-400 border-violet-500/20", badge: "text-violet-400" },
};

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Verified learning from recognised platforms."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          const c = colorMap[cert.color];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div
                className={`p-2.5 rounded-lg border shrink-0 ${c.icon}`}
              >
                <Award size={18} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-sm leading-snug mb-1 group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-500 text-xs">{cert.issuer}</p>
                <p className={`text-xs font-medium mt-1.5 ${c.badge}`}>{cert.date}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

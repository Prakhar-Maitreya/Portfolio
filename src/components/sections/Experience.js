"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { BookOpen, Code2 } from "lucide-react";

const experience = [
  {
    role: "Full Stack Development Trainee",
    org: "CipherSchools",
    period: "May 2025 – July 2025",
    type: "Training Programme",
    icon: <BookOpen size={18} />,
    color: "blue",
    description:
      "Completed a structured full-stack web development training programme at CipherSchools. Gained hands-on experience with the Django MVT architecture, database models and ORM, authentication, and responsive web development using HTML, CSS and Python.",
    highlights: [
      "Built a complete Employee Management System as the practical project for the programme",
      "Implemented role-based authentication, CRUD operations, and department management",
      "Learned Django ORM, model relationships, Crispy Forms, and SMTP email integration",
      "Applied responsive design using Django templates and Bootstrap",
    ],
    note: "The Employee Management System (Employee Portal) was developed as the practical project component of this training — not a separate internship or independent employment engagement.",
  },
];

const colorConfig = {
  blue: {
    icon: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    dot: "bg-blue-400",
    line: "border-blue-500/20",
  },
};

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Training & Experience"
      subtitle="Structured learning and practical development work."
    >
      <div className="space-y-6">
        {experience.map((item, index) => {
          const c = colorConfig[item.color];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/[0.03] border ${c.line} rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${c.icon}`}
                >
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                      <p className="text-blue-400 text-sm font-medium">{item.org}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="text-slate-400 text-xs">{item.period}</span>
                      <span
                        className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full border ${c.badge}`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mt-3 mb-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 shrink-0`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Clarification note */}
                  {item.note && (
                    <div className="mt-4 p-3 rounded-lg bg-blue-500/5 border border-blue-500/15">
                      <p className="text-xs text-slate-500 leading-relaxed">
                        <span className="text-blue-400 font-medium">Note: </span>
                        {item.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

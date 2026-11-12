"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Server, Database, Shield } from "lucide-react";

const projects = [
  {
    title: "Library Management REST API",
    badge: "Primary Project",
    badgeColor: "blue",
    description:
      "A backend Library Management System built with Java and Spring Boot for managing books, authors, categories, and library users through a RESTful API.",
    longDesc:
      "Designed and implemented a structured backend application using Spring Boot. Modeled the domain with Spring Data JPA and Hibernate, covering relational entity mapping and database persistence. Provides complete CRUD operations through RESTful endpoints following standard HTTP conventions.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate"],
    github: "https://github.com/Prakhar-Maitreya/Library-Management-System",
    features: [
      { icon: <Server size={14} />, text: "RESTful API with CRUD endpoints" },
      { icon: <Database size={14} />, text: "Spring Data JPA & Hibernate ORM" },
      { icon: <Shield size={14} />, text: "Layered service-oriented architecture" },
    ],
    image: null, // No screenshot available; use generated placeholder
  },
  {
    title: "Employee Management System",
    badge: "CipherSchools Training Project",
    badgeColor: "emerald",
    description:
      "A Django-based employee portal developed during CipherSchools Full Stack Development Training. Supports role-based access, CRUD operations, and department management.",
    longDesc:
      "Developed during CipherSchools training (June–July 2025) as a practical full-stack application. Implements Django MVT architecture with SQLite, Django ORM, and role-based authentication. Employees can view their own records; administrators can manage the full dataset.",
    tech: ["Python", "Django", "SQLite", "Bootstrap", "Crispy Forms"],
    github: "https://github.com/Prakhar-Maitreya/Employee-Portal-Cipherschools",
    features: [
      { icon: <Shield size={14} />, text: "Role-based authentication & access control" },
      { icon: <Database size={14} />, text: "Django ORM with SQLite" },
      { icon: <Server size={14} />, text: "SMTP email & responsive Bootstrap UI" },
    ],
    image: "/assets/project-employee.jpg",
  },
];

const badgeStyles = {
  blue:    "bg-blue-500/10 text-blue-400 border-blue-500/30",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Selected work demonstrating my experience with backend development, REST APIs and full-stack application design."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
          >
            {/* Project image / placeholder */}
            <div className="w-full h-44 bg-[#0d1424] border-b border-white/5 flex items-center justify-center overflow-hidden relative">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : null}
              {/* Code-style placeholder */}
              <div
                className={`absolute inset-0 flex flex-col items-start justify-end p-5 ${project.image ? "hidden" : "flex"}`}
                id={`placeholder-${index}`}
              >
                <div className="font-mono text-xs text-slate-600 space-y-1">
                  <div><span className="text-blue-500">@RestController</span></div>
                  <div><span className="text-indigo-400">public class</span> <span className="text-white">BookController</span> {"{"}</div>
                  <div className="pl-4"><span className="text-emerald-400">@GetMapping</span><span className="text-slate-500">(&quot;/books&quot;)</span></div>
                  <div className="pl-4"><span className="text-indigo-400">public</span> <span className="text-blue-300">List&lt;Book&gt;</span> <span className="text-white">getBooks</span>() {"{ ... }"}</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span
                    className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full border mb-2 ${badgeStyles[project.badgeColor]}`}
                  >
                    {project.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors shrink-0 mt-1"
                  aria-label="GitHub Repository"
                >
                  <Github size={18} />
                </a>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="text-blue-400 shrink-0">{f.icon}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-slate-400 bg-white/5 border border-white/8 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                <Github size={14} />
                View Repository
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

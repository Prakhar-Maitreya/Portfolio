"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import React, { useRef } from "react";

const projectsData = [
  {
    title: "Employee Portal",
    description: "A Django-based Employee Management System that helps manage employee data, roles, and departments. Includes a secure admin panel for managing records and a login system for employees.",
    tech: ["Django", "Python", "HTML", "CSS", "SQL"],
    github: "https://github.com/Prakhar-Maitreya",
    color: "neon-cyan",
    image: "/assets/project-employee.jpg", // Placeholder path for you to swap
  },
  {
    title: "Harvest Hub",
    description: "A mini-website designed to spread awareness about rainwater harvesting and sustainable water management. Provides information about methods, benefits, and implementation strategies.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Prakhar-Maitreya",
    color: "neon-green",
    image: "/assets/project-rainwater.png",
  },
  {
    title: "Sarojni - Myntra Clone",
    description: "A basic e-commerce website inspired by Myntra. Includes simple navigation, multiple product pages, and a footer with contact details, showcasing how to style an online shopping platform.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Prakhar-Maitreya",
    color: "neon-pink",
    image: "/assets/project-Sarojni.png",
  },
];

const TiltCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass h-full rounded-2xl p-6 relative group transition-all duration-200 ease-linear hover-shake"
      >
        <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-neon-cyan/50 transition-colors duration-300 pointer-events-none group-hover:box-glow" />
        
        {/* Glow behind card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/10 to-neon-purple/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: "translateZ(30px)" }}>
          {/* Project Image Placeholder */}
          <div className="w-full h-40 mb-6 rounded-xl overflow-hidden bg-white/5 border border-white/10 relative group-hover:border-neon-cyan/30 transition-colors shrink-0">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                // Fallback SVG if image doesn't exist yet
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' fill='%23555' text-anchor='middle' dy='.3em'%3EAdd Image to /public/assets/%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
            {project.tech.map((t: string) => (
              <span key={t} className="text-xs font-mono text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my recent work, showcasing my ability to build across the stack."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <TiltCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

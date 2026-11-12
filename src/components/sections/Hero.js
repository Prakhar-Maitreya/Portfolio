"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Software Engineering Intern",
  "Backend Developer",
  "API Builder",
  "Java & Python Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedRole === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && typedRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      setTypedRole((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 pb-10"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs font-medium tracking-wide">
                Open to Internship Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-blue-400">Prakhar Maitreya</span>
              <br />
              <span className="text-slate-200">Parashar</span>
            </h1>

            {/* Typewriter role */}
            <div className="text-xl md:text-2xl text-slate-400 font-medium h-[36px] mb-6 flex items-center">
              <span className="relative">
                {typedRole}
                <span
                  className="inline-block w-[2px] h-[1.1em] bg-blue-400 ml-0.5 align-middle"
                  style={{ animation: "blink 0.9s step-end infinite" }}
                />
              </span>
            </div>

            {/* Short intro */}
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl">
              Computer Science undergraduate at Lovely Professional University, building
              backend systems with <span className="text-slate-300 font-medium">Java / Spring Boot</span> and{" "}
              <span className="text-slate-300 font-medium">Python / Django</span>.
              Interested in REST APIs, software engineering fundamentals, and developer tooling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("/assets/PrakharMaitreyaParasharCV.pdf", "_blank")
                }
              >
                Download CV
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Prakhar-Maitreya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/prakhar-maitreya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:prakharw23@gmail.com"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Avatar ring */}
              <div className="w-56 h-56 xl:w-64 xl:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/20 relative">
                <Image
                  src="/assets/pfp.jpg"
                  alt="Prakhar Maitreya Parashar"
                  width={256}
                  height={256}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-5 -right-5 bg-[#111827] border border-white/10 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-slate-400 font-medium">Status</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white text-sm font-semibold">Seeking Internship</span>
                </div>
              </div>

              {/* Stack badge */}
              <div className="absolute -top-5 -left-5 bg-[#111827] border border-white/10 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-slate-400 font-medium">Primary Stack</p>
                <p className="text-white text-sm font-semibold mt-0.5">Java · Python · APIs</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

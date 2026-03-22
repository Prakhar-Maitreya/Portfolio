"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";

const roles = ["MERN Enthusiast", "C++ Specialist", "Full-Stack Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedRole === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
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
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-neon-cyan/30 glass mb-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-neon-cyan/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="text-neon-cyan text-sm font-medium tracking-wide">Welcome to my universe</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white leading-tight">
            Hi, I&apos;m <br />
            <span className="text-neon-cyan text-glow">Prakhar Maitreya Parashar</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 font-medium h-[40px] mb-8 flex items-center justify-center lg:justify-start">
            <span className="mr-2">I am a</span>
            <span className="text-neon-purple text-glow relative">
              {typedRole}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="absolute -right-1 top-0 bottom-0 w-[2px] bg-neon-purple"
              />
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </Button>
            <Button variant="outline" onClick={() => window.open("/assets/PrakharMaitreyaParasharCV.pdf", "_blank")}>
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center hidden md:flex"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-neon-cyan/20 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.1, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-neon-purple/30"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-8 rounded-full shadow-[0_0_50px_rgba(0,243,255,0.3)] overflow-hidden border-2 border-neon-cyan/50"
            >
              <img
                src="/assets/pfp.jpg"
                alt="Prakhar Maitreya Parashar"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

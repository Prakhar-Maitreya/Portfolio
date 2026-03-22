"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass py-4 shadow-[0_4px_30px_rgba(0,243,255,0.05)]" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold tracking-tighter text-glow group">
          <span className="text-white">pm</span>
          <span className="text-neon-cyan transition-colors duration-300 group-hover:text-neon-purple">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "relative text-sm font-medium transition-colors hover:text-neon-cyan hover-shake",
                activeSection === link.name.toLowerCase() ? "text-neon-cyan" : "text-gray-300"
              )}
            >
              {link.name}
              {activeSection === link.name.toLowerCase() && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-neon-cyan box-glow"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <a
            href="/assets/PrakharMaitreyaParasharCV.pdf"
            download
            className="px-5 py-2 rounded-full font-medium text-sm glass glass-hover text-white transition-all hover:scale-105 hover:box-glow border border-neon-cyan/30"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-neon-cyan transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass flex flex-col items-center py-6 gap-6 md:hidden border-b border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  "text-lg font-medium",
                  activeSection === link.name.toLowerCase() ? "text-neon-cyan" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/assets/PrakharMaitreyaParasharCV.pdf"
              download
              className="px-6 py-2 rounded-full text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/10"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

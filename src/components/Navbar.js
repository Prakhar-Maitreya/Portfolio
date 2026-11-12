"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home",           href: "#home" },
  { name: "About",          href: "#about" },
  { name: "Skills",         href: "#skills" },
  { name: "Projects",       href: "#projects" },
  { name: "Experience",     href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
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
        scrolled
          ? "bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-xl font-bold tracking-tight group">
          <span className="text-white">pm</span>
          <span className="text-blue-400 group-hover:text-indigo-400 transition-colors duration-200">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200 hover:text-blue-400",
                  activeSection === id ? "text-blue-400" : "text-slate-400"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="/assets/PrakharMaitreyaParasharCV.pdf"
            download
            className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d1424] border-t border-white/5">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    "text-base font-medium py-1",
                    activeSection === id ? "text-blue-400" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="/assets/PrakharMaitreyaParasharCV.pdf"
              download
              className="mt-2 px-4 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white text-center transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

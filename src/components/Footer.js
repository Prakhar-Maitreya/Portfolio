import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 mt-6">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div>
            <span className="text-white font-bold text-lg tracking-tight">pm</span>
            <span className="text-blue-400 font-bold text-lg tracking-tight">.dev</span>
            <p className="text-slate-500 text-xs mt-1">
              Designed and built by Prakhar Maitreya Parashar
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Prakhar-Maitreya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/prakhar-maitreya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:prakharw23@gmail.com"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-xs">
            &copy; {year} Prakhar Maitreya Parashar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

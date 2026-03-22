import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Timeline from "@/components/sections/Timeline";
import GithubCarousel from "@/components/sections/GithubCarousel";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Timeline />
      <GithubCarousel />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10 glass mt-24">
        <p className="text-gray-400">
          Designed and Built by <span className="text-neon-cyan font-medium">Prakhar Maitreya Parashar</span>
        </p>
      </footer>
    </div>
  );
}

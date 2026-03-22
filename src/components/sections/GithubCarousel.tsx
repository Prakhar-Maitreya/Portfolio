"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, GitBranch, Github as GithubIcon } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

export default function GithubCarousel() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Prakhar-Maitreya/repos?sort=updated&per_page=6");
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          // Fallback data if rate limited
          setRepos([
            { id: 1, name: "Employee-Portal", description: "Django based employee management system.", stargazers_count: 2, language: "Python", html_url: "#" },
            { id: 2, name: "Harvest-Hub", description: "Rainwater harvesting awareness website.", stargazers_count: 1, language: "HTML", html_url: "#" },
            { id: 3, name: "Sarojni", description: "Minimalistic Myntra inspired e-commerce UI.", stargazers_count: 3, language: "JavaScript", html_url: "#" },
            { id: 4, name: "Portfolio", description: "Modern Next.js Framer Motion portfolio.", stargazers_count: 5, language: "TypeScript", html_url: "#" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <SectionWrapper
      id="github"
      title="Open Source"
      subtitle="A glimpse into my latest GitHub repositories and contributions."
      className="pb-0" // Let the carousel handle bottom spacing
    >
      <div ref={targetRef} className="h-[200vh] relative mt-16">
        <div className="sticky top-1/4 h-[500px] flex items-center overflow-hidden">
          
          {loading ? (
            <div className="w-full flex justify-center text-neon-cyan/50 animate-pulse">Loading repositories...</div>
          ) : (
            <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-0">
              {repos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[300px] md:w-[400px] h-[250px] shrink-0 glass glass-hover rounded-2xl p-8 flex flex-col relative group border border-white/5 hover:border-neon-cyan/50 transition-colors duration-300"
                >
                  <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:text-neon-cyan/20 transition-colors duration-500">
                    <GithubIcon size={100} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan truncate z-10">{repo.name}</h3>
                  <p className="text-gray-400 mt-2 line-clamp-3 flex-grow z-10">{repo.description || "No description provided."}</p>
                  
                  <div className="flex items-center gap-6 mt-6 z-10">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-neon-cyan box-glow" />
                        <span className="text-sm font-medium text-gray-300">{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                      <Star size={16} />
                      <span className="text-sm font-medium">{repo.stargazers_count}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}

        </div>
      </div>
    </SectionWrapper>
  );
}

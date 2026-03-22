"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCard from "@/components/ui/AnimatedCard";

const skillsData = [
  {
    category: "Languages",
    color: "neon-cyan",
    items: ["C++", "Python", "C", "Java", "SQL", "MongoDB"],
  },
  {
    category: "Frameworks / Web",
    color: "neon-purple",
    items: ["HTML", "CSS", "Django", "Node.js", "Next.js", "Tailwind"],
  },
  {
    category: "Tools & Platforms",
    color: "neon-blue",
    items: ["Linux", "Bash", "Shell Scripting", "AWS", "Git", "GitHub"],
  },
  {
    category: "Soft Skills",
    color: "neon-pink",
    items: ["Problem Solving", "Teamwork", "Adaptability", "Communication"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills & Expertise"
      subtitle="A breakdown of the tools, technologies, and languages I use to build digital experiences."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skillGroup, index) => {
          // Dynamic color classes based on the assigned color name
          const colorClassMap: Record<string, string> = {
            "neon-cyan": "text-[#00f3ff] border-[#00f3ff]/30 bg-[#00f3ff]/5",
            "neon-purple": "text-[#b026ff] border-[#b026ff]/30 bg-[#b026ff]/5",
            "neon-blue": "text-[#0055ff] border-[#0055ff]/30 bg-[#0055ff]/5",
            "neon-pink": "text-[#ff00c8] border-[#ff00c8]/30 bg-[#ff00c8]/5",
          };
          
          return (
            <AnimatedCard key={skillGroup.category} delay={index * 0.1}>
              <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${colorClassMap[skillGroup.color].split(" ")[1]}`}>
                <span className={colorClassMap[skillGroup.color].split(" ")[0].replace("text-[", "").replace("]", "") === "text" ? "" : colorClassMap[skillGroup.color].split(" ")[0]}>
                  {skillGroup.category}
                </span>
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm font-medium rounded-full glass border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

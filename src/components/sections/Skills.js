"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCard from "@/components/ui/AnimatedCard";

const skillsData = [
  {
    category: "Programming Languages",
    color: "blue",
    items: ["Java", "Python", "C++", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & Technologies",
    color: "indigo",
    items: ["Spring Boot", "Spring Data JPA", "Hibernate", "Django", "React.js", "JUnit"],
  },
  {
    category: "Developer Tools",
    color: "emerald",
    items: ["Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "VS Code", "AWS"],
  },
  {
    category: "Core Concepts",
    color: "violet",
    items: [
      "Object-Oriented Programming",
      "REST APIs",
      "DBMS",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Unit Testing",
    ],
  },
];

const colorMap = {
  blue:    { dot: "bg-blue-400",    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",    heading: "text-blue-400"    },
  indigo:  { dot: "bg-indigo-400",  badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",  heading: "text-indigo-400"  },
  emerald: { dot: "bg-emerald-400", badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20", heading: "text-emerald-400" },
  violet:  { dot: "bg-violet-400",  badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",  heading: "text-violet-400"  },
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="Languages, frameworks, tools and concepts I work with."
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {skillsData.map((group, i) => {
          const c = colorMap[group.color];
          return (
            <AnimatedCard key={group.category} delay={i * 0.08}>
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                <h3 className={`text-sm font-semibold uppercase tracking-widest ${c.heading}`}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${c.badge}`}
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

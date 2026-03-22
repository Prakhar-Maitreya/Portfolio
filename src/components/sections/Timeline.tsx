"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { Trophy, Code2, Users } from "lucide-react";

const events = [
  {
    title: "WEBका HACKATHON",
    organization: "Team Seven",
    icon: <Code2 size={20} />,
    color: "neon-cyan",
  },
  {
    title: "JioGames Hackathon",
    organization: "Jio",
    icon: <Trophy size={20} />,
    color: "neon-purple",
  },
  {
    title: "Theory of Computation Seminar",
    organization: "Academic",
    icon: <Users size={20} />,
    color: "neon-blue",
  },
];

export default function Timeline() {
  return (
    <SectionWrapper
      id="experience"
      title="Hackathons & Achievements"
      subtitle="My active participation in competitive programming, hackathons, and technical seminars."
    >
      <div className="relative max-w-3xl mx-auto mt-12">
        {/* Animated vertical stem line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-blue rounded-full origin-top opacity-30 transform md:-translate-x-1/2"
        />

        <div className="space-y-12">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            const colorClassMap: Record<string, string> = {
              "neon-cyan": "text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10 shadow-[0_0_15px_rgba(0,243,255,0.5)]",
              "neon-purple": "text-neon-purple border-neon-purple/30 bg-neon-purple/10 shadow-[0_0_15px_rgba(176,38,255,0.5)]",
              "neon-blue": "text-neon-blue border-neon-blue/30 bg-neon-blue/10 shadow-[0_0_15px_rgba(0,85,255,0.5)]",
            };

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                
                {/* Node marker */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`absolute left-8 md:left-1/2 w-10 h-10 rounded-full border-2 flex items-center justify-center transform -translate-x-1/2 z-10 ${colorClassMap[event.color]}`}
                >
                  {event.icon}
                </motion.div>

                {/* Content card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`ml-20 md:ml-0 md:w-5/12 glass glass-hover p-6 rounded-2xl relative border border-white/5 hover:border-${event.color}/50 group ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}
                >
                  {/* Neon border glow effect on hover */}
                  <div className={`absolute inset-0 border border-transparent group-hover:border-${event.color}/50 rounded-2xl transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100 ${colorClassMap[event.color].split(' ').pop()}`} />

                  <h3 className="text-xl font-bold text-white group-hover:text-glow transition-all">{event.title}</h3>
                  <p className="text-gray-400 mt-2 font-medium">{event.organization}</p>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { GraduationCap, Target, BookOpen } from "lucide-react";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Driven by curiosity, fueled by code. Here's a quick look at my academic journey and career goals."
    >
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Career Objective */}
        <AnimatedCard delay={0.1} className="md:col-span-3 lg:col-span-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Career Objective</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            As an aspiring Full Stack Developer, I aim to leverage my skills in MERN and C++ to build robust, scalable, and visually compelling applications that solve real-world problems.
          </p>
        </AnimatedCard>

        {/* Current Education */}
        <AnimatedCard delay={0.2} className="md:col-span-1 lg:col-span-1 border-neon-purple/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Current Degree</h3>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-lg text-white">B.Tech CSE</p>
            <p className="text-neon-cyan">Lovely Professional University</p>
            <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 mt-2">
              <span className="text-gray-400 text-sm">CGPA: </span>
              <span className="text-white font-bold">7.63</span>
            </div>
          </div>
        </AnimatedCard>

        {/* Academic History */}
        <AnimatedCard delay={0.3} className="md:col-span-1 lg:col-span-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-neon-blue/10 text-neon-blue">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Academic History</h3>
          </div>
          <div className="space-y-4">
            <div className="relative pl-4 border-l-2 border-neon-blue/30">
              <div className="absolute w-2 h-2 rounded-full bg-neon-blue -left-[5px] top-1.5 box-glow" />
              <p className="font-semibold text-white">Intermediate (12th)</p>
              <p className="text-gray-400 text-sm">Ryan International School</p>
              <p className="text-neon-cyan font-medium text-sm mt-1">68.6%</p>
            </div>
            <div className="relative pl-4 border-l-2 border-neon-blue/30">
              <div className="absolute w-2 h-2 rounded-full bg-neon-blue -left-[5px] top-1.5 box-glow" />
              <p className="font-semibold text-white">Matriculation (10th)</p>
              <p className="text-gray-400 text-sm">Ryan International School</p>
              <p className="text-neon-cyan font-medium text-sm mt-1">86.8%</p>
            </div>
          </div>
        </AnimatedCard>

      </div>
    </SectionWrapper>
  );
}

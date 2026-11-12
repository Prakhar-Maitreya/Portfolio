"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { GraduationCap, Target, BookOpen } from "lucide-react";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A brief overview of who I am, where I study, and what drives me."
    >
      <div className="grid md:grid-cols-3 gap-6">

        {/* Career Objective */}
        <AnimatedCard delay={0.0} className="md:col-span-3 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
              <Target size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white">Career Objective</h3>
          </div>
          <p className="text-slate-400 leading-relaxed text-sm">
            I am a Computer Science undergraduate passionate about software engineering,
            backend development, and building practical applications. I enjoy working
            with Java and Python to design RESTful APIs, model data, and develop
            service-oriented architectures. I am actively seeking a software engineering
            internship where I can contribute meaningfully and grow as an engineer.
          </p>
        </AnimatedCard>

        {/* Current Education */}
        <AnimatedCard delay={0.1} className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white">Education</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-white text-base">B.Tech CSE</p>
              <p className="text-blue-400 text-sm mt-0.5">Lovely Professional University</p>
              <p className="text-slate-500 text-xs mt-1">2023 – 2027</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
              <span className="text-slate-400 text-xs">CGPA</span>
              <span className="text-white font-bold text-sm">7.55</span>
            </div>
          </div>
        </AnimatedCard>

        {/* Previous Schooling */}
        <AnimatedCard delay={0.2} className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <BookOpen size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white">Prior Schooling</h3>
          </div>
          <div className="space-y-4">
            <div className="relative pl-4 border-l border-slate-700">
              <div className="absolute w-2 h-2 rounded-full bg-blue-400 -left-[5px] top-1.5" />
              <p className="font-medium text-white text-sm">Intermediate (12th)</p>
              <p className="text-slate-500 text-xs mt-0.5">Ryan International School</p>
              <p className="text-blue-400 text-xs font-medium mt-1">68.6%</p>
            </div>
            <div className="relative pl-4 border-l border-slate-700">
              <div className="absolute w-2 h-2 rounded-full bg-blue-400 -left-[5px] top-1.5" />
              <p className="font-medium text-white text-sm">Matriculation (10th)</p>
              <p className="text-slate-500 text-xs mt-0.5">Ryan International School</p>
              <p className="text-blue-400 text-xs font-medium mt-1">86.8%</p>
            </div>
          </div>
        </AnimatedCard>

      </div>
    </SectionWrapper>
  );
}

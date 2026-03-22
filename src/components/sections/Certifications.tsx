"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { title: "Python Django Development", issuer: "Cipherschools" },
  { title: "Git and Github Bootcamp", issuer: "Udemy" },
  { title: "Privacy and Security in Online Social Media", issuer: "NPTEL" },
  { title: "Responsive Web Design", issuer: "Freecodecamp" },
  { title: "Bits and Bytes of Computer Networking", issuer: "Google" },
];

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Continuous learning and skill verification through recognized industry platforms."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass glass-hover p-6 rounded-2xl flex items-start gap-4 group hover-shake cursor-pointer border border-white/5 hover:border-neon-cyan/50 hover:box-glow relative overflow-hidden"
          >
            {/* Background glowing effect on hover */}
            <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="p-3 rounded-full bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan group-hover:text-background transition-colors duration-300 z-10 shrink-0">
              <Award size={24} />
            </div>
            
            <div className="z-10 flex-1">
              <h3 className="font-bold text-lg text-white group-hover:text-neon-cyan transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
            </div>
            
            <ExternalLink size={16} className="text-gray-500 group-hover:text-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 inline-block z-10 shrink-0" />
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}

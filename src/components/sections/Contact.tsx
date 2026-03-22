"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { useState } from "react";
import Toast from "@/components/ui/Toast";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to an API here
    setShowToast(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="Have an exciting project you need help with? Send me an email or contact me via instant message!">
      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-3xl font-bold text-white mb-6">Let&apos;s talk about everything!</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Don&apos;t like forms? Send me an email at{" "}
              <a href="mailto:prakharw23@gmail.com" className="text-neon-cyan hover:underline hover:text-glow">prakharw23@gmail.com</a>.
            </p>
            
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/prakhar-maitreya-parashar-8583ab292/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass border border-white/10 hover:border-neon-blue/50 hover:bg-neon-blue/10 text-white hover:text-neon-blue transition-all duration-300 hover-shake box-glow">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Prakhar-Maitreya" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass border border-white/10 hover:border-neon-purple/50 hover:bg-neon-purple/10 text-white hover:text-neon-purple transition-all duration-300 hover-shake box-glow">
                <Github size={24} />
              </a>
              <a href="mailto:prakharw23@gmail.com" className="p-4 rounded-full glass border border-white/10 hover:border-neon-cyan/50 hover:bg-neon-cyan/10 text-white hover:text-neon-cyan transition-all duration-300 hover-shake box-glow">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/5 flex flex-col gap-6">
          <div className="relative">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all peer"
              placeholder="Your Name"
              id="name"
            />
            <label htmlFor="name" className="absolute left-4 -top-6 text-sm text-neon-cyan font-medium transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-neon-cyan">
              Your Name
            </label>
          </div>
          
          <div className="relative mt-2">
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all peer"
              placeholder="Email Address"
              id="email"
            />
            <label htmlFor="email" className="absolute left-4 -top-6 text-sm text-neon-purple font-medium transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-neon-purple">
              Email Address
            </label>
          </div>

          <div className="relative mt-2 flex-grow">
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full h-full min-h-[150px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all peer resize-none"
              placeholder="Message"
              id="message"
            />
            <label htmlFor="message" className="absolute left-4 -top-6 text-sm text-neon-blue font-medium transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-neon-blue">
              Message
            </label>
          </div>

          <Button type="submit" className="w-full mt-4 flex items-center justify-center gap-2">
            <Send size={18} />
            <span>Send Message</span>
          </Button>
        </form>

      </div>
      
      <Toast
        isVisible={showToast}
        message="Message sent successfully!"
        onClose={() => setShowToast(false)}
      />
    </SectionWrapper>
  );
}

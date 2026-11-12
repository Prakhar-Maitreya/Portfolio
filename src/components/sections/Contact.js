"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Toast from "@/components/ui/Toast";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    href: "https://github.com/Prakhar-Maitreya",
    value: "Prakhar-Maitreya",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/prakhar-maitreya",
    value: "prakhar-maitreya",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    href: "mailto:prakharw23@gmail.com",
    value: "prakharw23@gmail.com",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showToast, setShowToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Opens the user's mail client with pre-filled details as a reliable fallback.
    // No backend / third-party form service is configured. This is intentional and transparent.
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:prakharw23@gmail.com?subject=${subject}&body=${body}`;

    setSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    setShowToast(true);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get in Touch"
      subtitle="I am open to internship opportunities and collaboration. Feel free to reach out."
    >
      <div className="grid lg:grid-cols-2 gap-10">

        {/* Left — Contact info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.07]">
            <h3 className="text-lg font-semibold text-white mb-2">Let&apos;s talk</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Whether it&apos;s an internship, a project, or just a conversation about software
              engineering — I am happy to hear from you. You can email me directly at{" "}
              <a
                href="mailto:prakharw23@gmail.com"
                className="text-blue-400 hover:underline"
              >
                prakharw23@gmail.com
              </a>{" "}
              or use the form.
            </p>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.07] hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-200 group"
                >
                  <span className="text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{link.label}</p>
                    <p className="text-sm text-slate-300 font-medium">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Contact form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.07] flex flex-col gap-5"
        >
          <p className="text-xs text-slate-500 leading-relaxed mb-1">
            Submitting this form will open your email client with the message pre-filled.
          </p>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
              Your Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
              Email Address <span className="text-blue-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
              Message <span className="text-blue-400">*</span>
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about the opportunity or project..."
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            />
          </div>

          <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={submitting}>
            <Send size={16} />
            <span>{submitting ? "Opening mail client…" : "Send Message"}</span>
          </Button>
        </form>
      </div>

      <Toast
        isVisible={showToast}
        message="Your email client has been opened with the message pre-filled."
        onClose={() => setShowToast(false)}
      />
    </SectionWrapper>
  );
}

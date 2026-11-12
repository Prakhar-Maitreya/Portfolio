"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useEffect } from "react";

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#111827] border border-blue-500/40 shadow-lg shadow-blue-500/10"
        >
          <CheckCircle className="text-blue-400 w-5 h-5 shrink-0" />
          <span className="text-white text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-1 text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

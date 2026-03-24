"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-navy z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-gold font-playfair tracking-widest text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          MEMUAT...
        </motion.p>
      </div>
    </div>
  );
}

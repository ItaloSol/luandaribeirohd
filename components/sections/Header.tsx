"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-serif font-bold text-brand-red"
          >
            <img src="/logo.png" alt="Luanda Heels" className="h-12" />
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex gap-8 font-medium"
          >
            {["Inicio", "Sobre", "Aulas", "Coreografia", "FAQ", "Contato"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ scale: 1.05, color: "#470001" }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="hover:text-brand-red transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
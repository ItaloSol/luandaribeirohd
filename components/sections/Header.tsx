"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100);
    };

    document.documentElement.style.scrollBehavior = 'smooth';
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between md:justify-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex gap-8 font-medium"
          >
            {["Inicio", "Sobre", "Aulas", "FAQ", "Contato"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ scale: 1.05, color: "#470001" }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className={`transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-brand-red' : 'hidden'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ 
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-full left-0 w-full overflow-hidden ${
              isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-black/80'
            }`}
          >
            <div className="container-custom py-4">
              {["Inicio", "Sobre", "Aulas", "FAQ", "Contato"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 transition-colors ${
                    isScrolled ? 'text-gray-900 hover:text-brand-red' : 'text-white hover:text-white/80'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
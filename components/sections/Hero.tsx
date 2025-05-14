"use client";

import { motion } from "framer-motion";
import { HeroButton } from "@/components/ui/hero-button";

export default function Hero() {
  return (
    <section id="Inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/imagens/1.webp')",
          filter: "grayscale(100%) brightness(0.7)"
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  mb-8 italic"
            style={{ 
              
              lineHeight: "1.2"
            }}
          >
            Descubra a elegância de ser você.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 font-light max-w-3xl"
            style={{ lineHeight: "1.6" }}
          >
            Experiências exclusivas de dança no salto alto para mulheres que desejam mais que passos: desejam presença, autoconfiança e beleza em movimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HeroButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-end mt-8"
          >
            <img 
              src="/imagens/logo.webp" 
              alt="Luanda Ribeiro" 
              className="h-36 sm:h-14 md:h-52 object-contain w-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
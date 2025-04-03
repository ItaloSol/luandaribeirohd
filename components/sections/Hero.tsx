"use client";

import { motion } from "framer-motion";
import { HeroButton } from "@/components/ui/hero-button";

export default function Hero() {
  return (
    <section id="Inicio" className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Eleve sua autoestima e confiança com o Heels Dance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl mb-8 font-light"
          >
            Descubra o poder da sua feminilidade através da dança em um ambiente acolhedor e empoderador
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HeroButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
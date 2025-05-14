"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";

export default function Journey() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/imagens/5.webp')",
          filter: "brightness(0.3)"
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl  mb-8"
          style={{ 
            
            fontStyle: "italic"
          }}
        >
          Sua jornada exclusiva começa aqui
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          Viva uma experiência pensada nos detalhes, com atenção, arte, conforto e pequenos mimos que fazem toda a diferença.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block"
        >
          <button
            onClick={() => window.location.href = "#contato"}
            className="flex items-center justify-center gap-3 text-xl border-2 border-white rounded-full px-8 py-4 hover:bg-white hover:text-brand-red transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M17.5 2H9.2c-.4 0-.7.3-.8.7L7 6H3.5C2.7 6 2 6.7 2 7.5v11c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V13l2-1v-3L17.5 2zM12 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
            </svg>
            Agendar minha experiência
          </button>
        </motion.div>
      </div>
    </section>
  );
}
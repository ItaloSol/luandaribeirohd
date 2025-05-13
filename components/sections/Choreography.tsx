"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { CTAButton } from "@/components/ui/cta-button";

export default function Choreography() {
  return (
    <section id="Coreografia" className="section-padding relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('/imagens/luanda_3.webp')",
        }}
      />
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="container-custom relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl  mb-6">I Will Survive</h2>
            <p className="text-lg mb-12">
              Este projeto, coreografado e dirigido por Lua Ribeiro para @whimsy.dance, 
              é uma celebração da resiliência e força através da dança. 
              Experimente a poderosa expressão artística que transforma e empodera.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-2xl mb-8"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/enMVYygvbwM"
                title="Coreografia Exclusiva - Luanda Heels"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </motion.div>

           
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
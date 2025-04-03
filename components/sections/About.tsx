"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { CTAButton } from "@/components/ui/cta-button";

export default function About() {
  return (
    <section id="Sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-4xl font-serif mb-6">Uma jornada de empoderamento através da dança</h2>
              <p className="text-gray-600 mb-4">
                O Heels Dance vai além de uma simples aula de dança. É uma experiência transformadora que combina técnica, postura e elegância para despertar sua confiança interior.
              </p>
              <p className="text-gray-600 mb-8">
                Através de um método exclusivo, você aprenderá a se movimentar com graça e segurança, desenvolvendo uma nova relação com seu corpo e sua feminilidade.
              </p>
              <CTAButton variant="about" />
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img 
                src="/imagens/luanda_1.webp" 
                alt="Aula de Heels Dance" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeInStagger } from "../animations/FadeIn";

export default function Benefits() {
  const benefits = [
    {
      title: "Empoderamento",
      description: "Desenvolva confiança e autoestima através da dança"
    },
    {
      title: "Expressão",
      description: "Liberte sua feminilidade e criatividade"
    },
    {
      title: "Ambiente Acolhedor",
      description: "Sinta-se segura para se expressar livremente"
    }
  ];

  return (
    <section className="section-padding relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('/imagens/luanda_2.webp')",
        }}
      />
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif text-center mb-12 text-white"
        >
          Benefícios das nossas aulas
        </motion.h2>
        <FadeInStagger>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="p-6 transform transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm">
                  <h3 className="text-xl font-serif mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
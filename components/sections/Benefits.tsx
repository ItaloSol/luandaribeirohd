"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeInStagger } from "../animations/FadeIn";
import { Sparkles, Brush, Users } from "lucide-react";
export default function Benefits() {
  const benefits = [
    {
      icon: "sparkles",
      title: "Empoderamento",
      description: "Desenvolva confiança e autoestima através da dança"
    },
    {
      icon: "brush",
      title: "Expressão",
      description: "Liberte sua feminilidade e criatividade"
    },
    {
      icon: "users",
      title: "Ambiente Acolhedor",
      description: "Sinta-se segura para se expressar livremente"
    }
  ];

  return (
    <section className="section-padding relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('/imagens/luanda_1.webp')",
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
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-red/10 p-3 rounded-full">
                      {benefit.icon === 'sparkles' && <Sparkles className="h-6 w-6 text-brand-red" />}
                      {benefit.icon === 'brush' && <Brush className="h-6 w-6 text-brand-red" />}
                      {benefit.icon === 'users' && <Users className="h-6 w-6 text-brand-red" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
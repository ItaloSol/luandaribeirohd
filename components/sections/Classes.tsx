"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckSquare } from "lucide-react";
import { FadeIn, FadeInStagger } from "../animations/FadeIn";
import { CTAButton } from "@/components/ui/cta-button";

export default function Classes() {
  const modalidades = [
    {
      title: "Aulas Particulares",
      items: ["Atenção individualizada", "Horários flexíveis", "Progresso acelerado"]
    },
    {
      title: "Aulas em Grupo",
      items: ["Ambiente energético", "Interação social", "Preços acessíveis"]
    }
  ];

  return (
    <section id="Aulas" className="section-padding bg-white">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-4xl md:text-4xl text-3xl font-serif text-center mb-8 md:mb-12">Modalidades de Aulas</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
          {modalidades.map((modalidade, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <Card className="h-full p-6 md:p-8 transform transition-all duration-300 hover:scale-105 shadow-lg">
                <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6">{modalidade.title}</h3>
                <ul className="space-y-3 md:space-y-4">
                  {modalidade.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-center"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckSquare className="h-4 w-4 md:h-5 md:w-5 text-brand-red mr-2 md:mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div className="flex justify-center">
            <CTAButton variant="classes" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
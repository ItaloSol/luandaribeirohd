"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso ter experiência prévia?",
      answer: "Não! Nossas aulas são adequadas para todos os níveis, desde iniciantes até dançarinas experientes. O importante é ter vontade de aprender e se divertir."
    },
    {
      question: "Qual a vestimenta adequada para as aulas?",
      answer: "Recomendamos roupas confortáveis que permitam movimento, como leggings e top esportivo. O importante é você se sentir confortável e segura."
    },
    {
      question: "Qual o salto ideal para utilizar?",
      answer: "Para iniciantes, recomendamos saltos entre 5-7cm. Conforme você ganhar confiança, pode evoluir para saltos mais altos. O importante é se sentir segura e confortável."
    },
    {
      question: "Como funciona o agendamento?",
      answer: "O agendamento é feito diretamente pelo WhatsApp. Entre em contato conosco e vamos encontrar o melhor horário para você começar sua jornada no Heels Dance."
    }
  ];

  return (
    <section id="FAQ" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center parallax"
        style={{ 
          backgroundImage: "url('/imagens/6.webp')",
          filter: "brightness(0.8)",
           backgroundPosition: "right"
        }}
      />

      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl  text-center mb-16 text-white"
        >
          Perguntas frequentes
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-6"
              >
                <button
                  className="w-full text-left py-6 px-8 bg-brand-red text-white text-xl md:text-2xl hover:bg-opacity-90 transition-all duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                </button>
                <div className={`${openIndex === index ? '' : 'hidden'} bg-white/10 backdrop-blur-sm text-white p-6 text-lg`}>
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
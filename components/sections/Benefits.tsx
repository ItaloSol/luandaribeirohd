"use client";

import { motion } from "framer-motion";
import { FadeInStagger } from "../animations/FadeIn";

export default function Benefits() {
  const whatsappNumber = "5561981066277";
  const benefitMessages = [
    encodeURIComponent("Olá! Gostaria de agendar uma Aula VIP de Heels Dance."),
    encodeURIComponent("Olá! Gostaria de agendar uma Aula em Grupo de Heels Dance.")
  ];
  const benefits = [
    {
      title: "Aula VIP",
      features: [
        "Atendimento individual com foco total no seu processo;",
        "Flexibilidade de horários;",
        "Inclusão de detalhes premium (para mais detalhes, entre em contato)."
      ],
      image: "/imagens/3.webp",
      bgColor: "bg-gray-200"
    },
    {
      title: "Aulas em grupo",
      features: [
        "Ambiente acolhedor;",
        "Ideal para quem busca ter aulas em grupo para socializar;",
        "Possibilidade de desenvolver projetos em grupo."
      ],
      image: "/imagens/4.webp",
      bgColor: "bg-brand-red"
    }
  ];

  return (
    <section className="w-full">
      {benefits.map((benefit, index) => (
        <div 
          key={index} 
          className={`${benefit.bgColor} ${index % 2 === 0 ? 'text-gray-900' : 'text-white'}`}
        >
          <div className="container-custom py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 0 
                  ? "order-2 md:order-1"
                  : "order-2 md:order-2"}
              >
                <h2 className="text-4xl md:text-5xl  mb-12">{benefit.title}</h2>
                <FadeInStagger>
                  <div className="space-y-6">
                    {benefit.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        className="flex items-center gap-4"
                      >
                        <div className={`text-2xl ${index % 2 === 0 ? 'text-brand-red' : 'text-white'}`}>✦</div>
                        <p className="text-lg md:text-xl">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </FadeInStagger>
                <div className="py-6 flex justify-center">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${benefitMessages[index]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 inline-block px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                      index % 2 === 0
                        ? "bg-brand-red text-white hover:bg-brand-red/90"
                        : "bg-white text-brand-red hover:bg-white/90"
                    }`}
                  >
                    {benefit.title === "Aula VIP"
                      ? "Agendar Aula VIP"
                      : "Agendar Aula em Grupo"}
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 0 
                  ? "order-1 md:order-2"
                  : "order-1 md:order-1"}
              >
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

export default function About() {
  return (
    <section id="Sobre" className="section-padding bg-mascara">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.2}>
            <div>
              <h1 className="text-6xl mb-6">Conheça sua professora</h1>
              <div className="space-y-4 text-gray-600">
                <p>
                  Luanda Ribeiro tem como principal objetivo oferecer às mulheres adultas uma vivência de dança que transcende a sala de prática, através do salto alto.
                </p>
                <p>
                  Com formação técnica, experiência cênica e olhar apurado para o bem-estar feminino, Luanda desenvolveu uma abordagem que valoriza a técnica, a elegância e a expressividade feminina.
                </p>
                <p>
                  Além de sua experiência no ballet e no Heels, já participou de eventos, competições e apresentações de diversos estilos, incluindo k-pop e tango, o que contribuiu para sua versatilidade e presença.
                </p>
                <p>
                  Hoje, como professora de Heels Dance, busca inspirar e transformar outras mulheres através da dança, mostrando que essa arte vai além dos movimentos: é uma ferramenta poderosa de expressão, autoestima e autoconfiança.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src="/imagens/luanda_4.webp"
                alt="Luanda Ribeiro - Professora de Heels Dance"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
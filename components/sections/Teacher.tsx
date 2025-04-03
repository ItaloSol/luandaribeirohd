"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { CTAButton } from "@/components/ui/cta-button";

export default function Teacher() {
  return (
    <>
      <div className="w-full py-24">
        <div className="container-custom">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"
          />
        </div>
      </div>
      <section id="professora" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-4xl font-serif mb-6">Sobre a Professora</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Luanda Ribeiro iniciou sua jornada na dança aos seis anos de idade pelo ballet clássico. 
                    Desde cedo, encantou-se com a leveza, a postura elegante e a precisão das linhas que essa arte proporciona.
                  </p>
                  <p>
                    Com o passar dos anos, explorou diferentes modalidades, expandindo seu repertório e aprofundando sua conexão com a dança. 
                    Foi nesse percurso que encontrou no Heels Dance sua verdadeira paixão.
                  </p>
                  <p>
                    Unindo a sofisticação do ballet à confiança e ao empoderamento característicos do Heels, 
                    Luanda desenvolveu uma abordagem que valoriza a técnica, a elegância e a expressividade feminina.
                  </p>
                  <p>
                    Além de sua experiência no ballet e no Heels, já participou de eventos, competições e apresentações 
                    de diversos estilos, incluindo k-pop e tango, o que contribuiu para sua versatilidade e presença.
                  </p>
                  <p className="mb-8">
                    Hoje, como professora de Heels Dance, busca inspirar e transformar outras mulheres através da dança, 
                    mostrando que essa arte vai além dos movimentos: é uma ferramenta poderosa de expressão, autoestima e autoconfiança.
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
                <iframe
                  src="https://www.instagram.com/p/DG_xETzxWf4/embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                  className="rounded-lg shadow-xl"
                  style={{ aspectRatio: '3 / 4' }}
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
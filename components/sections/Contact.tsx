"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Apple, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn, FadeInStagger } from "../animations/FadeIn";
import { CTAButton } from "@/components/ui/cta-button";

export default function Contact() {
  return (
    <section id="Contato" className="section-padding bg-white">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-4xl font-serif text-center mb-12">Entre em Contato</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <FadeInStagger>
              <div className="space-y-6">
                {[
                  { icon: Phone, text: "(61) 9 8106-6277" },
                  { icon: Mail, text: "contato@luandaheels.com" },
                  { icon: MapPin, text: "Brasília, DF" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center"
                  >
                    <item.icon className="h-6 w-6 text-brand-red mr-4" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </FadeInStagger>
            <FadeIn delay={0.4}>
              <div className="mt-8 mb-8">
                <h3 className="text-xl font-serif mb-4">Siga-nos nas redes sociais</h3>
                <div className="flex space-x-4">
                  {[Instagram].map((Icon, index) => (
                    <motion.a
                      key={index}
                      target="_blank"
                      href="https://www.instagram.com/lua.ysr/"
                      className="text-gray-600 hover:text-brand-red"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
              <CTAButton variant="contact" />
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/imagens/luanda_5.webp" 
                alt="Estúdio Luanda Heels" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
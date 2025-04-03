"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn } from "../animations/FadeIn";

export default function FAQ() {
  return (
    <section id="FAQ" className="section-padding bg-white">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-4xl font-serif text-center mb-12">Perguntas Frequentes</h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="rounded-lg border">
                <AccordionTrigger className="px-6">Preciso ter experiência prévia?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Não! Nossas aulas são adequadas para todos os níveis, desde iniciantes até dançarinas experientes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="rounded-lg border">
                <AccordionTrigger className="px-6">Como funciona o agendamento via WhatsApp?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Basta entrar em contato pelo nosso WhatsApp, e nossa equipe irá auxiliar você a encontrar o melhor horário para sua aula experimental.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="rounded-lg border">
                <AccordionTrigger className="px-6">Qual o valor das aulas?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Os valores variam de acordo com a modalidade escolhida. Entre em contato conosco para conhecer nossos planos e pacotes especiais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="rounded-lg border">
                <AccordionTrigger className="px-6">Como devo me vestir para a aula?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Recomendamos roupas confortáveis que permitam movimento, como leggings e top esportivo. Evite roupas muito largas que possam atrapalhar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="rounded-lg border">
                <AccordionTrigger className="px-6">Qual salto ideal para fazer a aula?</AccordionTrigger>
                <AccordionContent className="px-6">
                  Para iniciantes, recomendamos saltos entre 5-7cm. Conforme ganha confiança, pode evoluir para saltos mais altos. O importante é se sentir confortável e seguro.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
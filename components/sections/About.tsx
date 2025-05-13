"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { CTAButton } from "@/components/ui/cta-button";

export default function About() {
  return (
    <section id="Sobre" className="relative min-h-screen flex items-center py-16 md:py-0">
      {/* Background Image with darker overlay for better contrast */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/imagens/2.jpg')",
          filter: "brightness(0.4)" // Darkened for better contrast
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white max-w-5xl mx-auto px-4 sm:px-6">
          {/* Empty first column for spacing on desktop */}
          <div className="hidden md:block" />
          <div className="col-start-1 md:col-start-2">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-6 md:mb-8">
                Conheça sua professora
              </h2>
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl">
                <p className="leading-relaxed">
                  Luanda Ribeiro tem como principal objetivo
                  oferecer às mulheres adultas uma vivência de
                  dança que transcende a sala de prática, através
                  do salto alto.
                </p>
                <p className="leading-relaxed">
                  Com formação técnica, experiência cênica e
                  olhar apurado para o bem-estar feminino,
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
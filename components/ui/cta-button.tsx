"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { Sparkles } from "lucide-react";

interface CTAButtonProps {
  className?: string;
  variant?: 'hero' | 'about' | 'classes' | 'contact';
}

export function CTAButton({ className = "", variant = 'hero' }: CTAButtonProps) {
  const whatsappNumber = "5561981066277";
  const message = encodeURIComponent("Olá! Gostaria de agendar uma aula experimental de Heels Dance.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const ctaTexts = {
    hero: "Venha descobrir seu poder através da dança!",
    about: "Desperte sua confiança interior através do Heels Dance",
    classes: "Escolha a modalidade ideal para sua jornada",
    contact: "Dê o primeiro passo para sua transformação"
  };

  const buttonTexts = {
    hero: "Comece sua jornada agora!",
    about: "Agende sua aula experimental",
    classes: "Garanta sua vaga hoje mesmo",
    contact: "Agende pelo WhatsApp"
  };

  return (
    <motion.div className={`${className} text-center`}>
      <p className="text-lg mb-4 font-medium text-gray-700">
        {ctaTexts[variant]}
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          onClick={() => window.open(whatsappLink, '_blank')}
          className="bg-brand-red text-white hover:bg-brand-red/90 transform transition-all duration-300 w-full md:w-auto"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          {buttonTexts[variant]}
        </Button>
      </motion.div>
    </motion.div>
  );
}
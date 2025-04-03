"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { Sparkles } from "lucide-react";

export function HeroButton() {
  const whatsappNumber = "5561981066277";
  const message = encodeURIComponent("Olá! Gostaria de agendar uma aula experimental de Heels Dance.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.div className="text-center">
      <p className="text-lg mb-4 font-medium text-white">
        Venha descobrir seu poder através da dança!
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          onClick={() => window.open(whatsappLink, '_blank')}
          className="bg-brand-red-800 text-white hover:bg-brand-red-700 transform transition-all duration-300 w-full md:w-auto border-2 border-white"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Comece sua jornada agora!
        </Button>
      </motion.div>
    </motion.div>
  );
}
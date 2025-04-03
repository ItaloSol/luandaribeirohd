"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

export default function Footer() {
  const navLinks = ["Inicio", "Sobre", "Aulas", "Coreografia", "FAQ", "Contato"];

  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-100">
      <div className="container-custom">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
            <img src="/logo.png" alt="Luanda Heels" className="h-12" />
              <p className="text-gray-600">
                Transformando vidas através do Heels Dance
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4 text-brand-red">Links Úteis</h3>
              <ul className="space-y-2 text-gray-600">
                {navLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a 
                      href={`#${link}`} 
                      className="hover:text-brand-red capitalize transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4 text-brand-red">Horário de Funcionamento</h3>
              <div className="text-gray-600 space-y-2">
                <div>
                  <p className="font-medium text-gray-900">Aulas em Grupo:</p>
                  <p>Sexta-feira: 19h às 20h30</p>
                  <p>Local: Muvon Sudoeste</p>
                </div>
                <div className="mt-4">
                  <p className="font-medium text-gray-900">Aulas Particulares:</p>
                  <p>Horários e locais personalizados</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-600"
          >
            <p>&copy; {new Date().getFullYear()} Luanda Ribeiro. Todos os direitos reservados.</p>
          </motion.div>
        </FadeIn>
      </div>
    </footer>
  );
}
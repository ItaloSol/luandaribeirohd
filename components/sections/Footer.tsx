"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { Instagram, Youtube, Phone } from "lucide-react";

export default function Footer() {
  const navLinks = ["Inicio", "Sobre", "Aulas", "FAQ", "Contato"];

  return (
    <footer className="bg-mascara text-gray-900 py-12 border-t border-gray-100">
      <div className="container-custom">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Logo and Social Media */}
            <div>
              <img src="/logo.png" alt="Luanda Heels" className="h-12 mb-4" />
              <p className="text-gray-600 mb-6">
                Transformando vidas através do Heels Dance
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/lua.ysr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-red transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=5561981066277&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+Aula+de+Heels+Dance.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-red transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Phone className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/watch?v=enMVYygvbwM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-red transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Youtube className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-xl  mb-4 text-brand-red">Links Úteis</h3>
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
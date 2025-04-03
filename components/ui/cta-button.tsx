"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { FaWhatsapp } from 'react-icons/fa';

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
          {variant === 'contact' ? (
    <FaWhatsapp className="h-6 mr-2" />
  ) : (
    <HeelsIcon className="icon-heels mr-2" />
  )}
  {buttonTexts[variant]}
        </Button>
      </motion.div>
    </motion.div>
  );
}

const HeelsIcon = ({ className }: { className?: string }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <g
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#ffffff"
      stroke="none"
    >
      <path d="M470 4629 c-57 -24 -88 -59 -120 -136 -18 -43 -76 -172 -130 -288
      -167 -360 -208 -487 -217 -665 -5 -112 -2 -146 31 -330 9 -47 29 -179 46 -295
      93 -653 145 -1320 166 -2100 9 -350 -4 -335 292 -335 191 0 200 1 233 23 19
      13 39 38 46 57 9 25 12 172 12 520 1 378 4 507 16 585 16 108 68 318 112 458
      l28 88 106 -133 c283 -358 447 -616 739 -1168 189 -356 230 -395 448 -420 48
      -5 310 -10 582 -10 421 0 499 2 517 15 50 35 31 119 -30 130 -17 2 -270 6
      -562 8 -404 3 -541 7 -574 17 -75 22 -115 74 -234 303 -284 545 -484 861 -779
      1228 -184 230 -286 340 -648 699 -211 209 -346 350 -358 375 -63 126 -55 343
      18 550 31 86 204 472 219 487 4 4 125 -195 270 -442 145 -247 270 -455 278
      -461 41 -34 116 3 116 58 0 19 -98 195 -292 526 -160 274 -289 502 -286 507
      13 21 66 8 157 -38 272 -139 490 -349 671 -647 86 -142 168 -314 314 -654 159
      -373 244 -550 347 -722 193 -323 386 -524 611 -637 176 -88 357 -123 643 -126
      l182 -1 -72 -33 c-110 -50 -253 -102 -358 -129 -139 -37 -312 -37 -425 0 -138
      45 -249 122 -391 270 -203 211 -326 389 -664 967 -150 256 -280 471 -289 478
      -27 21 -81 11 -105 -21 -17 -23 -18 -32 -10 -56 22 -57 550 -948 632 -1065
      301 -430 549 -651 819 -728 102 -29 287 -31 413 -4 172 37 393 122 662 257
      l136 68 40 -27 c40 -27 1047 -919 1090 -964 l23 -25 -47 -7 c-26 -3 -309 -6
      -630 -6 -412 0 -590 -3 -608 -11 -51 -23 -55 -103 -7 -128 26 -15 1152 -15
      1276 -1 108 13 154 33 179 80 29 55 16 98 -52 172 -44 47 -654 595 -1077 967
      -28 24 -79 58 -115 75 -73 35 -50 34 -530 26 -245 -4 -330 4 -468 41 -286 76
      -499 263 -723 635 -102 169 -181 332 -328 679 -256 600 -391 837 -610 1067
      -147 155 -293 261 -483 353 -103 50 -195 67 -248 44z m270 -2149 c66 -70 120
      -134 120 -142 0 -8 -18 -75 -40 -149 -23 -74 -54 -186 -70 -249 -60 -239 -63
      -266 -69 -595 l-6 -310 -141 -3 -141 -3 -7 163 c-22 533 -64 1041 -122 1498
      -14 107 -28 218 -31 245 l-6 50 196 -188 c108 -104 250 -247 317 -317z m-60
      -1725 l0 -125 -140 0 -140 0 0 88 c0 48 -3 104 -6 125 l-7 37 147 0 146 0 0
      -125z"/>
    </g>
  </svg>
);
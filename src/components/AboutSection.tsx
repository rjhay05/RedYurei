import React from 'react';
import { motion } from 'framer-motion';
const ARTWORK_URL = "/images/redyurei.png";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 bg-fantasy-navyLight relative overflow-hidden">

      {/* Atmospheric Blurs */}
      <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] bg-fantasy-purple/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-[30vw] h-[30vw] bg-fantasy-teal/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative flex justify-center lg:justify-end">

            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Hexagonal decorative rings */}
              <div className="absolute inset-0 border-2 border-fantasy-teal/30 hex-clip animate-pulse-glow shadow-glow-teal"></div>
              <div className="absolute inset-4 border border-fantasy-purple/50 hex-clip rotate-180"></div>

              {/* Portrait */}
              <div className="absolute inset-8 hex-clip overflow-hidden border-2 border-fantasy-teal/80 shadow-[inset_0_0_20px_rgba(10,200,185,0.5)] bg-fantasy-navy">
                <img
                  src={ARTWORK_URL}
                  alt="Aetheria - Artist Portrait"
                  className="w-full h-full object-cover filter contrast-125 saturate-150 brightness-90" />

                <div className="absolute inset-0 bg-gradient-to-tr from-fantasy-purple/20 to-fantasy-teal/20 mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="flex flex-col">

            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-fantasy-teal shadow-glow-teal"></div>
              <span className="font-raleway text-fantasy-teal uppercase tracking-widest text-sm font-bold">
                The Artist
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-gradient-white-teal mb-8 tracking-wider drop-shadow-lg">
              Behind Red Yurei
            </h2>

            <div className="space-y-6 font-raleway text-fantasy-white/80 font-light leading-relaxed">
              <p>
                Forged in the fires of digital creation, my work seeks to bridge
                the gap between myth and reality. I am a multi-media artist
                specializing in cinematic fantasy illustration, concept design,
                and visual storytelling.
              </p>
              <p>
                Drawing inspiration from epic sagas, arcane lore, and the
                dramatic lighting of modern animation, I craft pieces that feel
                like a frozen moment from a grander narrative. Every brushstroke
                is placed with the intention of evoking emotion, wonder, and a
                sense of scale.
              </p>
              <p>
                Whether designing a solitary hero or painting a sprawling
                battlefield, my goal is to create artwork that doesn't just look
                beautiful, but feels alive and collectible.
              </p>
            </div>

            <div className="mt-10">
              <img
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'><path d='M10,40 Q30,10 50,30 T90,20 T140,35' fill='none' stroke='%230AC8B9' stroke-width='2' filter='drop-shadow(0 0 2px %230AC8B9)'/></svg>"
                alt="Artist Signature"
                className="opacity-80" />

            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
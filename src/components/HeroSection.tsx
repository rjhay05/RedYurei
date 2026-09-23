import React from 'react';
import { motion } from 'framer-motion';
const ARTWORK_URL = "/images/redyurei_hero.jpg";

export function HeroSection() {
  // Generate random sparks
  const sparks = Array.from({
    length: 8
  }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 20}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${2 + Math.random() * 3}s`,
    size: `${2 + Math.random() * 4}px`
  }));
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Artwork with cinematic overlay */}
      <motion.div
        initial={{
          scale: 1.1,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 2,
          ease: 'easeOut'
        }}
        className="absolute inset-0 z-0">

        {/* Arcane Atmospheric Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(123,45,142,0.25),transparent_60%)] z-10 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(10,200,185,0.15),transparent_50%)] z-10 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-fantasy-navy/90 via-fantasy-navy/50 to-fantasy-navy z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-fantasy-navy via-transparent to-fantasy-navy z-10"></div>

        <img
          src={ARTWORK_URL}
          alt="Red Yurei Hero Artwork"
          className="w-full h-full object-cover object-center opacity-60 filter contrast-125 saturate-150" />


        {/* Vignette */}
        <div className="vignette-overlay"></div>
      </motion.div>

      {/* Floating Sparks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {sparks.map((spark) =>
        <div
          key={spark.id}
          className="absolute bg-fantasy-teal rounded-full animate-spark shadow-glow-teal"
          style={{
            left: spark.left,
            bottom: spark.bottom,
            width: spark.size,
            height: spark.size,
            animationDelay: spark.delay,
            animationDuration: spark.duration
          }}>
        </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.5
          }}
          className="mb-6 relative inline-block p-4">

          <div className="absolute inset-0 hextech-brackets"></div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-longshot font-bold text-gradient-white-teal drop-shadow-[0_0_25px_rgba(10,200,185,0.4)] tracking-wider">
            RED YUREI 
          </h1>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-excelsior font-bold text-gradient-white-teal drop-shadow-[0_0_25px_rgba(10,200,185,0.4)] tracking-wider">
              Visual Archive
          </h3>
        </motion.div>

        {/* <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 1
          }}
          className="text-xl md:text-2xl font-raleway italic text-fantasy-teal/90 mb-12 tracking-wide font-light drop-shadow-md">

          Where Fantasy Meets Reality
        </motion.p> */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 1.5
          }}
          className="flex flex-col sm:flex-row gap-6 items-center">

          <a
            href="#commissions"
            className="px-8 py-4 bg-fantasy-crimson text-fantasy-white font-cinzel font-bold tracking-widest uppercase text-sm hover:bg-red-600 transition-all duration-300 shadow-glow-crimson hover:shadow-glow-crimson-strong arcane-panel relative overflow-hidden group border-b-2 border-fantasy-teal">

            <span className="relative z-10">Commission Artwork</span>
            <div className="absolute inset-0 bg-gradient-to-t from-fantasy-teal/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          </a>

          <a
            href="#collections"
            className="px-8 py-4 border border-fantasy-teal text-fantasy-teal font-cinzel font-bold tracking-widest uppercase text-sm hover:bg-fantasy-teal/10 transition-all duration-300 shadow-glow-teal hover:shadow-glow-teal-strong arcane-panel">

            Explore Collections
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">

        <span className="text-fantasy-teal/80 font-raleway text-xs uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut'
          }}
          className="w-[2px] h-12 bg-gradient-to-b from-fantasy-teal to-transparent" />

      </motion.div>
    </section>);

}
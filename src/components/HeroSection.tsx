import React from 'react';
import { motion } from 'framer-motion';
const ARTWORK_URL = "/images/redyurei.png";

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
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-4 sm:px-6">

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(123,45,142,0.25),transparent_60%)] z-10 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(255,230,175,0.12),transparent_50%)] z-10 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-fantasy-navy/90 via-fantasy-navy/60 to-fantasy-navy z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-fantasy-navy via-fantasy-navy/70 to-transparent z-10"></div>

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

      {/* Decorative Left Sidebar */}
      <div className="hidden lg:flex flex-col items-center gap-6 absolute left-6 top-1/2 -translate-y-1/2 z-20">
        {/* Section dots */}
        <div className="flex flex-col items-center gap-3">
          {[0, 1, 2].map((i) =>
          <span
            key={i}
            className={`w-2 h-2 rotate-45 ${i === 0 ? 'bg-fantasy-teal shadow-glow-teal' : 'bg-fantasy-white/30'}`}>
          </span>
          )}
        </div>

        {/* Vertical Kanji */}
        <div
          className="font-cinzel text-fantasy-crimson text-2xl tracking-[0.3em] drop-shadow-[0_0_10px_rgba(221,45,74,0.5)]"
          style={{ writingMode: 'vertical-rl' }}>
          赤幽霊
        </div>

        {/* Divider */}
        <div className="w-[1px] h-24 bg-gradient-to-b from-fantasy-teal to-transparent"></div>

        {/* Vertical Label */}
        <div
          className="font-raleway text-fantasy-white/50 text-[10px] uppercase tracking-[0.4em]"
          style={{ writingMode: 'vertical-rl' }}>
          Visual Archive
        </div>

        {/* Flower accent */}
        <div className="text-fantasy-pink text-lg animate-pulse-glow">✦</div>
      </div>

      {/* Content Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-0 lg:pl-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start">

          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-longshot font-bold text-gradient-white-teal drop-shadow-[0_0_25px_rgba(255,230,175,0.35)] tracking-wider leading-none">
            RED YUREI
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-excelsior font-bold text-fantasy-teal/90 tracking-[0.2em] sm:tracking-[0.3em] mt-2 drop-shadow-md">
            VISUAL ARCHIVE
          </h2>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="w-2 h-2 rotate-45 bg-fantasy-crimson shadow-glow-crimson"></div>
            <div className="h-[1px] w-20 bg-gradient-to-r from-fantasy-crimson to-fantasy-teal"></div>
            <div className="w-2 h-2 rotate-45 bg-fantasy-teal shadow-glow-teal"></div>
          </div>

          <p className="font-cinzel text-fantasy-white text-base md:text-lg tracking-widest uppercase">
            Commissioned Illustrations
          </p>
          <p className="font-raleway text-fantasy-white/60 text-xs md:text-sm tracking-[0.2em] uppercase mt-2">
            Character Design • Concept Art • Visual Development
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center mt-10">
            <a
              href="#featured"
              className="px-8 py-4 bg-fantasy-crimson text-fantasy-white font-cinzel font-bold tracking-widest uppercase text-sm hover:bg-red-600 transition-all duration-300 shadow-glow-crimson hover:shadow-glow-crimson-strong arcane-panel relative overflow-hidden group border-b-2 border-fantasy-teal">
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-t from-fantasy-teal/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </a>
            <a
              href="#commissions"
              className="px-8 py-4 border border-fantasy-teal text-fantasy-teal font-cinzel font-bold tracking-widest uppercase text-sm hover:bg-fantasy-teal/10 transition-all duration-300 shadow-glow-teal hover:shadow-glow-teal-strong arcane-panel flex items-center gap-2">
              Commission Info
              <span className="w-1.5 h-1.5 rotate-45 bg-fantasy-teal inline-block"></span>
            </a>
          </div>
        </motion.div>

        {/* Right: Framed Character Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative hidden lg:flex justify-center items-center">

          <div className="relative w-[26rem] h-[34rem] xl:w-[30rem] xl:h-[38rem]">
            {/* Arch frame glow */}
            <div className="absolute inset-0 rounded-t-full border-2 border-fantasy-teal/40 shadow-glow-teal animate-pulse-glow"></div>
            <div className="absolute inset-3 rounded-t-full border border-fantasy-purple/40"></div>

            {/* Rotating rune ring */}
            <div className="absolute -inset-6 rounded-t-full border border-fantasy-gold/10 animate-spin-slow"></div>

            {/* Portrait */}
            <div className="absolute inset-3 rounded-t-full overflow-hidden bg-fantasy-cardBg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,45,142,0.25),transparent_65%)] z-10 mix-blend-screen"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy via-transparent to-transparent z-10"></div>
              <img
                src={ARTWORK_URL}
                alt="Red Yurei Hero Artwork"
                className="w-full h-full object-cover object-top filter contrast-110 saturate-125" />
              <div className="vignette-overlay z-20"></div>
            </div>

            {/* Sakura accents */}
            <div className="absolute -top-2 -right-2 text-fantasy-pink text-2xl animate-float">✿</div>
            <div className="absolute bottom-10 -left-4 text-fantasy-pink/80 text-xl animate-float-delayed">✿</div>
          </div>
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
          delay: 2,
          duration: 1
        }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">

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
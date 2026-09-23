import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Lightbox, LightboxItem } from './Lightbox';
import { getTagStyle } from '../lib/tagStyles';

const featured = [
  {
    title: 'Yurei',
    category: 'Character Design',
    tag: 'Featured',
    image: '/images/yurei_fs_nbg.png'
  },
  {
    title: 'China Lady',
    category: 'Concept Art',
    tag: 'Popular',
    image: '/images/china_lady_nbg.png'
  },
  {
    title: 'Nu',
    category: 'Character Design',
    tag: 'Limited Slot',
    image: '/images/nu_nbg.png'
  },
  {
    title: 'Peach',
    category: 'Illustration',
    tag: 'New',
    image: '/images/peach.png'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export function FeaturedCollections() {
  const [active, setActive] = useState<LightboxItem | null>(null);

  return (
    <section id="featured" className="pt-24 pb-16 px-4 sm:px-6 bg-fantasy-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-fantasy-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] bg-fantasy-teal/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-fantasy-teal text-lg">✦</span>
              <span className="font-raleway text-fantasy-teal uppercase tracking-[0.3em] text-xs font-bold">
                Featured
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-longshot font-bold text-gradient-white-teal tracking-wider drop-shadow-lg flex items-baseline gap-4">
              WORKS
              <span className="font-cinzel text-lg md:text-xl text-fantasy-white/40 tracking-widest">注目の作品</span>
            </h2>
          </motion.div>

          <a
            href="#latest"
            className="group flex items-center gap-2 px-5 py-2.5 border border-fantasy-teal/40 text-fantasy-teal font-cinzel font-bold uppercase text-xs tracking-widest hover:bg-fantasy-teal/10 hover:border-fantasy-teal transition-all duration-300 arcane-panel">
            View More
            <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featured.map((work, index) =>
          <motion.button
            key={index}
            type="button"
            variants={itemVariants}
            onClick={() => setActive(work)}
            aria-label={`View ${work.title}`}
            className="group relative arcane-panel bg-fantasy-cardBg p-1 border border-fantasy-teal/20 hover:border-fantasy-teal transition-all duration-300 hover:shadow-glow-teal cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-fantasy-teal">

              {/* Hextech corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-fantasy-teal opacity-0 group-hover:opacity-100 transition-opacity z-30"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fantasy-teal opacity-0 group-hover:opacity-100 transition-opacity z-30"></div>

              <div className="relative arcane-panel overflow-hidden aspect-[3/4] bg-fantasy-navyLight">
                {/* Atmospheric effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,45,142,0.2),transparent_65%)] z-10 mix-blend-screen"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy via-transparent to-transparent z-10"></div>
                <div className="vignette-overlay z-10"></div>

                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-contain object-bottom filter contrast-110 saturate-125 group-hover:scale-105 transition-transform duration-500" />

                {/* Watermark */}
                <span className="absolute top-3 right-3 font-longshot text-fantasy-white/20 text-sm tracking-wider z-20">
                  RED YUREI
                </span>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  {work.tag &&
                  <span className={`inline-block font-cinzel font-bold text-[10px] uppercase tracking-widest px-3 py-0.5 arcane-panel mb-2 ${getTagStyle(work.tag)}`}>
                      {work.tag}
                    </span>
                  }
                  <h3 className="font-cinzel font-bold text-fantasy-white text-lg drop-shadow-lg group-hover:text-fantasy-teal transition-colors">
                    {work.title}
                  </h3>
                  <p className="font-raleway text-fantasy-teal/80 text-[11px] uppercase tracking-widest">
                    {work.category}
                  </p>
                </div>
              </div>
            </motion.button>
          )}
        </motion.div>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  );
}
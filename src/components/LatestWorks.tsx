import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Lightbox, LightboxItem } from './Lightbox';

const latest = [
  { title: 'Yurei', image: '/images/yurei_fs_nbg.png' },
  { title: 'China Lady', image: '/images/china_lady_nbg.png' },
  { title: 'Nu', image: '/images/nu_nbg.png' },
  { title: 'Peach', image: '/images/peach.png' },
  { title: 'Piju', image: '/images/piju_nbg.png' },
  { title: 'Tali', image: '/images/tali.png' },
  { title: 'Peach x Yunxu', image: '/images/peachxyunxu.png' }
];

export function LatestWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<LightboxItem | null>(null);

  const scrollBy = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8 * dir;
    track.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="latest" className="py-16 px-4 sm:px-6 bg-fantasy-navyLight relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-fantasy-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-fantasy-teal/8 rounded-full blur-[120px] pointer-events-none"></div>

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
                Latest
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-longshot font-bold text-gradient-white-teal tracking-wider drop-shadow-lg flex items-baseline gap-4">
              WORKS
              <span className="font-cinzel text-lg md:text-xl text-fantasy-white/40 tracking-widest">最新の作品</span>
            </h2>
          </motion.div>

          <a
            href="#featured"
            className="group flex items-center gap-2 px-5 py-2.5 border border-fantasy-teal/40 text-fantasy-teal font-cinzel font-bold uppercase text-xs tracking-widest hover:bg-fantasy-teal/10 hover:border-fantasy-teal transition-all duration-300 arcane-panel">
            View More
            <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev */}
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center arcane-panel bg-fantasy-navy/80 border border-fantasy-teal/40 text-fantasy-teal hover:bg-fantasy-teal hover:text-fantasy-navy hover:shadow-glow-teal transition-all duration-300">
            <ChevronLeftIcon size={20} />
          </button>

          <div
            ref={trackRef}
            className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
            {latest.map((work, index) =>
            <motion.button
              key={index}
              type="button"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              onClick={() => setActive(work)}
              aria-label={`View ${work.title}`}
              className="group relative shrink-0 snap-center w-[46%] sm:w-[30%] md:w-[22%] lg:w-[15.5%] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fantasy-teal">

              <div className="relative arcane-panel bg-fantasy-cardBg p-1 border border-fantasy-purple/30 group-hover:border-fantasy-teal group-hover:shadow-glow-teal transition-all duration-300">
                <div className="relative arcane-panel overflow-hidden aspect-[3/5] bg-fantasy-navy">
                  <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy via-transparent to-transparent z-10"></div>
                  <div className="vignette-overlay z-10"></div>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-contain object-bottom filter grayscale-[15%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 z-20">
                    <h4 className="font-cinzel font-bold text-fantasy-white text-xs md:text-sm text-center drop-shadow-lg group-hover:text-fantasy-teal transition-colors truncate">
                      {work.title}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.button>
            )}
          </div>

          {/* Next */}
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center arcane-panel bg-fantasy-navy/80 border border-fantasy-teal/40 text-fantasy-teal hover:bg-fantasy-teal hover:text-fantasy-navy hover:shadow-glow-teal transition-all duration-300">
            <ChevronRightIcon size={20} />
          </button>
        </div>

        {/* Progress hint */}
        <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
          <span className="w-8 h-[2px] bg-fantasy-teal"></span>
          <span className="w-4 h-[2px] bg-fantasy-white/30"></span>
          <span className="w-4 h-[2px] bg-fantasy-white/30"></span>
        </div>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  );
}

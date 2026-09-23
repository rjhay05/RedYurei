import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const yureiFullSizeNoBG = "/images/yurei_fs_nbg.png";
const chinaLadyNoBG = "/images/china_lady_nbg.png";
const nuNoBG = "/images/nu_nbg.png";
const peachNoBG = "/images/peach.png";
const pijuNoBg = "/images/piju_nbg.png";
const tali = "/images/tali.png";

const ARTWORK_URL = "/1000_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";
const collections = [
  {
    title: 'Yurei',
    category: 'Character Design',
    tag: 'Featured',
    image: yureiFullSizeNoBG,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'China Lady',
    category: 'Concept Art',
    tag: 'Popular',
    image: chinaLadyNoBG,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Nu',
    category: 'Character Design',
    tag: 'Artist Pick',
    image: nuNoBG,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    title: 'Peach',
    category: 'Character Design',
    tag: 'New',
    image: peachNoBG,
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Piju',
    category: 'Character Design',
    tag: 'Featured',
    image: pijuNoBg,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    title: 'Tali',
    category: 'Character Design',
    tag: 'Popular',
    image: tali,
    description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Crystal Realms',
    category: 'Environment Art',
    tag: 'New',
    image: ARTWORK_URL,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.'
  },
  {
    title: 'Dragon Lords',
    category: 'Character Design',
    tag: 'Featured',
    image: ARTWORK_URL,
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  },
  {
    title: 'Enchanted Forests',
    category: 'Concept Art',
    tag: 'Popular',
    image: ARTWORK_URL,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    title: 'Necromantic Arts',
    category: 'Digital Painting',
    tag: 'Artist Pick',
    image: ARTWORK_URL,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    title: 'Celestial Beings',
    category: 'Character Art',
    tag: 'New',
    image: ARTWORK_URL,
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
  },
  {
    title: 'Ancient Ruins',
    category: 'Environment Art',
    tag: 'Featured',
    image: ARTWORK_URL,
    description: 'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi.'
  },
   {
    title: 'Celestial Beings',
    category: 'Character Art',
    tag: 'New',
    image: ARTWORK_URL,
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
  },
  {
    title: 'Ancient Ruins',
    category: 'Environment Art',
    tag: 'Featured',
    image: ARTWORK_URL,
    description: 'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi.'
  }
];

export function FeaturedCollections() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const collectionsRowRef = useRef<HTMLDivElement>(null);
  const collectionCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(collections.length / itemsPerPage);
  
  const selectedCollection = collections[selectedIndex];

  const handleSelectCollection = (actualIndex: number) => {
    setSelectedIndex(actualIndex);
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      const scrollTargetIndex = selectedIndex;
      setTimeout(() => {
        collectionCardRefs.current[scrollTargetIndex]?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }, 60);
    }
  }, [selectedIndex, currentPage]);

  const paginatedCollections = collections.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (pageIndex: number) => {
    const newSelectedIndex = pageIndex * itemsPerPage;
    setCurrentPage(pageIndex);
    setSelectedIndex(newSelectedIndex);
  };

  const handlePrevious = () => {
    const newPage = currentPage > 0 ? currentPage - 1 : totalPages - 1;
    const newSelectedIndex = newPage * itemsPerPage;
    setCurrentPage(newPage);
    setSelectedIndex(newSelectedIndex);
  };

  const handleNext = () => {
    const newPage = currentPage < totalPages - 1 ? currentPage + 1 : 0;
    const newSelectedIndex = newPage * itemsPerPage;
    setCurrentPage(newPage);
    setSelectedIndex(newSelectedIndex);
  };

  return (
    <section id="collections" className="pt-20 md:pt-24 pb-12 px-6 bg-fantasy-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-fantasy-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] bg-fantasy-teal/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Character Selection Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Side: Character Preview */}
          <div className="order-1">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative">

              {/* Preview Frame */}
              <div className="relative arcane-panel bg-fantasy-navy p-2 shadow-2xl">
                <div className="absolute inset-0 hextech-brackets z-30 pointer-events-none"></div>

                <div className="relative arcane-panel overflow-hidden bg-fantasy-cardBg aspect-square min-h-[280px] md:min-h-[320px] max-h-[620px]">
                  {/* Noise texture */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.05] mix-blend-overlay z-20 pointer-events-none"></div>

                  {/* Atmospheric Effects */}
                  <div className="vignette-overlay z-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy via-transparent to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,200,185,0.15),transparent_60%)] z-10 pointer-events-none mix-blend-screen"></div>

                  {/* Character Image */}
                  <motion.img
                    key={selectedIndex}
                    src={selectedCollection.image}
                    alt={selectedCollection.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-contain object-center filter  contrast-130 saturate-150" />

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-center">

                        {selectedCollection.tag && (
                          <span className="bg-fantasy-teal text-fantasy-navy font-cinzel font-bold text-xs uppercase tracking-widest px-4 py-1 shadow-glow-teal arcane-panel mb-3 inline-block">
                            {selectedCollection.tag}
                          </span>
                        )}
                        <h3 className="text-xl md:text-2xl font-cinzel font-bold text-fantasy-white drop-shadow-lg mb-2">
                          {selectedCollection.title}
                        </h3>
                        <p className="text-fantasy-teal font-raleway text-xs uppercase tracking-widest font-semibold drop-shadow-md mb-3">
                          {selectedCollection.category}
                        </p>
                        <p className="text-fantasy-white/80 font-raleway text-xs leading-relaxed max-w-md mx-auto">
                          {selectedCollection.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Collection Varieties */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">

              <div ref={collectionsRowRef} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:flex md:flex-row md:flex-nowrap lg:grid lg:grid-cols-3 lg:overflow-visible">
                {paginatedCollections.map((collection, index) => {
                  const actualIndex = currentPage * itemsPerPage + index;
                  const isSelected = actualIndex === selectedIndex;
                  return (
                    <motion.div
                      key={index}
                      ref={(el) => { collectionCardRefs.current[actualIndex] = el; }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative cursor-pointer transition-all duration-300 snap-center ${
                        isSelected
                          ? 'scale-105'
                          : 'hover:scale-102'
                      }`}
                      onClick={() => handleSelectCollection(actualIndex)}>

                      <div className={`arcane-panel p-1 transition-all duration-300 ${
                        isSelected
                          ? 'border-2 border-fantasy-teal shadow-glow-teal bg-fantasy-teal/5'
                          : 'border border-fantasy-purple/30 hover:border-fantasy-teal/50'
                      }`}>

                        <div className={`arcane-panel p-3 transition-all duration-300 ${
                          isSelected
                            ? 'bg-fantasy-cardBg border border-fantasy-teal/50'
                            : 'bg-fantasy-navyLight/50 hover:bg-fantasy-cardBg/80'
                        }`}>

                          <div className="flex flex-col items-center text-center gap-2">
                            {/* Thumbnail */}
                            <div className={`relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 arcane-panel overflow-hidden transition-all duration-300 ${
                              isSelected
                                ? 'border-2 border-fantasy-teal shadow-glow-teal'
                                : 'border border-fantasy-purple/30'
                            }`}>
                              <img
                                src={collection.image}
                                alt={collection.title}
                                className="w-full h-full object-cover filter grayscale-[30%] contrast-125" />
                              {isSelected && (
                                <div className="absolute inset-0 bg-fantasy-teal/20 mix-blend-overlay"></div>
                              )}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-cinzel font-bold text-xs md:text-sm transition-colors duration-300 ${
                                isSelected
                                  ? 'text-fantasy-teal'
                                  : 'text-fantasy-white hover:text-fantasy-teal'
                              }`}>
                                {collection.title}
                              </h4>
                              <p className={`font-raleway text-[10px] md:text-xs uppercase tracking-wider transition-colors duration-300 hidden lg:block ${
                                isSelected
                                  ? 'text-fantasy-purple'
                                  : 'text-fantasy-white/60'
                              }`}>
                                {collection.category}
                              </p>
                              {collection.tag && (
                                <span className={`inline-block mt-1 text-[10px] font-cinzel uppercase tracking-widest px-2 py-0.5 transition-all duration-300 hidden lg:inline-block ${
                                  isSelected
                                    ? 'bg-fantasy-teal text-fantasy-navy shadow-glow-teal'
                                    : 'bg-fantasy-purple/20 text-fantasy-purple'
                                }`}>
                                  {collection.tag}
                                </span>
                              )}
                            </div>

                            {/* Selection Indicator */}
                            <div className="flex-shrink-0">
                              <motion.div
                                animate={{
                                  scale: isSelected ? 1.2 : 1,
                                  rotate: isSelected ? 45 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className={`w-3 h-3 rotate-45 transition-colors duration-300 ${
                                  isSelected
                                    ? 'bg-fantasy-teal shadow-glow-teal'
                                    : 'bg-fantasy-white/30'
                                }`} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  {/* Previous Button */}
                  <button
                    onClick={handlePrevious}
                    className="arcane-panel p-2 bg-fantasy-navyLight border border-fantasy-purple/30 text-fantasy-teal hover:border-fantasy-teal hover:bg-fantasy-teal/10 transition-all duration-300"
                    aria-label="Previous page"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Page Indicators */}
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index)}
                        className={`w-3 h-3 rotate-45 transition-all duration-300 ${
                          index === currentPage
                            ? 'bg-fantasy-teal shadow-glow-teal scale-125'
                            : 'bg-fantasy-white/30 hover:bg-fantasy-teal/50'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="arcane-panel p-2 bg-fantasy-navyLight border border-fantasy-purple/30 text-fantasy-teal hover:border-fantasy-teal hover:bg-fantasy-teal/10 transition-all duration-300"
                    aria-label="Next page"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
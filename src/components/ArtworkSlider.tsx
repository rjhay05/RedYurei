import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export interface ArtworkItem {
  title: string;
  category: string;
  tag: string;
  image: string;
}
interface ArtworkSliderProps {
  artworks: ArtworkItem[];
}
export function ArtworkSlider({ artworks }: ArtworkSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  // Auto-rotate
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % artworks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, artworks.length]);
  const handlePrevious = () => {
    setSelectedIndex((prev) => prev === 0 ? artworks.length - 1 : prev - 1);
  };
  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % artworks.length);
  };
  const selectedArtwork = artworks[selectedIndex];
  return (
    <div
      className="w-full max-w-5xl mx-auto flex flex-col gap-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      {/* Main Display Area */}
      <div className="relative w-full h-[300px] md:h-[500px] arcane-panel bg-fantasy-navy p-1">
        <div className="absolute inset-0 hextech-brackets z-30 pointer-events-none"></div>

        <div className="relative w-full h-full arcane-panel overflow-hidden bg-fantasy-cardBg">
          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.05] mix-blend-overlay z-20 pointer-events-none"></div>

          {/* Vignette & Gradients */}
          <div className="vignette-overlay z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,200,185,0.15),transparent_60%)] z-10 pointer-events-none mix-blend-screen"></div>

          {/* Image Crossfade */}
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 1.05
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 w-full h-full object-cover object-top filter contrast-125 saturate-150" />

          </AnimatePresence>

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 p-6 md:p-10 z-30 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: 10
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1
                }}
                className="flex flex-col items-start gap-2">

                {selectedArtwork.tag &&
                <span className="bg-fantasy-gold text-fantasy-navy font-cinzel font-bold text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 shadow-glow-gold arcane-panel mb-1">
                    {selectedArtwork.tag}
                  </span>
                }
                <h3 className="text-3xl md:text-5xl font-cinzel font-bold text-fantasy-white drop-shadow-lg">
                  {selectedArtwork.title}
                </h3>
                <p className="text-fantasy-gold font-raleway text-sm md:text-base uppercase tracking-widest font-semibold drop-shadow-md">
                  {selectedArtwork.category}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Portrait Roster Bar */}
      <div className="relative flex items-center justify-center w-full px-10">
        {/* Mobile Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 md:hidden p-2 text-fantasy-gold hover:text-fantasy-white hover:shadow-glow-gold transition-all"
          aria-label="Previous artwork">

          <ChevronLeftIcon size={24} />
        </button>

        <div className="flex gap-3 md:gap-6 overflow-x-auto py-4 px-2 scrollbar-hide snap-x snap-mandatory max-w-full">
          {artworks.map((artwork, index) => {
            const isSelected = index === selectedIndex;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 cursor-pointer snap-center shrink-0 group"
                onClick={() => setSelectedIndex(index)}>

                {/* Indicator Diamond */}
                <div className="h-2 w-2 relative">
                  {isSelected &&
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-fantasy-gold rotate-45 shadow-glow-gold"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }} />

                  }
                </div>

                {/* Portrait Thumbnail */}
                <div
                  className={`relative w-16 h-16 md:w-20 md:h-20 arcane-panel transition-all duration-300 ${isSelected ? 'border-2 border-fantasy-gold shadow-glow-gold scale-110 z-10' : 'border border-fantasy-purple/30 filter grayscale-[40%] brightness-70 group-hover:brightness-100 group-hover:border-fantasy-gold/50'}`}>

                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover" />

                  {/* Hover overlay for unselected */}
                  {!isSelected &&
                  <div className="absolute inset-0 bg-fantasy-gold/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                  }
                </div>

                {/* Tiny Title */}
                <span
                  className={`font-cinzel text-[10px] md:text-xs tracking-wider text-center max-w-[80px] truncate transition-colors duration-300 ${isSelected ? 'text-fantasy-teal' : 'text-fantasy-white/50 group-hover:text-fantasy-white/80'}`}>

                  {artwork.title}
                </span>
              </div>);

          })}
        </div>

        {/* Mobile Navigation Arrows */}
        <button
          onClick={handleNext}
          className="absolute right-0 md:hidden p-2 text-fantasy-gold hover:text-fantasy-white hover:shadow-glow-gold transition-all"
          aria-label="Next artwork">

          <ChevronRightIcon size={24} />
        </button>
      </div>
    </div>);

}
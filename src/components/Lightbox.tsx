import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { getTagStyle } from '../lib/tagStyles';

export interface LightboxItem {
  image: string;
  title?: string;
  category?: string;
  tag?: string;
}

interface LightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item &&
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={item.title || 'Artwork preview'}>

          {/* Faded, blurred backdrop */}
          <div className="absolute inset-0 bg-fantasy-navy/90 backdrop-blur-md"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,45,142,0.25),transparent_65%)] pointer-events-none mix-blend-screen"></div>

          {/* Close button */}
          <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 flex items-center justify-center arcane-panel border border-fantasy-teal/40 bg-fantasy-navy/70 text-fantasy-teal hover:bg-fantasy-teal hover:text-fantasy-navy hover:shadow-glow-teal transition-all duration-300">
            <XIcon size={22} />
          </button>

          {/* Framed artwork */}
          <motion.div
          className="relative z-10 max-w-4xl w-full max-h-full flex flex-col items-center"
          initial={{ scale: 0.85, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 24 }}
          transition={{ type: 'spring', damping: 26, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}>

            <div className="relative arcane-panel p-1 bg-fantasy-cardBg border border-fantasy-teal/40 shadow-glow-teal max-h-[80vh] w-full">
              {/* Hextech corners */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-fantasy-teal z-20"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-fantasy-teal z-20"></div>

              <div className="relative arcane-panel overflow-hidden bg-fantasy-navy flex items-center justify-center max-h-[78vh]">
                <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img
                src={item.image}
                alt={item.title || 'Artwork'}
                className="max-h-[78vh] w-auto max-w-full object-contain filter contrast-110 saturate-125" />

                <span className="absolute top-3 right-3 font-longshot text-fantasy-white/25 text-sm tracking-wider z-20">
                  RED YUREI
                </span>
              </div>
            </div>

            {/* Caption */}
            {(item.title || item.category || item.tag) &&
          <div className="mt-5 flex flex-col items-center text-center gap-2">
                {item.tag &&
            <span className={`inline-block font-cinzel font-bold text-[10px] uppercase tracking-widest px-3 py-0.5 arcane-panel ${getTagStyle(item.tag)}`}>
                    {item.tag}
                  </span>
            }
                {item.title &&
            <h3 className="font-cinzel font-bold text-fantasy-white text-xl md:text-2xl drop-shadow-lg">
                    {item.title}
                  </h3>
            }
                {item.category &&
            <p className="font-raleway text-fantasy-teal/80 text-xs uppercase tracking-widest">
                    {item.category}
                  </p>
            }
              </div>
          }
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { getTagStyle } from '../lib/tagStyles';

export interface LightboxItem {
  image: string;
  title?: string;
  category?: string;
  tag?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_THRESHOLD = 80;

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -80, opacity: 0 })
};

const arrowClass =
  'absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center arcane-panel border border-fantasy-teal/40 bg-fantasy-navy/70 text-fantasy-teal hover:bg-fantasy-teal hover:text-fantasy-navy hover:shadow-glow-teal transition-all duration-300';

export function Lightbox({ items, index, onIndexChange, onClose }: LightboxProps) {
  const [direction, setDirection] = useState(1);
  const item = index !== null ? items[index] : undefined;
  const count = items.length;
  const isOpen = !!item;

  const go = useCallback(
    (dir: number) => {
      if (index === null || count < 2) return;
      setDirection(dir);
      onIndexChange((index + dir + count) % count);
    },
    [index, count, onIndexChange]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose, go]);

  // Preload neighbours so browsing feels instant
  useEffect(() => {
    if (index === null || count < 2) return;
    [(index + 1) % count, (index - 1 + count) % count].forEach((i) => {
      const img = new Image();
      img.src = items[i].image;
    });
  }, [index, count, items]);

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

          {count > 1 &&
          <>
              <button
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous artwork"
              className={`${arrowClass} left-2 sm:left-6`}>
                <ChevronLeftIcon size={22} />
              </button>
              <button
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next artwork"
              className={`${arrowClass} right-2 sm:right-6`}>
                <ChevronRightIcon size={22} />
              </button>
            </>
          }

          {/* Framed artwork */}
          <motion.div
          className="relative z-10 max-w-4xl w-full max-h-full flex flex-col items-center"
          initial={{ scale: 0.85, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 24 }}
          transition={{ type: 'spring', damping: 26, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}>

            <motion.div
            className="w-full flex flex-col items-center"
            drag={count > 1 ? 'x' : false}
            dragSnapToOrigin
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x > SWIPE_THRESHOLD) go(-1);
              else if (info.offset.x < -SWIPE_THRESHOLD) go(1);
            }}>
            <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full flex flex-col items-center">

            <div className="relative arcane-panel p-1 bg-fantasy-cardBg border border-fantasy-teal/40 shadow-glow-teal max-h-[80vh] w-full">
              {/* Hextech corners */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-fantasy-teal z-20"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-fantasy-teal z-20"></div>

              <div className="relative arcane-panel overflow-hidden bg-fantasy-navy flex items-center justify-center max-h-[78vh]">
                <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img
                src={item.image}
                alt={item.title || 'Artwork'}
                className="max-h-[78vh] w-auto max-w-full object-contain filter select-none"
                draggable={false} />

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
            </AnimatePresence>
            </motion.div>

            {count > 1 &&
          <div className="mt-4 flex items-center gap-3 font-cinzel text-fantasy-white/60 text-xs tracking-widest">
                <span className="w-1.5 h-1.5 rotate-45 bg-fantasy-teal"></span>
                {(index ?? 0) + 1} / {count}
                <span className="w-1.5 h-1.5 rotate-45 bg-fantasy-purple"></span>
              </div>
          }
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}

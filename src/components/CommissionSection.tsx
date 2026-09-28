import React from 'react';
import { motion } from 'framer-motion';
import { getTagStyle } from '../lib/tagStyles';

const commissions = [
  {
  title: 'Icon',
  price: '€25',
  description: 'Detailed portrait of a character, ideal for profile pictures and avatars.',
  tag: 'Artist',
  image: '/images/headshot.jpg'
},
{
  title: 'Half Body Design',
  price: '€45 - €125',
  description:
  'Illustration of a character cropped at the hips, excellent for displaying outfits.',
  tag: 'Hot',
  image: '/images/half_body.jpg'
},
{
  title: 'Full Body Commission',
  price: '€70 - €160',
  description:
  'A full-body illustration of your character, shown from head to toe. Perfect for character references, personal artwork, or showcasing your character’s full design and outfit.',
  tag: 'Popular',
  image: '/images/full_body.jpg'
},
{
  title: 'Lineart',
  price: '€10 - €70',
  description:
  'Clean lineart of a character in a transparent PNG format. Perfect for coloring pages or engraving, decals, stamps, and other creative projects.',
  tag: 'New',
  image: '/images/lineart.jpg'
}]

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};
export function CommissionSection() {
  return (
    <section
      id="commissions"
      className="py-24 px-4 sm:px-6 bg-fantasy-navyLight relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-fantasy-purple/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-fantasy-teal/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-fantasy-white tracking-wider mb-4 drop-shadow-lg">
            Commission Your Vision
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-2 h-2 rotate-45 bg-fantasy-teal shadow-glow-teal"></div>
            <div className="h-[1px] w-24 bg-gradient-to-r from-fantasy-teal to-fantasy-purple"></div>
            <div className="w-2 h-2 rotate-45 bg-fantasy-purple shadow-glow-purple"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {commissions.map((item, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-fantasy-cardBg arcane-panel p-1 relative group transition-all duration-300 flex flex-col h-full border border-fantasy-teal/20 hover:border-fantasy-teal hover:shadow-glow-teal">

              {/* Hextech corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-fantasy-teal opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fantasy-teal opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>

              {/* Inner border */}
              <div className="border border-fantasy-purple/20 p-5 h-full flex flex-col relative z-10 bg-fantasy-cardBg arcane-panel">
                {item.tag &&
              <div className={`absolute -top-1 left-1/2 -translate-x-1/2 font-cinzel font-bold text-[10px] uppercase tracking-widest px-4 py-1 z-20 whitespace-nowrap arcane-panel ${getTagStyle(item.tag)}`}>
                    {item.tag}
                  </div>
              }

                <div className="w-full h-90 mb-6 overflow-hidden border border-fantasy-navy relative arcane-panel bg-fantasy-navy">
                  <div className="absolute inset-0 bg-fantasy-navy/50 group-hover:bg-gradient-to-tr group-hover:from-fantasy-teal/20 group-hover:to-fantasy-purple/20 transition-all duration-500 z-10 mix-blend-overlay"></div>
                  <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain object-bottom filter contrast-110 group-hover:scale-110 transition-all duration-500" />

                </div>

                <h3 className="text-xl font-cinzel font-bold text-fantasy-white mb-2 text-center group-hover:text-fantasy-teal transition-colors">
                  {item.title}
                </h3>

                <p className="text-fantasy-teal font-cinzel font-semibold text-center mb-4 tracking-wider drop-shadow-md">
                  {item.price}
                </p>

                <p className="text-fantasy-white/70 font-raleway text-sm text-center mb-8 flex-grow font-light leading-relaxed">
                  {item.description}
                </p>

                <button className="w-full py-3 bg-fantasy-navy border border-fantasy-crimson text-fantasy-crimson font-cinzel font-bold tracking-widest uppercase text-sm group-hover:bg-fantasy-crimson group-hover:text-fantasy-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(221,45,74,0.5),0_0_10px_rgba(10,200,185,0.5)] mt-auto arcane-panel">
                  Commission
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}
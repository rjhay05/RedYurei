import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
const ARTWORK_URL = "/1000_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";

const testimonials = [
{
  name: 'ELARA VANCE',
  quote:
  'Aetheria captured the exact mood of my D&D character. The lighting is simply breathtaking and the attention to detail is unmatched.'
},
{
  name: 'MARCUS THORN',
  quote:
  'Commissioning the cover art for my fantasy novel was a seamless experience. The final piece exceeded every expectation.'
},
{
  name: 'SYLVIA RUNE',
  quote:
  'An absolute master of cinematic composition. The artwork feels alive, like a still frame from a high-budget animated film.'
}];

const trendingTags = [
'Dark Fantasy',
'Ethereal Lighting',
'Hextech Magic',
'Zaun Architecture',
'Epic Battles',
'Mystical Artifacts',
'Character Turnarounds',
'Cinematic Portraits'];

export function SocialProof() {
  return (
    <section className="py-20 px-6 bg-fantasy-navy border-y border-fantasy-teal/20 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fantasy-teal to-transparent opacity-50"></div>

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
          className="text-center mb-16">

          <h2 className="text-2xl md:text-4xl font-cinzel font-bold text-fantasy-white tracking-wider mb-2 drop-shadow-lg">
            Collectors & Commissions
          </h2>
          <p className="text-fantasy-teal/80 font-raleway italic">
            Join the ranks of satisfied patrons
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Recent Commissions */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="flex flex-col gap-6">

            <h3 className="text-lg font-cinzel text-fantasy-white border-b border-fantasy-teal/30 pb-2 relative">
              Recent Works
              <span className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-fantasy-teal"></span>
            </h3>
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((i) =>
              <div
                key={i}
                className="flex items-center gap-4 group cursor-pointer">

                  <div className="w-16 h-16 arcane-panel overflow-hidden border border-fantasy-purple/30 group-hover:border-fantasy-teal transition-colors duration-300">
                    <img
                    src={ARTWORK_URL}
                    alt="Recent work"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter contrast-125" />

                  </div>
                  <div>
                    <p className="font-cinzel text-fantasy-white text-sm tracking-wider group-hover:text-fantasy-teal transition-colors">
                      Private Commission #{1024 + i}
                    </p>
                    <p className="font-raleway text-fantasy-white/50 text-xs">
                      Digital Painting
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Client Favorites (Testimonials) */}
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
              delay: 0.4
            }}
            className="flex flex-col gap-6">

            <h3 className="text-lg font-cinzel text-fantasy-white border-b border-fantasy-teal/30 pb-2 relative">
              Client Words
              <span className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-fantasy-teal"></span>
            </h3>
            <div className="flex flex-col gap-6">
              {testimonials.map((t, i) =>
              <div
                key={i}
                className="bg-fantasy-cardBg/50 p-4 arcane-panel relative">

                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-fantasy-teal to-fantasy-purple"></div>
                  <div className="flex gap-1 mb-2 ml-2">
                    {[1, 2, 3, 4, 5].map((star) =>
                  <StarIcon
                    key={star}
                    size={12}
                    className="text-fantasy-teal fill-fantasy-teal drop-shadow-[0_0_5px_rgba(10,200,185,0.8)]" />

                  )}
                  </div>
                  <p className="font-raleway italic text-fantasy-white/80 text-sm mb-3 leading-relaxed ml-2">
                    "{t.quote}"
                  </p>
                  <p className="font-cinzel text-fantasy-teal text-xs tracking-widest uppercase ml-2">
                    {t.name}
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Trending Styles */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.6
            }}
            className="flex flex-col gap-6">

            <h3 className="text-lg font-cinzel text-fantasy-white border-b border-fantasy-teal/30 pb-2 relative">
              Trending Styles
              <span className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-fantasy-teal"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {trendingTags.map((tag, i) =>
              <span
                key={i}
                className="px-3 py-1 border border-fantasy-purple/40 text-fantasy-white/70 font-raleway text-xs hover:border-fantasy-teal hover:text-fantasy-teal hover:shadow-glow-teal transition-all cursor-default arcane-panel bg-fantasy-cardBg/30">

                  {tag}
                </span>
              )}
            </div>
            <div className="mt-auto pt-6">
              <div className="p-6 border border-fantasy-teal/50 bg-fantasy-teal/5 text-center relative overflow-hidden group arcane-panel hover:shadow-glow-teal transition-shadow">
                <div className="absolute inset-0 bg-fantasy-teal/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <p className="font-cinzel text-fantasy-teal relative z-10 mb-2 font-bold tracking-wider">
                  Waitlist Currently Open
                </p>
                <p className="font-raleway text-fantasy-white/70 text-xs relative z-10">
                  Secure your spot for next month
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, PaletteIcon, GemIcon, GiftIcon } from 'lucide-react';

const features = [
  {
    icon: SparklesIcon,
    title: 'High Quality',
    description: 'High resolution, professional quality artwork.'
  },
  {
    icon: PaletteIcon,
    title: 'Unique Style',
    description: 'Detailed, atmospheric and tailored to your vision.'
  },
  {
    icon: GemIcon,
    title: 'Clear Process',
    description: 'Smooth communication and transparent workflow.'
  },
  {
    icon: GiftIcon,
    title: 'On Time Delivery',
    description: 'Respecting deadlines and your expectations.'
  }
];

export function Features() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-fantasy-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="arcane-panel bg-fantasy-cardBg/40 border border-fantasy-teal/20 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {features.map((feature, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-start gap-4 relative">

                {/* Icon medallion */}
                <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-fantasy-teal/40 text-fantasy-teal arcane-panel bg-fantasy-navy/60 group-hover:border-fantasy-teal group-hover:shadow-glow-teal transition-all duration-300">
                  <feature.icon size={20} />
                </div>

                <div>
                  <h3 className="font-cinzel font-bold text-fantasy-white text-sm uppercase tracking-widest mb-1 group-hover:text-fantasy-teal transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-raleway text-fantasy-white/60 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Divider between items (desktop) */}
                {index < features.length - 1 &&
                <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gradient-to-b from-transparent via-fantasy-teal/30 to-transparent"></span>
                }
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

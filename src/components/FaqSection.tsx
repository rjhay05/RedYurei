import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from 'lucide-react';

const faqs = [
  {
    question: 'How do I request a commission?',
    answer:
      'Click any "Order Commission" button and send an email describing your idea, references, and desired size. You will receive a quote and timeline before any payment is made.'
  },
  {
    question: 'What is your typical turnaround time?',
    answer:
      'Most portrait pieces are completed within 1–2 weeks, while full illustrations and complex scenes may take 3–4 weeks depending on the current queue.'
  },
  {
    question: 'Do you offer commercial licenses?',
    answer:
      'Yes. Commercial usage rights for covers, prints, and merchandise are available for an additional fee. Let me know your intended use when requesting a quote.'
  },
  {
    question: 'What file formats will I receive?',
    answer:
      'You will receive high-resolution PNG and JPG files. Layered source files can be provided on request for eligible commission tiers.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-fantasy-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-fantasy-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-fantasy-white tracking-wider mb-4 drop-shadow-lg">
            Frequently Asked
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-2 h-2 rotate-45 bg-fantasy-teal shadow-glow-teal"></div>
            <div className="h-[1px] w-24 bg-gradient-to-r from-fantasy-teal to-fantasy-purple"></div>
            <div className="w-2 h-2 rotate-45 bg-fantasy-purple shadow-glow-purple"></div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`arcane-panel border transition-all duration-300 ${
                  isOpen
                    ? 'border-fantasy-teal/60 bg-fantasy-cardBg shadow-glow-teal'
                    : 'border-fantasy-purple/30 bg-fantasy-cardBg/40 hover:border-fantasy-teal/40'
                }`}>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5"
                  aria-expanded={isOpen}>
                  <span className="font-cinzel font-bold text-fantasy-white text-sm md:text-base tracking-wide">
                    {faq.question}
                  </span>
                  <PlusIcon
                    size={20}
                    className={`shrink-0 text-fantasy-teal transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                      <p className="px-5 pb-5 font-raleway text-fantasy-white/70 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  }
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

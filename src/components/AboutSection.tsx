import { motion } from 'framer-motion';
const ARTWORK_URL = "/images/FULL IMAGES/YUREI_2_NO_BG.png";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 bg-fantasy-navyLight relative overflow-hidden">

      {/* Atmospheric Blurs */}
      <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] bg-fantasy-purple/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-[30vw] h-[30vw] bg-fantasy-teal/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative flex justify-center lg:justify-end">

            <div className="relative w-[18rem] h-[24rem] sm:w-[26rem] sm:h-[34rem] xl:w-[30rem] xl:h-[38rem]">
              {/* Arch frame glow (matches hero portrait) */}
              <div className="absolute inset-0 rounded-t-full border-2 border-fantasy-teal/40 shadow-glow-teal animate-pulse-glow"></div>
              <div className="absolute inset-3 rounded-t-full border border-fantasy-purple/40"></div>
              <div className="absolute -inset-6 rounded-t-full border border-fantasy-gold/10 animate-spin-slow"></div>

              {/* Portrait */}
              <div className="absolute inset-3 rounded-t-full overflow-hidden bg-fantasy-cardBg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,45,142,0.25),transparent_65%)] z-10 mix-blend-screen"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy via-transparent to-transparent z-10"></div>
                <img
                  src={ARTWORK_URL}
                  alt="Aetheria - Artist Portrait"
                  className="w-full h-full object-cover object-top filter contrast-110 saturate-125" />
                <div className="vignette-overlay z-20"></div>
              </div>

              <div className="absolute -top-2 -right-2 text-fantasy-pink text-2xl animate-float">✿</div>
              <div className="absolute bottom-10 -left-4 text-fantasy-pink/80 text-xl animate-float-delayed">✿</div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="flex flex-col">

            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-fantasy-teal shadow-glow-teal"></div>
              <span className="font-raleway text-fantasy-teal uppercase tracking-widest text-sm font-bold">
                The Artist
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-gradient-white-teal mb-8 tracking-wider drop-shadow-lg">
              Behind Red Yurei
            </h2>

            <div className="space-y-6 font-raleway text-fantasy-white/80 font-light leading-relaxed">
              <p>
                I'm an independent artist and character designer who loves bringing all kinds of characters and creative ideas to life.
              </p>

              <p>
                 From cute and colorful to dark and detailed, I enjoy exploring different styles and experimenting with new ideas. Whether you have an original character, a specific vision, or just a little idea you have in mind, I'm happy to work with you to make it happen! 
              </p>

              <p>
                Thank you for stopping by and taking a look at my work. I hope we can create something wonderful together ♡◇♡
              </p>
            </div>

            <div className="mt-10">
              <img
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'><path d='M10,40 Q30,10 50,30 T90,20 T140,35' fill='none' stroke='%230AC8B9' stroke-width='2' filter='drop-shadow(0 0 2px %230AC8B9)'/></svg>"
                alt="Artist Signature"
                className="opacity-80" />

            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
import React from 'react';
import { InstagramIcon, TwitterIcon, YoutubeIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-fantasy-navy pt-20 pb-10 px-6 relative overflow-hidden">

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fantasy-teal via-fantasy-purple to-fantasy-teal opacity-70 shadow-glow-teal"></div>

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-cinzel font-bold text-gradient-teal-gold tracking-wider mb-4 drop-shadow-md">
              Medinila Arts
            </h2>
            {/* <p className="font-raleway text-fantasy-white/60 text-sm text-center md:text-left max-w-xs">
              Cinematic fantasy illustration and concept design. Bringing myths
              to life through digital artistry.
            </p> */}
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cinzel text-fantasy-white text-lg tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-fantasy-teal rotate-45 inline-block"></span>
              Explore
            </h3>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              {['Home', 'Collections', 'Commissions', 'About'].map((item) =>
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-raleway text-fantasy-white/70 hover:text-fantasy-teal hover:translate-x-1 transition-all text-sm uppercase tracking-wider">

                  {item}
                </a>
              )}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cinzel text-fantasy-white text-lg tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-fantasy-teal rotate-45 inline-block"></span>
              Connect
            </h3>
            <a
              href="mailto:contact@aetheria.art"
              className="flex items-center gap-3 font-raleway text-fantasy-white/70 hover:text-fantasy-teal transition-colors mb-6 group">

              <MailIcon
                size={18}
                className="group-hover:text-fantasy-teal transition-colors" />

              <span>maja84fox@gmail.com</span>
            </a>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 arcane-panel border border-fantasy-teal/30 flex items-center justify-center text-fantasy-teal hover:bg-fantasy-teal hover:text-fantasy-navy hover:shadow-glow-teal transition-all duration-300">

                <InstagramIcon size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 arcane-panel border border-fantasy-teal/30 flex items-center justify-center text-fantasy-teal hover:bg-fantasy-teal hover:text-fantasy-navy hover:shadow-glow-teal transition-all duration-300">

                <TwitterIcon size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 arcane-panel border border-fantasy-teal/30 flex items-center justify-center text-fantasy-teal hover:bg-fantasy-teal hover:text-fantasy-navy hover:shadow-glow-teal transition-all duration-300">

                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-fantasy-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-raleway text-fantasy-white/40 text-xs">
            &copy; {new Date().getFullYear()} Medinila Arts. All rights
            reserved.
          </p>
          <div className="flex gap-4 font-raleway text-fantasy-white/40 text-xs">
            <a href="#" className="hover:text-fantasy-teal transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-fantasy-teal transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

}
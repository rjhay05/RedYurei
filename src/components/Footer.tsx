import React from 'react';
import { InstagramIcon, TwitterIcon, MessageCircleIcon, MailIcon } from 'lucide-react';
export function Footer() {
  const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Commissions', href: '#commissions' },
  { name: 'Terms of Service', href: '#faq' },
  { name: 'FAQ', href: '#faq' }];

  const socials = [
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: MessageCircleIcon, label: 'Discord', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: MailIcon, label: 'Email', href: 'mailto:maja84fox@gmail.com' }];

  return (
    <footer
      id="contact"
      className="bg-fantasy-navy pt-20 pb-10 px-4 sm:px-6 relative overflow-hidden">

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fantasy-teal via-fantasy-purple to-fantasy-teal opacity-70 shadow-glow-teal"></div>

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-fantasy-crimson/80 flex items-center justify-center arcane-panel bg-fantasy-navy/60">
                <span className="font-cinzel text-fantasy-crimson text-lg leading-none">赤</span>
              </div>
              <h2 className="text-2xl font-longshot text-gradient-teal-gold tracking-wider drop-shadow-md">
                RED YUREI
              </h2>
            </div>
            <p className="font-raleway text-fantasy-white/60 text-sm text-center md:text-left max-w-xs leading-relaxed">
              Digital art &amp; illustration. Bringing your ideas to life through
              cinematic fantasy visuals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cinzel text-fantasy-white text-lg tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-fantasy-teal rotate-45 inline-block"></span>
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              {quickLinks.map((item) =>
              <a
                key={item.name}
                href={item.href}
                className="font-raleway text-fantasy-white/70 hover:text-fantasy-teal hover:translate-x-1 transition-all text-sm uppercase tracking-wider flex items-center gap-2 group">

                  <span className="text-fantasy-crimson group-hover:text-fantasy-teal transition-colors">›</span>
                  {item.name}
                </a>
              )}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cinzel text-fantasy-white text-lg tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-fantasy-teal rotate-45 inline-block"></span>
              Let's Connect
            </h3>
            <div className="flex gap-4 mb-6">
              {socials.map((s) =>
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 arcane-panel border border-fantasy-teal/30 flex items-center justify-center text-fantasy-teal hover:bg-fantasy-teal hover:text-fantasy-navy hover:shadow-glow-teal transition-all duration-300">

                  <s.icon size={18} />
                </a>
              )}
            </div>
            <a
              href="mailto:maja84fox@gmail.com"
              className="flex items-center gap-3 font-raleway text-fantasy-white/70 hover:text-fantasy-teal transition-colors group">

              <MailIcon size={16} className="group-hover:text-fantasy-teal transition-colors" />
              <span className="text-sm">maja84fox@gmail.com</span>
            </a>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cinzel text-fantasy-white text-lg tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-fantasy-teal rotate-45 inline-block"></span>
              Have an Idea in Mind?
            </h3>
            <p className="font-raleway text-fantasy-white/60 text-sm text-center md:text-left mb-6 max-w-xs">
              Let's create something amazing together.
            </p>
            <a
              href="#commissions"
              className="px-6 py-3 bg-fantasy-crimson text-fantasy-white font-cinzel font-bold tracking-widest uppercase text-xs hover:bg-red-600 transition-all duration-300 shadow-glow-crimson hover:shadow-glow-crimson-strong arcane-panel border-b-2 border-fantasy-teal flex items-center gap-2">
              Order Commission
              <span className="w-1.5 h-1.5 rotate-45 bg-fantasy-teal inline-block"></span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-fantasy-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-raleway text-fantasy-white/40 text-xs">
            &copy; {new Date().getFullYear()} Red Yurei. All rights reserved.
          </p>
          <div className="flex gap-4 font-raleway text-fantasy-white/40 text-xs">
            <a href="#faq" className="hover:text-fantasy-teal transition-colors">
              Terms of Service
            </a>
            <a href="#faq" className="hover:text-fantasy-teal transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

}
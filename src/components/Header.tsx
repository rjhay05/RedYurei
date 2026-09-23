import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, TwitterIcon, MailIcon, MessageCircleIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'Gallery',
    href: '#featured'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Commissions',
    href: '#commissions'
  },
  {
    name: 'FAQ',
    href: '#faq'
  }];

  const socials = [
  { icon: MessageCircleIcon, label: 'Discord', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: MailIcon, label: 'Email', href: 'mailto:maja84fox@gmail.com' }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-fantasy-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent py-4'}`}>

      {/* Bottom border gradient */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-fantasy-teal via-transparent to-fantasy-purple transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group relative">

          {/* Kanji seal mark */}
          <div className="relative w-10 h-10 md:w-11 md:h-11 border-2 border-fantasy-crimson/80 flex items-center justify-center arcane-panel bg-fantasy-navy/60 group-hover:border-fantasy-teal group-hover:shadow-glow-teal transition-all duration-300">
            <span className="font-cinzel text-fantasy-crimson group-hover:text-fantasy-teal text-lg leading-none transition-colors duration-300">
              赤
            </span>
          </div>

          <span className="flex flex-col leading-none">
            <span className="text-lg md:text-2xl font-longshot tracking-wider text-gradient-teal-gold">
              RED YUREI
            </span>
            <span className="text-fantasy-white/50 text-[9px] md:text-[10px] font-raleway uppercase tracking-[0.3em]">
              Visual Archive
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="font-raleway text-xs uppercase tracking-widest text-fantasy-white/80 hover:text-fantasy-teal transition-colors duration-300 relative group">

              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-none rotate-45 bg-fantasy-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow-teal"></span>
            </a>
          )}
        </nav>

        {/* Right cluster: socials + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-3">
            {socials.map((s) =>
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-fantasy-white/60 hover:text-fantasy-teal transition-colors duration-300">
                <s.icon size={18} />
              </a>
            )}
          </div>
          <a
            href="#commissions"
            className="px-5 py-2.5 bg-fantasy-crimson text-fantasy-white font-cinzel font-bold tracking-widest uppercase text-[11px] hover:bg-red-600 transition-all duration-300 shadow-glow-crimson hover:shadow-glow-crimson-strong arcane-panel border-b-2 border-fantasy-teal flex items-center gap-2">
            Order Commission
            <span className="w-1.5 h-1.5 rotate-45 bg-fantasy-teal inline-block"></span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-fantasy-teal hover:text-fantasy-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">

          {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.nav
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="absolute top-full left-0 right-0 bg-fantasy-navy/95 backdrop-blur-lg border-t-2 border-fantasy-teal py-6 px-6 flex flex-col gap-6 lg:hidden shadow-2xl relative overflow-hidden">

            <div className="noise-overlay opacity-10"></div>
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-cinzel text-xl text-center text-fantasy-white hover:text-fantasy-teal transition-colors duration-300 relative z-10">

                {link.name}
              </a>
          )}
            <a
              href="#commissions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-6 py-3 bg-fantasy-crimson text-fantasy-white font-cinzel font-bold tracking-widest uppercase text-sm text-center arcane-panel border-b-2 border-fantasy-teal relative z-10">
              Order Commission
            </a>
            <div className="flex items-center justify-center gap-6 relative z-10">
              {socials.map((s) =>
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-fantasy-teal hover:text-fantasy-white transition-colors">
                  <s.icon size={20} />
                </a>
              )}
            </div>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}
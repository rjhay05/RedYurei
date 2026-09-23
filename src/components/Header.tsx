import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
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
    name: 'Collections',
    href: '#collections'
  },
  {
    name: 'Commissions',
    href: '#commissions'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-fantasy-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent py-6'}`}>

      {/* Bottom border gradient */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-fantasy-teal via-transparent to-fantasy-purple transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          className="text-2xl md:text-3xl font-excelsior font-bold tracking-wider flex items-center gap-3 group relative">

          {/* Subtle hextech bracket left */}
          <div className="w-2 h-4 border-l-2 border-t-2 border-fantasy-teal opacity-50 group-hover:opacity-100 transition-opacity"></div>

          <span className="relative">
            <span className="text-gradient-teal-gold">MEDINILA</span>
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-fantasy-teal to-fantasy-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </span>
          <span className="text-fantasy-white/80 text-xl md:text-2xl font-light">
            ARTS
          </span>

          {/* Subtle hextech bracket right */}
          <div className="w-2 h-4 border-r-2 border-b-2 border-fantasy-purple opacity-50 group-hover:opacity-100 transition-opacity"></div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="font-raleway text-sm uppercase tracking-widest text-fantasy-white/80 hover:text-fantasy-teal transition-colors duration-300 relative group">

              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-none rotate-45 bg-fantasy-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow-teal"></span>
            </a>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-fantasy-teal hover:text-fantasy-white transition-colors"
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
          className="absolute top-full left-0 right-0 bg-fantasy-navy/95 backdrop-blur-lg border-t-2 border-fantasy-teal py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl relative overflow-hidden">

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
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact Us', href: '#booking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-syne font-extrabold text-primary-foreground text-sm">A</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-syne font-bold text-foreground text-sm tracking-wider">APLAYA AUTO ART</p>
                <p className="font-geist text-muted-foreground text-[10px] tracking-widest">SERVITEK 3.8</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-geist text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Phone + Mobile Menu */}
            <div className="flex items-center gap-4">
              <a
                href="tel:09454430205"
                className="hidden sm:flex items-center gap-2 font-geist text-xs text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                0945 443 0205
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-foreground p-2"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg pt-20"
          >
            <div className="flex flex-col items-center gap-8 pt-12">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-syne text-2xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:09454430205"
                className="flex items-center gap-3 mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-geist text-sm"
              >
                <Phone className="w-4 h-4" />
                0945 443 0205
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="tel:09454430205"
            className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
          >
            <Phone className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
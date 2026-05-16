

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GALLERY_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop',
    title: 'Workshop Interior',
    category: 'Facility',
    alt: 'Modern auto workshop interior with LED lighting and hydraulic lifts',
  },
  {
    image: 'https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?q=80&w=2058&auto=format&fit=crop',
    title: 'Paint Restoration',
    category: 'Auto Art',
    alt: 'Classic car being spray painted in a professional booth',
  },
  {
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop',
    title: 'Full Restoration',
    category: 'Completed',
    alt: 'Restored vintage car with gleaming chrome and black paint',
  },
  {
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop',
    title: 'Precision Diagnostics',
    category: 'Service',
    alt: 'Mechanic using precision diagnostic tools on an engine',
  },
  {
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop',
    title: 'Before & After',
    category: 'Transformation',
    alt: 'Before and after car restoration comparison',
  },
];

export default function GallerySection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-geist text-xs tracking-[0.3em] text-primary uppercase">Gallery of Craft</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Our Work
            </h2>
          </div>

          <div className="flex gap-2 mt-6 sm:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="border-border text-muted-foreground hover:text-primary hover:border-primary w-10 h-10"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="border-border text-muted-foreground hover:text-primary hover:border-primary w-10 h-10"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[320px] sm:w-[400px] group"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Overlay CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href="#booking"
                  className="block w-full text-center font-geist text-[10px] tracking-widest uppercase bg-primary text-primary-foreground py-2.5 rounded-sm"
                >
                  Request Similar Work
                </a>
              </div>
            </div>
            <div className="px-1">
              <span className="font-geist text-[10px] tracking-widest text-primary uppercase">{item.category}</span>
              <h3 className="font-syne font-bold text-foreground mt-1">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
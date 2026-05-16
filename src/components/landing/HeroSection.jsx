

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowDown, Wrench, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop';

const STATS = [
  { icon: Wrench, label: 'Years Active', value: '10+' },
  { icon: Clock, label: 'Vehicles Served', value: '5,000+' },
  { icon: Shield, label: 'Satisfaction', value: '99%' },
];

export default function HeroSection() {
  const [status, setStatus] = useState({ isOpen: false, statusText: "Checking status..." });

  useEffect(() => {
    function updateStatus() {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      const currentTimeNum = hours + minutes / 60;
      const openTimeNum = 7.5; // 7:30 AM
      const closeTimeNum = 17.0; // 5:00 PM
      
      let isOpen = false;
      let nextOpenDay = "";
      
      if (day >= 1 && day <= 6 && currentTimeNum >= openTimeNum && currentTimeNum < closeTimeNum) {
        isOpen = true;
      } else {
        if (day === 0) {
          nextOpenDay = "Mon";
        } else if (currentTimeNum < openTimeNum) {
          nextOpenDay = "today";
        } else {
          if (day === 6) {
            nextOpenDay = "Mon";
          } else {
            nextOpenDay = "tomorrow";
          }
        }
      }
      
      setStatus({
        isOpen,
        statusText: isOpen ? "Open Now · Closes 5:00 PM" : `Closed · Opens 7:30 AM ${nextOpenDay}`
      });
    }

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-geist text-xs tracking-[0.3em] text-primary uppercase">
                Davao City's Premier
              </span>
            </div>

            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] text-foreground mb-6">
              Where<br />
              <span className="text-primary">Precision</span><br />
              Meets Art
            </h1>

            <p className="font-geist text-sm text-muted-foreground max-w-md leading-relaxed mb-8">
              Aplaya Auto Art & Servitek 3.8 — Davao's trusted destination 
              for engine diagnostics, precision tuning, paint restoration, 
              and complete automotive care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#booking">
                <Button className="bg-primary text-primary-foreground font-geist text-xs tracking-widest uppercase px-8 py-6 hover:bg-primary/90 transition-all w-full sm:w-auto">
                  Book Service
                </Button>
              </a>
              <a href="tel:09454430205">
                <Button variant="outline" className="border-border text-foreground font-geist text-xs tracking-widest uppercase px-8 py-6 hover:border-primary hover:text-primary transition-all w-full sm:w-auto animate-pulse-glow">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="w-4 h-4 text-primary mb-2" />
                  <p className="font-syne font-bold text-2xl text-foreground">{stat.value}</p>
                  <p className="font-geist text-[10px] tracking-widest text-muted-foreground uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] lg:aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={HERO_IMAGE}
                alt="High-performance engine close-up with dramatic orange lighting"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute bottom-8 left-0 sm:-left-4 bg-card border border-border rounded-sm p-4">
              <p className="font-geist text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Workshop Status</p>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <p className="font-geist text-xs text-foreground">{status.statusText}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
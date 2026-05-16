import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border">
      {/* Industrial label bar */}
      <div className="bg-primary py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="font-geist text-[10px] tracking-[0.3em] text-primary-foreground uppercase font-bold">
            APLAYA AUTO ART & SERVITEK 3.8
          </span>
          <span className="font-geist text-[10px] tracking-widest text-primary-foreground/70">
            DAVAO CITY
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-syne font-extrabold text-primary-foreground text-lg">A</span>
              </div>
              <div>
                <p className="font-syne font-bold text-foreground tracking-wider">APLAYA AUTO ART</p>
                <p className="font-geist text-[10px] tracking-[0.3em] text-muted-foreground">SERVITEK 3.8</p>
              </div>
            </div>
            <p className="font-geist text-xs text-muted-foreground leading-relaxed max-w-sm mt-4">
              Where precision meets art. Davao City's premier destination for engine 
              diagnostics, paint restoration, and complete automotive care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-geist text-[10px] tracking-[0.3em] text-primary uppercase font-bold mb-4">Navigation</p>
            <div className="space-y-3">
              {['Services', 'Gallery', 'About', 'Contact Us'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="block font-geist text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-geist text-[10px] tracking-[0.3em] text-primary uppercase font-bold mb-4">Contact</p>
            <div className="space-y-4">
              <a href="tel:09454430205" className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-geist text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  0945 443 0205
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="font-geist text-xs text-muted-foreground">
                  Del Carmen Street, Talomo,<br />Davao City, Davao del Sur
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-geist text-xs text-muted-foreground">
                  Mon – Sat, 7:30 AM – 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar - Stenciled label style */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-geist text-[10px] tracking-widest text-muted-foreground">
              PLUS CODE: 2HR9+WR
            </span>
            <div className="w-[1px] h-3 bg-border" />
            <span className="font-geist text-[10px] tracking-widest text-muted-foreground">
              DAVAO DEL SUR
            </span>
          </div>
          <p className="font-geist text-[10px] text-muted-foreground/60">
            © {new Date().getFullYear()} Aplaya Auto Art & Servitek 3.8. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
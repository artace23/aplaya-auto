import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CONTACT_INFO = {
  phone: '0945 443 0205',
  email: 'aplayauto.servitek@gmail.com', // Replace with your actual email
  address: 'Del Carmen St, Talomo, Davao City',
  coordinates: '7.042558757860643,125.56960164232831',
  hours: 'Mon – Sat, 7:30 AM – 5:00 PM',
  plusCode: '2HR9+WR'
};

export default function BookingSection() {
  return (
    <section id="booking" className="relative py-24 lg:py-32 bg-card overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 border border-primary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-geist text-xs tracking-[0.3em] text-primary uppercase">Command Center</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              Get In<br />Touch
            </h2>
            <p className="font-geist text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
              Ready to give your vehicle the care it deserves? Contact us via phone or email, or visit our workshop in Davao City.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 border border-border rounded-sm bg-background/50">
                <Clock className="w-6 h-6 text-primary mb-4" />
                <p className="font-geist text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Business Hours</p>
                <p className="font-syne font-bold text-foreground text-sm">{CONTACT_INFO.hours}</p>
              </div>
              <div className="p-6 border border-border rounded-sm bg-background/50">
                <MapPin className="w-6 h-6 text-primary mb-4" />
                <p className="font-geist text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Location</p>
                <p className="font-syne font-bold text-foreground text-sm">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 sm:p-12 border border-primary/20 rounded-sm bg-background relative z-10 shadow-2xl shadow-primary/5">
              <h3 className="font-syne font-bold text-2xl text-foreground mb-8">Direct Channels</h3>
              
              <div className="space-y-4">
                <Button 
                  asChild
                  className="w-full h-16 bg-primary text-primary-foreground hover:bg-primary/90 font-geist tracking-widest uppercase text-xs"
                >
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                    <Phone className="w-5 h-5 mr-3" />
                    Call {CONTACT_INFO.phone}
                  </a>
                </Button>

                <Button 
                  asChild
                  variant="outline"
                  className="w-full h-16 border-border hover:border-primary/50 hover:bg-primary/5 font-geist tracking-widest uppercase text-xs"
                >
                  <a href={`mailto:${CONTACT_INFO.email}`}>
                    <Mail className="w-5 h-5 mr-3" />
                    Email Us Directly
                  </a>
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="font-geist text-[10px] tracking-widest text-muted-foreground uppercase mb-4 text-center">Visit our Workshop</p>
                <div className="aspect-video w-full bg-secondary/50 rounded-sm overflow-hidden border border-border">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" 
                    src={`https://maps.google.com/maps?q=${CONTACT_INFO.coordinates}&z=15&output=embed`}
                    className="grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Industrial accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-sm -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
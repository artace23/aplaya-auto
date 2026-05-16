import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, Wrench } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={`border border-border bg-card hover:border-primary/40 transition-all duration-300 cursor-pointer rounded-sm overflow-hidden ${
          expanded ? 'border-primary/60' : ''
        }`}
      >
        {/* Main content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="font-geist text-[10px] text-primary tracking-widest">{service.code}</span>
              <div className="w-6 h-[1px] bg-border" />
            </div>
            <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
              expanded ? 'rotate-90 text-primary' : 'group-hover:text-primary'
            }`} />
          </div>
          
          <h3 className="font-syne font-bold text-lg text-foreground mb-2">{service.title}</h3>
          <p className="font-geist text-xs text-muted-foreground leading-relaxed">{service.description}</p>
        </div>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-border/50 pt-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <div>
                      <p className="font-geist text-[10px] text-muted-foreground uppercase tracking-wider">Est. Time</p>
                      <p className="font-geist text-xs text-foreground">{service.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-primary" />
                    <div>
                      <p className="font-geist text-[10px] text-muted-foreground uppercase tracking-wider">Equipment</p>
                      <p className="font-geist text-xs text-foreground">{service.equipment}</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#booking"
                  className="block w-full text-center font-geist text-xs tracking-widest uppercase bg-primary text-primary-foreground py-3 rounded-sm hover:bg-primary/90 transition-colors"
                >
                  Book This Service
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
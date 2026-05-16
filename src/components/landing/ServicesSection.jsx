import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const SERVICES = [
  {
    code: 'SRV-001',
    title: 'Engine Diagnostics',
    description: 'Full computerized engine scan and diagnostic assessment using state-of-the-art OBD tools.',
    time: '1-2 hours',
    equipment: 'OBD-II Scanner',
  },
  {
    code: 'SRV-002',
    title: 'Paint Restoration',
    description: 'Complete paint correction, ceramic coating, and custom color-matching for factory-level finish.',
    time: '2-5 days',
    equipment: 'Spray Booth',
  },
  {
    code: 'SRV-003',
    title: '3.8 Precision Tuning',
    description: 'Performance tuning and calibration for optimal engine output and fuel efficiency.',
    time: '3-6 hours',
    equipment: 'Dyno Tuner',
  },
  {
    code: 'SRV-004',
    title: 'Body Repair & Restoration',
    description: 'Dent removal, panel replacement, and full body reconstruction for collision damage.',
    time: '1-7 days',
    equipment: 'Frame Machine',
  },
  {
    code: 'SRV-005',
    title: 'Full Detail & Protection',
    description: 'Interior deep clean, exterior polish, and protective coating application.',
    time: '4-8 hours',
    equipment: 'DA Polisher',
  },
  {
    code: 'SRV-006',
    title: 'Electrical Systems',
    description: 'Wiring diagnostics, alternator testing, and full electrical system overhaul.',
    time: '2-4 hours',
    equipment: 'Multimeter Pro',
  },
  {
    code: 'SRV-007',
    title: 'Suspension & Alignment',
    description: 'Shock absorber replacement, spring adjustment, and precision wheel alignment.',
    time: '2-4 hours',
    equipment: 'Alignment Rack',
  },
  {
    code: 'SRV-008',
    title: 'General Maintenance',
    description: 'Oil change, brake inspection, tire rotation, and comprehensive preventive care.',
    time: '1-3 hours',
    equipment: 'Hydraulic Lift',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-geist text-xs tracking-[0.3em] text-primary uppercase">Service Blueprint</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="font-geist text-sm text-muted-foreground max-w-lg leading-relaxed">
            Each service is delivered with engineering precision and artistic care.
            Click any service to see detailed specifications.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.code} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
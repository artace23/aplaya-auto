import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const features = [
    "Premium Quality Service",
    "Experienced Professionals",
    "State-of-the-art Equipment",
    "Customer Satisfaction Guaranteed"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-2">
              About Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Committed to Excellence in Every Detail
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We take pride in delivering exceptional service with a focus on quality and reliability. Our team of experts is dedicated to ensuring that every experience exceeds your expectations.
            </p>
            
            <ul className="space-y-4 mt-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-foreground font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 relative">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional automotive care and restoration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-2xl mix-blend-overlay"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

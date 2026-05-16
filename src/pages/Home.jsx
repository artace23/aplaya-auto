import React from 'react';
import Navbar from '../components/landing/Navbar';
import ScrollProgress from '../components/landing/ScrollProgress';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import GallerySection from '../components/landing/GallerySection';
import AboutSection from '../components/landing/AboutSection';
import BookingSection from '../components/landing/BookingSection';
import Footer from '../components/landing/Footer';
import FloatingCTA from '../components/landing/FloatingCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-geist">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <BookingSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
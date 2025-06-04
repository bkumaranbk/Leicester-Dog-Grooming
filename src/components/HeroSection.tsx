
import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: ReactNode; // Change from string to ReactNode
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  imageAlt?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = 'Book an Appointment',
  ctaLink = '/contact',
  image = 'https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=2574&auto=format&fit=crop',
  imageAlt = 'Dog grooming session'
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover"
          src="/assets/back.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 py-20 w-full">
        <div className="max-w-3xl backdrop-blur-sm bg-white/10 p-8 md:p-12 rounded-3xl border border-white/20 shadow-glass animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {subtitle}
          </p>
          <a 
            href={ctaLink}
            className="inline-flex items-center bg-brand-primary hover:bg-brand-primary/90 text-white font-medium rounded-full px-8 py-4 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[1px]"
          >
            {ctaText} <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-brand-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;

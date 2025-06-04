
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookForm from '@/components/BookForm';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import ScrollToTop from '@/components/ScrollToTop';
import { Cert } from '@/components/Cert';

const Book = () => {
  const location = useLocation();
  const [selectedCourse, setSelectedCourse] = useState(location.state?.selectedCourse || null);

  const handleClearSelectedCourse = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Book Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-brand-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(182,75,24,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="block text-sm font-medium text-brand-primary mb-2">Booking Form </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Course
            </h1>
            <p className="text-lg text-foreground/80">
              Ready to start your dog grooming journey? Book your course now and take the first step towards your new career.
            </p>
          </div>
        </div>
      </section>
      
      {/* Book Form & Details */}
      <section className="py-20 px-4 md:px-8 bg-white/50 backdrop-blur-sm">
        <div className="page-container">
          <BookForm selectedCourse={selectedCourse} onClearSelectedCourse={handleClearSelectedCourse} />
        </div>
      </section>
      
      
      
      <Cert/>
      <Footer />
      <ScrollToTop />

    </div>
  );
};

export default Book;

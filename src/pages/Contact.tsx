
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import ScrollToTop from '@/components/ScrollToTop';
import { Cert } from '@/components/Cert';

const Contact = () => {
  const location = useLocation();
  const [selectedCourse, setSelectedCourse] = useState(location.state?.selectedCourse || null);

  const handleClearSelectedCourse = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-brand-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(182,75,24,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <span className="block text-sm font-medium text-brand-primary mb-2">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-foreground/80">
              Have questions about our dog grooming courses? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Details */}
      <section className="py-20 px-4 md:px-8 bg-white/50 backdrop-blur-sm">
        <div className="page-container">
          <ContactForm  />
        </div>
      </section>
      
      {/* Map */}
      <section className="bg-brand-background relative">
        <div className="h-[400px] w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9652.890012374847!2d-0.9584491302246083!3d52.626791299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48779ffaa1d03243%3A0x33ff5bf9cf8f2858!2sBillesdon%2C%20Leicester%20LE7%209AQ%2C%20UK!5e0!3m2!1sen!2sus!4v1626429762183!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Leicester Dog Grooming Courses location"
          ></iframe>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 bg-brand-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(68, 62, 236, 0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-sm font-medium text-brand-primary mb-2">Quick Answers</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/80">
              Find answers to our most commonly asked questions. If you can't find what you're looking for, please contact us.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="glass-card border-none">
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                  <span className="text-brand-primary">How long are your courses?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-foreground/80">
                  Our courses vary in length depending on the level and content. Beginner courses typically run for 4 weeks, while our professional certification program is 12 weeks. We also offer shorter specialized workshops.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="glass-card border-none">
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                  <span className="text-brand-primary">Do I need any prior experience?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-foreground/80">
                  No prior experience is necessary for our beginner courses. We teach you everything you need to know from the ground up. For advanced courses, some grooming experience is beneficial.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="glass-card border-none">
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                  <span className="text-brand-primary">What equipment do I need to bring?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-foreground/80">
                  All equipment is provided during your training. We'll also advise you on what equipment to purchase for your future career, and provide guidance on selecting quality tools within your budget.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="glass-card border-none">
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                  <span className="text-brand-primary">How many students are in each class?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-foreground/80">
                  We keep our class sizes small, typically with a maximum of 6 students, to ensure everyone receives personalized attention and plenty of hands-on practice.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="glass-card border-none">
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                  <span className="text-brand-primary">Do you offer job placement after completing a course?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-foreground/80">
                  While we don't offer formal job placement, we do have a network of salon connections and regularly share job opportunities with our graduates. We also provide career guidance and support in your job search.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      <Cert/>
      <Footer />
      <ScrollToTop />

    </div>
  );
};

export default Contact;

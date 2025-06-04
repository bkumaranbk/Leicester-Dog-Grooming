import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Scissors, Award, BookOpen, Calendar, Scroll } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Cert } from '@/components/Cert';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="You come as a student, but leave as a friend."
        subtitle="Leicester Dog Grooming Courses offers professional dog grooming training with personalized attention in a friendly, supportive environment."
      />
      
      {/* Services Overview */}
      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="page-container">
          <span className="block text-sm font-medium text-brand-primary mb-2 text-center">Our Expertise</span>
          <h2 className="section-title">Professional Dog Grooming Courses</h2>
          <p className="section-subtitle">
            Learn the art of dog grooming with our comprehensive courses designed for all skill levels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              title="Beginner Grooming Course" 
              description="Perfect for those new to grooming. Learn the fundamentals of dog handling, bathing, drying, and basic coat maintenance."
              icon={<Scissors size={36} />}
              imageUrl="assets/first.png"
              link="/services"
            />
            
            <ServiceCard 
              title="Advanced Techniques" 
              description="Elevate your skills with specialized techniques for different breed styles, creative grooming, and handling challenging coats."
              icon={<Award size={36} />}
              imageUrl="assets/second.png"
              link="/services"
            />
            
            <ServiceCard 
              title="Professional Certification" 
              description="Comprehensive training that prepares you for a career in dog grooming with industry-recognized certification upon completion."
              icon={<BookOpen size={36} />}
              imageUrl="assets/third.png"
              link="/services"
            />
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="button-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>
      
      {/* About Preview */}
      <section className="section-padding bg-brand-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(182,75,24,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="block text-sm font-medium text-brand-primary mb-2">About Us</span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Expert Dog Grooming Education</h2>
              <p className="text-foreground/80 mb-6">
                At Leicester Dog Grooming Courses, we pride ourselves on providing exceptional training in a friendly, supportive environment. Our experienced instructors guide students through comprehensive grooming techniques while ensuring individual attention.
              </p>
              <p className="text-foreground/80 mb-8">
                Whether you're looking to start a new career, expand your pet care services, or simply learn how to groom your own dog, our tailored courses will help you achieve your goals. We offer a range of courses from beginner to advanced levels, ensuring that every student receives the knowledge and skills needed to excel in the dog grooming industry.
              </p>
              <p className="text-foreground/80 mb-8">
                Our instructors are industry professionals with years of experience, dedicated to sharing their expertise and passion for dog grooming. By joining our academy, you'll benefit from hands-on training, personalized feedback, and a supportive community that fosters growth and learning.
              </p>
              <p className="text-foreground/80 mb-8">
                So you’re thinking about dog grooming as a career? Since the start of the pandemic, so much has changed, particularly with everyone’s jobs and careers. Not only has the pet industry boomed but also working from home has become more of a thing.
              </p>
              <p className="text-foreground/80 mb-8">
                I started my grooming career during the 2008 recession and I have never looked back, in so far to say it feels like I have never worked a day in my life. I wanted something that I could do from home, choose my own hours and have the time with my children. Dog grooming has also played a significant part of my healing towards my emotional health too; after all most animals have healing energy, unconditional love and not overly judgemental!
              </p>
              <p className="text-foreground/80 mb-8">
                I have trained students for 14 years and been a dog groomer for 17 years and every student has commented how it had helped with their anxiety, depression, and confidence and has given them a purpose as well as a good income.
              </p>
              <p className="text-foreground/80 mb-8">
                Indeed dog grooming can be very lucrative but that doesn’t mean it can’t be hard on the body especially.
              </p>
              <p className="text-foreground/80 mb-8">
                So how much is this? Set up costs are relatively small considering the potential of the business. I estimate around £3k for your equipment, I charge £2250 for my 3 week course which can take you to qualification (additional cost and time) there are also very expensive courses out there too unfortunately but if you can do it from home such a garage, outbuilding or even a large summerhouse (12 x 12ft is plenty) shop or van if mobile then other considerations are plumbing, lighting, drainage and possible planning permission although dog grooming is ancillary to the dwelling and each council is discretionary.
              </p>
              <p className="text-foreground/80 mb-8">
                If you want to visit or have an informal chat with all your questions please call me on: <a href="tel:07930549717" className="text-primary font-semibold hover:underline">07930 549717</a> I look forward to hearing from you!
              </p>
              <a href="/about" className="button-primary">
                Learn More About Us
              </a>
            </div>
            
            {/* <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg transform md:translate-y-6 animate-image-float">
                  <img 
                    src="assets/3.png" 
                    alt="Dog grooming instruction" 
                    className="object-cover w-50 h-50"  // Reduced size
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="page-container">
          <span className="block text-sm font-medium text-brand-primary mb-2 text-center">What Our Students Say</span>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">
            Hear from our graduates about their experience learning with Leicester Dog Grooming Courses.
          </p>
          
          <div className="mt-10">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Ready to Start Your Dog Grooming Journey?</h2>
            <p className="text-white/90 text-lg mb-8">
              Book your course today and take the first step toward a rewarding career in professional dog grooming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="button-secondary">
                Contact Us
              </a>
              <a href="/services" className="bg-white/20 text-white backdrop-blur-sm px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/30 flex items-center justify-center">
                <Calendar className="mr-2" size={18} />
                View Course Schedule
              </a>
            </div>
          </div>
        </div>
      </section>
      <Cert/>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

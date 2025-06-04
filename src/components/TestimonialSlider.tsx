
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "You come as a student, but leave as a friend. The training was comprehensive and Bernie made the whole experience enjoyable and informative.",
    author: "Jane Smith",
    role: "Professional Dog Groomer"
  },
  {
    id: 2,
    quote: "I couldn't recommend Leicester Dog Grooming Courses highly enough. The attention to detail and personalized approach has prepared me perfectly for a career in dog grooming.",
    author: "Mark Johnson",
    role: "Course Graduate"
  },
  {
    id: 3,
    quote: "The course exceeded all my expectations. Bernie's expertise and patience makes learning the art of dog grooming a truly wonderful experience.",
    author: "Sarah Williams",
    role: "Pet Salon Owner"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'right' | 'left' | null>(null);

  const goToNext = () => {
    if (animating) return;
    setDirection('right');
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  const goToPrevious = () => {
    if (animating) return;
    setDirection('left');
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden py-10">
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <div className="relative h-64 md:h-56">
          {testimonials.map((testimonial, index) => {
            const isCurrent = index === currentIndex;
            
            // Handle different animation states
            let animationClass = '';
            
            if (isCurrent) {
              animationClass = animating 
                ? direction === 'right' 
                  ? 'animate-fade-out translate-x-[-20px]' 
                  : 'animate-fade-out translate-x-[20px]'
                : 'animate-fade-in translate-x-0';
            } else if ((index === (currentIndex + 1) % testimonials.length && direction === 'right') || 
                      (index === (currentIndex - 1 + testimonials.length) % testimonials.length && direction === 'left')) {
              animationClass = 'animate-fade-in translate-x-0';
            } else {
              animationClass = 'opacity-0';
            }
            
            return (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-300 ${isCurrent || animating ? 'block' : 'hidden'} ${animationClass}`}
              >
                <div className="glass-card p-4 md:p-10 flex flex-col h-full">
                  <p className="text-base md:text-xl text-foreground/90 italic mb-4 md:mb-6">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-brand-primary">{testimonial.author}</p>
                    {testimonial.role && (
                      <p className="text-xs md:text-sm text-foreground/70">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-between mt-4 md:mt-6">
          <button 
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white/80 border border-gray-200 text-foreground/70 hover:text-brand-primary hover:bg-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index > currentIndex) {
                    setDirection('right');
                  } else if (index < currentIndex) {
                    setDirection('left');
                  }
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-brand-primary w-4 md:w-5' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-white/80 border border-gray-200 text-foreground/70 hover:text-brand-primary hover:bg-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

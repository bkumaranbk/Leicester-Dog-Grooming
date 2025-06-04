
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import { Cert } from '@/components/Cert';

const Gallery = () => {
  // Sample gallery images for the grid (replace with actual images)
  const galleryImages = [
    {
      id: 1,
      imageUrl: 'assets/1.png',
      alt: 'Poodle after grooming'
    },
    {
      id: 2,
      imageUrl: 'assets/2.png',
      alt: 'Schnauzer after grooming'
    },
    {
      id: 3,
      imageUrl: 'assets/3.png',
      alt: 'Shih Tzu after grooming'
    },
    {
      id: 4,
      imageUrl: 'assets/4.png',
      alt: 'Golden Retriever after grooming'
    }
    ,
    {
      id: 5,
      imageUrl: 'assets/5.png',
      alt: 'Golden Retriever after grooming'
    }
    ,
    {
      id: 6,
      imageUrl: 'assets/7.png',
      alt: 'Golden Retriever after grooming'
    }
    ,
    {
      id: 7,
      imageUrl: 'assets/10a.png',
      alt: 'Golden Retriever after grooming'
    },
    {
      id: 10,
      imageUrl: 'assets/9a.jpg',
      alt: 'Golden Retriever after grooming'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Gallery Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-brand-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(182,75,24,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <span className="block text-sm font-medium text-brand-primary mb-2">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-lg text-foreground/80">
              Browse our gallery of before and after transformations to see the quality of work our students achieve through our training programs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Before & After Showcase */}
      <section className="py-20 px-4 md:px-8 bg-white/50 backdrop-blur-sm">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-sm font-medium text-brand-primary mb-2">Transformations</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Before & After
            </h2>
            <p className="text-foreground/80">
              See the impressive transformations achieved by our students during their training.
            </p>
          </div>
          
          <BeforeAfterGallery />
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-20 px-4 md:px-8 bg-brand-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(182,75,24,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-sm font-medium text-brand-primary mb-2">More Examples</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Student Showcase
            </h2>
            <p className="text-foreground/80">
              A collection of work completed by students who have completed our courses.
            </p>
          </div>
          
          <Slider {...settings}>
            {galleryImages.map((image) => (
              <div key={image.id} className="group overflow-hidden rounded-2xl shadow-subtle transition-all duration-100 hover:shadow-lg mx-2 my-2 p-1"> 
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={image.imageUrl} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 fixed-size" 
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      
      {/* Training Environment */}
      <section className="py-20 px-4 md:px-8 bg-white/50 backdrop-blur-sm">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-sm font-medium text-brand-primary mb-2">Our Facilities</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Training Environment
            </h2>
            <p className="text-foreground/80">
              Take a look at our purpose-built grooming training facility where you'll learn and develop your skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 overflow-hidden">
              {/* <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                <img 
                  src="assets/5.png" 
                  alt="Dog grooming training facility" 
                  className="w-full h-70 object-cover"
                />
              </div> */}
              <h3 className="text-xl font-semibold mb-2">Modern Grooming Stations</h3>
              <p className="text-foreground/80">
                Each student works at a fully-equipped professional grooming station with all the tools needed for training.
              </p>
            </div>
            
            <div className="glass-card p-6 overflow-hidden">
              {/* <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4"> */}
                {/* <img 
                  src="assets/6.png" 
                  alt="Dog grooming classroom" 
                  className="w-full h-70 object-cover"
                />
              </div> */}
              <h3 className="text-xl font-semibold mb-2">Classroom Environment</h3>
              <p className="text-foreground/80">
                Our comfortable classroom space is perfect for learning theory before putting it into practice.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Want to Achieve Results Like These?</h2>
            <p className="text-white/90 text-lg mb-8">
              Enroll in one of our professional grooming courses and learn the skills to create these transformations yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-white text-brand-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[1px]"
              >
                View Our Courses
              </a>
              <a 
                href="/contact" 
                className="bg-white/20 text-white backdrop-blur-sm px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/30"
              >
                Contact Us
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

export default Gallery;


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

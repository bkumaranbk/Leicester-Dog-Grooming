
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Star } from 'lucide-react';
import { CourseProps } from '@/types/CourseProps';
import ScrollToTop from '@/components/ScrollToTop';
import { Cert } from '@/components/Cert';

const CourseCard: React.FC<CourseProps & { onSelect: () => void }> = ({
  title,
  price,
  description,
  features,
  popular = false,
  onSelect
}) => {
  return (
    <div className={`flex flex-col h-full relative rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${popular
        ? 'border-2 border-brand-primary bg-white transform scale-[1.02]'
        : 'border border-gray-200 bg-white'
      }`}>

      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-sm font-medium px-4 py-1 rounded-full flex items-center">
          <Star size={16} className="mr-1" />
          <span>Most Popular</span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-8 text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      <div className="mb-8 text-center">
        <span className="text-4xl font-bold text-brand-primary">{price}</span>
        {price !== '' && (
          <span className="text-gray-500"> / one-time</span>
        )}
      </div>

      <ul className={`space-y-3 mb-8 ${title.includes("Salon Franchise Opportunities") ? "grid grid-cols-1 md:grid-cols-3 gap-4" : ""}`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-brand-primary mt-1 mr-2 flex-shrink-0" size={18} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <button
          onClick={onSelect}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${title.includes("Salon Franchise Opportunities")
              ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
              : popular
                ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
        >
          {title.includes("Salon Franchise Opportunities") ? 'Contact Us' : 'Book Now'}
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();

  const handleCourseSelect = (course: CourseProps) => {
    console.log("Selected course:", course);
    window.scrollTo(0, 0);

    if (course.title.includes("Salon Franchise Opportunities")) {
      navigate('/contact'); // Redirect to contact page for franchise opportunities
    } else {
      navigate('/book', { state: { selectedCourse: course } }); // Regular booking flow for other courses
    }
  };

  const courses = [
    {
      title: "Salon Franchise Opportunities (The Clean Doggy Co)",
      duration: "Varies",
      description: "We are excited to offer the unique salon franchise opportunity offering potential groomers doing their dream vocation in dog grooming with complete support in owning and running their own business as a qualified dog groomer.",
      features: [
        "Your own area",
        "Grooming training with a qualified tutor",
        "Marketing training",
        "Boutique grooming salon",
        "All latest grooming and salon equipment",
        "Grooming manual",
        "Website and mobile phone",
        "Full free backup and support",
        "Uniform",
        "Promotional material",
        "12 months Public Liability",
        "First Aid Certification",
        "IPG Membership"
      ],
      imageUrl: "assets/1.png",
      popular: false
    },

    {
      title: "Franchise Packages - Silver",
      duration: "Varies",
      description: "New salon you invest in and work in from day one.",
      price: "£13,500",
      features: [],
      imageUrl: "assets/3.png",
      popular: false
    },
    {
      title: "Franchise Packages - Platinum",
      duration: "Varies",
      description: "New salon you invest in and work in from day one. Includes training for IPG Certification.",
      price: "£17,500",
      features: ["Track 2 (CAPG) Module"],
      imageUrl: "assets/4.png",
      popular: true
    },
    {
      title: "Franchise Packages - Gold",
      duration: "Varies",
      description: "New salon you invest in and work in from day one. Includes training for IPG Certification.",
      price: "£15,500",
      features: [
        "Track 1 Stage 1 (CSP) Module",
        "Track 1 Stage 2 (CSP) Module"
      ],
      imageUrl: "assets/2.png",
      popular: false
    },
  ];

  const additionalServices = [
    {
      title: "5 Day Course (non C&G)",
      description: "A short course designed for quick learning and skill acquisition.",
      price: "£700"
    },
    {
      title: "2 Week Foundation Course",
      description: "A comprehensive foundation course for beginners.",
      price: "£1500"
    },
    {
      title: "3 week (18 days in addition free ongoing support including back up)",
      description: "Intensive training with ongoing support and backup.",
      price: "£2250"
    },
    {
      title: "8 week Professional Course includes track 1IPG training, membership & exam fees",
      description: "Professional course with IPG training and membership.",
      price: "£3500"
    },
    {
      title: "2 Week Dog Grooming Assistant Course",
      description: "Course designed for aspiring dog grooming assistants.",
      price: "£1500"
    },
    {
      title: "Flexicourse* (training to work around you, 18 days in addition to free ongoing support including grooming back up)",
      description: "Flexible course to be completed within 3 months.",
      price: "£2500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Services Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-brand-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(182,75,24,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <span className="block text-sm font-medium text-brand-primary mb-2">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dog Grooming Courses & Training
            </h1>
            <p className="text-lg text-foreground/80">
              Discover our range of professional dog grooming courses designed to help you build the skills and confidence needed for a successful career.
            </p>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 px-4 md:px-8 bg-white/50 backdrop-blur-sm">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-sm font-medium text-brand-primary mb-2">Core Programs</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Our Featured Courses
            </h2>
            <p className="text-foreground/80">
              Choose from our selection of comprehensive courses designed to meet your specific goals and skill level.
            </p>
          </div>

          <div className="mt-0 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              !course.title.includes("Salon Franchise Opportunities") && (
                <div key={index} className="flex flex-col h-full">
                  <CourseCard
                    {...course}
                    price={course.price || ''}
                    onSelect={() => handleCourseSelect(course as CourseProps)}
                  />
                </div>
              )
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`flex ${course.title.includes("Salon Franchise Opportunities") ? "col-span-1" : "hidden"}`}
              >
                <div className="w-full h-full">
                  <CourseCard
                    {...course}
                    price=""
                    onSelect={() => handleCourseSelect(course as CourseProps)}
                  />
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 md:px-8 bg-brand-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(182,75,24,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-sm font-medium text-brand-primary mb-2">More Options</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Additional Services
            </h2>
            <p className="text-foreground/80">
              Beyond our core courses, we offer a variety of specialized services to support your grooming journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="glass-card p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <span className="text-brand-primary font-medium">{service.price}</span>
                </div>
                <p className="text-foreground/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 md:px-8 bg-white/50 backdrop-blur-sm">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            <div>
              <span className="block text-sm font-medium text-brand-primary mb-2">Training and Prices</span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Dog Grooming Training and Prices
              </h2>
              <p className="text-foreground/80 mb-8">
                Available Courses
              </p>
              <p className="text-foreground/80 mb-8">
                Visit our booking form to book onto one of our courses.
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-8">
                <li>One day taster ~ Bathing & Drying</li>
                <li>One full day course ~ Specific Breed styles, grooming techniques, trimming & styling</li>
                <li>5 day ~ For more experienced groomers ~ up to date styles & techniques for various breeds</li>
                <li>3 week Intensive ~ Thorough training on most aspects of grooming and ready to start your own business!</li>
              </ul>
              <p className="text-foreground/80 mb-8">
                All course times are 10am till 3pm, please bring a packed lunch, Monday to Friday where applicable.
              </p>
              <h3 className="text-xl font-semibold mb-4">So what are you to expect</h3>
              <p className="text-foreground/80 mb-4">
                <strong>Week one:</strong> Health & Safety in the salon, Bathing, Drying, Nail, ear and gland care, different breeds & coat types, tools & equipment requirements, use of shampoo & conditioners, handling, health care checks, introduction to clipping
              </p>
              <p className="text-foreground/80 mb-4">
                <strong>Week Two:</strong> Consolidation of the previous week plus Identification of health problems; reporting to owner, clipper work, scissor work, first aid, customer cards, applicable legislation. Salon Hygiene.
              </p>
              <p className="text-foreground/80 mb-4">
                <strong>Week Three:</strong> Consolidation of the previous weeks bringing together all the training so far. It is expected that you should be able to successfully bath, dry and prep your dog; working on trimming and gaining more confidence as you go. You will be grooming with little or no supervision and encouraging to make your own decisions on shampoos, tools, methods & technique choices that you’ve been taught.
              </p>
              <p className="text-foreground/80 mb-4">
                Certificate of attendance given on completion.
              </p>
              <p className="text-foreground/80">
                Free follow up days on the week and 3 week courses for 6 months and you can choose two:
              </p>
              <ul className="list-disc list-inside text-foreground/80">
                <li>Handstripping</li>
                <li>Scissoring</li>
                <li>Heads</li>
              </ul>
            </div>
            {/* <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="assets/2.png" 
                  alt="Dog grooming training session" 
                  className="object-cover "
                />
              </div>
              <div className="absolute top-[40%] right-[60%] glass-card p-6 shadow-lg max-w-[200px]">
                <p className="text-brand-primary font-medium italic">
                  "The course exceeded my expectations - I felt prepared to start my own business immediately after graduating."
                </p>
                <p className="text-sm text-foreground/70 mt-2">- Mary L., Course Graduate</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Ready to Start Your Dog Grooming Journey?</h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to discuss which course is right for you or to book your place.
            </p>
            <a
              href="/contact"
              className="bg-white text-brand-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[1px] inline-block"
            >
              Book Your Course
            </a>
          </div>
        </div>
      </section>
      <Cert />
      <Footer />
      <ScrollToTop />

    </div>
  );
};

export default Services;

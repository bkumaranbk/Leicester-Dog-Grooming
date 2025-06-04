import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, CheckCircle, Users, Heart } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';
import { Cert } from '@/components/Cert';

const About = () => {
  const certifications = [
    "International Certification of Master Groomer",
    "City & Guilds Level 2 (7763~02) Dog Grooming Assistant",
    "City & Guilds Level 3 (7763~03) Introductory In Dog Grooming",
    "BDGA Professional Stylist Qualifications (Spaniel, Schnauzer & Scottish Terrier)",
    "BDGA Higher Diploma Written paper",
    "TAQA Level 3 Assessor Qualification",
    "PTLLS Level 3 Teaching Qualification",
    "SDC and IPG International Qualification"
  ];

  const imageUrls = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* About Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-brand-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(182,75,24,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <span className="block text-sm font-medium text-brand-primary mb-2">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Excellence in Dog Grooming Education
            </h1>
            <p className="text-lg text-foreground/80">
              At Leicester Dog Grooming Courses, we're dedicated to training the next generation of professional dog groomers in a supportive, hands-on environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  width="1280" 
                  height="600" 
                  src="https://www.youtube.com/embed/9wS3At8zFbQ?autoplay=1&si=4WBwmmkD009oZTQw" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
                
              </div>
              <div className="absolute bottom-[-5%] right-[-5%] glass-card p-2 md:p-4 shadow-lg">
                <Award className="text-brand-primary mb-1 md:mb-2" size={24} />
                <p className="text-xs md:text-sm font-medium">20+ Years Experience</p>
              </div>
            </div>
            {/* <img 
                  src="assets/5.png" 
                  alt="Bernie, Professional Dog Groomer & Instructor" 
                  className="object-cover w-full h-full"
                /> */}
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Meet Bernie</h2>
              <p className="text-foreground/80">
                With over two decades of experience in professional dog grooming, Bernie is a certified master groomer with a passion for teaching and sharing her expertise.
              </p>
              <p className="text-foreground/80">
                After running her own successful grooming salon for 15 years, Bernie decided to focus on education, helping aspiring groomers develop the skills and confidence needed to excel in this rewarding field.
              </p>
              <p className="text-foreground/80">
                Leicester Dog Grooming Courses is passionate about training and qualifications in addition to raising public awareness for appropriately trained staff and tomorrow’s groomers. She is committed to professional development and cares about standards and quality of care for both student and animal welfare.
              </p>
              <p className="text-foreground/80">
                She is qualified to teach and highly qualified in the grooming industry. Unfortunately, the grooming industry is not regulated and there are many groomers who claim to teach and are unqualified not only to teach but are unqualified themselves. This leaves the industry in some areas open to sub-standard training, safety, and animal welfare.
              </p>
              <p className="text-foreground/80">
                The aims here at Leicester Dog Grooming Courses are to have input into achieving success for you the student by giving thorough knowledge of dog grooming by promoting a professional and kind approach in a fun but relaxed environment. All training is to City & Guilds and IPG level and standards. Not only do we offer dog grooming courses, but we also offer dog grooming in Leicester.
              </p>
              <p className="text-foreground/80">
                It will also further the advancement for future qualification of the City & Guild Level 3 and IPG or setting up your own grooming business or employment.
              </p>
              <p className="text-foreground/80">
                Our team is headed by founder Bernie Broadway (ICMG). We pride ourselves on kind, gentle handling of our customers' dogs with a no crate system and high standards of excellence in grooming care.
              </p>
              <p className="text-foreground/80">
                Bernie’s membership with the International Pet Groomer (IPG) has progressed her to almost completion of the prestigious qualification, the International Certification of Master Groomers (ICMG) and hopes to bring it to her students in 2016.
              </p>
              <div className="space-y-3 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-brand-primary shrink-0 mt-1" size={20} />
                    <p className="text-foreground/80">{cert}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xl font-medium text-brand-primary italic">
                  "My goal is for every student to leave with not just technical skills, but the confidence to succeed in their dog grooming career."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 px-4 md:px-8 bg-white/50 backdrop-blur-sm">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-sm font-medium text-brand-primary mb-2">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Why Choose Leicester Dog Grooming Courses?
            </h2>
            <p className="text-foreground/80">
              We provide a unique learning experience focused on hands-on training, personalized attention, and comprehensive education in all aspects of professional dog grooming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                <Users className="text-brand-primary" size={30} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Passionate staff </h3>
              <p className="text-foreground/80">
              the proprietor and the staff at the dog groomers course are not only experienced but also very passionate people who love dogs. We are committed to growing the professional capacity of dog groomers and raise the standards of care to our canine friends.
              </p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                <Award className="text-brand-primary" size={30} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Qualified private dog grooming course</h3>
              <p className="text-foreground/80">
              the dog grooming field is not well regulated and there are plenty of dog groomers who claim to be able to teach grooming but don’t have the capacity. We are the only private dog grooming course service that is qualified and accredited by the IPG, City and Guilds and other organisations. Our courses and papers are recognised by these and other licensing bodies.
              </p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                <Heart className="text-brand-primary" size={30} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Speciality courses </h3>
              <p className="text-foreground/80">
              we have a variety of courses designed to improve certain aspects of dog grooming as our students might prefer. We also have different courses for specific breeds which are available to students who would like to gain extra experience in certain breeds.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-20 px-4 md:px-8 bg-brand-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(182,75,24,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          
          
          <Cert/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="relative z-20 max-w-2xl mx-auto px-4 md:px-6 py-10 w-full backdrop-blur-sm bg-white/10 p-8 md:p-8 rounded-3xl border border-white/20 shadow-glass transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-md text-brand-primary">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Ready to Begin Your Dog Grooming Journey?</h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to learn more about our courses and start your path to becoming a professional dog groomer.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-brand-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[1px] inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />

    </div>
  );
};

export default About;
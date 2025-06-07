
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 backdrop-blur-sm pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="text-brand-primary shrink-0 mt-1" size={20} />
              <p className="text-foreground/80">
                Coplow Lane, Billesdon Leicestershire, LE7 9DQ, United Kingdom
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-brand-primary shrink-0" size={20} />
              <a
                href="tel:+44 7930 549 717"
                className="text-foreground/80 hover:text-brand-primary transition-colors"
              >
                +44 7930 549 717
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-brand-primary shrink-0" size={20} />
              <a
                href="mailto:bernieboo200@gmail.com"
                className="text-foreground/80 hover:text-brand-primary transition-colors"
              >
                bernieboo200@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-foreground/80 hover:text-brand-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-foreground/80 hover:text-brand-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-foreground/80 hover:text-brand-primary transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-foreground/80 hover:text-brand-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-foreground/80 hover:text-brand-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-foreground/80 hover:text-brand-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-foreground/80 hover:text-brand-primary transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <p className="text-foreground/80 mb-4">
              Follow us on social media to see our latest work and updates.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1E1bKNx3CZ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center hover:bg-brand-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="text-brand-primary" size={20} />
              </a>
              <a
                href="https://www.instagram.com/leicesterdoggrooming?igsh=ejVmOXZjc212NTZy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center hover:bg-brand-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="text-brand-primary" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Leicester Dog Grooming Courses. Partnered with <a href='https://www.ansely.co.uk/' target='blank'><strong>Ansely</strong></a></p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

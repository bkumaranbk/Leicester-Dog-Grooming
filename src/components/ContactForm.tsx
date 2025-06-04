
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, X } from 'lucide-react'; // Import the X icon
import { CourseProps } from '@/types/CourseProps'; // Import the CourseProps type

const ContactForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, phone, message } = formData;
    const subject = `Contact Form Submission from ${name}`;
    
    
  
    // Include course details in the email body
    const body = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      
      Message:
      ${message}
      
    `;
    
    const mailtoLink = `mailto:bernieboo200@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleSelectAnotherCourse = () => {
    navigate('/services'); // Navigate to the Services page
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Contact Information */}
      <div className="glass-card p-8 order-2 md:order-1">
        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="text-brand-primary shrink-0 mt-1" size={22} />
            <div>
              <h4 className="font-medium mb-1">Address</h4>
              <p className="text-foreground/80">
                Coplow Lane, Billesdon<br />
                Leicestershire, LE7 9DQ<br />
                United Kingdom
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone className="text-brand-primary shrink-0 mt-1" size={22} />
            <div>
              <h4 className="font-medium mb-1">Phone</h4>
              <p className="text-foreground/80">
                <a href="tel:+44 7930 549 717" className="hover:text-brand-primary transition-colors">
                  +44 7930 549 717
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Mail className="text-brand-primary shrink-0 mt-1" size={22} />
            <div>
              <h4 className="font-medium mb-1">Email</h4>
              <p className="text-foreground/80">
                <a href="mailto:bernieboo200@gmail.com" className="hover:text-brand-primary transition-colors">
                bernieboo200@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h4 className="font-medium mb-4">Business Hours</h4>
          <ul className="space-y-2 text-foreground/80">
            <li className="flex justify-between">
              <span>Monday</span>
              <span>9:00 AM - 3:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Tuesday</span>
              <span>9:00 AM - 3:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Wednesday</span>
              <span>9:00 AM - 3:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Thursday</span>
              <span>9:00 AM - 3:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Friday</span>
              <span>9:00 AM - 3:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 3:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
            <li className="flex justify-between">
              <span>(Spring Bank Holiday)</span>
              <span>House might difer</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="glass-card p-8 order-1 md:order-2">
        <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
              placeholder="07XXX XXX XXX"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors resize-none"
              placeholder="Please tell us how we can help you..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full button-primary flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

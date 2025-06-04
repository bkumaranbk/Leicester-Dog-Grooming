
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, X } from 'lucide-react';
import { CourseProps } from '@/types/CourseProps';
import { toast } from 'sonner';
interface BookFormProps {
  selectedCourse?: CourseProps;
  onClearSelectedCourse: () => void;
}



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

const BookForm: React.FC<BookFormProps> = ({ selectedCourse, onClearSelectedCourse }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  console.log(selectedCourse, 'qwegwvversves');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    address: '', // New field for address
    emergencyContactName: '', // New field for emergency contact name
    handedness: '', // New field for handedness
    termsAccepted: false, // New field for terms acceptance
  });


  const [selectedAdditionalCourse, setSelectedAdditionalCourse] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAdditionalCourse(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowPaymentModal(true); // show modal
  };

  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (showPaymentModal && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showPaymentModal]);

  const handlePaymentSelection = (method: 'klarna' | 'stripe') => {
    setShowPaymentModal(false);
    if (method === 'klarna') {
      navigate('/klarna-checkout', {
        state: {
          formData,
          selectedCourse,
          selectedAdditionalCourse,
        }
      });
    } else {
      setShowComingSoonModal(true);
    }
    setIsSubmitting(false);
  };

  const handleSelectAnotherCourse = () => {
    navigate('/services');
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-12">

        {/* Contact Form */}
        <div className="glass-card p-8 order-1 md:order-2">
          <h3 className="text-xl font-semibold mb-6">Book a Course</h3>

          {selectedCourse && (
            <div className="mb-6 p-4 border border-brand-primary rounded-lg relative">
              <button
                onClick={onClearSelectedCourse}
                className="absolute top-2 right-2 text-brand-primary hover:text-brand-primary/80"
              >
                <X size={18} />
              </button>
              <h4 className="font-medium text-brand-primary mb-2">Selected Course</h4>
              <p className="text-sm text-foreground/80"><strong>Title:</strong> {selectedCourse.title}</p>
              <p className="text-sm text-foreground/80"><strong>Price:</strong> {selectedCourse.price}</p>
              <p className="text-sm text-foreground/80"><strong>Description:</strong> {selectedCourse.description}</p>
              <button
                onClick={handleSelectAnotherCourse}
                className="mt-4 text-brand-primary hover:text-brand-primary/80"
              >
                Select Another Course
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="additionalCourse" className="block text-sm font-medium mb-2">
                Select Course
              </label>
              <select
                id="additionalCourse"
                name="additionalCourse"
                value={selectedAdditionalCourse || ''}
                onChange={handleSelectChange}
                disabled={!!selectedCourse} // Disable dropdown if selectedCourse is present
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
              >
                <option value="">Select a course</option>
                {additionalServices.map((service, index) => (
                  <option key={index} value={`${service.title} - ${service.price}`}>
                    {service.title} - {service.price}
                  </option>
                ))}
              </select>
            </div>
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
              <label htmlFor="address" className="block text-sm font-medium mb-2">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors resize-none"
                placeholder="Your address"
              ></textarea>
            </div>

            <div>
              <label htmlFor="emergencyContactName" className="block text-sm font-medium mb-2">
                Emergency Contact Name
              </label>
              <input
                type="text"
                id="emergencyContactName"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                placeholder="Emergency contact name"
              />
            </div>

            <div>
              <span className="block text-sm font-medium mb-2">Are you right or left handed?</span>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="handedness"
                    value="Left Handed"
                    checked={formData.handedness === 'Left Handed'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Left Handed
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="handedness"
                    value="Right Handed"
                    checked={formData.handedness === 'Right Handed'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Right Handed
                </label>
              </div>
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


            <div className="flex items-center">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="termsAccepted" className="text-sm">
                I have read the Terms and Conditions supplied to me and agree to them
              </label>
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
                  <span>Book Now</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-xl p-6 shadow-lg w-[90%] max-w-md space-y-4"
          >
            <h2 className="text-lg font-bold mb-4">Choose a Payment Method</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handlePaymentSelection('klarna')}
                className="border p-4 rounded hover:bg-gray-100 transition text-center"
              >
                <img src="/klarna.png" alt="Klarna" className="h-6 mx-auto mb-2" />
                <span className="text-sm">Pay with Klarna</span>
              </button>
              <button
                onClick={() => handlePaymentSelection('stripe')}
                className="border p-4 rounded hover:bg-gray-100 transition text-center"
              >
                <img src="/stripe.png" alt="Stripe" className="h-6 mx-auto mb-2" />
                <span className="text-sm">Pay with Stripe</span>
              </button>
            </div>
            <button
              onClick={() => setShowPaymentModal(false)}
              className="mt-4 text-sm text-red-500 hover:underline block ml-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showComingSoonModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg w-[90%] max-w-sm space-y-4 text-center">
            <h2 className="text-xl font-bold">Coming Soon 🚀</h2>
            <p className="text-gray-600">Stripe payment is coming soon. Please choose another method.</p>
            <button
              onClick={() => setShowComingSoonModal(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookForm;

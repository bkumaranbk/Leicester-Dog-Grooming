import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const location = useLocation();

  useEffect(() => {
    console.info("User visited:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="mt-20 min-h-screen flex flex-col font-lexend">
      <Navbar />
      <main className="flex-grow bg-white px-6 py-12 md:px-16 lg:px-32 text-gray-800">
        <h1 className="text-4xl font-bold text-cyan mb-6 text-center">Privacy Policy</h1>
        <section className="space-y-6 max-w-4xl mx-auto">
          <p>
            Your privacy is of utmost importance to us. This privacy policy outlines how we collect, utilise,
            and safeguard your personal information when you engage with our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
          <p>
            We may collect personal data including, but not limited to, your name, email address, telephone number,
            and usage data when you interact with our platform. Additionally, we may collect information about your
            vehicle, service history, and payment details when you book our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
          <p>
            The information we collect is utilised to provide and enhance our services, ensure security,
            and communicate with users. This includes processing your bookings, sending service reminders,
            and improving our customer experience. We may also use your data to personalise our services
            and provide relevant promotional offers.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your data against
            unauthorised access and loss. This includes encrypted data storage, secure servers, and
            regular security audits. Our staff are trained in data protection practices and bound by
            confidentiality agreements.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
          <p>
            Under UK data protection law, you have the right to access, correct, or delete your personal
            information. You may also request a copy of your data or object to its processing. We aim to
            respond to all such requests within 30 days.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Cookie Policy</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience. These help us
            understand how you use our website and allow us to improve our services. You can manage your
            cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p>
            If you have any enquiries about this policy or wish to exercise your data protection rights,
            please contact us at <a href="mailto:bernieboo200@gmail.com" className="text-primary underline">bernieboo200@gmail.com</a>.
            Our Data Protection Officer will be happy to assist you.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

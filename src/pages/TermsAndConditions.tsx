import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  const location = useLocation();

  useEffect(() => {
    console.info("User visited:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <div className="mt-20 min-h-screen flex flex-col font-lexend">
        <main className="flex-grow bg-white px-6 py-12 md:px-16 lg:px-32 text-gray-800">
          <h1 className="text-4xl font-bold text-cyan mb-6 text-center">Terms and Conditions</h1>
          <section className="space-y-6 max-w-4xl mx-auto">
            <p>
              These terms and conditions outline the rules and regulations for the use of our website and services. Please read these terms carefully before engaging with our platform.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Acceptance of Terms</h2>
            <p>
              By accessing this website, you acknowledge and agree to be bound by these terms and all applicable laws and regulations within the United Kingdom. If you do not agree with any part of these terms, you must not use our service.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Licence to Use</h2>
            <p>
              Unless otherwise stated, we own the intellectual property rights for all content on the site. All content is protected by UK copyright laws and international treaties. You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the service without express written permission from us.
            </p>

            <h2 className="text-2xl font-semibold mt-6">User Obligations</h2>
            <p>
              When using our service, you agree not to engage in any activity that may interfere with or disrupt the service or servers. You must not attempt to gain unauthorised access to any portion of the service or other accounts, computer systems, or networks.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Privacy and Data Protection</h2>
            <p>
              We are committed to protecting your privacy and handling your data in accordance with the UK Data Protection Act 2018 and GDPR regulations. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Limitations</h2>
            <p>
              In no event shall we be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our platform, even if we or an authorised representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Changes to Terms</h2>
            <p>
              We reserve the right to revise these terms at any time without prior notice. By continuing to use this site after such changes, you agree to be bound by the current version. We recommend checking these terms periodically for any updates.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the United Kingdom. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Contact Information</h2>
            <p>
              For any questions or concerns regarding these terms, please contact us at <a href="mailto:bernieboo200@gmail.com" className="text-primary underline">bernieboo200@gmail.com</a>. Our support team aims to respond to all enquiries within 2 working days.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

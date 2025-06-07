
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import KlarnaCheckout from "./components/KlarnaCheckout"; // Import KlarnaCheckout
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import { setNavigateCallback } from "./axios/axiosInstance";
import { AdminLoginGuard } from "./middleware/AuthGuard";
import { useAuthSession } from "./middleware/authMiddleware";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent: React.FC = () => {
  useAuthSession();
  const navigate = useNavigate();

  useEffect(() => {
    setNavigateCallback((path: string) => {
      navigate(path);
    });
  }, [navigate]);


  return (

    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/book" element={<Book />} /> */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route element={<AdminLoginGuard />}>
        <Route path="/login/admin" element={<Login />} />
      </Route>
      <Route path="/klarna-checkout" element={<KlarnaCheckout />} /> {/* Add KlarnaCheckout route */}
      <Route path="*" element={<NotFound />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>

  );
};

export default AppWrapper;

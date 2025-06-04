
import BlogHeader from "../components/blog/BlogHeader";
import BlogList from "../components/blog/BlogList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Cert } from "@/components/Cert";

const Blog = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <BlogHeader />
      <BlogList />
      <Cert/>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;

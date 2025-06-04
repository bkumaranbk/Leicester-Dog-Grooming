import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';
import { Cert } from '@/components/Cert';
import { getBlogById } from '@/services/blogService';
import { BlogPost } from '@/components/blog/BlogList';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock blog posts - in a real app, you would fetch this from an API
  // const blogPosts: BlogPost[] = [
  //   {
  //     id: 4,
  //     title: "The Ultimate Guide to Dog Grooming: Keep Your Pup Happy, Healthy & Handsome",
  //     excerpt: "Discover a complete grooming routine that ensures your dog stays clean, comfortable, and confident year-round.",
  //     category: "Grooming",
  //     date: "May 20, 2025",
  //     author: "Emily Barker",
  //     image: "https://images.pexels.com/photos/32151207/pexels-photo-32151207/free-photo-of-adorable-pug-dog-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     content: `

  //       <h1 style="font-size:20px; margin-bottom:10px;">Why Grooming Matters</h1>
  //       <p>Grooming your dog is essential for their health and happiness. It prevents skin problems, reduces shedding, and strengthens your bond with your pup. A well-groomed dog is also more confident and comfortable in social settings.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Daily, Weekly & Monthly Grooming Tasks</h1>
  //       <ul>
  //         <li><strong>Daily:</strong> Quick coat check, tear stain cleaning for breeds prone to discharge.</li>
  //         <li><strong>Weekly:</strong> Full-body brushing, paw pad inspection, ear cleaning.</li>
  //         <li><strong>Monthly:</strong> Bath, nail trimming, thorough dental brushing.</li>
  //       </ul>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Start with Brushing</h1>
  //       <p>Brush your dog regularly based on coat type. Use a slicker brush for long-haired breeds and a bristle brush for short-haired dogs. Brushing keeps fur untangled and distributes natural oils evenly across the coat.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Bath Time Made Easy</h1>
  //       <p>Use lukewarm water and a gentle, pH-balanced dog shampoo. Avoid the ears and eyes while washing. Always rinse thoroughly and towel dry or use a pet dryer on a low setting.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Nail Care</h1>
  //       <p>Keep nails trimmed to prevent discomfort and joint issues. Use pet-safe clippers and take your time. If you’re unsure, visit a groomer or vet to avoid cutting the quick.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Final Thoughts</h1>
  //       <p>Whether you groom your dog at home or take them to a professional, consistency is key. A clean dog is a happy dog—and a happy owner!</p>
  //     `
  //   },
  //   {
  //     id: 5,
  //     title: "Seasonal Grooming: How to Adjust Your Dog’s Routine Throughout the Year",
  //     excerpt: "From winter paw care to summer coat trims, learn how to adapt grooming for every season.",
  //     category: "Grooming",
  //     date: "May 20, 2025",
  //     author: "Sarah Groomer",
  //     image: "https://images.pexels.com/photos/32141254/pexels-photo-32141254/free-photo-of-white-dog-standing-by-waterfront-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     content: `
  //       <h1 style="font-size:20px; margin-bottom:10px;">Spring Shedding Season</h1>
  //       <p>As temperatures rise, many dogs blow their winter coat. Increase brushing frequency during spring to remove loose fur and prevent mats from forming.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Summer Heat</h1>
  //       <p>Keep your dog's coat shorter and more manageable. Avoid shaving double-coated breeds entirely—they need their undercoat to regulate body temperature. Pay attention to paw pads, as sidewalks can become scorching hot.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Fall Maintenance</h1>
  //       <p>Fall is a great time to prepare your dog for colder weather. Deep-clean ears after outdoor adventures and trim nails often, as long walks over leaves can wear them unevenly.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Winter Woes</h1>
  //       <p>Protect paws from snow, ice, and salt. Use paw balm or dog booties. Bathe less frequently during cold months, but ensure coats are clean and dry when they come in from the snow.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Bonus Tips</h1>
  //       <ul>
  //         <li>Use season-specific grooming products (e.g., moisturizers for winter).</li>
  //         <li>Watch for seasonal allergies that affect the skin.</li>
  //         <li>Adjust diet if needed to maintain healthy skin and coat.</li>
  //       </ul>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Conclusion</h1>
  //       <p>Your dog's grooming needs will change throughout the year. By adapting your routine, you’ll keep your furry companion feeling their best every season.</p>
  //     `
  //   },
  //   {
  //     id: 6,
  //     title: "Grooming for Anxiety-Prone Dogs: Tips to Keep Calm and Groom On",
  //     excerpt: "Grooming can be stressful for some pups. Here's how to turn it into a calm, positive experience.",
  //     category: "Grooming",
  //     date: "May 20, 2025",
  //     author: "Michael Hound",
  //     image: "https://images.pexels.com/photos/32128623/pexels-photo-32128623/free-photo-of-portrait-of-a-white-dog-lying-on-green-grass.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     content: `
  //       <h1 style="font-size:20px; margin-bottom:10px;">Understand the Fear</h1>
  //       <p>Many dogs associate grooming with stress due to past negative experiences, loud noises, or uncomfortable handling. Identifying what triggers your dog is the first step to building a better grooming experience.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Create a Calm Environment</h1>
  //       <p>Groom in a quiet space with no distractions. Use calming music, essential oils (like lavender), or pheromone sprays to set a relaxing mood.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Go Slow</h1>
  //       <p>Break grooming into small, manageable sessions. Start by brushing for a few minutes and gradually increase time as your dog grows more comfortable.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Use Positive Reinforcement</h1>
  //       <p>Reward good behavior with treats, affection, or play. Make grooming a positive interaction by pairing each step with praise.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Tools That Help</h1>
  //       <ul>
  //         <li>Silent nail grinders</li>
  //         <li>Soft-bristle brushes</li>
  //         <li>Non-slip grooming mats</li>
  //       </ul>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Seek Professional Help if Needed</h1>
  //       <p>If your dog remains anxious, consider a groomer who specializes in fear-free grooming techniques or consult your vet about desensitization training.</p>

  //       <h1 style="font-size:20px; margin-bottom:10px;">Wrap-Up</h1>
  //       <p>With patience and compassion, grooming can become an enjoyable bonding activity—even for the most nervous of pups.</p>
  //     `
  //   }
  // ]
  // ;

  useEffect(() => {
    const fetchBlog = async () => {

      setLoading(true);
      if (!id) {
        throw new Error('No blog ID provided');
      }

      const response = await getBlogById(id);
      setLoading(false);


      if ('error' in response) {
        setError(response.error);
        return;
      }

      setBlog(response as BlogPost);

    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const goBack = () => {
    if (window.history.length > 2) {
      window.history.back();
    } else {
      navigate('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-primary">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-primary">Blog post not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <div className="container mx-auto px-4 mt-12 md:px-8 py-6">
        <Button
          onClick={goBack}
          variant="outline"
          className="flex items-center gap-2 mt-4 bg-dark-800 text-primary border-dark-700 hover:bg-dark-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.4) contrast(1.1)" }}
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded">{blog.category}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">{blog.title}</h2>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                  <span className="text-primary font-medium">{blog.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{blog.author}</p>
                  <p className="text-white text-sm">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-dark-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg">
              <div
                className="text-black-300 mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            <div className="mt-12 pt-8 border-t border-dark-700">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => navigate('/blog')}
                  className="bg-dark-800 hover:bg-dark-700 text-primary px-6 py-3 rounded flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Blog
                </button>

                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-sm">Share:</span>
                  <div className="flex gap-3">

                    <a href="#" className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cert />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogDetail;

// import { useNavigate } from 'react-router-dom';
// import { BlogPost } from '../../types/blog';
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight } from 'lucide-react';

// const BlogList = () => {
//   const navigate = useNavigate();

//   const blogPosts: BlogPost[] = [
//     {
//       id: 4,
//       title: "The Ultimate Guide to Dog Grooming: Keep Your Pup Happy, Healthy & Handsome",
//       excerpt: "Discover a complete grooming routine that ensures your dog stays clean, comfortable, and confident year-round.",
//       category: "Grooming",
//       date: "May 20, 2025",
//       author: "Emily Barker",
//       image: "https://images.pexels.com/photos/32151207/pexels-photo-32151207/free-photo-of-adorable-pug-dog-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
//       content: `

//         <h1 style="font-size:20px; margin-bottom:10px;">Why Grooming Matters</h1>
//         <p>Grooming your dog is essential for their health and happiness. It prevents skin problems, reduces shedding, and strengthens your bond with your pup. A well-groomed dog is also more confident and comfortable in social settings.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Daily, Weekly & Monthly Grooming Tasks</h1>
//         <ul>
//           <li><strong>Daily:</strong> Quick coat check, tear stain cleaning for breeds prone to discharge.</li>
//           <li><strong>Weekly:</strong> Full-body brushing, paw pad inspection, ear cleaning.</li>
//           <li><strong>Monthly:</strong> Bath, nail trimming, thorough dental brushing.</li>
//         </ul>

//         <h1 style="font-size:20px; margin-bottom:10px;">Start with Brushing</h1>
//         <p>Brush your dog regularly based on coat type. Use a slicker brush for long-haired breeds and a bristle brush for short-haired dogs. Brushing keeps fur untangled and distributes natural oils evenly across the coat.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Bath Time Made Easy</h1>
//         <p>Use lukewarm water and a gentle, pH-balanced dog shampoo. Avoid the ears and eyes while washing. Always rinse thoroughly and towel dry or use a pet dryer on a low setting.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Nail Care</h1>
//         <p>Keep nails trimmed to prevent discomfort and joint issues. Use pet-safe clippers and take your time. If you’re unsure, visit a groomer or vet to avoid cutting the quick.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Final Thoughts</h1>
//         <p>Whether you groom your dog at home or take them to a professional, consistency is key. A clean dog is a happy dog—and a happy owner!</p>
//       `
//     },
//     {
//       id: 5,
//       title: "Seasonal Grooming: How to Adjust Your Dog’s Routine Throughout the Year",
//       excerpt: "From winter paw care to summer coat trims, learn how to adapt grooming for every season.",
//       category: "Grooming",
//       date: "May 20, 2025",
//       author: "Sarah Groomer",
//       image: "https://images.pexels.com/photos/32141254/pexels-photo-32141254/free-photo-of-white-dog-standing-by-waterfront-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=600",
//       content: `
//         <h1 style="font-size:20px; margin-bottom:10px;">Spring Shedding Season</h1>
//         <p>As temperatures rise, many dogs blow their winter coat. Increase brushing frequency during spring to remove loose fur and prevent mats from forming.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Summer Heat</h1>
//         <p>Keep your dog's coat shorter and more manageable. Avoid shaving double-coated breeds entirely—they need their undercoat to regulate body temperature. Pay attention to paw pads, as sidewalks can become scorching hot.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Fall Maintenance</h1>
//         <p>Fall is a great time to prepare your dog for colder weather. Deep-clean ears after outdoor adventures and trim nails often, as long walks over leaves can wear them unevenly.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Winter Woes</h1>
//         <p>Protect paws from snow, ice, and salt. Use paw balm or dog booties. Bathe less frequently during cold months, but ensure coats are clean and dry when they come in from the snow.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Bonus Tips</h1>
//         <ul>
//           <li>Use season-specific grooming products (e.g., moisturizers for winter).</li>
//           <li>Watch for seasonal allergies that affect the skin.</li>
//           <li>Adjust diet if needed to maintain healthy skin and coat.</li>
//         </ul>

//         <h1 style="font-size:20px; margin-bottom:10px;">Conclusion</h1>
//         <p>Your dog's grooming needs will change throughout the year. By adapting your routine, you’ll keep your furry companion feeling their best every season.</p>
//       `
//     },
//     {
//       id: 6,
//       title: "Grooming for Anxiety-Prone Dogs: Tips to Keep Calm and Groom On",
//       excerpt: "Grooming can be stressful for some pups. Here's how to turn it into a calm, positive experience.",
//       category: "Grooming",
//       date: "May 20, 2025",
//       author: "Michael Hound",
//       image: "https://images.pexels.com/photos/32128623/pexels-photo-32128623/free-photo-of-portrait-of-a-white-dog-lying-on-green-grass.jpeg?auto=compress&cs=tinysrgb&w=600",
//       content: `
//         <h1 style="font-size:20px; margin-bottom:10px;">Understand the Fear</h1>
//         <p>Many dogs associate grooming with stress due to past negative experiences, loud noises, or uncomfortable handling. Identifying what triggers your dog is the first step to building a better grooming experience.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Create a Calm Environment</h1>
//         <p>Groom in a quiet space with no distractions. Use calming music, essential oils (like lavender), or pheromone sprays to set a relaxing mood.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Go Slow</h1>
//         <p>Break grooming into small, manageable sessions. Start by brushing for a few minutes and gradually increase time as your dog grows more comfortable.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Use Positive Reinforcement</h1>
//         <p>Reward good behavior with treats, affection, or play. Make grooming a positive interaction by pairing each step with praise.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Tools That Help</h1>
//         <ul>
//           <li>Silent nail grinders</li>
//           <li>Soft-bristle brushes</li>
//           <li>Non-slip grooming mats</li>
//         </ul>

//         <h1 style="font-size:20px; margin-bottom:10px;">Seek Professional Help if Needed</h1>
//         <p>If your dog remains anxious, consider a groomer who specializes in fear-free grooming techniques or consult your vet about desensitization training.</p>

//         <h1 style="font-size:20px; margin-bottom:10px;">Wrap-Up</h1>
//         <p>With patience and compassion, grooming can become an enjoyable bonding activity—even for the most nervous of pups.</p>
//       `
//     }
//   ]
//   ;

//   const handleBlogClick = (id: number) => {
//     navigate(`/blog/${id}`);
//   };

//   return (
//     <section className="py-16 bg-dark-900">
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <Card 
//               key={post.id}
//               onClick={() => handleBlogClick(post.id)}
//               className="bg-dark-800 border-none rounded-lg overflow-hidden group cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-300 reveal"
//             >
//               <div className="aspect-video overflow-hidden">
//                 <img 
//                   src={post.image} 
//                   alt={post.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-xs text-blue-500 font-semibold">{post.category}</span>
//                   <span className="text-xs text-black-400">{post.date}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{post.title}</h3>
//                 <p className="text-black-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
//                       <span className="text-primary font-medium text-xs">{post.author.charAt(0)}</span>
//                     </div>
//                     <span className="text-sm text-black-300">{post.author}</span>
//                   </div>
//                   <div className="text-blue-500">
//                     <ArrowRight className="h-5 w-5" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogList;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowRight, Edit, Trash2, Plus, X } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createBlog, deleteBlog, getAllBlogs, updateBlog } from '@/services/blogService';
import { useSelector } from 'react-redux';

export interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: string;
}

// Quill editor configuration
const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'list', 'bullet',
  'link', 'image'
];

const BlogList = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Omit<BlogPost, '_id'>>({
    title: '',
    excerpt: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    author: '',
    image: '',
    content: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { token } = useSelector((state: {
    auth: {
      token: string | null;
    }
  }) => state.auth);


  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {

    const response = await getAllBlogs();
    if ('error' in response) {
      setBlogPosts([]);
    }
    setBlogPosts(response as BlogPost[]);

  };

  const handleBlogClick = (id: string) => {
    navigate(`/blog/${id}`);
  };

  const handleCreateClick = () => {
    setCurrentPost(null);
    setIsEditing(false);
    setFormData({
      title: '',
      excerpt: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      author: '',
      image: '',
      content: ''
    });
    setIsModalOpen(true);
  };

  const handleEditClick = (post: BlogPost) => {
    setCurrentPost(post);
    setIsEditing(true);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      author: post.author,
      image: post.image,
      content: post.content
    });
    setIsModalOpen(true);
  };

  const handleDeleteClick = (post: BlogPost) => {
    setCurrentPost(post);
    setIsDeleteModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleContentChange = (content: string) => {
    setFormData(prev => ({
      ...prev,
      content
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.excerpt) newErrors.excerpt = 'Excerpt is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.author) newErrors.author = 'Author is required';
    if (!formData.image) newErrors.image = 'Image URL is required';
    if (!formData.content) newErrors.content = 'Content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isEditing && currentPost) {
      const response = await updateBlog(currentPost._id, formData, token);
      if ('error' in response) {
        toast.error(response.error);
        return;
      }
      toast.success('Blog post updated successfully');
    } else {
      const response = await createBlog(formData, token);
      if ('error' in response) {
        toast.error(response.error);
        return;
      }
      toast.success('Blog post created successfully');
    }
    fetchBlogs();
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    if (!currentPost) return;
    try {
      const response = await deleteBlog(currentPost._id, token);
      if ('error' in response) {
        toast.error(response.error);
      }
      toast.success('Blog post deleted successfully');
      fetchBlogs();
      setIsDeleteModalOpen(false);
    } catch (error) {
      toast.error('Failed to delete blog post');
    }
  };

  return (
    <section className="py-16 bg-dark-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-primary">Latest Blog Posts</h2>
          {token && <button
            onClick={handleCreateClick}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus size={18} />
            Create Blog
          </button>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post._id}
              className="bg-dark-800 border-none rounded-lg overflow-hidden group relative hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {token && <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditClick(post);
                  }}
                  className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Edit size={16} className="text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteClick(post);
                  }}
                  className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Trash2 size={16} className="text-white" />
                </button>
              </div>}
              <div className="p-6" onClick={() => handleBlogClick(post._id)}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-blue-500 font-semibold">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold  mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                      <span className="text-blue-500 font-medium text-xs">{post.author.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-gray-300">{post.author}</span>
                  </div>
                  <div className="text-blue-500">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <X size={20} />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form onSubmit={handleSubmit} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Title*
                    </label>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter blog title"
                      className={`bg-gray-50 border ${errors.title ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    />
                    {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
                  </div>

                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Excerpt*
                    </label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      placeholder="Enter short description"
                      rows={3}
                      className={`bg-gray-50 border ${errors.excerpt ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    />
                    {errors.excerpt && <p className="mt-1 text-xs text-red-500">{errors.excerpt}</p>}
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Category*
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className={`bg-gray-50 border ${errors.category ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    >
                      <option value="">Select category</option>
                      <option value="Grooming">Grooming</option>
                      <option value="Health">Health</option>
                      <option value="Training">Training</option>
                      <option value="Nutrition">Nutrition</option>
                    </select>
                    {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category}</p>}
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Date*
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={`bg-gray-50 border ${errors.date ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    />
                    {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Author*
                    </label>
                    <input
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      placeholder="Enter author name"
                      className={`bg-gray-50 border ${errors.author ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    />
                    {errors.author && <p className="mt-1 text-xs text-red-500">{errors.author}</p>}
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Image URL*
                    </label>
                    <input
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="Paste image URL"
                      className={`bg-gray-50 border ${errors.image ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    />
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-300">Note: Please paste a valid image URL</p>
                    {errors.image && <p className="mt-1 text-xs text-red-500">{errors.image}</p>}
                  </div>

                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Content*
                    </label>
                    <div className="bg-white rounded-lg">
                      <ReactQuill
                        theme="snow"
                        value={formData.content}
                        onChange={handleContentChange}
                        modules={modules}
                        formats={formats}
                        className="min-h-[200px] text-black"
                      />
                    </div>
                    {errors.content && <p className="mt-1 text-xs text-red-500">{errors.content}</p>}
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {isEditing ? 'Update' : 'Create'} Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Confirm Deletion
                </h3>
                <button
                  type="button"
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <X size={20} />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-gray-500 dark:text-gray-300">
                  Are you sure you want to delete the blog post "{currentPost?.title}"?
                </p>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={() => setIsDeleteModalOpen(false)}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogList;

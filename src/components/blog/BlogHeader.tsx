
const BlogHeader = () => {
  return (
    <section className="relative py-20 md:py-28 bg-dark-800">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7210304/pexels-photo-7210304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4) contrast(1.1)",
          }}
        />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center">
          <p className="text-dark mb-4 inline-block">OUR BLOG</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Latest Dog Gromming Articles
          </h1>
          <p className="text-black-300 max-w-2xl mx-auto">
            Get the latest news, tips and updates from the dog grooming world to help keep your furry friend looking their best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;

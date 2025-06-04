
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ZoomIn, X } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogOverlay
} from '@/components/ui/dialog';

interface GalleryItem {
  id: number;
  before: string;
  after: string;
  description: string;
}

// Sample gallery items (replace with actual data)
const galleryItems: GalleryItem[] = [
  // {
  //   id: 1,
  //   before: 'assets/3.png',
  //   after: 'assets/1.png',
  //   description: 'Standard poodle trim transformation'
  // },
  {
    id: 2,
    before: 'assets/6.png',
    after: 'assets/5.png',
    description: 'Schnauzer grooming makeover'
  },
  // {
  //   id: 3,
  //   before: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1064&auto=format&fit=crop',
  //   after: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=1035&auto=format&fit=crop',
  //   description: 'Cocker spaniel summer cut'
  // }
];

const BeforeAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBeforeAfterView, setIsBeforeAfterView] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        {/* Main Gallery View */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {isBeforeAfterView ? (
              <>
                {/* Before Image */}
                <div className="relative group cursor-pointer" onClick={() => openModal(currentItem.before)}>
                  <img 
                    src={currentItem.before} 
                    alt={`Before - ${currentItem.description}`}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={30} />
                    <span className="bg-white/90 text-brand-primary px-4 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-8 translate-y-8">
                      Before
                    </span>
                  </div>
                </div>
                
                {/* After Image */}
                <div className="relative group cursor-pointer" onClick={() => openModal(currentItem.after)}>
                  <img 
                    src={currentItem.after} 
                    alt={`After - ${currentItem.description}`}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={30} />
                    <span className="bg-white/90 text-brand-primary px-4 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-8 translate-y-8">
                      After
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="col-span-2 relative group cursor-pointer" onClick={() => openModal(isBeforeAfterView ? currentItem.before : currentItem.after)}>
                <img 
                  src={isBeforeAfterView ? currentItem.before : currentItem.after} 
                  alt={`${isBeforeAfterView ? 'Before' : 'After'} - ${currentItem.description}`}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={30} />
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Caption and Navigation */}
        <div className="bg-white p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">
              <p className="text-brand-primary font-medium">{currentIndex + 1} / {galleryItems.length}</p>
              <h3 className="text-lg font-semibold mt-1">{currentItem.description}</h3>
            </div>
            <div>
              <button 
                onClick={() => setIsBeforeAfterView(!isBeforeAfterView)}
                className="px-4 py-2 bg-primary text-white  rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors duration-300"
              >
                {isBeforeAfterView ? 'Single View' : 'Before & After'}
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white border border-gray-200 text-foreground/70 hover:text-brand-primary hover:border-brand-primary transition-colors duration-300"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-brand-primary w-5' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white border border-gray-200 text-foreground/70 hover:text-brand-primary hover:border-brand-primary transition-colors duration-300"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom Image Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <div className="relative max-w-4xl max-h-[90vh] mx-auto">
            <img 
              src={modalImage} 
              alt="Gallery image fullscreen"
              className="max-w-full max-h-[80vh] object-contain mx-auto" 
            />
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <button 
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-white/20 text-white rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 mx-auto block"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BeforeAfterGallery;

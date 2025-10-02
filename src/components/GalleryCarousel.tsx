'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Users, MapPin, Calendar } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  stats: {
    patients: number;
    treatments: number;
  };
}

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample gallery data - in a real app, this would come from an API
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Nairobi Community Dental Camp',
      location: 'Kibera, Nairobi',
      date: 'March 2024',
      description: 'Our largest dental camp to date, providing free checkups and treatments to over 500 community members.',
      image: '/api/placeholder/600/400',
      stats: {
        patients: 500,
        treatments: 150
      }
    },
    {
      id: 2,
      title: 'Mombasa Coastal Health Initiative',
      location: 'Mombasa, Kenya',
      date: 'February 2024',
      description: 'Focusing on preventive care and oral health education for coastal communities.',
      image: '/api/placeholder/600/400',
      stats: {
        patients: 350,
        treatments: 120
      }
    },
    {
      id: 3,
      title: 'Kisumu Rural Outreach',
      location: 'Kisumu, Kenya',
      date: 'January 2024',
      description: 'Bringing dental care to rural communities with limited access to healthcare services.',
      image: '/api/placeholder/600/400',
      stats: {
        patients: 280,
        treatments: 95
      }
    },
    {
      id: 4,
      title: 'Kampala Cross-Border Initiative',
      location: 'Kampala, Uganda',
      date: 'December 2023',
      description: 'Expanding our impact across East Africa with our first international dental camp.',
      image: '/api/placeholder/600/400',
      stats: {
        patients: 420,
        treatments: 180
      }
    },
    {
      id: 5,
      title: 'Eldoret Youth Dental Program',
      location: 'Eldoret, Kenya',
      date: 'November 2023',
      description: 'Specialized program focusing on dental care for children and young adults.',
      image: '/api/placeholder/600/400',
      stats: {
        patients: 320,
        treatments: 110
      }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryItems.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-nature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text-purple">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the smiles we've brightened and the communities we've empowered through our dental camps and outreach programs.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-emerald-100 via-teal-50 to-accent-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg pulse-glow">
                          <Heart className="h-16 w-16 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {galleryItems[currentIndex].title}
                        </h3>
                        <p className="text-gray-600">
                          Dental Camp Gallery
                        </p>
                      </div>
                    </div>
                    
                    {/* Overlay Stats */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600">
                              {galleryItems[currentIndex].stats.patients}
                            </div>
                            <div className="text-sm text-gray-600">Patients Served</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-accent-600">
                              {galleryItems[currentIndex].stats.treatments}
                            </div>
                            <div className="text-sm text-gray-600">Treatments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center space-x-2 text-emerald-600">
                          <MapPin className="h-5 w-5" />
                          <span className="font-medium">{galleryItems[currentIndex].location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-teal-500">
                          <Calendar className="h-5 w-5" />
                          <span>{galleryItems[currentIndex].date}</span>
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        {galleryItems[currentIndex].title}
                      </h3>

                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {galleryItems[currentIndex].description}
                      </p>

                      <div className="flex items-center space-x-6 mb-8">
                        <div className="flex items-center space-x-2">
                          <Users className="h-6 w-6 text-emerald-600" />
                          <span className="text-gray-700">
                            {galleryItems[currentIndex].stats.patients} Patients
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="h-6 w-6 text-accent-600" />
                          <span className="text-gray-700">
                            {galleryItems[currentIndex].stats.treatments} Treatments
                          </span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg"
                      >
                        View Full Story
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-200 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-200 z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {galleryItems.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-emerald-500'
                    : 'bg-gray-300 hover:bg-emerald-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
              isAutoPlaying
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-emerald-200'
            }`}
          >
            {isAutoPlaying ? 'Pause Slideshow' : 'Resume Slideshow'}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;

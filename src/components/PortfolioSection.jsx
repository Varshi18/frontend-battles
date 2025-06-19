import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with advanced filtering, cart management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      rating: 4.9,
      isNew: false,
    },
    {
      title: 'Dashboard Analytics',
      description: 'Comprehensive admin dashboard with real-time data visualization and reporting tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'Chart.js', 'Firebase', 'Material UI'],
      rating: 4.8,
      isNew: true,
    },
    {
      title: 'Social Media App',
      description: 'Interactive social platform with real-time messaging, posts, and user engagement features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Socket.io', 'MongoDB', 'Chakra UI'],
      rating: 4.7,
      isNew: false,
    },
    {
      title: 'Portfolio Website',
      description: 'Creative portfolio showcase with smooth animations and interactive project galleries.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Framer Motion', 'GSAP', 'Netlify'],
      rating: 4.9,
      isNew: false,
    },
    {
      title: 'Learning Platform',
      description: 'Interactive educational platform with course management and progress tracking.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'Bootstrap'],
      rating: 4.6,
      isNew: false,
    },
    {
      title: 'Fitness Tracker',
      description: 'Health and fitness tracking app with workout plans and nutrition monitoring.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Redux', 'Health API', 'Styled Components'],
      rating: 4.8,
      isNew: true,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const itemHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const buttonHoverVariants = {
    initial: { backgroundColor: '#6366f1', color: '#fff' },
    hover: { backgroundColor: '#4f46e5', color: '#fff', transition: { duration: 0.2 } },
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Portfolio Showcase
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our collection of innovative projects that demonstrate excellence in 
              frontend development and user experience design.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative flex h-[600px] w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl">
            {/* Left Project (Current) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.title + '-left'}
                className="relative flex w-1/2 flex-col items-center justify-center p-8 text-center"
                initial={{ x: '0%', opacity: 1 }}
                animate={{ x: '0%', opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {currentProject.isNew && (
                  <span className="absolute right-8 top-8 z-10 bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-xs font-bold text-white rounded-full">
                    NEW
                  </span>
                )}
                
                <motion.img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="mb-6 max-w-[80%] h-64 object-cover rounded-lg cursor-pointer shadow-lg"
                  variants={itemHoverVariants}
                  initial="initial"
                  whileHover="hover"
                />
                
                <div className="flex items-center justify-between w-full mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {currentProject.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {currentProject.rating}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      whileHover={{ scale: 1.1, backgroundColor: '#e5e7eb' }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium"
                    variants={buttonHoverVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </motion.button>
                  <motion.button
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                    whileHover={{ backgroundColor: '#f3f4f6', scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Project (Next) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={nextProject.title + '-right'}
                className="relative flex w-1/2 flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-gray-800"
                initial={{ x: '100%', opacity: 1 }}
                animate={{ x: '0%', opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {nextProject.isNew && (
                  <span className="absolute right-8 top-8 z-10 bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-xs font-bold text-white rounded-full">
                    NEW
                  </span>
                )}
                
                <motion.img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="mb-6 max-w-[80%] h-64 object-cover rounded-lg cursor-pointer shadow-lg opacity-75"
                  variants={itemHoverVariants}
                  initial="initial"
                  whileHover="hover"
                />
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {nextProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Next Project
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white shadow-lg z-50"
              onClick={handlePrev}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.9)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white shadow-lg z-50"
              onClick={handleNext}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.9)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-500' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
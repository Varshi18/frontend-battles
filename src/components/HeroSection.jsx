import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';

const heroFeatures = {
  replicate: {
    title: 'Pixel-Perfect Replication',
    details: ['Exact design matching', 'Responsive layouts', 'Cross-browser compatibility'],
    position: { top: '20%', left: '15%' },
  },
  innovate: {
    title: 'Creative Innovation',
    details: ['Custom animations', 'Interactive elements', 'Modern UI patterns'],
    position: { top: '30%', right: '10%' },
  },
  challenge: {
    title: '4-Hour Challenge',
    details: ['Time-based coding', 'Real-world scenarios', 'Performance optimization'],
    position: { bottom: '25%', left: '20%' },
  },
  features: {
    title: '6+ Features Required',
    details: ['Responsive design', 'Dark/Light mode', 'Smooth animations'],
    position: { bottom: '20%', right: '15%' },
  },
};

const HeroSection = () => {
  const textRef = useRef(null);
  const glowRef = useRef(null);
  const btnRef = useRef(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    const text = textRef.current;
    const glow = glowRef.current;
    const button = btnRef.current;

    if (text && glow && button) {
      text.classList.add('opacity-0', 'translate-y-6');
      glow.classList.add('opacity-0', 'scale-95');
      button.classList.add('opacity-0', 'translate-y-6');

      setTimeout(() => {
        text.classList.remove('opacity-0', 'translate-y-6');
        text.classList.add('opacity-100', 'translate-y-0');
      }, 300);

      setTimeout(() => {
        glow.classList.remove('opacity-0', 'scale-95');
        glow.classList.add('opacity-100', 'scale-100');
      }, 600);

      setTimeout(() => {
        button.classList.remove('opacity-0', 'translate-y-6');
        button.classList.add('opacity-100', 'translate-y-0');
      }, 900);
    }
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-40 left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Animated glow overlay */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 dark:bg-purple-500/30 blur-[120px] rounded-full transition-all duration-1000"
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div
          ref={textRef}
          className="transition-all duration-1000 space-y-6"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-4 h-4 mr-2 fill-current" />
            Frontend Battle 2.0 - Round 1
          </motion.div>

          {/* Main Heading with Interactive Words */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
            <motion.span 
              className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent cursor-pointer"
              onMouseEnter={() => setHoveredFeature('replicate')}
              onMouseLeave={() => setHoveredFeature(null)}
              whileHover={{ scale: 1.05, color: '#f7b32b' }}
              transition={{ duration: 0.2 }}
            >
              Replicate
            </motion.span>
            {" & "}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
              onMouseEnter={() => setHoveredFeature('innovate')}
              onMouseLeave={() => setHoveredFeature(null)}
              whileHover={{ scale: 1.05, color: '#f7b32b' }}
              transition={{ duration: 0.2 }}
            >
              Innovate
            </motion.span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your frontend skills with creativity and precision. Build pixel-perfect designs with innovative enhancements.
          </p>

          {/* Interactive Stats */}
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <motion.div 
              className="flex items-center cursor-pointer"
              onMouseEnter={() => setHoveredFeature('challenge')}
              onMouseLeave={() => setHoveredFeature(null)}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              4 Hour Challenge
            </motion.div>
            <motion.div 
              className="flex items-center cursor-pointer"
              onMouseEnter={() => setHoveredFeature('features')}
              onMouseLeave={() => setHoveredFeature(null)}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              6+ Features Required
            </motion.div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" />
              Responsive Design
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          ref={btnRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 transition-all duration-1000"
        >
          <motion.button 
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <motion.button 
            className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Watch Demo
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {hoveredFeature && heroFeatures[hoveredFeature] && (
          <motion.div
            className="absolute rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-5 text-gray-800 dark:text-white shadow-lg z-20 w-80"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ ...heroFeatures[hoveredFeature].position }}
          >
            <h3 className="mb-2 text-lg font-bold">{heroFeatures[hoveredFeature].title}</h3>
            {heroFeatures[hoveredFeature].details.map((detail, index) => (
              <p key={index} className="text-sm mb-1">{detail}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
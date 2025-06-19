import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Palette, Zap, Code, Eye, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Seamlessly adapts to all screen sizes and devices for optimal user experience.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'Dark/Light Mode',
      description: 'Beautiful theme switching with smooth transitions and persistent preferences.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Smooth Animations',
      description: 'Carefully crafted micro-interactions and animations that delight users.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following modern development practices.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Eye,
      title: 'Pixel Perfect',
      description: 'Meticulously crafted designs with attention to every detail and spacing.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Best Practices',
      description: 'Implements accessibility, SEO optimization, and performance best practices.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={cardVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features and technologies that make this application stand out 
              in the Frontend Battle challenge.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-300 relative overflow-hidden"
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />
                
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div 
                  className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full relative z-10`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            variants={cardVariants}
          >
            <motion.div 
              className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-full px-8 py-3">
                <span className="text-gray-900 dark:text-white font-semibold">
                  Ready to explore more? 
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-2">
                    Scroll down ↓
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
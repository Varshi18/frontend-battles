import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Globe, Layers, Rocket } from 'lucide-react';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces that provide exceptional user experiences.',
      features: ['Responsive Layouts', 'User Research', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building modern, fast, and scalable web applications using cutting-edge technologies.',
      features: ['React/Vue/Angular', 'Node.js', 'TypeScript', 'API Integration'],
    },
    {
      icon: Layers,
      title: 'Frontend Architecture',
      description: 'Designing robust frontend architectures that scale with your business needs.',
      features: ['Component Libraries', 'State Management', 'Performance Optimization', 'Testing'],
    },
    {
      icon: Rocket,
      title: 'Deployment & DevOps',
      description: 'Seamless deployment pipelines and infrastructure management for optimal performance.',
      features: ['CI/CD Pipelines', 'Cloud Hosting', 'Performance Monitoring', 'Security'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive frontend development services to bring your digital vision to life 
              with precision and innovation.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div className="grid lg:grid-cols-2 gap-8" variants={containerVariants}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="flex items-start space-x-6 relative z-10">
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.6 }
                      }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <motion.div 
                  className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/20 rounded-2xl transition-colors duration-300 pointer-events-none"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Process Timeline */}
          <motion.div className="mt-20" variants={cardVariants}>
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Development Process
            </h3>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
              {['Planning', 'Design', 'Development', 'Testing', 'Deployment'].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-4"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{step}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
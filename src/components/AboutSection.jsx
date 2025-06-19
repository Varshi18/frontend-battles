import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Trophy, Zap } from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Target, value: '100+', label: 'Participants' },
    { icon: Users, value: '50+', label: 'Teams' },
    { icon: Trophy, value: '10', label: 'Winners' },
    { icon: Zap, value: '4h', label: 'Duration' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About the Challenge
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Frontend Battle 2.0 is a competitive coding challenge that tests your ability to replicate designs 
              while showcasing your creativity and technical skills.
            </p>
          </motion.div>

          {/* Stats Grid with Hover Effects */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16" variants={containerVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mb-4 group-hover:shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                What Makes This Challenge Special?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Pixel-Perfect Replication',
                    description: 'Challenge yourself to recreate designs with absolute precision and attention to detail.',
                    color: 'bg-purple-500'
                  },
                  {
                    title: 'Creative Enhancement',
                    description: 'Add your own creative touches and improvements to stand out from the competition.',
                    color: 'bg-blue-500'
                  },
                  {
                    title: 'Modern Technologies',
                    description: 'Showcase your skills with the latest frontend frameworks and tools.',
                    color: 'bg-indigo-500'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110`}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl transform rotate-6"
                whileHover={{ rotate: 3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Challenge Rules
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {[
                    'Implement at least 6 features from resources',
                    'Fully responsive design required',
                    'Light and dark mode support',
                    'Custom loading screen',
                    'Proper navigation with smooth scrolling'
                  ].map((rule, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      {rule}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
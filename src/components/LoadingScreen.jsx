import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Rocket } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            <motion.div 
              className="absolute inset-0 border-4 border-purple-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute inset-2 border-4 border-blue-400 rounded-full"
              animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Loading Text */}
        <motion.h2 
          className="text-3xl font-bold text-white mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Frontend Battle 2.0
        </motion.h2>
        
        {/* Loading Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          >
            <Zap className="w-6 h-6 text-yellow-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            <Code className="w-6 h-6 text-green-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >
            <Rocket className="w-6 h-6 text-red-400" />
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </div>
        
        <motion.p 
          className="text-gray-300 mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initializing amazing experience...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Documentation', 'API'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
      title: 'Support',
      links: ['Contact', 'Help Center', 'Community', 'Status'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses'],
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
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold">FrontendBattle</span>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering developers to create amazing frontend experiences through 
              challenges, learning, and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + linkIndex * 0.1 }}
                  >
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 FrontendBattle. All rights reserved.
          </p>
          <motion.p 
            className="text-gray-400 text-sm mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            Built with ❤️ using React, JavaScript & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex space-x-6 mb-6">
            {[
              { icon: <FaGithub className="h-6 w-6" />, name: 'GitHub', url: 'https://github.com/manokaruppaiyan' },
              { icon: <FaLinkedin className="h-6 w-6" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/manonmani1609/' },
              { icon: <FaBehance className="h-6 w-6" />, name: 'Behance', url: 'https://www.behance.net/manonmani1609' }
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-sm text-gray-400 hover:text-white"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} ManonMani. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

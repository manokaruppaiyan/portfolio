import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/manonmanipro.jpeg'; 

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="text-indigo-600 dark:text-indigo-400">MANONMANI</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Full Stack Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                I build exceptional digital experiences that are fast, accessible, and visually appealing.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
                >
                  View My Work
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-600 opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

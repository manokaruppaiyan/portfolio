import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur"></div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="relative rounded-2xl w-64 h-64 object-cover shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/3 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              I'm MANONMANI, a Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              "I’m a passionate and committed web developer with a strong foundation in both frontend and backend technologies. I completed a 3-month certification in Data Science and gained 9 months of hands-on experience through a Full Stack Development internship, where I actively worked on live projects. My core expertise lies in building responsive,
              user-friendly web applications using technologies like React, Node.js, React-Bootstrap, Tailwind CSS, MongoDB, Bootstrap, and JavaScript. I’m driven by a love for clean code, great design, and impactful digital experiences."
            </p>

            {/* Resume Download Button */}
            <a
              href="/MANONMANI_K.pdf"
              download
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

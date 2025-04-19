import React from 'react';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    type: 'work',
    role: 'MERN Stack Developer (Intern)',
    company: 'WhyTap (Why Global Services)',
    duration: 'Nov 2024 – Present',
    description:
      'Developing and maintaining full-stack applications using React.js, Node.js, Express, and MongoDB. Collaborating with teams to improve UI/UX and implementing RESTful APIs.',
  },
  {
    id: 2,
    type: 'work',
    role: 'Machine Learning Trainee',
    company: 'CADD Centre, Trichy',
    duration: 'Feb 2024 – Mar 2024',
    description:
      'Built predictive models using Random Forest, K-NN, and SVM. Worked on data analysis and visualization for decision-making.',
  },
  {
    id: 3,
    type: 'education',
    degree: 'M.Sc. in Computer Science',
    institution: 'Meenakshi Ramasamy Arts & Science College, Thathanur',
    duration: '2022 – 2024',
    description: 'Specialized in Computer Science with a CGPA of 7.5.',
  },
  {
    id: 4,
    type: 'education',
    degree: 'B.Ed. in Computer Science',
    institution: 'Meenakshi Ramasamy Education College, Thathanur',
    duration: '2020 – 2022',
    description: 'Completed B.Ed. in Computer Science with a CGPA of 6.7.',
  },
  {
    id: 5,
    type: 'education',
    degree: 'B.Sc. in Computer Science',
    institution: 'Government Arts & Science College, Ariyalur',
    duration: '2016 – 2019',
    description: 'Completed Bachelor’s with a CGPA of 6.9.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {/* Hide the vertical line on small screens */}
          <div className="hidden md:block absolute left-8 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex flex-col sm:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center justify-between w-full`}
            >
              <div
                className={`order-1 w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}
              ></div>

              <div className="z-10 flex items-center order-1 bg-indigo-100 dark:bg-indigo-900/30 shadow-xl w-16 h-16 rounded-full mb-4 sm:mb-0">
                {exp.type === 'work' ? (
                  <BriefcaseIcon className="mx-auto h-8 w-8 text-indigo-700 dark:text-indigo-400" />
                ) : (
                  <AcademicCapIcon className="mx-auto h-8 w-8 text-indigo-700 dark:text-indigo-400" />
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`order-1 ${index % 2 === 0 ? 'bg-indigo-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'} rounded-lg shadow-xl sm:w-5/12 px-6 py-4`}
              >
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white text-xl">
                  {exp.type === 'work' ? exp.role : exp.degree}
                </h3>
                <h4 className="mb-2 font-semibold text-indigo-600 dark:text-indigo-400">
                  {exp.type === 'work' ? exp.company : exp.institution}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
                  {exp.duration}
                </p>
                <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

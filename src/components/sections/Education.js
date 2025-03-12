// File: src/components/sections/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaShieldAlt } from 'react-icons/fa';

const EducationItem = ({ education, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {education.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {education.title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 mb-2">
            {education.institution}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {education.period}
          </p>
          {education.description && (
            <p className="text-gray-700 dark:text-gray-300">
              {education.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const educationItems = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Cairo University",
      period: "Graduated 2018 - 2022",
      icon: <FaGraduationCap className="w-8 h-8 text-blue-500" />,
      description: "Focused on software engineering, web development, and cryptography, with skills in AI, problem-solving, graphic design, mathematics, cybersecurity, and coding best practices."
    },
    {
      title: "Full-Stack Development Scholarship",
      institution: "Udacity FWD Program",
      period: "Completed 1 Year",
      icon: <FaAward className="w-8 h-8 text-green-500" />,
      description: "Learned JavaScript fundamentals, DOM manipulation, and web performance optimization. Built web applications using Node.js, Express, and asynchronous programming."
    },
    {
      title: "Web Security and Pen Testing Scholarship",
      institution: "CyberTalents",
      period: "Completed 3 months",
      icon: <FaShieldAlt className="w-8 h-8 text-red-500" />,
      description: "Intensive scholarship in web security, penetration testing, and cybersecurity best practices. Gained expertise in SQL injection, XSS, CSRF, and network vulnerability assessment."
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and professional certifications in software development and cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationItems.map((education, index) => (
            <EducationItem 
              key={index} 
              education={education} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
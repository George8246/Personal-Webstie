// File: src/components/sections/Education.js
import React from 'react';
import { motion } from 'framer-motion';

const EducationItem = ({ item, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full mt-2 md:mt-0">
          {item.period}
        </span>
      </div>
      <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">{item.institution}</p>
      {item.description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
      )}
      {item.achievements && item.achievements.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Achievements</h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {item.achievements.map((achievement, achievementIndex) => (
              <li key={achievementIndex}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const Education = () => {
  const educationItems = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2016 - 2020",
      description: "Focused on software engineering, database systems, and web development.",
      achievements: [
        "Graduated with honors",
        "Developed a student management system as final year project",
        "Participated in hackathons and coding competitions"
      ]
    }
  ];

  const certificationItems = [
    {
      title: "Udacity FWD Full-Stack Development Nanodegree",
      institution: "Udacity",
      period: "2021",
      description: "Comprehensive program covering both frontend and backend development techniques.",
      achievements: [
        "Built an e-commerce platform with Angular and Node.js",
        "Developed RESTful APIs with authentication and authorization"
      ]
    },
    {
      title: "CyberTalents Web Security Certificate",
      institution: "CyberTalents",
      period: "2022",
      description: "Focused on web application security, vulnerability assessment, and secure coding practices.",
      achievements: [
        "Learned penetration testing techniques for web applications",
        "Applied secure development practices to prevent common vulnerabilities"
      ]
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
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Education & Certifications</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My academic background and professional certifications that have shaped my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Education</h3>
            {educationItems.map((item, index) => (
              <EducationItem key={index} item={item} index={index} />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Certifications</h3>
            {certificationItems.map((item, index) => (
              <EducationItem key={index} item={item} index={index + educationItems.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
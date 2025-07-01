// File: src/components/sections/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaFileWord } from 'react-icons/fa';

const About = () => {
  const pdfResumeUrl = "https://drive.google.com/file/d/1dJPA4dpcJhCGlgdquTgL0Wypk1IPuarL/view?usp=drive_link";
  const wordResumeUrl = "https://drive.google.com/file/d/1VT43ch0h3PfSTX8yKTI_RllvxCi3cd4g/view?usp=drive_link";
  
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
        <div className="mt-8">
  <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
    I am a passionate <strong>Full-Stack Web Developer</strong> 💻 with over two years of experience in creating advanced and responsive web applications. I specialize in user-centric interfaces powered by advanced server-side logic using <strong>React</strong>, <strong>.NET Core</strong>, and <strong>SQL Server</strong>, which enable seamless user experiences.
</p>
<p className="text-gray-700 dark:text-gray-300 mb-4">
    I have developed <strong>e-commerce platforms</strong> 🛒, <strong>RBAC infrastructure</strong> 🔒, as well as structured data management systems for automated workflow processes. My code is <strong>clean</strong>, <strong>easy to maintain</strong>, and enables superb application performance and reliability.
</p>
<p className="text-gray-700 dark:text-gray-300 mb-6">
    As a former <strong>officer</strong> ⭐, I bring strong <strong>leadership</strong>, <strong>problem-solving</strong>, and <strong>team management</strong> skills to every project. I collaborate effectively with cross-functional teams to deliver high-quality solutions. My unique background allows me to approach challenges with discipline and a focus on achieving results.
</p>
      </div>
      </motion.div>
          
          <motion.div
            className="md:w-1/2 mb-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mt-8">
  <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
    My Approach
  </h3>
  <div className="space-y-4">
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-blue-500 rounded-full p-2 mr-4">
        <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white"><strong>User-Centered Design</strong></h4>
        <p className="text-gray-700 dark:text-gray-300">I prioritize creating intuitive interfaces that provide seamless user experiences across all devices.</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-blue-500 rounded-full p-2 mr-4">
        <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white"><strong>Performance Optimization</strong></h4>
        <p className="text-gray-700 dark:text-gray-300">I build applications with a focus on speed, efficiency, and scalability to handle growing user demands.</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-blue-500 rounded-full p-2 mr-4">
        <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white"><strong>Collaborative Development</strong></h4>
        <p className="text-gray-700 dark:text-gray-300">I thrive in team environments, leveraging my leadership background to facilitate effective communication and project success.</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="flex-shrink-0 bg-blue-500 rounded-full p-2 mr-4">
        <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white"><strong>Clean and Maintainable Code</strong></h4>
        <p className="text-gray-700 dark:text-gray-300">I write clean, modular, and well-documented code to ensure long-term maintainability and ease of collaboration for future developers.</p>
      </div>
    </div>
  </div>
</div>
            
          </motion.div>
        </div>
        <div className="flex flex-wrap gap-4">
              <a
                href={pdfResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <FaFileAlt className="mr-2" />
                <strong>PDF Resume</strong>
              </a>

              <a
                href={wordResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <FaFileWord className="mr-2" />
                <strong>Word Resume</strong>
              </a>
            </div>
      </div>
    </section>
  );
};

export default About;
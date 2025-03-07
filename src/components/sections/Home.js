// File: src/components/sections/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePlaceholder from '../../assets/images/profile-placeholder.jpg';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">George Essam Helmy</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Full-Stack Web Developer
          </h2>
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">
            Specializing in JavaScript, .NET Core, and SQL Server
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/georgeessam/" 
              target="_blank" 
              rel="noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full flex items-center"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a 
              href="https://github.com/George8246" 
              target="_blank" 
              rel="noreferrer"
              className="text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded-full flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
          <a 
            href="#contact" 
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium"
          >
            Get In Touch
          </a>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full transform translate-x-4 translate-y-4"></div>
            <img 
              src={profilePlaceholder} 
              alt="Your Name" 
              className="relative z-10 rounded-full w-64 h-64 object-cover border-4 border-white dark:border-gray-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
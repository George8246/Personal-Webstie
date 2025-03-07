// File: src/components/layout/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://www.linkedin.com/in/georgeessam/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/George8246" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="mailto:georgeyssa@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} George Essam Helmy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
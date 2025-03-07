import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = {
    name: "George Essam Helmy",
    email: "georgeyssa@gmail.com",
    phone: "+201551677783",
    linkedin: "https://www.linkedin.com/in/georgeessam/",
    github: "https://github.com/George8246"
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{contactInfo.name}</h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-blue-600">
              <FaEnvelope /> {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-blue-600">
              <FaPhone /> {contactInfo.phone}
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
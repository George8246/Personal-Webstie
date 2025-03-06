// File: src/components/sections/Experience.js
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ experience, index }) => {
  return (
    <motion.div
      className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute -left-3 top-0 bg-blue-500 dark:bg-blue-400 rounded-full w-4 h-4"></div>
      <div className="mb-2">
        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
          {experience.period}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
      <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">{experience.company}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {experience.technologies.map((tech, techIndex) => (
          <span 
            key={techIndex} 
            className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        {experience.responsibilities.map((responsibility, respIndex) => (
          <li key={respIndex}>{responsibility}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Full-Stack Web Developer",
      company: "Self-Employed",
      period: "2022 - 2023",
      description: "Designed and developed custom web applications for various clients, focusing on creating scalable and responsive solutions.",
      technologies: ["JavaScript", "React", "Node.js", ".NET Core", "SQL Server", "HTML/CSS"],
      responsibilities: [
        "Developed and maintained e-commerce websites with secure payment gateway integration using Stripe API.",
        "Implemented SEO optimization strategies that improved client site rankings on search engines.",
        "Created responsive, mobile-first web designs using modern CSS frameworks and techniques.",
        "Integrated third-party APIs to enhance website functionality and user experience.",
        "Provided ongoing maintenance and support for client websites, ensuring optimal performance."
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - 2022",
      description: "Worked as part of a development team to create and maintain web applications for corporate clients.",
      technologies: ["JavaScript", "Angular", ".NET Core", "SQL Server", "Bootstrap"],
      responsibilities: [
        "Assisted in the development of user interfaces using Angular and Bootstrap.",
        "Collaborated on backend development using .NET Core and SQL Server.",
        "Participated in code reviews and implemented feedback to improve code quality.",
        "Fixed bugs and improved application performance through code refactoring.",
        "Documented code and features for internal knowledge sharing."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey as a web developer, showcasing my growth and the projects I've worked on.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
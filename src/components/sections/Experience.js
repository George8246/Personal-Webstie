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
      <div className="absolute -left-2 top-0 bg-blue-500 dark:bg-blue-400 rounded-full w-4 h-4"></div>
      <div className="mb-2">
        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
          {experience.period}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
      <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">{experience.company}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {experience.technologies.map((tech, techIndex) => (
          <span 
            key={techIndex} 
            className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h4>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          {experience.responsibilities.map((responsibility, respIndex) => (
            <li key={respIndex}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {experience.learnedSkills && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Learned Skills:</h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            {experience.learnedSkills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Military Reserve Officer | Full Stack Developer",
      company: "Ministry of Defense",
      period: "2023 - 2025",
      description: "Led development and maintenance of military web applications and systems, focusing on security, scalability, and performance optimization.",
      technologies: [
        "ASP.NET", "Entity Framework", "SQL", "JavaScript", "C#", "HTML", "CSS", "MVC",
        "RESTful APIs", "Git", "IIS", "RBAC", "Unit Testing"
      ],
      responsibilities: [
        "Maintained and enhanced various web applications, services, and APIs, ensuring the stability and security of military networks and servers.",
        "Developed scalable systems for the unit and the Ministry of Defense using ASP.NET MVC, implementing role-based access control (RBAC) to manage permissions for different ranks and departments.",
        "Deployed and configured applications on IIS (Internet Information Services), ensuring optimal performance, security, and availability.",
        "Collaborated with cross-functional teams to design and deploy secure, high-performance solutions tailored to needs."
      ],
      learnedSkills: [
        "Gained expertise in cybersecurity best practices to protect military systems.",
        "Improved proficiency in database optimization and query performance tuning for large-scale applications.",
        "Enhanced knowledge of IIS configuration, including application pooling, SSL certificate management, and load balancing.",
        "Developed strong problem-solving and troubleshooting skills to resolve critical system issues under tight deadlines.",
        "Acquired experience in Agile project management and collaboration tools to streamline development workflows.",
        "Strengthened understanding of system architecture design and scalability principles for enterprise-level applications."
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 - 2023",
      description: "Developed multiple client websites using WordPress, React, and .NET Core, delivering tailored solutions to meet diverse business needs.",
      technologies: [
        "WordPress", "React", ".NET Core", "WooCommerce", "HTML", "CSS", 
        "JavaScript", "PayPal API", "Stripe API", "SEO"
      ],
      responsibilities: [
        "Built and customized e-commerce websites using WordPress and WooCommerce, ensuring seamless user experiences and robust functionality.",
        "Integrated payment gateways, designed custom themes, and implemented SEO optimization techniques to improve website performance and search engine rankings.",
        "Provided ongoing maintenance, feature updates, and technical support to ensure client satisfaction and long-term website reliability."
      ],
      learnedSkills: [
        "Gained hands-on experience in full-stack development, combining front-end and back-end technologies.",
        "Developed expertise in e-commerce platform customization, including WooCommerce plugin development and theme customization.",
        "Improved knowledge of SEO best practices, including meta tag optimization, site speed improvement, and keyword analysis.",
        "Enhanced proficiency in responsive web design to ensure cross-device compatibility and accessibility.",
        "Acquired skills in client communication and project management, balancing multiple projects and deadlines effectively.",
        "Learned to troubleshoot and debug complex issues across different platforms and frameworks.",
        "Strengthened understanding of web security practices, including SSL implementation and data protection measures."
      ]
    },
  ];
  
  return (
    <section id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey as a web developer showcases my growth and the projects I've worked on.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
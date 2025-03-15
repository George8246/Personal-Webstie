// File: src/components/sections/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import DrRaw from '../../assets/images/Dr Raw.png';
import EasyBank from '../../assets/images/EasyBank.png';
import insurance from '../../assets/images/insurance.png';

import DrRawGif from '../../assets/gifs/Dr Raw.gif';
import EasyBankGif from '../../assets/gifs/EasyBank.gif';
import insuranceGif from '../../assets/gifs/insurance.gif';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div 
        className="h-48 bg-gray-200 dark:bg-gray-600 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? project.gif || project.image : project.image}
          alt={project.title}
          className="w-full h-full object-fit transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
            >
              <FaGithub className="mr-1" /> Code
            </a>
          )}
          {project.liveDemo && (
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
            >
              <FaExternalLinkAlt className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Dr Raw Cosmetics E-Commerce",
      description: "Built a cosmetics e-commerce site using WordPress/WooCommerce, later moved to Shopify. Added custom product management, payment integration, and performance optimizations for better user experience.",
      image: DrRaw,
      gif: DrRawGif,
      technologies: ["Shopify", "WordPress", "WooCommerce", "Payment Integration"],
      liveDemo: "https://www.drrawegypt.com/"
    },
    {
      title: "EasyBank Landing Page",
      description: "EasyBank is a modern, responsive landing page demo showcasing sleek design for a digital banking platform. Featuring vibrant visuals, smooth animations, and user-friendly navigation, it's a perfect example of fintech-inspired web design. While non-functional, it highlights cutting-edge aesthetics and usability.",
      image: EasyBank,
      gif: EasyBankGif,
      technologies: ["HTML", "CSS", "Bootstrap", "jQuery"],
      github: "https://github.com/George8246/Easybank-website",
      liveDemo: "https://george-easybank.netlify.app/"
    },
    {
      title: "Insurance Landing Page",
      description: "Explore a sleek and modern insurance landing page designed as a demo project. This visually appealing site showcases user-friendly navigation and responsive design, perfect for presenting insurance services. A great example of a professional and engaging web design concept.",
      image: insurance,
      gif: insuranceGif,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/George8246/insure-landing-page-master",
      liveDemo: "https://insurances-landing-page.netlify.app/"
    }
  ];

  const challenges = [
    
  ];

  const unpublishedProjects = [
    {
      title: "Smart Glasses E-commerce Platform",
      description: "Graduation Project: An e-commerce platform for smart glasses with built-in cameras. It includes a user-friendly interface for browsing and purchasing, along with an admin panel to manage users, orders, and inventory seamlessly.",
      technologies: ["Flask", "HTML", "CSS", "jQuery", "SQLite"],
      github: "https://github.com/George8246/Blood-Donation.git"
    },
    {
      title: "Blood Donation Platform",
      description: "A blood donation platform enabling users to log in, register their blood type, and respond to hospital requests. Hospitals can post announcements for specific blood types, creating a seamless connection between donors and healthcare providers.",
      technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Express", "MySQL"],
      github: "https://github.com/George8246/Blood-Donation.git"
    },
    {
      title: "Fashion E-commerce Frontend",
      description: "A frontend e-commerce platform designed for selling clothing. Features include a user-friendly interface for browsing products, detailed item descriptions, and a seamless shopping experience with intuitive navigation and responsive design.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/George8246/Easy-Shopping.git"
    },
    {
      title: "Glass-Shop Project",
      description: "Developed a MERN-based e-commerce platform for selling glasses. Includes admin panel, user authentication, and shopping cart. Adding order processing, payment integration, and a camera feature to check glass fit.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/George8246/Glasses-AR.git"
    },
    {
      title: "Notes Keeper",
      description: "Users can effortlessly create, edit, and organize notes within diffrent areas, ensuring a structured and clutter-free experience, with intuitive navigation and real-time updates, the platform adapts to diverse workflows, making it ideal for both personal and professional use",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/George8246/Keeper.git"
    },
    {
      title: "KOX",
      description: "The fashion website is a sleek, fully functional e-commerce platform built on WordPress and WooCommerce with a wide range of clothing. it features a responsive design, easy navigation, and product categorization, allowing customers to browse and shop effortlessly by style, size, or collection.",
      technologies: ["WordPress", "WooCommerce", "Payment Integration"],
      github: "https://github.com/George8246/KOX.git"
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Projects & Frontend Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>          

          {/* New Unpublished Projects Section */}
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 mt-16">
            Development Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {unpublishedProjects.map((project, index) => (
              <motion.div
                key={`unpublished-${index}`}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                    >
                      <FaGithub className="mr-1" /> Code
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
// File: src/components/sections/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
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
      description: "A full-featured e-commerce platform for a cosmetics brand with product catalog, shopping cart, and payment integration.",
      image: "/api/placeholder/600/300",
      technologies: ["React", "Node.js", ".NET Core", "SQL Server", "Stripe API"],
      github: "https://github.com/yourusername/dr-raw-cosmetics",
      liveDemo: "https://dr-raw-cosmetics.example.com"
    },
    {
      title: "Glass-Shop Project",
      description: "An online marketplace for custom glass products featuring product customization and real-time price calculation.",
      image: "/api/placeholder/600/300",
      technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
      github: "https://github.com/yourusername/glass-shop",
      liveDemo: "https://glass-shop.example.com"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my skills, projects, and professional experience as a Full-Stack Web Developer.",
      image: "/api/placeholder/600/300",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      liveDemo: "https://yourname.dev"
    },
    {
      title: "Task Management Dashboard",
      description: "A comprehensive task management application with Kanban boards, task assignment, and progress tracking features.",
      image: "/api/placeholder/600/300",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/yourusername/task-dashboard",
      liveDemo: "https://task-dashboard.example.com"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Projects;
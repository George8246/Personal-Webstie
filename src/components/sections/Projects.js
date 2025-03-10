  // File: src/components/sections/Projects.js
  import React from 'react';
  import { motion } from 'framer-motion';
  import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
  import GlassesAR from '../../assets/images/Glasses AR.png';
  import DrRaw from '../../assets/images/Dr Raw.png';
  import PersonalWebstie from '../../assets/images/Personal Webstie.png';
  import EasyBank from '../../assets/images/EasyBank.png';
  import Huddle from '../../assets/images/Huddle.png';
  import insurance from '../../assets/images/insurance.png';

  import GlassesARVideo from '../../assets/videos/Glasses AR.mp4';
  import DrRawVideo from '../../assets/videos/Dr Raw.mp4';
  // import PersonalWebstieGif from '../../assets/gifs/Personal Webstie.gif';
  import EasyBankVideo from '../../assets/videos/EasyBank.mp4';
  import HuddleVideo from '../../assets/videos/Huddle.mp4';
  import insuranceVideo from '../../assets/videos/insurance.mp4';

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const videoRef = React.useRef(null);

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset to first frame
      }
    };

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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            src={project.gif}
            muted
            loop
            playsInline
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
        description: "Built a cosmetics e-commerce site using WordPress/WooCommerce, later moved to Shopify. Added custom product management, payment integration, and performance optimizations for better user experience.",
        gif: DrRawVideo,
        technologies: ["Shopify", "WordPress", "WooCommerce", "Payment Integration"],
        liveDemo: "https://www.drrawegypt.com/"
      },
      {
        title: "Portfolio Website",
        description: "Created a professional portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer. Designed with modern principles, responsive layouts, and interactive features for a user-friendly digital presence.",
        gif: PersonalWebstie,
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/George8246/Personal-Webstie.git"
      },
      {
        title: "Glass-Shop Project",
        description: "Developed a MERN-based e-commerce platform for selling glasses. Includes admin panel, user authentication, and shopping cart. Adding order processing, payment integration, and a camera feature to check glass fit.",
        gif: GlassesARVideo,
        technologies: ["MongoDB", "Express.js", "React", "Node.js"],
        github: "https://github.com/George8246/Glasses-AR.git",
        liveDemo: "https://glasses-ar.netlify.app/"
      },
    ];

    const challenges = [
      {
        title: "Hudle Community Landing Page",
        description: "Hudle Community is a sleek, modern landing page demo showcasing clean design and user-friendly features. Built as a design concept, it highlights responsive layouts and vibrant visuals. Explore this creative project for inspiration in modern web design!",
        gif: HuddleVideo,
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/George8246/huddle-landing-page-with-curved-sections-master",
        liveDemo: "https://hudle-community.netlify.app/"
      },
      {
        title: "EasyBank Landing Page",
        description: "EasyBank is a modern, responsive landing page demo showcasing sleek design for a digital banking platform. Featuring vibrant visuals, smooth animations, and user-friendly navigation, it's a perfect example of fintech-inspired web design. While non-functional, it highlights cutting-edge aesthetics and usability.",
        gif: EasyBankVideo,
        technologies: ["HTML", "CSS", "Bootstrap", "jQuery"],
        github: "https://github.com/George8246/Easybank-website",
        liveDemo: "https://george-easybank.netlify.app/"
      },
      {
        title: "Insurance Landing Page",
        description: "Explore a sleek and modern insurance landing page designed as a demo project. This visually appealing site showcases user-friendly navigation and responsive design, perfect for presenting insurance services. A great example of a professional and engaging web design concept.",
        gif: insuranceVideo,
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/George8246/insure-landing-page-master",
        liveDemo: "https://insurances-landing-page.netlify.app/"
      }
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
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            {/* New Challenges Section */}
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 mt-16">Frontend Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((project, index) => (
                <ProjectCard key={`challenge-${index}`} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default Projects;
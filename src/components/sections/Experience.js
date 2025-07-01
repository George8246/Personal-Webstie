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
    // Freelance Full-Stack Developer (Grouped Projects)
    {
      title: "Freelance Full-Stack Developer",
      company: "Click7 Solutions · CGNom (R&D Project)",
      period: "Remote | Feb 2025 – Present",
      description: "Delivered robust web platforms and immersive 3D simulations for healthcare and e-commerce clients.",
      technologies: [
        "Django", "SQL", "React", "Three.js", "Zustand", "Tailwind", "REST APIs"
      ],
      responsibilities: [
        "Built a full-stack Django + SQL hospital management system with secure, role-based portals and automated billing.",
        "Developed appointment booking, admin controls, and ensured compliance for sensitive patient data.",
        "Prototyped 3D e-commerce demos using Three.js, React Fiber, and Drei, focusing on VR-style shopping UX.",
        "Led UI/UX design for interactive simulations, optimizing for engagement and accessibility."
      ],
      learnedSkills: [
        "Strengthened expertise in full-stack architecture and data security for healthcare applications.",
        "Advanced 3D web development and state management with React Fiber and Zustand.",
        "Enhanced skills in RESTful API design and cross-functional client collaboration."
      ]
    },
    // Full-Stack Developer (.NET Core) at Ministry of Defense
    {
      title: "Full-Stack Developer (.NET Core)",
      company: "Ministry of Defense – Egypt",
      period: "Mar 2024 – Apr 2025",
      description: "Engineered secure document management and geospatial tracking systems for defense operations.",
      technologies: [
        "ASP.NET Core", "C#", "SQL Server", "Leaflet.js", "Entity Framework", "IIS", "Git", "RBAC", "PowerShell"
      ],
      responsibilities: [
        "Built a secure fax/document routing system with multi-tier RBAC and automated PDF reporting (60% faster workflow).",
        "Developed a Leaflet.js map viewer to track document flows and a C# PDF converter (99%+ accuracy, 50+ files/day).",
        "Onboarded junior developers, authored internal documentation, and led backend architecture decisions."
      ],
      learnedSkills: [
        "Deepened knowledge of RBAC, compliance, and secure system design.",
        "Improved leadership and mentoring skills within cross-functional teams.",
        "Enhanced automation and reporting with PowerShell and .NET."
      ]
    },
    // System Administrator at Ministry of Defense
    {
      title: "System Administrator",
      company: "Ministry of Defense – Egypt",
      period: "Dec 2023 – Mar 2024",
      description: "Oversaw secure infrastructure and deployment readiness for development teams.",
      technologies: [
        "Infrastructure Automation", "Device Security", "PowerShell", "Network Readiness"
      ],
      responsibilities: [
        "Managed 100+ secure development devices across internal teams.",
        "Automated infrastructure monitoring and reporting with PowerShell scripts.",
        "Ensured 99.9% uptime and system readiness for deployment pipelines."
      ],
      learnedSkills: [
        "Advanced infrastructure automation and device security practices.",
        "Streamlined deployment and monitoring processes."
      ]
    },
    // Game Developer (Unity & C#) at Ministry of Defense
    {
      title: "Game Developer (Unity & C#)",
      company: "Ministry of Defense – Egypt",
      period: "Jun 2023 – Dec 2023",
      description: "Developed VR training simulations to modernize military training programs.",
      technologies: [
        "Unity", "C#", "SQLite", "VR Development", "Simulation Design"
      ],
      responsibilities: [
        "Built 6+ VR training simulations for Meta Quest 2, simulating military topography and combat.",
        "Reduced physical training costs by 40% through immersive digital experiences.",
        "Implemented C# and SQLite for persistent training data management."
      ],
      learnedSkills: [
        "Mastered VR simulation design and Unity development.",
        "Applied data persistence and optimization for real-time training analytics."
      ]
    },
    // Freelance Web Developer (Grouped Projects)
    {
      title: "Freelance Web Developer",
      company: "Dr Raw Cosmetics · AR Glasses E-Commerce (Personal Project)",
      period: "Remote | Jan 2022 – Apr 2023",
      description: "Delivered scalable e-commerce solutions and custom web platforms for diverse clients.",
      technologies: [
        "WordPress", "Shopify", "React", "Node.js", "MongoDB", "ASP.NET Core", "SQL Server"
      ],
      responsibilities: [
        "Migrated Dr Raw Cosmetics from WooCommerce to Shopify, improving load time by 40% and conversions by 15%.",
        "Integrated Stripe and PayPal, optimized UX and SEO for higher engagement.",
        "Developed a full-stack MERN e-commerce platform with admin dashboard and JWT-based auth.",
        "Currently migrating backend to ASP.NET Core & SQL for enhanced scalability."
      ],
      learnedSkills: [
        "Expanded expertise in e-commerce migrations and payment integrations.",
        "Strengthened full-stack development and system scalability strategies.",
        "Improved SEO, UX, and project management for client-facing solutions."
      ]
    }
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
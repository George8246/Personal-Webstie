// File: src/components/sections/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaDatabase, 
  FaGit, FaDocker, FaServer, FaNpm, FaTools, FaCode, FaTerminal,
  FaWordpress, FaBootstrap, FaGithub, FaLock, FaPaintBrush, FaVideo,
  FaUserShield
} from 'react-icons/fa';
import { SiDotnet, SiMysql, SiPostman, SiMongodb, SiTailwindcss, 
  SiExpress, SiFigma, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremiere 
} from 'react-icons/si';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <skill.icon className="h-8 w-8 mb-2 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-800 dark:text-gray-200 text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Angular', icon: FaAngular },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'WordPress', icon: FaWordpress },
    { name: 'WooCommerce', icon: FaWordpress },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
    { name: '.NET Core', icon: SiDotnet },
    { name: 'ASP.NET MVC', icon: SiDotnet },
    { name: 'REST APIs', icon: FaServer },
    { name: 'JWT Auth', icon: FaUserShield },
    { name: 'Web Security', icon: FaLock },
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Mongoose', icon: FaDatabase },
    { name: 'SQL Server', icon: SiMysql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Database Design', icon: FaDatabase },
  ];

  const toolsSkills = [
    { name: 'Git', icon: FaGit },
    { name: 'GitHub', icon: FaGithub },
    { name: 'VS Code', icon: FaCode },
    { name: 'Visual Studio', icon: FaCode },
    { name: 'Cursor', icon: FaTerminal },
    { name: 'SSMS', icon: FaDatabase },
    { name: 'Postman', icon: SiPostman },
    { name: 'Docker', icon: FaDocker },
    { name: 'Agile/Scrum', icon: FaTools },
  ];

  const designSkills = [
    { name: 'Figma', icon: SiFigma },
    { name: 'Illustrator', icon: SiAdobeillustrator },
    { name: 'Photoshop', icon: SiAdobephotoshop },
    { name: 'Premiere', icon: FaVideo },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Skills</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I've developed a diverse set of skills throughout my career as a Full-Stack Web Developer,
            allowing me to build complete, scalable web applications from the ground up.
          </p>
        </motion.div>

        <SkillCategory title="Frontend Development" skills={frontendSkills} />
        <SkillCategory title="Backend Development" skills={backendSkills} />
        <SkillCategory title="Database Management" skills={databaseSkills} />
        <SkillCategory title="Tools & Technologies" skills={toolsSkills} />
        <SkillCategory title="Design Tools" skills={designSkills} />
      </div>
    </section>
  );
};

export default Skills;
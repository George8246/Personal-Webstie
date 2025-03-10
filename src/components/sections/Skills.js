// File: src/components/sections/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaDatabase, 
  FaGit, FaServer, FaTools
} from 'react-icons/fa';
import { SiDotnet, SiMysql, SiPostman, SiExpress, SiMongodb } from 'react-icons/si';
import { BiLogoJquery } from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';

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
    { name: 'jQuery', icon: BiLogoJquery },
    { name: 'React', icon: FaReact },
    { name: 'Angular', icon: FaAngular }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express', icon: SiExpress },
    { name: '.NET Core', icon: SiDotnet },
    { name: 'REST APIs', icon: FaServer },
  ];

  const databaseSkills = [
    { name: 'MySQL', icon: SiMysql },
    { name: 'Mongodb', icon: SiMongodb },
    { name: 'Database Design', icon: FaDatabase },
  ];

  const toolsSkills = [
    { name: 'Git', icon: FaGit },
    { name: 'VSCode', icon: VscVscode },
    { name: 'Postman', icon: SiPostman },
    { name: 'Dev Tools', icon: FaTools },
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
      </div>
    </section>
  );
};

export default Skills;
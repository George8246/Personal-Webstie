// File: src/components/sections/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaDatabase, 
  FaGit, FaServer, FaUsers, FaHandshake, FaProjectDiagram, FaLock, FaShieldAlt, FaSlideshare,
  FaCogs, FaTools, FaClock, FaTasks, FaWordpress, FaShopify, FaNetworkWired, FaCloudUploadAlt
} from 'react-icons/fa';
import { SiDotnet, SiMysql, SiPostman, SiExpress, SiMongodb, SiBootstrap, SiTailwindcss, SiSqlite,
   SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro
  } from 'react-icons/si';
import { BiLogoJquery, BiLogoFigma } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';
import { RiSecurePaymentFill, RiAdminFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';
import { MdOutlineSecurity } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';

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
    { name: 'React.js', icon: FaReact },
    { name: 'Angular', icon: FaAngular },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'ASP.NET Core', icon: SiDotnet },
    { name: 'REST APIs', icon: TbApi },
  ];

  const databaseSkills = [
    { name: 'SQL Server Management Studio', icon: FaDatabase },
    { name: 'MySQL', icon: SiMysql },
    { name: 'SQLite', icon: SiSqlite },
    { name: 'MongoDB', icon: SiMongodb },
  ];

  const securitySkills = [
    { name: 'Cybersecurity Best Practices', icon: MdOutlineSecurity },
    { name: 'Cryptography & Data Security', icon: FaLock },
    { name: 'Network Vulnerability Assessment', icon: FaNetworkWired },
    { name: 'Web Security', icon: FaShieldAlt },
  ];

  const devOpsSkills = [
    { name: 'Git & GitHub', icon: FaGit },
    { name: 'Internet Information Services (IIS)', icon: FaServer },
    { name: 'CI/CD Workflows', icon: FaCogs },
    { name: 'Hosting & Deployment', icon: FaCloudUploadAlt },
  ];

  const toolsSkills = [
    { name: 'VSCode', icon: VscVscode },
    { name: 'Postman', icon: SiPostman },
    { name: 'Dev Tools', icon: FaTools },
    { name: 'CI/CD Pipelines', icon: FaCogs },
  ];

  const DesignTools = [
    { name: 'Adobe Premiere Pro', icon: SiAdobepremierepro },
    { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
    { name: 'Adobe Illustrator', icon: SiAdobeillustrator },
    { name: 'After Effect', icon: SiAdobeaftereffects }, 
    { name: 'Figma', icon: BiLogoFigma }, 
  ];

  const eCommerceSkills = [
    { name: 'WordPress & WooCommerce', icon: FaWordpress },
    { name: 'Shopify Custom Development', icon: FaShopify },
    { name: 'Payment Gateway Integration', icon: RiSecurePaymentFill },
    { name: 'Admin Panel Development', icon: RiAdminFill },
  ];

  const softSkills = [
    { name: 'Team Management', icon: FaUsers },
    { name: 'Client Communication', icon: FaHandshake },
    { name: 'Project Coordination', icon: FaProjectDiagram },
    { name: 'Agile & Scrum', icon: FaServer },
    { name: 'Mentoring & Knowledge Sharing', icon: FaSlideshare },
    { name: 'Decision-Making Under Pressure', icon: BsPersonWorkspace },
    { name: 'Multi-Tasking', icon: FaTasks },
    { name: 'Deadline Management', icon: FaClock },
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
        <SkillCategory title="Security & Cybersecurity" skills={securitySkills} />
        <SkillCategory title="DevOps & Deployment" skills={devOpsSkills} />
        <SkillCategory title="E-Commerce & Business Solutions" skills={eCommerceSkills} />
        <SkillCategory title="Tools & Technologies" skills={toolsSkills} />
        <SkillCategory title="Design Tools" skills={DesignTools} />
        <SkillCategory title="Soft Skills" skills={softSkills} />
      </div>
    </section>
  );
};

export default Skills;

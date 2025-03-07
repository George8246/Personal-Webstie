import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        bounce: 0.3
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 
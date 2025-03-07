import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';

const Hero = () => {
  return (
    <AnimatedSection className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={slideInLeft}>
            <motion.h1 
              className="text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              Hi, I'm [Your Name]
            </motion.h1>
            <motion.p 
              className="text-xl mb-6"
              variants={fadeInUp}
            >
              Full Stack Developer
            </motion.p>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
            >
              Get In Touch
            </motion.button>
          </motion.div>
          
          <motion.div
            variants={slideInRight}
            className="relative"
          >
            {/* Your hero image or illustration */}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}; 
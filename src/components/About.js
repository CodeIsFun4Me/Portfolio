import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faGears } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="about-container"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p variants={itemVariants}>
              Hello! I'm Timothy Ezenma, a passionate Frontend Developer with a keen eye for creating
              engaging and responsive web applications. I specialize in building user-friendly
              interfaces that provide exceptional user experiences.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              With a strong foundation in modern web technologies, I enjoy turning complex problems 
              into simple, beautiful solutions.
            </motion.p>

            <motion.div className="skills-section" variants={itemVariants}>
              <motion.h3 variants={itemVariants}>Technical Skills</motion.h3>
              <motion.div className="skills-grid" variants={containerVariants}>
                <motion.div className="skill-category" variants={skillVariants}>
                  <FontAwesomeIcon icon={faCode} className="skill-icon" />
                  <h4>Frontend Development</h4>
                  <p>HTML5, CSS3, JavaScript (ES6+), React.js</p>
                </motion.div>
                
                <motion.div className="skill-category" variants={skillVariants}>
                  <FontAwesomeIcon icon={faPalette} className="skill-icon" />
                  <h4>Styling</h4>
                  <p>CSS3, Sass, Styled-Components, Tailwind CSS</p>
                </motion.div>
                
                <motion.div className="skill-category" variants={skillVariants}>
                  <FontAwesomeIcon icon={faGears} className="skill-icon" />
                  <h4>Tools & Others</h4>
                  <p>Git, GitHub, VS Code, npm, Responsive Design</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

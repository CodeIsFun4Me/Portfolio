import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Git', level: 75 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'RESTful APIs', level: 75 }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <p className="skills-intro">
        Here are my primary areas of expertise in web development.
        Each skill represents my confidence and experience level in that particular technology.
      </p>
      
      <motion.div 
        className="skills-grid"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill-item"
            variants={skillVariants}
          >
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <motion.div 
                className="skill-bar"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

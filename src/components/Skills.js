import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faReact, 
  faGit, faNpm, faFigma 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, faMobile, faPalette, 
  faServer, faGears 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skills = [
    { 
      name: 'Frontend Development',
      icon: faCode,
      skills: [
        { name: 'HTML5', level: 90, icon: faHtml5 },
        { name: 'CSS3', level: 85, icon: faCss3Alt },
        { name: 'JavaScript', level: 85, icon: faJs },
        { name: 'React.js', level: 80, icon: faReact }
      ]
    },
    {
      name: 'UI/UX & Design',
      icon: faPalette,
      skills: [
        { name: 'Responsive Design', level: 90, icon: faMobile },
        { name: 'UI Design', level: 80, icon: faFigma },
        { name: 'CSS Frameworks', level: 85, icon: faCss3Alt },
        { name: 'Design Systems', level: 75, icon: faPalette }
      ]
    },
    {
      name: 'Tools & Technologies',
      icon: faGears,
      skills: [
        { name: 'Git', level: 80, icon: faGit },
        { name: 'NPM', level: 75, icon: faNpm },
        { name: 'RESTful APIs', level: 75, icon: faServer },
        { name: 'Development Tools', level: 85, icon: faGears }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: { 
      opacity: 0,
      width: 0
    },
    visible: width => ({
      opacity: 1,
      width: `${width}%`,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="skills-container"
      >
        <motion.h2 variants={categoryVariants}>Skills & Expertise</motion.h2>
        <motion.p className="skills-intro" variants={categoryVariants}>
          Here are my main areas of expertise and the technologies I work with.
        </motion.p>

        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={categoryVariants}
            >
              <div className="category-header">
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <h3>{category.name}</h3>
              </div>
              <div className="skill-bars">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={categoryVariants}
                  >
                    <div className="skill-info">
                      <div className="skill-title">
                        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        custom={skill.level}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

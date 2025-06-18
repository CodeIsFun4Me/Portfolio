import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
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

  const projects = [
    {
      title: "Modern Portfolio Website",
      description: "A responsive portfolio website built with React, featuring smooth animations, dynamic content loading, and modern design principles.",
      tags: ["React", "CSS3", "Responsive Design"],
      image: "/assets/portfolio.jpg",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data, forecasts, and interactive maps using the OpenWeather API.",
      tags: ["React", "API Integration", "JavaScript"],
      image: "/assets/weather.jpg",
      demoLink: "https://github.com/CodeIsFun4Me/weather-dashboard",
      githubLink: "https://github.com/CodeIsFun4Me/weather-dashboard"
    },
    {
      title: "Task Manager",
      description: "A clean and intuitive task management application with features like drag-and-drop, filtering, and local storage persistence.",
      tags: ["React", "Local Storage", "CSS Grid"],
      image: "/assets/task.jpg",
      demoLink: "https://github.com/CodeIsFun4Me/task-manager",
      githubLink: "https://github.com/CodeIsFun4Me/task-manager"
    },
    {
      title: "E-commerce UI",
      description: "A modern e-commerce user interface with product filtering, cart functionality, and responsive design.",
      tags: ["React", "Context API", "Styled Components"],
      image: "/assets/ecommerce.jpg",
      demoLink: "https://github.com/CodeIsFun4Me/ecommerce-ui",
      githubLink: "https://github.com/CodeIsFun4Me/ecommerce-ui"
    }
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="projects-container"
      >
        <motion.h2 variants={cardVariants}>Featured Projects</motion.h2>
        <motion.p className="projects-intro" variants={cardVariants}>
        Here are some of my recent projects that showcase my skills and experience.
        </motion.p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FontAwesomeIcon icon={faChrome} /> Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="tag"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.demoLink}
                  className="project-link"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

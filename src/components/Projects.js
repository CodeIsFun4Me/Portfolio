import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {      title: "Modern Portfolio Website",
      description: "A responsive portfolio website built with React, featuring smooth animations, dynamic content loading, and modern design principles.",
      tags: ["React", "CSS3", "Responsive Design"],
      link: "#"
    },
    {      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data, forecasts, and interactive maps using the OpenWeather API.",
      tags: ["React", "API Integration", "JavaScript"],
      link: "https://github.com/yourusername/weather-dashboard"
    },
    {      title: "Task Manager",
      description: "A clean and intuitive task management application with features like drag-and-drop, filtering, and local storage persistence.",
      tags: ["React", "Local Storage", "CSS Grid"],
      link: "https://github.com/yourusername/task-manager"
    },
    {      title: "E-commerce UI",
      description: "A modern e-commerce user interface with product filtering, cart functionality, and responsive design.",
      tags: ["React", "Context API", "Styled Components"],
      link: "https://github.com/yourusername/ecommerce-ui"
    }
  ];
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <p className="projects-intro">
        Here are some of my recent projects that showcase my skills and experience in web development.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <div className="project-overlay">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

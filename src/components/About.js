import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Timothy Ezenma, a passionate Frontend Developer with a keen eye for creating
            engaging and responsive web applications. I specialize in building user-friendly
            interfaces that provide exceptional user experiences. With a strong foundation in
            modern web technologies, I enjoy turning complex problems into simple, beautiful solutions.
          </p>
          <div className="skills">
            <h3>Technical Skills</h3>
            <ul>
              <li>
                <span className="skill-category">Frontend Development:</span>
                HTML5, CSS3, JavaScript (ES6+), React.js
              </li>
              <li>
                <span className="skill-category">Styling:</span>
                CSS3, Sass, Styled-Components, Tailwind CSS
              </li>
              <li>
                <span className="skill-category">Version Control:</span>
                Git, GitHub
              </li>
              <li>
                <span className="skill-category">Tools & Methods:</span>
                Responsive Design, Chrome DevTools, VS Code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

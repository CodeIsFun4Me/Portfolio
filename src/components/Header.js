import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h1>EZENMA TIMOTHY</h1>
        </div>        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <h2>Frontend Developer</h2>
        <p className="header-subtitle">HTML • CSS • JavaScript • React</p>
        <div className="contact-info">
          <a href="mailto:maxembassy2017@gmail.com" className="contact-link">
            <span>📧</span> maxembassy2017@gmail.com
          </a>
          <a href="tel:+2348062155704" className="contact-link">
            <span>📱</span> +2348062155704
          </a>
          <a 
            href="https://www.linkedin.com/in/timothy-ezenma-159498276" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span>🔗</span> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

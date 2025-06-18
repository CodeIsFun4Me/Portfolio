import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: { scale: 1.1, color: isDarkMode ? '#61dafb' : '#0066cc' }
  };

  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav>
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1>EZENMA TIMOTHY</h1>
        </motion.div>
        <ul className="nav-links">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <motion.li key={item} whileHover="hover" variants={linkVariants}>
              <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }}>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </motion.li>
        </ul>
      </nav>
      <motion.div 
        className="header-content"
        variants={contentVariants}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Frontend Developer
        </motion.h2>
        <motion.p 
          className="header-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          HTML • CSS • JavaScript • React
        </motion.p>
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.a 
            href="mailto:maxembassy2017@gmail.com" 
            className="contact-link"
            whileHover={{ scale: 1.05 }}
          >
            <span>📧</span> maxembassy2017@gmail.com
          </motion.a>
          <motion.a 
            href="tel:+2348062155704" 
            className="contact-link"
            whileHover={{ scale: 1.05 }}
          >
            <span>📱</span> +2348062155704
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/timothy-ezenma-159498276" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
            whileHover={{ scale: 1.05 }}
          >
            <span>🔗</span> LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;

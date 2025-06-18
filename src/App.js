import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <AnimatePresence mode='wait'>
        <div className="app">
          <Header />
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <About />
            <Skills />
            <Projects />
            <Contact />
          </motion.main>
          <Footer />
          <BackToTop />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
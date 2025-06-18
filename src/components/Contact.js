import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhone, faLocationDot,
  faUser, faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

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

  const itemVariants = {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, isSubmitting: true });
    
    try {
      // Here you would typically handle the form submission
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="contact-container"
      >
        <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
        <motion.p className="contact-intro" variants={itemVariants}>
          Feel free to reach out for collaborations or just a friendly hello
        </motion.p>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Contact Information</h3>
            <motion.div className="info-item" variants={itemVariants}>
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <h4>Email</h4>
                <a href="mailto:maxembassy2017@gmail.com">maxembassy2017@gmail.com</a>
              </div>
            </motion.div>

            <motion.div className="info-item" variants={itemVariants}>
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <h4>Phone</h4>
                <a href="tel:+2348062155704">+234 806 215 5704</a>
              </div>
            </motion.div>

            <motion.div className="info-item" variants={itemVariants}>
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                <h4>Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form 
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="message">
                <FontAwesomeIcon icon={faPaperPlane} /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
              />
            </motion.div>

            <motion.button
              type="submit"
              className={`submit-button ${formStatus.isSubmitting ? 'submitting' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                </>
              )}
            </motion.button>

            {formStatus.isSubmitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Message sent successfully!
              </motion.div>
            )}

            {formStatus.error && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {formStatus.error}
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

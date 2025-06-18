import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        I'm always open to new opportunities and collaborations. 
        Feel free to reach out!
      </p>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📧</span>
            <h3>Email</h3>
            <p>maxembassy2017@gmail.com</p>
          </div>
          <div className="contact-item">
            <span className="icon">📱</span>
            <h3>Phone</h3>
            <p>+2348062155704</p>
          </div>
          <div className="contact-item">
            <span className="icon">🔗</span>
            <h3>LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/timothy-ezenma-159498276"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

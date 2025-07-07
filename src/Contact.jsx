// src/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-intro">I'd love to connect! Feel free to reach out via any of the platforms below:</p>

        <div className="contact-info">
          <a href="https://github.com/mithra-tejvarma" target="_blank" rel="noopener noreferrer">
            GitHub:
          </a>
          <a href="https://linkedin.com/in/nandimandalam-mithra-tej-varma-183a21289" target="_blank" rel="noopener noreferrer">
            LinkedIn: 
          </a>
          <a href="tel:+919392651935">Phone: +91 93926 51935</a>
          <a href="mailto:tejvarmamithra@gmail.com">Email: </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

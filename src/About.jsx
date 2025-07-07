// src/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Hi, I'm <strong>Varma</strong>, a passionate and curious tech enthusiast currently pursuing my B.Tech in Computer Science.
          I love transforming ideas into digital reality through clean code, creative design, and smart user experiences.
        </p>
        <p className="about-text">
          Over the past two years, I've been building a solid foundation in web development, data structures, and software engineering principles. 
          I’m skilled in <strong>HTML, CSS, JavaScript, React, Python, and Java</strong>, and always exploring new tech like AI and Data Science.
        </p>
        <p className="about-text">
          I believe in <em>learning by doing</em>. I'm currently working on innovative projects that solve real-world problems. 
          My goal is to create apps that make an impact while being user-friendly and technically sound.
        </p>
        <p className="about-text">
          Beyond coding, I enjoy brainstorming ideas, collaborating with peers, and turning challenges into opportunities.
          I aim to grow as a full-stack developer and build products that truly make a difference.
        </p>
        <p className="about-text">
          Let’s <strong>build</strong> something amazing together! 
        </p>
      </motion.div>
    </section>
  );
};

export default About;

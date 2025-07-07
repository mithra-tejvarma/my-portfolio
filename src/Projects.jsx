// src/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const placeholderProjects = [
  { title: 'Project 1', description: 'Coming Soon...' },
  { title: 'Project 2', description: 'Soon to be Updated' },
  { title: 'Project 3', description: 'Work in Progress...' },
  { title: 'Project 4', description: 'Coming Soon...' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="projects-intro">I’m currently working on some exciting projects! Stay tuned for updates.</p>

        <div className="projects-grid">
          {placeholderProjects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ 
                scale: 1.08,
                rotateX: 1.5,
                rotateY: 1.5,
                boxShadow: '0 15px 25px rgba(0,0,0,0.15)',
                zIndex: 10
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

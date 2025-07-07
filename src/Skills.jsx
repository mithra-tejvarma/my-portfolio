// src/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { category: 'Frontend', list: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'] },
  { category: 'Backend', list: ['Node.js (basic)', 'Express.js (basic)', 'Java (OOP)', 'Python'] },
  { category: 'Database', list: ['MySQL', 'MongoDB (basic)', 'Firebase (basic)'] },
  { category: 'Tools & Platforms', list: ['Git & GitHub', 'VS Code', 'Figma',  'Vercel'] },
  { category: 'Learning & Interests', list: ['Data Structures', 'AI & ML (beginner)', 'Full-Stack Development'] },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="skills-intro">Here are some of the technologies and tools I've worked with during my development journey:</p>
        
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div
              className="skill-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.list.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

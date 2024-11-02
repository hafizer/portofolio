// src/pages/About.jsx
import React from 'react';

const styles = {
  aboutContainer: {
    padding: '20px',
    lineHeight: '1.6',
    color: '#444',
  },
  aboutHeader: {
    fontSize: '24px',
    textAlign: 'center',
  },
  aboutTextContainer: {
    padding: '65px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    backgroundColor: '#fff', // Background color for the box
    color: '#333', // Text color inside the box
    maxWidth: '800px', // Control the width of the box
    margin: '20px auto', // Center the box on the page
  },
  aboutText: {
    fontSize: '16px',
    marginBottom: '20px', // Space between paragraphs
  },
};

const About = () => (
  <div style={styles.aboutContainer}>
    <h2 style={styles.aboutHeader}>About Me</h2>
    <div style={styles.aboutTextContainer}>
      <p style={styles.aboutText}>
        I am currently pursuing a degree in Information Technology at Sari Mulia University, 
        where I have been honing my skills in web development and programming. My educational journey 
        began at SMAN 2 Kandangan, where I majored in Science and graduated in 2022.
      </p>
      <p style={styles.aboutText}>
        Throughout my academic career, I have gained proficiency in various computer applications, 
        including Microsoft Office Suite (Word, Excel, PowerPoint), HTML, CSS, JavaScript, and PHP. 
        Additionally, I am fluent in Indonesian and have a basic understanding of English, which aids 
        my communication in diverse environments.
      </p>
      <p style={styles.aboutText}>
        In addition to my technical skills, I have been an active member of the Information Technology 
        Student Association, serving in the Advocacy Division from January to December 2023. In this 
        role, I participated in work meetings and community service activities, further enhancing my 
        teamwork and leadership capabilities.
      </p>
    </div>
  </div>
);

export default About;

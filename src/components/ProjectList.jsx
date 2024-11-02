import React from 'react';

const styles = {
  projectContainer: {
    display: 'flex', // Change to flex for better control over centering
    justifyContent: 'center', // Center the items horizontally
    flexWrap: 'wrap', // Allow items to wrap to the next line
    gap: '20px',
    padding: '20px',
  },
  projectCard: {
    width: '300px', // Set a fixed width or adjust to your preference
    minWidth: '300px', // Minimum width to maintain the size
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  projectTitle: {
    fontSize: '18px',
    color: '#333',
  },
  projectDescription: {
    fontSize: '14px',
    color: '#555',
  },
};

const ProjectList = () => {
  const projects = [
    {
      title: "Project 1",
      description: "In my third semester, I worked on a group project to create a cosplay costume rental website. We developed a user-friendly platform for browsing and renting costumes, enhancing my teamwork and web development skills."
    },
  ];

  return (
    <div style={styles.projectContainer}>
      {projects.map((project, index) => (
        <div key={index} style={styles.projectCard}>
          <h3 style={styles.projectTitle}>{project.title}</h3>
          <p style={styles.projectDescription}>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

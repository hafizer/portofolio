import React from 'react';
import profilePhoto from '../assets/hafiz.png'; // Make sure the path to the photo is correct

const styles = {
  profileContainer: {
    textAlign: 'center',
    margin: '20px auto',
    maxWidth: '600px',
  },
  profileImage: {
    width: '300px',  // Adjust width as needed
    height: '300px', // Adjust height as needed
    objectFit: 'cover', // Ensures the photo remains proportional
    display: 'block',  // Ensure the image is a block element
    margin: '40px auto 20px',  // Center horizontally and push it down (40px top margin)
  },
  bioText: {
    fontSize: '16px',
    color: '#666',
    marginTop: '10px',
  },
};

const Profile = () => (
  <div style={styles.profileContainer}>
    <img src={profilePhoto} alt="Profile" style={styles.profileImage} />
    <h2>MUHAMMAD HAFIZ RIZANI</h2>
    <p style={styles.bioText}>As an Information Technology student at Sari Mulia University, 
        I have developed a strong passion for website development. With solid communication skills
         and a collaborative spirit, I thrive in team environments. My eagerness to learn and grow 
         drives my dedication to expanding my technical expertise and contributing effectively to projects.</p>
  </div>
);

export default Profile;

// src/pages/Home.jsx
import React from 'react';
import Profile from '../components/Profile';
import ProjectList from '../components/ProjectList';

const Home = () => (
  <div>
    <Profile />
    <h2 style={{ textAlign: 'center', marginTop: '20px' }}>MY PROJECTS</h2>
    <ProjectList />
  </div>
);

export default Home;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

const styles = {
  appContainer: {
    width: '100%',
    maxWidth: '1200px', // Batas lebar agar tidak terlalu lebar di layar besar
    minHeight: '100vh',
    margin: '0 auto',
    padding: '20px',
  },
};

const App = () => (
  <Router>
    <div style={styles.appContainer}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
);

export default App;

// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    padding: '10px 10px',  // Menambahkan padding di atas untuk memberi jarak
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    width: '100%',          // Pastikan navbar memenuhi lebar layar
    zIndex: 1000,
  },
  link: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
  },
};

const Navbar = () => (
  <nav style={styles.navbar}>
    <h2>MY PORTFOLIO</h2>
    <div>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
    </div>
  </nav>
);

export default Navbar;

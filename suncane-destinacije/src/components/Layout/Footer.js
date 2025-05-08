import React from 'react';
import '../../styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} suncanedestinacije. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
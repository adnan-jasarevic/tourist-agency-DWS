import React from 'react';
import '../../styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} suncanedestinacije. Sva prava zadržana.</p>
      </div>
    </footer>
  );
};

export default Footer;
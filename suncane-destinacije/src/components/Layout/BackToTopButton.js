import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top-button${visible ? ' show' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ display: 'block', margin: 'auto' }}>
        <circle cx="14" cy="14" r="13" fill="none"/>
        <path d="M14 20V8M14 8L8 14M14 8L20 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default BackToTopButton;
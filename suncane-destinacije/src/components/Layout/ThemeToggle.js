import React from "react";

const ThemeToggle = ({ theme, setTheme }) => (
  <button
    className="theme-toggle-btn"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    aria-label="Toggle dark/light theme"
  >
    {theme === "dark" ? (
      // Sun SVG
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" fill="#FFD600" />
        <g stroke="#FFD600" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="23" />
          <line x1="1" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
        </g>
      </svg>
    ) : (
      // Moon SVG
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 12.79A9 9 0 0111.21 3a7 7 0 100 14 9 9 0 009.79-4.21z"
          fill="#FFD600"
        />
      </svg>
    )}
  </button>
);

export default ThemeToggle;
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../styles.css';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, setTheme }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          suncanedestinacije
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Početna
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              O Nama
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Kontakt
            </Link>
          </li>
          {user ? (
            <>
              {user.role === 'admin' && (
                <li className="navbar-item">
                  <Link to="/admin" className="navbar-link">
                    Admin
                  </Link>
                </li>
              )}
              <li className="navbar-item">
                <button onClick={handleLogout} className="navbar-link logout-btn">
                  Odjava
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/login" className="navbar-link">
                  Prijavi se
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/register" className="navbar-link">
                  Registracija
                </Link>
              </li>
            </>
          )}
        </ul>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
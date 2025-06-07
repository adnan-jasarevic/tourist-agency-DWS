import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ContactPage from './components/Contact/ContactPage';
import PrivateRoute from './components/Pages/PrivateRoute';
import BackToTopButton from './components/Layout/BackToTopButton';
import './styles.css'

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar theme={theme} setTheme={setTheme} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<PrivateRoute role="admin" />} />
            </Routes>
          </div>
          <BackToTopButton />
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
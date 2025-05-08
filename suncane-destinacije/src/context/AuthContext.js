import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the credentials match the admin user
    if (email === 'admin@app.com' && password === 'admin123') {
      const adminUser = {
        id: 'admin', // Unique ID for the admin
        email: 'admin@app.com',
        role: 'admin'
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      return true;
    }

    // Check for other users in the localStorage
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  const register = (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === userData.email);
    
    if (userExists) {
      return false;
    }
    
    const newUser = {
      ...userData,
      id: Date.now(),
      role: userData.email === 'admin@app.com' && userData.password === 'admin123' ? 'admin' : 'guest'
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../styles.css';

const PrivateRoute = ({ role }) => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ totalUsers: 0, totalMessages: 0 });

  useEffect(() => {
    // Fetch data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Update stats
    setStats({
      totalUsers: users.length,
      totalMessages: messages.length
    });
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <div className="admin-content">
        <h2>Welcome, Admin!</h2>
        <p>This is the admin dashboard with restricted access.</p>
        <div className="admin-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{stats.totalUsers}</p>
          </div>
          <div className="stat-card">
            <h3>Messages</h3>
            <p>{stats.totalMessages}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute;
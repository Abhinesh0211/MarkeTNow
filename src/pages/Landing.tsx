import React from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/tradingviewsignup'); // 👈 this navigates to the login page
  };

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="home-container">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="home-content">
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Yxour Stock Exchanger</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          Your trusted partner for real-time stock updates and market insights.
        </p>
        <div>
          <button className="home-button primary" onClick={handleLogin}>
            Login
          </button>
          <button className="home-button secondary" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

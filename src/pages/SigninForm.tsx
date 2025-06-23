import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

const SigninForm: React.FC = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/');
  };

  return (
    <div className="auth-container">
      <img src="/mnlogo.jpg" alt="TradingView Logo" className="logo" />

      <h2 className="auth-title">Sign in</h2>

      <form className="form-container">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
      </form>

      
      <button className="primary-button signin-btn">Login</button>

      <div className="separator">
        <div className="line" />
        <span>or</span>
        <div className="line" />
      </div>

      <button className="google-button">
        <img src="/google.png" alt="Google Logo" className="google-icon" />
        Sign in with Google
      </button>

      {/* 🔁 Sign Up Link */}
      <p className="switch-text">
        Don’t have an account?{' '}
        <span className="switch-link" onClick={goToSignup}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default SigninForm;

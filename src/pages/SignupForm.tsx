import React from 'react';
import './SignupForm.css';

const SignupForm: React.FC = () => {
  return (
    <div className="signup-container">
      <img src="/logo.png" alt="TradingView Logo" className="logo" />
      <h2 className="signup-title">Sign up</h2>

      <form className="form-container">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
      </form>

      <button className="google-button">
        <img src="/google.png" alt="Google Logo" className="google-icon" />
        Login
      </button>

      <div className="separator">
        <span>or</span>
      </div>

      <button className="email-button">
        {/* <span className="email-icon">📧</span> */}
        Email
      </button>

      <p className="signin-text">
        Already have an account? <span className="signin-link">Sign in</span>
      </p>
    </div>
  );
};

export default SignupForm;

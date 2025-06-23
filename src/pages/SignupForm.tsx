import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? '' : 'Please enter a valid email address.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailError) {
      console.log('Form Submitted:', form);
      alert('Signed up successfully!');
    }
  };

  const goToSignin = () => navigate('/signin');

  return (
    <div className="auth-container">
      <img src="/mnlogo.jpg" alt="TradingView Logo" className="logo" />
      <h2 className="auth-title">Sign up</h2>

      {/* 👇 Username, Email, Password Inputs */}
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="input-field"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={`input-field ${emailError ? 'input-error' : ''}`}
          required
        />
        {emailError && <span className="error-text">{emailError}</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="input-field"
          required
        />

        {/* ✅ Submit Button (Added as requested) */}
        <button type="submit" className="primary-button">
          Submit
        </button>
      </form>

      {/* Google login */}
      <button className="google-button">
        <img src="/google.png" alt="Google Logo" className="google-icon" />
        Login
      </button>

      {/* <div className="separator">
        <div className="line" />
        <span>or</span>
        <div className="line" />
      </div> */}

      {/* Email login (optional) */}
      {/* <button className="email-button">
        <span className="email-icon">📧</span>
        Email
      </button> */}

      <p className="switch-text">
        Already have an account?{' '}
        <span className="switch-link" onClick={goToSignin}>
          Sign in
        </span>
      </p>
    </div>
  );
};

export default SignupForm;

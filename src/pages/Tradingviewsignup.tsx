import React from "react";
import './Tradingviewsignup.css';


import googleLogo from '../assets/google.png';
import facebookLogo from '../assets/facebook.png';
import xLogo from '../assets/x.png';
import yahooLogo from '../assets/yahoo.png';
import appleLogo from '../assets/apple.png';
import linkedinLogo from '../assets/linkedin.png';
import tradingviewLogo from '../assets/tradingview.png';

const providers = [
  {
    name: "Google",
    label: "Login",
    img: googleLogo,
    style: { background: "#fff", color: "#222" }
  },
  {
    name: "Facebook",
    img: facebookLogo,
    style: { background: "#1877f2" }
  },
  {
    name: "X",
    img: xLogo,
    style: { background: "#000" }
  },
  {
    name: "Yahoo",
    img: yahooLogo,
    style: { background: "#6001d2" }
  },
  {
    name: "Apple",
    img: appleLogo,
    style: { background: "#161616" }
  },
  {
    name: "LinkedIn",
    img: linkedinLogo,
    style: { background: "#0a66c2" }
  }
];

export default function TradingViewSignUp() {
  return (
    <div className="tv-bg">
      <div className="tv-container">
        {/* Logo */}
        <div className="tv-logo">
          <img
            src={tradingviewLogo}
            alt="TradingView Logo"
            height={80}
            width={80}
            style={{ borderRadius: 12, marginBottom: 10, objectFit: "contain" }}
          />
        </div>

        {/* Title */}
        <div className="tv-title">Sign up</div>

        {/* Google button */}
        <button className="tv-btn-google" style={providers[0].style}>
          <img src={providers[0].img} alt="Google" style={{ width: 26, height: 26 }} />
          <span>{providers[0].label}</span>
        </button>

        {/* Other providers */}
        <div className="tv-provider-row">
          {providers.slice(1).map((prov) => (
            <button
              key={prov.name}
              className="tv-provider-btn"
              style={prov.style}
              aria-label={`Sign up with ${prov.name}`}
            >
              <img src={prov.img} alt={prov.name} />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="tv-divider-row">
          <hr className="tv-divider" />
          <span className="tv-divider-txt">or</span>
          <hr className="tv-divider" />
        </div>

        {/* Email button */}
        <button className="tv-btn-email">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect width="20" height="14" x="2" y="5" rx="2" fill="none" stroke="currentColor" />
            <path d="M2 7l10 6 10-6" stroke="currentColor" />
          </svg>
          Email
        </button>

        {/* Sign in link */}
        <div className="tv-signin">
          Already have an account? <a href="#">Sign in</a>
        </div>
      </div>
    </div>
  );
}

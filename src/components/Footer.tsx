import React from 'react';
import { Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <h2 className="brand-name">screener</h2>
            <p className="brand-tagline">Stock analysis and screening tool</p>
          </div>
          
          <div className="footer-info">
            <p className="company-info">Mittal Analytics Private Ltd © 2009-2025</p>
            <p className="made-in">Made with ❤️ in India.</p>
          </div>
          
          <div className="footer-legal">
            <p className="data-provider">Data provided by C-MOTS Internet Technologies Pvt Ltd</p>
            <p className="terms">Terms & Privacy.</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h3 className="section-title">Product</h3>
            <ul className="section-links">
              <li><a href="#" className="footer-link">Premium</a></li>
              <li><a href="#" className="footer-link">What's new?</a></li>
              <li><a href="#" className="footer-link">Learn</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Team</h3>
            <ul className="section-links">
              <li><a href="#" className="footer-link">About us</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Theme</h3>
            <ul className="section-links theme-options">
              <li>
                <label className="theme-option">
                  <input type="radio" name="theme" value="light" defaultChecked />
                  <span className="theme-label">☀️ Light</span>
                </label>
              </li>
              <li>
                <label className="theme-option">
                  <input type="radio" name="theme" value="dark" />
                  <span className="theme-label">🌙 Dark</span>
                </label>
              </li>
              <li>
                <label className="theme-option">
                  <input type="radio" name="theme" value="auto" />
                  <span className="theme-label">💻 Auto</span>
                </label>
              </li>
            </ul>
            
            <button className="install-button">
              <Download size={16} />
              INSTALL
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
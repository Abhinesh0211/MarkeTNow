import React from 'react';
import { Search } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <div className="logo-icon">S</div>
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">News</a>
            <a href="#" className="nav-link">Stocks</a>
            <a href="#" className="nav-link active">Currency Exchange</a>
            <a href="#" className="nav-link">Watchlist</a>
          </div>
        </div>
        <div className="nav-right">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <select className="language-select">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
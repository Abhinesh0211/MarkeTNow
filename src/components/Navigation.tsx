import React from 'react';
import { Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <div className="logo-icon">S</div>
          </div>
          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/news" className={`nav-link ${isActive('/news') ? 'active' : ''}`}>News</Link>
            <Link to="/stocks" className={`nav-link ${isActive('/stocks') ? 'active' : ''}`}>Stocks</Link>
            <Link to="/currency-exchange" className={`nav-link ${isActive('/currency-exchange') ? 'active' : ''}`}>Currency Exchange</Link>
            <Link to="/watchlist" className={`nav-link ${isActive('/watchlist') ? 'active' : ''}`}>Watchlist</Link>
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

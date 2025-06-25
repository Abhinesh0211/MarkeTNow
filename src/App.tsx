import React from 'react';
import MarketTicker from './components/MarketTicker';
import CurrencyExchange from './components/CurrencyExchange';
import TimeChart from './components/TimeChart';
import Navbar from './components/Navbar';

import './styles/Dashboard.css';

const App = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <MarketTicker />
      <div className="dashboard-content">
        <CurrencyExchange />
        <TimeChart />
      </div>
    </div>
  );
};

export default App;

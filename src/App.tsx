import React from 'react';
import Navigation from './components/Navigation';
import MarketTicker from './components/MarketTicker';
import CurrencyExchange from './components/CurrencyExchange';
import TimeChart from './components/TimeChart';
import '../styles/dashboard.css';
const Index = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <MarketTicker />
      <div className="dashboard-content">
        <CurrencyExchange />
        <TimeChart />
      </div>
    </div>
  );
};

export default Index;
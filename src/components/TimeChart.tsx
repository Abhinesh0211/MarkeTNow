import React from 'react';
import Navigation from '../components/Navigation';
import MarketTicker from '../components/MarketTicker';
import CurrencyExchange from '../components/CurrencyExchange';
import TimeChart from '../components/TimeChart';
import Footer from '../components/Footer';
import '../styles/dashboard.css';
import '../styles/footer.css';

const Index = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <MarketTicker />
      <div className="dashboard-content">
        <CurrencyExchange />
        <TimeChart />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

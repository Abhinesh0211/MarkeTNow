import React from 'react';
import Navigation from '../components/Navigation';
import StockOverview from '../components/StockOverview';
import StockChart from '../components/StockChart';
import StockCards from '../components/StockCards';
import StockAvailable from '../components/StockAvailable';
import Announcements from '../components/Announcements';
import '../styles/stocks.css';

const Stocks = () => {
  return (
    <div className="stocks-dashboard">
      <Navigation />
      <div className="stocks-content">
        <div className="stocks-left-panel">
          <StockOverview />
        </div>
        <div className="stocks-center-panel">
          <StockChart />
          <StockCards />
        </div>
        <div className="stocks-right-panel">
          <Announcements />
          <StockAvailable />
        </div>
      </div>
    </div>
  );
};

export default Stocks;

import React from 'react';
import ReactDOM from 'react-dom/client';
import MarketTicker from './components/MarketTicker';
import CurrencyExchange from './components/CurrencyExchange';
import TimeChart from './components/TimeChart';
import './styles/Dashboard.css';

const Index = () => {
  return (
    <div className="dashboard">
      <MarketTicker />
      <div className="dashboard-content">
        <div className="currency-exchange">
          <CurrencyExchange />
        </div>
        <div className="time-chart">
          <TimeChart />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Index />);

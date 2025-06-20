// src/pages/Dashboard.tsx
import React from 'react';
import StockSection from '../components/StockSection';
import NewsSection from '../components/NewsSection';
import CurrencyExchange from '../components/CurrencyExchange';

const Dashboard = () => {
  return (
    <div>
      <StockSection />
      <NewsSection />
      <CurrencyExchange />
    </div>
  );
};

export default Dashboard;

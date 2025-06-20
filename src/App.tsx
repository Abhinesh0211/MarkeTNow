import React from 'react';
import TradingViewSignUp from './pages/Tradingviewsignup';
import Header from './components/Header';
import StockSection from './components/StockSection';
import NewsSection from './components/NewsSection';
import CurrencyExchange from './components/CurrencyExchange';
import './styles/Global.css';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <TradingViewSignUp />
        <StockSection />
        <NewsSection />
        <CurrencyExchange />
      </main>
    </div>
  );
}

export default App;

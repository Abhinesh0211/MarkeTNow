import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Interface from './pages/Interface';
import SecondPage from './pages/SecondPage';

import TradingViewSignUp from './pages/Tradingviewsignup';
import Header from './components/Header';
import StockSection from './components/StockSection';
import NewsSection from './components/NewsSection';
import CurrencyExchange from './components/CurrencyExchange';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontFamily: 'Roboto' }}>Hello, Roboto Font!</h1>
      </header>
    </div>
  );
};

export default App;

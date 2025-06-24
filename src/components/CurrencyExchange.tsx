import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

const CurrencyExchange = () => {
  const [fromAmount, setFromAmount] = useState('736.70');
  const [toAmount, setToAmount] = useState('1000.00');
  const [liborRate] = useState('2%');

  const handleSwapCurrencies = () => {
    console.log('Swapping currencies');
    // Swap logic would go here
  };

  return (
    <div className="currency-exchange">
      <div className="exchange-card">
        <div className="amount-section">
          <label className="amount-label">Amount</label>
          <div className="currency-input">
            <div className="currency-flag">
              <span className="flag-emoji">🇺🇸</span>
              <span className="currency-code">USD</span>
            </div>
            <input 
              type="text" 
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="amount-input"
            />
          </div>
        </div>

        <div className="swap-container">
          <button className="swap-button" onClick={handleSwapCurrencies}>
            <ArrowUpDown size={20} />
          </button>
        </div>

        <div className="amount-section">
          <label className="amount-label">Converted Amount</label>
          <div className="currency-input">
            <div className="currency-flag">
              <span className="flag-emoji">🇸🇬</span>
              <span className="currency-code">SGD</span>
            </div>
            <input 
              type="text" 
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="amount-input"
            />
          </div>
        </div>

        <div className="libor-section">
          <label className="libor-label">LIBOR RATE</label>
          <div className="libor-value">{liborRate}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;
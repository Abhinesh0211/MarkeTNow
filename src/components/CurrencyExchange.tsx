import React from 'react';
import '../styles/CurrencyExchange.css';

const CurrencyExchange: React.FC = () => {
  return (
    <section className="currency-exchange">
      <h2>Currency Exchange</h2>
      <div className="currency-cards">
        {[...Array(4)].map((_, i) => (
          <div className="currency-card" key={i}>
            <label>CURRENCY</label>
            <div className="currency-select">
              <span>🇸🇬 SGD</span>
              <span>⇄</span>
              <span>🇺🇸 USD</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrencyExchange;
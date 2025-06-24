import React from 'react';

const MarketTicker = () => {
  const marketData = [
    { symbol: 'IDXESOL', value: '14,139.067,825', change: '+1.55%', isPositive: true },
    { symbol: 'LQ45', value: '946.068', change: '-0.83%', isPositive: false },
    { symbol: 'Composite', value: '6,638.019', change: '+1.2%', isPositive: true },
    { symbol: 'IDX30', value: '534.825', change: '+0.45%', isPositive: true },
    { symbol: 'IDXBX', value: '159.833', change: '-0.12%', isPositive: false },
  ];

  return (
    <div className="market-ticker">
      <div className="ticker-content">
        {marketData.map((item, index) => (
          <div key={index} className="ticker-item">
            <span className="ticker-symbol">{item.symbol}</span>
            <span className="ticker-price">{item.value}</span>
            <span className={`ticker-change ${item.isPositive ? 'positive' : 'negative'}`}>
              {item.change}
            </span>
          </div>
        ))}
        <div className="ticker-item">
          <span className="ticker-symbol">Wednesday, 26 October 2021 | 14:00 WIB</span>
        </div>
      </div>
    </div>
  );
};

export default MarketTicker;
import React from 'react';
import Marquee from 'react-fast-marquee';

const myMarketData = [
  { symbol: 'AAPL', price: 182.34, change: '+1.2%' },
  { symbol: 'TSLA', price: 744.50, change: '-0.9%' },
  { symbol: 'BTC', price: 67100, change: '+3.5%' },
  { symbol: 'ETH', price: 3520.45, change: '+2.1%' },
];

const TickerTapeWidget = () => {
  return (
    <div style={{ background: '#f2f2f2', padding: '10px 0', overflow: 'hidden' }}>
      <Marquee speed={50} gradient={false}>
        {myMarketData.map((item, idx) => (
          <div key={idx} style={{ margin: '0 40px', fontSize: '1.1rem' }}>
            <strong>{item.symbol}</strong>: ${item.price.toFixed(2)} ({item.change})
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TickerTapeWidget;

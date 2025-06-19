import React from 'react';
import TickerWidget from '../components/TickerWidget'; // ✅ Make sure the path is correct

const SecondPage = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>📈 My Market Ticker</h2>
      <TickerWidget />
    </div>
  );
};

export default SecondPage;

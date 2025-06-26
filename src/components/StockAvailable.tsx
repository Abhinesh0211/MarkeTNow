
import React from 'react';

const StockAvailable = () => {
  const stocks = [
    { name: 'Composite', value: '6,638.019', change: '0.33%', isPositive: true },
    { name: 'LQ45', value: '945.068', change: '0.03%', isPositive: true },
    { name: 'IDX30', value: '134.825', change: '0.12%', isPositive: true },
    { name: 'ID80', value: '134.825', change: '0.12%', isPositive: true },
    { name: 'IDX30', value: '134.825', change: '0.55%', isPositive: true },
    { name: 'PIDX', value: '1,811.535', change: '0.37%', isPositive: true },
    { name: 'MBX', value: '1,708.964', change: '0.63%', isPositive: true }
  ];

  return (
    <div className="stock-available">
      <div className="available-header">
        <h3>Stock Available</h3>
        <button className="view-more">View More</button>
      </div>
      
      <div className="available-list">
        {stocks.map((stock, index) => (
          <div key={index} className="available-item">
            <div className="item-info">
              <span className="item-name">{stock.name}</span>
              <span className="item-value">{stock.value}</span>
            </div>
            <span className={`item-change ${stock.isPositive ? 'positive' : 'negative'}`}>
              {stock.change}
            </span>
          </div>
        ))}
      </div>
      
      <div className="date-navigation">
        <span>26 October 2021</span>
        <div className="nav-buttons">
          <button className="nav-btn">‹</button>
          <button className="nav-btn">›</button>
        </div>
      </div>
    </div>
  );
};

export default StockAvailable;
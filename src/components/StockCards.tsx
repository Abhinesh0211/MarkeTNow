import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const StockCards = () => {
  const generateMiniChart = () => {
    return Array.from({ length: 20 }, (_, i) => ({
      value: 100 + Math.random() * 50 + Math.sin(i * 0.3) * 20
    }));
  };

  const stockCards = [
    {
      name: 'Composite',
      value: '0.33%',
      price: '6,651.207',
      color: '#4ade80',
      bgColor: '#059669'
    },
    {
      name: 'LQ45',
      value: '0.03%',
      price: '945.068',
      color: '#ef4444',
      bgColor: '#dc2626'
    },
    {
      name: 'DBX',
      value: '0.53%',
      price: '6,651.207',
      color: '#4ade80',
      bgColor: '#059669'
    }
  ];

  return (
    <div className="stock-cards">
      {stockCards.map((card, index) => (
        <div key={index} className="stock-card" style={{ backgroundColor: card.bgColor }}>
          <div className="card-header">
            <h3 className="card-title">{card.name}</h3>
            <button className="view-detail">View Detail</button>
          </div>
          
          <div className="card-content">
            <div className="card-stats">
              <span className="card-percentage">{card.value}</span>
              <span className="card-price">{card.price}</span>
            </div>
            
            <div className="card-chart">
              <ResponsiveContainer width="100%" height={60}>
                <LineChart data={generateMiniChart()}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={card.color}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StockCards;
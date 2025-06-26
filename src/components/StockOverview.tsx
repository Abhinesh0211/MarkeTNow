import React, { useState } from 'react';

interface Stock {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

const StockOverview = () => {
  const [activeTab, setActiveTab] = useState('Live Feed');
  const [selectedStock, setSelectedStock] = useState('COMPOSITE');

  const stocks: Stock[] = [
    { name: 'COMPOSITE', value: 6651.207, change: 0.53, changePercent: 0.53 },
    { name: 'DBX', value: 6651.207, change: 0.53, changePercent: 0.53 },
    { name: 'MBX', value: 6651.207, change: 0.53, changePercent: 0.53 },
    { name: 'KOMPAS100', value: 6651.207, change: 0.39, changePercent: 0.39 },
    { name: 'INFOBANK15', value: 6651.207, change: 0.42, changePercent: 0.42 },
    { name: 'LQ45', value: 6651.207, change: 0.34, changePercent: 0.34 },
    { name: 'JII', value: 6651.207, change: 0.22, changePercent: 0.22 },
    { name: 'BISNIS27', value: 6651.207, change: 0.89, changePercent: 0.89 },
    { name: 'IDX30', value: 6651.207, change: 0.73, changePercent: 0.73 },
    { name: 'IDXHIDIV20', value: 6651.207, change: 0.91, changePercent: 0.91 }
  ];

  const topStocks = [
    { name: 'Composite', value: 499.866, change: 0.65 },
    { name: 'LQ45', value: 945.068, change: 0.03 },
    { name: 'DBX', value: 6651.207, change: 0.53 }
  ];

  return (
    <div className="stock-overview">
      <div className="overview-header">
        <h2>Stock Overview</h2>
        <div className="overview-tabs">
          <button 
            className={`tab ${activeTab === 'Live Feed' ? 'active' : ''}`}
            onClick={() => setActiveTab('Live Feed')}
          >
            Live Feed
          </button>
          <button 
            className={`tab ${activeTab === 'Historical' ? 'active' : ''}`}
            onClick={() => setActiveTab('Historical')}
          >
            Historical
          </button>
        </div>
      </div>

      <div className="stock-table">
        <div className="table-header">
          <span>Stock Name</span>
          <span>Charge (%)</span>
        </div>
        
        {stocks.map((stock, index) => (
          <div 
            key={index} 
            className={`stock-row ${selectedStock === stock.name ? 'selected' : ''}`}
            onClick={() => setSelectedStock(stock.name)}
          >
            <div className="stock-info">
              <span className="stock-name">{stock.name}</span>
              <span className="stock-value">{stock.value.toFixed(3)}</span>
            </div>
            <span className={`stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
              {stock.changePercent.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="top-stock-section">
        <h3>Top Stock</h3>
        {topStocks.map((stock, index) => (
          <div key={index} className="top-stock-item">
            <div className="top-stock-info">
              <span className="top-stock-name">{stock.name}</span>
              <span className="top-stock-value">{stock.value.toFixed(3)}</span>
            </div>
            <span className={`top-stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
              {stock.change.toFixed(2)}
            </span>
            <button className="view-detail-btn">View Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockOverview;
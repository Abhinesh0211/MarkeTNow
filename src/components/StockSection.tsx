import React from 'react';
import '../styles/StockSection.css';

const stockData = [
  { name: "HRL", value: 940, growth: 10 },
  { name: "MHCL", value: 861.9, growth: -3 },
  { name: "JOSHI", value: 769.9, growth: -2 },
  { name: "NABIL", value: 710, growth: 9 },
  { name: "NGPL", value: 652.5, growth: 4 }
];

const StocksSection: React.FC = () => {
  return (
    <section className="stocks">
      <h2>Stocks</h2>
      <table className="stocks-table">
        <thead>
          <tr>
            <th>Stocks</th>
            <th>Value</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, i) => (
            <tr key={i}>
              <td>{stock.name}</td>
              <td>{stock.value}</td>
              <td className={stock.growth >= 0 ? 'positive' : 'negative'}>
                {stock.growth}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default StocksSection;
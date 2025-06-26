
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface ChartDataPoint {
  time: string;
  value: number;
  volume: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
  label?: string;
}

const StockChart = () => {
  const [timeframe, setTimeframe] = useState('Today');
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const timeframes = ['Today', 'Weeks', 'Month', 'Years'];

  useEffect(() => {
    const generateChartData = (): ChartDataPoint[] => {
      const data: ChartDataPoint[] = [];
      const baseValue = 6600;
      
      for (let i = 0; i < 100; i++) {
        const time = 10 + (i * 6) / 100; // From 10:00 to 16:00
        data.push({
          time: time.toFixed(2),
          value: baseValue + Math.random() * 100 + Math.sin(i * 0.1) * 50,
          volume: Math.random() * 1000000
        });
      }
      return data;
    };

    setChartData(generateChartData());
  }, [timeframe]);

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="tooltip-label">{`Time: ${label}`}</p>
          <p className="tooltip-value">{`Value: ${payload[0].value.toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="stock-chart-container">
      <div className="chart-controls">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="chart-search"
          />
          <button className="search-btn">🔍</button>
        </div>
        
        <div className="date-display">26 October 2021</div>
        <button className="view-more-btn">View More</button>
      </div>

      <div className="timeframe-buttons">
        {timeframes.map((tf) => (
          <button
            key={tf}
            className={`timeframe-btn ${timeframe === tf ? 'active' : ''}`}
            onClick={() => setTimeframe(tf)}
          >
            {tf}
          </button>
        ))}
      </div>

      <div className="current-stock-info">
        <span className="stock-symbol">COMPOSITE</span>
        <span className="stock-price">6,651.207</span>
        <span className="stock-change positive">0.53</span>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#888', fontSize: 12 }}
            />
            <YAxis 
              domain={['dataMin - 10', 'dataMax + 10']}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#888', fontSize: 12 }}
              orientation="right"
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#4ade80"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#4ade80' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockChart;
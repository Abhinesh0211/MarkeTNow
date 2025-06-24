import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

// Define the structure of chart data
type ChartDataPoint = {
  time: number;
  value: number;
};

const TimeChart: React.FC = () => {
  const [activeTimeframe, setActiveTimeframe] = useState<string>('1M');
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const timeframes: string[] = ['4×H', '1W', '1M', '6M', '12M', '5Y'];

  // Generate mock chart data
  useEffect(() => {
    const generateData = (): ChartDataPoint[] => {
      const data: ChartDataPoint[] = [];
      const baseValue = 1650;

      for (let i = 0; i < 50; i++) {
        data.push({
          time: i,
          value: baseValue + Math.random() * 100 - 50 + Math.sin(i * 0.1) * 30,
        });
      }

      return data;
    };

    setChartData(generateData());

    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTimeframe]);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="time-chart">
      <div className="chart-header">
        <h2 className="chart-title">Time Chart</h2>
      </div>

      <div className="chart-container" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
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
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00ff88"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#00ff88' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-footer">
        <div className="update-status">
          Updated {formatTime(lastUpdate)}
        </div>
        <div className="timeframe-buttons">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              className={`timeframe-btn ${
                activeTimeframe === timeframe ? 'active' : ''
              }`}
              onClick={() => setActiveTimeframe(timeframe)}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeChart;

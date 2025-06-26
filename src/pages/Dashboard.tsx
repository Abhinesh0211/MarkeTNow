import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import TickerWidget from '../components/TickerWidget'; // ✅ Adjust path if needed

const DashboardPage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        p: 6, // Remove outer padding for full-width ticker
      }}
    >
      {/* ✅ Ticker widget at top below Navbar */}
      <TickerWidget />

      {/* Main Content Box with padding */}
      <Box sx={{ p: { xs: 2, sm: 4 } }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} flexWrap="wrap">
          <Typography variant="h4" fontWeight={700} mb={1}>
            Market Overview
          </Typography>
        </Box>

        <Typography variant="subtitle1" color="gray" mb={4}>
          Real-time market data and insights
        </Typography>

        {/* Summary Cards */}
        <Box display="flex" flexWrap="wrap" gap={2} mb={3}>
          {[
            {
              title: 'Active Stocks',
              value: '2,845',
              note: '+12% from yesterday',
              color: 'green',
            },
            {
              title: 'Currency Pairs',
              value: '168',
              note: 'Live rates available',
              color: 'gray',
            },
            {
              title: 'News Updates',
              value: '47',
              note: 'New today',
              color: 'green',
            },
          ].map((item, index) => (
            <Box key={index} flex="1 1 300px" maxWidth="100%">
              <Card sx={{ borderRadius: 2, backgroundColor: '#1e1e1e', color: 'white' }}>
                <CardContent>
                  <Typography variant="subtitle2">{item.title}</Typography>
                  <Typography variant="h5">{item.value}</Typography>
                  <Typography color={item.color}>{item.note}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Top Stocks and Currency Rates */}
        <Box display="flex" flexWrap="wrap" gap={2} mb={3}>
          {/* Top Stocks */}
          <Box flex="1 1 500px" maxWidth="100%">
            <Card sx={{ borderRadius: 2, backgroundColor: '#1e1e1e', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Top Stocks</Typography>
                <Typography variant="body2" color="gray" gutterBottom>
                  Most active stocks today
                </Typography>
                {[
                  { name: 'AAPL', price: '$192.34', change: '+2.15%', company: 'Apple Inc.' },
                  { name: 'MSFT', price: '$415.26', change: '+1.23%', company: 'Microsoft Corp.' },
                  { name: 'GOOGL', price: '$139.67', change: '-0.45%', company: 'Alphabet Inc.' },
                  { name: 'TSLA', price: '$248.91', change: '+3.21%', company: 'Tesla Inc.' },
                ].map(stock => (
                  <Box key={stock.name} display="flex" justifyContent="space-between" my={1}>
                    <Box>
                      <Typography fontWeight={600}>{stock.name}</Typography>
                      <Typography variant="caption" color="gray">{stock.company}</Typography>
                    </Box>
                    <Box textAlign="right">
                      <Typography>{stock.price}</Typography>
                      <Typography color={stock.change.startsWith('+') ? 'green' : 'error'}>
                        {stock.change}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Box>

          {/* Currency Rates */}
          <Box flex="1 1 500px" maxWidth="100%">
            <Card sx={{ borderRadius: 2, backgroundColor: '#1e1e1e', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Currency Rates</Typography>
                <Typography variant="body2" color="gray" gutterBottom>
                  Live exchange rates
                </Typography>
                {[
                  { pair: 'EUR/USD', rate: '1.0934', change: '+0.0023' },
                  { pair: 'GBP/USD', rate: '1.2678', change: '-0.0045' },
                  { pair: 'USD/JPY', rate: '149.23', change: '+0.67' },
                  { pair: 'AUD/USD', rate: '0.6721', change: '+0.0012' },
                ].map(rate => (
                  <Box key={rate.pair} display="flex" justifyContent="space-between" my={1}>
                    <Typography>{rate.pair}</Typography>
                    <Box textAlign="right">
                      <Typography>{rate.rate}</Typography>
                      <Typography color={rate.change.startsWith('+') ? 'green' : 'error'}>
                        {rate.change}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Latest News */}
        <Card sx={{ borderRadius: 2, backgroundColor: '#1e1e1e', color: 'white' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Latest Financial News</Typography>
            <Typography variant="body2" color="gray" gutterBottom>
              Breaking news and market updates
            </Typography>
            {[
              { title: 'Federal Reserve Signals Potential Rate Cut in Q3', source: 'Reuters', time: '2 hours ago' },
              { title: 'Tech Stocks Rally on AI Investment Surge', source: 'Financial Times', time: '4 hours ago' },
              { title: 'Oil Prices Rise Amid Middle East Tensions', source: 'Bloomberg', time: '6 hours ago' },
            ].map(news => (
              <Box key={news.title} mb={2}>
                <Typography fontWeight={600}>{news.title}</Typography>
                <Typography variant="caption" color="gray">
                  {news.source} • {news.time}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DashboardPage;

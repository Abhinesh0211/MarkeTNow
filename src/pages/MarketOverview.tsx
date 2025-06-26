// src/components/MarketOverviewCard.tsx
import React from 'react';
import { Box, Card, CardContent, Typography, Divider } from '@mui/material';

const MarketOverviewCard: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Top Row Cards */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 2,
          marginBottom: 4,
        }}
      >
        {/* Card 1 - Left */}
        <Card elevation={3} sx={{ borderRadius: 2, width: 300 }}>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="subtitle2">Active Stocks</Typography>
              <Typography variant="h6">
                2,845 <Box component="span" color="green">+12%</Box>
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Card 2 - Center */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Card elevation={3} sx={{ borderRadius: 2, width: 300 }}>
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Typography variant="subtitle2">Currency Pairs</Typography>
                <Typography variant="h6">
                  168 <Box component="span" color="text.secondary">Live rates</Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Card 3 - Right */}
        <Card elevation={3} sx={{ borderRadius: 2, width: 300 }}>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="subtitle2">News Updates</Typography>
              <Typography variant="h6">
                47 <Box component="span" color="green">New today</Box>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Bottom Row Cards */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
          marginBottom: 4,
        }}
      >
        {/* Card 4 */}
        <Card elevation={3} sx={{ borderRadius: 2, width: 400, height: 380 }}>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="subtitle2">Top Gainers</Typography>
              <Typography variant="body2">AAPL +3.2%</Typography>
              <Typography variant="body2">NVDA +2.7%</Typography>
              <Typography variant="body2">MSFT +2.4%</Typography>
              <Typography variant="body2">AMZN +1.9%</Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Card 5 */}
        <Card elevation={3} sx={{ borderRadius: 2, width: 400, height: 380 }}>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="subtitle2">Top Losers</Typography>
              <Typography variant="body2">TSLA -4.1%</Typography>
              <Typography variant="body2">META -3.5%</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Financial News Card */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card elevation={3} sx={{ borderRadius: 3, width: '100%', maxWidth: 850, bgcolor: '#f9f9f9', padding: 1 }}>
          <CardContent>
            <Typography variant="h6" color="primary" gutterBottom>
              📢 Latest Financial News
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <li>
                <Typography variant="body2">
                  Federal Reserve signals potential interest rate hikes later this year.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Tech stocks rebound after market dip.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Oil prices edge up as supply concerns grow.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Inflation data to be released next week could shift investor sentiment.
                </Typography>
              </li>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default MarketOverviewCard;

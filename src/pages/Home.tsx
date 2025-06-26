// src/pages/Interface.tsx
import React from 'react';
import {
  Box, Typography
} from '@mui/material';


const Home: React.FC = () => {
  return (
    <div>
    <Box sx={{
      backgroundImage: 'url(/)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff'
    }}>
      <Box sx={{
        p: 5,
        mt: 18,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textShadow: '1px 1px 2px black' }}>
          "Navigate the market with confidence."
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: '600px', mt: 2, textShadow: '1px 1px 2px black' }}>
          Your one-stop portal for live stock prices, currency updates, and global news.
        </Typography>
      </Box>

    </Box>
    </div>
  );
};

export default Home;

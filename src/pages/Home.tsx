import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Home: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        pt: '64px', // space for navbar
        boxSizing: 'border-box',
        backgroundColor: '#000', // fallback dark background
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundImage:
            'url(https://www.shutterstock.com/image-vector/abstract-infographic-visualization-financial-chart-600nw-2379175105.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 2,
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start', // align to top
          height: '100%',
          textAlign: 'center',
          px: 2,
          color: '#fff',
        }}
      >
        <Box sx={{ mt: { xs: 10, sm: 15, md: 20 } }}>
          <Typography
            variant={isSmall ? 'h4' : 'h2'}
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            }}
          >
            Navigate the market with confidence.
          </Typography>
          <Typography
            variant={isSmall ? 'body1' : 'h6'}
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Your one-stop portal for live stock prices, currency updates, and global news.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

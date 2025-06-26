import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CssBaseline,
  Box,
} from '@mui/material';
import Marquee from 'react-fast-marquee';

const cardSections = [
  {
    title: 'Finance',
    text: 'The stock market saw a major rise in tech shares today.',
    image: 'https://source.unsplash.com/random/400x200?finance',
  },
  {
    title: 'Shares',
    text: 'Companies like Apple and Microsoft gained significant value.',
    image: 'https://source.unsplash.com/random/400x200?stocks',
  },
  {
    title: 'Loss',
    text: 'Energy sectors faced losses due to falling oil prices.',
    image: 'https://source.unsplash.com/random/400x200?oil',
  },
  {
    title: 'Hike',
    text: 'Interest rates are expected to rise by the next quarter.',
    image: 'https://source.unsplash.com/random/400x200?economy',
  },
];

function Category() {
  return (
    <Box sx={{ mt: 0, backgroundColor: '#121212', py: 4 }}>
      <CssBaseline />
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'white' }}
      >
        LATEST NEWS
      </Typography>

      {/* Horizontal scrolling cards using Marquee */}
      <Marquee speed={40} gradient={false} pauseOnHover>
        {cardSections.map((section, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              mx: 2,
              borderRadius: 3,
              backgroundColor: '#1e1e1e',
              color: 'white',
              boxShadow: 5,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={section.image}
                alt={section.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ fontWeight: 600, color: 'primary.main' }}
                >
                  {section.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  {section.text}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Marquee>
    </Box>
  );
}

export default Category;

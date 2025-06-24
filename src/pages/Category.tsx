import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Container,
  CssBaseline,
  Box,
} from '@mui/material';

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
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        NEWS CATEGORY
      </Typography>

      {/* Use Box with flexbox for layout */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          mt: 4,
        }}
      >
        {cardSections.map((section, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 100%',
              maxWidth: '100%',
              '@media (min-width:600px)': {
                flex: '1 1 45%',
                maxWidth: '45%',
              },
              '@media (min-width:960px)': {
                flex: '1 1 22%',
                maxWidth: '22%',
              },
            }}
          >
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: 4,
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
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {section.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Category;
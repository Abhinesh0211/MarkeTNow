import React from 'react';
import TickerWidget from '../components/TickerWidget';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
  Chip,
} from '@mui/material';

// ✅ Define props for the reusable CardItem
interface CardItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  author: string;
  time: string;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  category,
  description,
  image,
  author,
  time,
}) => {
  return (
    <Card
      sx={{
        flex: '1 1 100%',
        maxWidth: '100%',
        borderRadius: 3,
        boxShadow: 3,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        '@media (min-width:600px)': {
          flex: '1 1 48%',
        },
        '@media (min-width:900px)': {
          flex: '1 1 30%',
        },
      }}
    >
      <CardMedia sx={{ height: 180 }} image={image} title={title} />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Chip label={category} color="primary" size="small" />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar alt={author} src="/profile.png" sx={{ width: 24, height: 24 }} />
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            {time}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Read Now</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

// ✅ Define news data type
interface NewsItem extends CardItemProps {
  id: number;
}

// ✅ Main component
const SecondPage: React.FC = () => {
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: 'Stock Market Hits Record High',
      category: 'Finance',
      description:
        'The stock market surged to a new high today, driven by strong earnings reports from major tech companies.',
      image: '/static/images/cards/contemplative-reptile.jpg',
      author: 'Jane Doe',
      time: '10:30 AM, June 20, 2025',
    },
    {
      id: 2,
      title: 'Cryptocurrency Update: Bitcoin Climbs',
      category: 'Crypto',
      description:
        'Bitcoin prices saw a significant increase amid renewed interest from institutional investors.',
      image: '/static/images/cards/another-image.jpg',
      author: 'John Smith',
      time: '09:15 AM, June 20, 2025',
    },
    {
      id: 3,
      title: 'Oil Prices Drop Amid Global Tensions',
      category: 'Energy',
      description:
        'Global tensions caused fluctuations in oil prices, raising concerns in the energy sector.',
      image: '/static/images/cards/contemplative-reptile.jpg',
      author: 'Alice Johnson',
      time: '08:00 AM, June 20, 2025',
    },
    {
      id: 4,
      title: 'Tech Stocks Lead Recovery',
      category: 'Technology',
      description:
        'Leading tech firms bounced back after recent losses, pushing the index upward.',
      image: '/static/images/cards/tech-image.jpg',
      author: 'Michael Clark',
      time: '07:45 AM, June 20, 2025',
    },
    {
      id: 5,
      title: 'Investors Turn to Green Energy',
      category: 'Environment',
      description:
        'More investors are shifting toward renewable energy options as climate concerns rise.',
      image: '/static/images/cards/contemplative-reptile.jpg',
      author: 'Emma Green',
      time: '07:30 AM, June 20, 2025',
    },
    {
      id: 6,
      title: 'Global Markets React to Policy Changes',
      category: 'Global',
      description:
        'New trade policies introduced by the government are impacting global market dynamics.',
      image: '/static/images/cards/another-image.jpg',
      author: 'Liam Brown',
      time: '07:00 AM, June 20, 2025',
    },
  ];

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        📈 My Market Ticker
      </Typography>
      <TickerWidget />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
          px: 2,
          py: 4,
        }}
      >
        {newsData.map((news) => (
          <CardItem key={news.id} {...news} />
        ))}
      </Box>
    </div>
  );
};

export default SecondPage;

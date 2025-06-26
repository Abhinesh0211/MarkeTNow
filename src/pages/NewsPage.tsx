import React from 'react';
import { Box } from '@mui/material';
import CardItem from '../components/CardItem'; // Adjust the path if needed

// ✅ News item type
export interface NewsItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  author: string;
  time: string;
}

const NewsPage: React.FC = () => {
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: 'Stock Market Hits Record High',
      category: 'Finance',
      description: 'The stock market surged to a new high today, driven by strong earnings reports.',
      image: 'https://source.unsplash.com/featured/?finance,stock',
      author: 'Jane Doe',
      time: '10:30 AM, June 20, 2025',
    },
    {
      id: 2,
      title: 'Bitcoin Climbs Again',
      category: 'Crypto',
      description: 'Bitcoin prices rose sharply after positive market sentiment.',
      image: 'https://source.unsplash.com/featured/?crypto,bitcoin',
      author: 'John Smith',
      time: '09:15 AM, June 20, 2025',
    },
    {
      id: 3,
      title: 'Oil Prices Drop',
      category: 'Energy',
      description: 'Oil prices fell due to geopolitical uncertainty.',
      image: 'https://source.unsplash.com/featured/?oil,energy',
      author: 'Alice Johnson',
      time: '08:00 AM, June 20, 2025',
    },
    {
      id: 4,
      title: 'Green Energy Booms',
      category: 'Environment',
      description: 'Investors are turning to renewable energy as climate concerns grow.',
      image: 'https://source.unsplash.com/featured/?green,renewable',
      author: 'Emma Green',
      time: '07:30 AM, June 20, 2025',
    },
    {
      id: 5,
      title: 'Tech Stocks Lead Recovery',
      category: 'Technology',
      description: 'Tech firms bounced back after recent losses, pushing indices upward.',
      image: 'https://source.unsplash.com/featured/?technology,stocks',
      author: 'Michael Clark',
      time: '07:00 AM, June 20, 2025',
    },
    {
      id: 6,
      title: 'Global Markets React to Policy',
      category: 'Global',
      description: 'New trade policies introduced by the government impact global markets.',
      image: 'https://source.unsplash.com/featured/?global,market',
      author: 'Liam Brown',
      time: '06:30 AM, June 20, 2025',
    },
  ];

  return (
    <Box
      sx={{
        pt: '80px',
        backgroundColor: 'black',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 3,
        px: 2,
        pb: 4,
      }}
    >
      {newsData.map((news) => (
        <CardItem key={news.id} {...news} />
      ))}
    </Box>
  );
};

export default NewsPage;

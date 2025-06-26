import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromWishlist, NewsItem } from '../redux/wishlistSlice';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  CardMedia,
} from '@mui/material';

const Wishlist: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <Box sx={{ padding: 4, backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Wishlist
      </Typography>

      {wishlist.length === 0 ? (
        <Typography>No items in wishlist.</Typography>
      ) : (
        wishlist.map((newsItem: NewsItem) => (
          <Card
            key={newsItem.id}
            sx={{ backgroundColor: '#1e1e1e', marginBottom: 2, color: 'white' }}
          >
            {newsItem.image && (
              <CardMedia
                component="img"
                height="140"
                image={newsItem.image}
                alt={newsItem.title}
              />
            )}
            <CardContent>
              <Typography variant="h6">{newsItem.title}</Typography>
              <Typography variant="body2">{newsItem.description}</Typography>
              <Button
                sx={{ color: '#f87171', marginTop: 1 }}
                onClick={() => dispatch(removeFromWishlist(newsItem.id))}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Wishlist;

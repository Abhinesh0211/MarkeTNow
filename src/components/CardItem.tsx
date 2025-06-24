import React from 'react';
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
  IconButton
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';
import { RootState } from '../redux/store';

interface CardItemProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  author: string;
  time: string;
}

interface WishlistItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  author: string;
  time: string;
}

const CardItem: React.FC<CardItemProps> = ({
  id,
  title,
  category,
  description,
  image,
  author,
  time,
}) => {
  const dispatch = useDispatch();

  const isWishlisted = useSelector((state: RootState) =>
    state.wishlist.items.some((item: WishlistItem) => item.id === id)
  );

  const handleWishlistToggle = () => {
    console.log("Toggling wishlist for:", title);
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist({ id, title, category, description, image, author, time }));
    }
  };

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
          <Typography variant="h6" sx={{ fontWeight: 600, maxWidth: '70%' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Chip label={category} color="primary" size="small" />
            <IconButton
              onClick={handleWishlistToggle}
              size="small"
              sx={{ p: 0 }}
              aria-label="wishlist"
            >
              {isWishlisted ? (
                <FavoriteIcon sx={{ fontSize: 18, color: 'red' }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: 18, color: 'red' }} />
              )}
            </IconButton>
          </Box>
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

export default CardItem;
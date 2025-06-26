import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist, NewsItem } from '../redux/wishlistSlice';
import { RootState } from '../redux/store';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toast } from 'react-toastify';
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

interface CardItemProps extends Omit<NewsItem, 'id'> {
  id: number;
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

  // ✅ Get wishlist from Redux
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isFavorite = wishlist.some((item) => item.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(
        addToWishlist({
          id,
          title,
          category,
          description,
          image,
          author,
          time,
        })
      );
      toast.success('Added to wishlist');
    }
  };

  return (
    <Card
      sx={{
        flex: '1 1 100%',
        maxWidth: '100%',
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: '#1e1e1e',
        color: 'white',
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
              onClick={handleToggleFavorite}
              size="small"
              sx={{ p: 0 }}
              aria-label="favorite"
            >
              {isFavorite ? (
                <FavoriteIcon sx={{ fontSize: 18, color: 'red' }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: 18, color: 'red' }} />
              )}
            </IconButton>
          </Box>
        </Box>

        <Typography variant="body2" color="gray" sx={{ mb: 2 }}>
          {description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar alt={author} src="/profile.png" sx={{ width: 24, height: 24 }} />
            <Typography variant="body2" color="gray">
              {author}
            </Typography>
          </Box>
          <Typography variant="caption" color="gray">
            {time}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button size="small" sx={{ color: '#90caf9' }}>
          Read Now
        </Button>
        <Button size="small" sx={{ color: '#90caf9' }}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;

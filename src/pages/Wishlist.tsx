// src/pages/Wishlist.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CardItem from '../components/CardItem';

const Wishlist: React.FC = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
 console.log('Wishlist items:', wishlistItems);
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>My Wishlist ❤️</h2>

      {wishlistItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No items in your wishlist.</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {wishlistItems.map((item) => (
            <CardItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

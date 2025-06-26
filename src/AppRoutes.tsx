// src/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import TradingViewSignUp from './pages/Tradingviewsignup';
import NewsPage from './pages/NewsPage';
import Wishlist from './pages/Wishlist';
import Category from './pages/Category';
import UserLayout from './layouts/UserLayout';
import MarketOverviewCard from './pages/MarketOverview'; 
// ✅ Correct




const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<UserLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="marketoverviewcard" element={<MarketOverviewCard />} /> {/* ✅ this renders your card */}
        <Route path="tradingviewsignup" element={<TradingViewSignUp />} />
        <Route path="newspage" element={<NewsPage />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="category" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

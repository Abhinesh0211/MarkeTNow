// src/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import Wishlist from './pages/Wishlist';
import Category from './pages/Category';
import UserLayout from './layouts/UserLayout';
import MarketOverviewCard from './pages/MarketOverview'; 
import SigninForm from './pages/SigninForm';
import SignupForm from './pages/SignupForm';
// ✅ Correct




const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<SignupForm />} />

      <Route element={<UserLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="marketoverviewcard" element={<MarketOverviewCard />} />
        <Route path="newspage" element={<NewsPage />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="category" element={<Category />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;

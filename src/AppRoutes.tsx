// src/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import TradingViewSignUp from './pages/Tradingviewsignup';
import NewsPage from './pages/NewsPage';
import Wishlist from './pages/Wishlist';
import Category from './pages/Category';
import Dashboard from './pages/Dashboard';
import UserLayout from './layouts/UserLayout';
import Footer from './components/Footer';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public landing page with optional footer */}
      <Route path="/" element={
        <>
          <Landing />
          <Footer />
        </>
      } />

      {/* Internal pages with shared layout (includes its own footer) */}
      <Route element={<UserLayout />}>
        <Route
          path="home"
          element={
            <>
              <Home />
              <Category /> {/* Optional: consider moving this into Home if it's not a separate page */}
            </>
          }
        />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tradingviewsignup" element={<TradingViewSignUp />} />
        <Route path="newspage" element={<NewsPage />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="category" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

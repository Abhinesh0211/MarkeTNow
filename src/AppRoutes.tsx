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
import { CurrencyExchange, Dashboard } from '@mui/icons-material';
import Footer from './components/Footer';
import Stocks from './pages/Stocks';
// ✅ Correct




const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
        <Landing />
        <Footer/>
        </>
        } />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<SignupForm />} />

      <Route element={<UserLayout />}>
        <Route 
        path="home"
         element={
         <>
         < Home />
         <Category />
         </>
         }
        /> 
        <Route path="currencies" element ={<CurrencyExchange/>}/>
        <Route path="stocks" element ={<Stocks/>}/>
        <Route path="marketoverviewcard" element={<MarketOverviewCard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="newspage" element={<NewsPage />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="category" element={<Category />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;

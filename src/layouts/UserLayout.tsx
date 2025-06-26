// src/layouts/UserLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // or your actual layout components

const UserLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '16px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;

// src/layouts/MainLayout.tsx
import React from 'react';
import Header from '../components/NavBar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode; // Khai báo kiểu cho children
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
      <div>
          <Header />
          <main>{children}</main>
          <Footer />
      </div>
  );
};

export default MainLayout;
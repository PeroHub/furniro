'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ShoppingCartDrawer from '@/components/cart/ShoppingCartDrawer';
import Toast from '@/components/ui/Toast';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export default function MainLayout({ children, currentPath = '/' }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <Header currentPath={currentPath} />
      <main className="flex-1">{children}</main>
      <Footer />
      <ShoppingCartDrawer />
      <Toast />
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import FeatureBar from '@/components/shop/FeatureBar';
import { Home, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <MainLayout currentPath="/404">
      <div className="min-h-[70vh] bg-white flex flex-col justify-between font-['Poppins',sans-serif]">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center flex-1 flex flex-col items-center justify-center">
          <span className="text-sm font-semibold tracking-widest text-[#B88E2F] uppercase mb-3">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#3A3A3A] tracking-tight mb-4 font-['Montserrat',sans-serif]">
            Page Not Found
          </h1>
          <p className="text-base text-[#898989] max-w-lg mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B88E2F] text-white text-sm font-semibold rounded-xs hover:bg-[#9E7A26] transition-colors shadow-xs"
            >
              <Home className="w-4 h-4" />
              <span>Back To Home</span>
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#B88E2F] text-[#B88E2F] text-sm font-semibold rounded-xs hover:bg-[#B88E2F] hover:text-white transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore Shop</span>
            </Link>
          </div>
        </div>
        <FeatureBar />
      </div>
    </MainLayout>
  );
}

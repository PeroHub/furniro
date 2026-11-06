'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroBanner from '@/components/home/HeroBanner';
import BrowseRange from '@/components/home/BrowseRange';
import ProductGrid from '@/components/home/ProductGrid';
import InspirationSection from '@/components/home/InspirationSection';
import ShareSetupGallery from '@/components/home/ShareSetupGallery';
import ProductDetailsView from '@/components/product/ProductDetailsView';
import { useStore } from '@/context/StoreContext';
import { ShoppingBag, Eye } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [viewMode, setViewMode] = useState<'home' | 'asgaard-pdp'>('home');
  const { openCart, cartCount } = useStore();

  return (
    <MainLayout currentPath={viewMode === 'home' ? '/' : '#shop'}>
      {/* Quick Preview Switcher Banner */}
      <div className="bg-[#FFF9F3] border-b border-[#D9D9D9]/60 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-black uppercase tracking-wider text-[11px]">
              Page View:
            </span>
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[#D9D9D9]">
              <button
                onClick={() => setViewMode('home')}
                className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                  viewMode === 'home'
                    ? 'bg-[#B88E2F] text-white shadow-xs'
                    : 'text-[#666666] hover:text-black'
                }`}
              >
                Full Home Landing Page
              </button>
              <Link
                href="/shop"
                className="px-3.5 py-1 rounded-full font-medium transition-all text-[#666666] hover:text-black hover:bg-neutral-100"
              >
                Shop Catalog Page
              </Link>
              <button
                onClick={() => {
                  setViewMode('asgaard-pdp');
                  openCart();
                }}
                className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                  viewMode === 'asgaard-pdp'
                    ? 'bg-[#B88E2F] text-white shadow-xs'
                    : 'text-[#666666] hover:text-black'
                }`}
              >
                Product Details + Cart Drawer
              </button>
            </div>
          </div>

          <button
            onClick={openCart}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-black text-white hover:bg-[#B88E2F] rounded-full font-medium transition-colors cursor-pointer text-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Open Cart ({cartCount})</span>
          </button>
        </div>
      </div>

      {viewMode === 'home' ? (
        <>
          {/* 1. Hero Section with Warm Cream Card */}
          <HeroBanner />

          {/* 2. "Browse The Range" Section (Dining, Living, Bedroom) */}
          <BrowseRange onSelectCategory={(cat) => setSelectedCategory(cat)} />

          {/* 3. "Our Products" Section (4x2 grid of 8 products with hover overlays) */}
          <ProductGrid 
            selectedCategory={selectedCategory}
            onClearCategory={() => setSelectedCategory(undefined)}
          />

          {/* 4. "50+ Beautiful rooms inspiration" Slider Section */}
          <InspirationSection />

          {/* 5. "#FuniroFurniture" Social Gallery Section */}
          <ShareSetupGallery />
        </>
      ) : (
        /* Asgaard Sofa PDP with Cart Drawer overlay */
        <ProductDetailsView />
      )}
    </MainLayout>
  );
}

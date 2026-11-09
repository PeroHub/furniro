'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroBanner from '@/components/home/HeroBanner';
import BrowseRange from '@/components/home/BrowseRange';
import ProductGrid from '@/components/home/ProductGrid';
import InspirationSection from '@/components/home/InspirationSection';
import ShareSetupGallery from '@/components/home/ShareSetupGallery';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  return (
    <MainLayout currentPath="/">
      {/* 1. Hero Section with Warm Cream Card */}
      <HeroBanner />

      {/* 2. "Browse The Range" Section (Dining, Living, Bedroom) */}
      <BrowseRange onSelectCategory={(cat) => setSelectedCategory(cat)} />

      {/* 3. "Our Products" Section (Responsive grid of products with hover overlays) */}
      <ProductGrid 
        selectedCategory={selectedCategory}
        onClearCategory={() => setSelectedCategory(undefined)}
      />

      {/* 4. "50+ Beautiful rooms inspiration" Slider Section */}
      <InspirationSection />

      {/* 5. "#FuniroFurniture" Social Gallery Section */}
      <ShareSetupGallery />
    </MainLayout>
  );
}

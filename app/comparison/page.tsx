'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ComparisonHeader from '@/components/comparison/ComparisonHeader';
import ComparisonTopCards, {
  ComparisonProductInfo,
  CATALOG_COMPARISON_OPTIONS,
} from '@/components/comparison/ComparisonTopCards';
import ComparisonTable from '@/components/comparison/ComparisonTable';
import FeatureBar from '@/components/shop/FeatureBar';

export default function ComparisonPage() {
  const [product1] = useState<ComparisonProductInfo>({
    id: 'asgaard-sofa',
    name: 'Asgaard Sofa',
    price: '₦ 250,000.00',
    rawPrice: 250000,
    rating: 4.7,
    reviewsCount: 204,
    image: '/images/asgaard_sofa_thumb.jpg',
  });

  const [product2, setProduct2] = useState<ComparisonProductInfo>(
    CATALOG_COMPARISON_OPTIONS[0] // Default: Outdoor Sofa Set
  );

  return (
    <MainLayout currentPath="/comparison">
      <div className="min-h-screen bg-white">
        {/* 1. Page Header Banner */}
        <ComparisonHeader />

        {/* 2. Main Comparison Container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
          {/* Comparison Top Cards */}
          <ComparisonTopCards
            product1={product1}
            product2={product2}
            onSelectProduct2={(selected) => setProduct2(selected)}
          />

          {/* Full Specifications Comparison Table */}
          <ComparisonTable product1={product1} product2={product2} />
        </section>

        {/* 3. Customer Trust / Feature Bar */}
        <FeatureBar />
      </div>
    </MainLayout>
  );
}

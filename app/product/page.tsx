'use client';

import React, { Suspense } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductDetailsView from '@/components/product/ProductDetailsView';

export default function SingleProductPage() {
  return (
    <MainLayout currentPath="/shop">
      <main>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <ProductDetailsView />
        </Suspense>
      </main>
    </MainLayout>
  );
}

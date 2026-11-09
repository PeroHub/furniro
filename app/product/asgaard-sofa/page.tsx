'use client';

import React, { Suspense } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductDetailsView from '@/components/product/ProductDetailsView';

export default function AsgaardSofaPage() {
  return (
    <MainLayout currentPath="/shop">
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <ProductDetailsView productId="asgaard-sofa" />
      </Suspense>
    </MainLayout>
  );
}

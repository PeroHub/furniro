'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductDetailsView from '@/components/product/ProductDetailsView';

export default function AsgaardSofaPage() {
  return (
    <MainLayout currentPath="/shop">
      <ProductDetailsView />
    </MainLayout>
  );
}

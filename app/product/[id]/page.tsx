import React, { Suspense } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductDetailsView from '@/components/product/ProductDetailsView';
import { ALL_PRODUCTS } from '@/lib/products';

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({
    id: p.id,
  }));
}

interface DynamicProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function DynamicProductPage({
  params,
}: DynamicProductPageProps) {
  const { id } = await params;

  return (
    <MainLayout currentPath="/shop">
      <main>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <ProductDetailsView productId={id} />
        </Suspense>
      </main>
    </MainLayout>
  );
}

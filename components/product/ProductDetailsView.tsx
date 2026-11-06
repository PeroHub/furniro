'use client';

import React from 'react';
import ProductBreadcrumb from './ProductBreadcrumb';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';

export default function ProductDetailsView() {
  return (
    <article className="bg-white min-h-screen">
      {/* 1. Breadcrumb Navigation Bar */}
      <ProductBreadcrumb productName="Asgaard sofa" />

      {/* 2. Main Product Details Section (Two-Column Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Image Gallery View */}
          <div className="lg:col-span-7">
            <ProductGallery productName="Asgaard sofa" />
          </div>

          {/* Right Column: Product Specs & Purchase Options */}
          <div className="lg:col-span-5">
            <ProductInfo />
          </div>
        </div>
      </div>

      {/* 3. Product Tabbed Information Section */}
      <ProductTabs />

      {/* 4. "Related Products" Grid Section */}
      <RelatedProducts />
    </article>
  );
}

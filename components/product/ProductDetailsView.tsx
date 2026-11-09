'use client';

import React from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import ProductBreadcrumb from './ProductBreadcrumb';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';
import { getProductById, Product, formatNaira } from '@/context/StoreContext';

interface ProductDetailsViewProps {
  productId?: string;
  initialProduct?: Product;
}

export default function ProductDetailsView({
  productId,
  initialProduct,
}: ProductDetailsViewProps) {
  const params = useParams();
  const searchParams = useSearchParams();

  const activeId =
    productId ||
    (params?.id as string) ||
    searchParams?.get('id') ||
    'asgaard-sofa';

  const product = initialProduct || getProductById(activeId);

  return (
    <article className="bg-white min-h-screen">
      {/* 1. Breadcrumb Navigation Bar */}
      <ProductBreadcrumb productName={product.name} />

      {/* 2. Main Product Details Section (Two-Column Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Image Gallery View */}
          <div className="lg:col-span-7">
            <ProductGallery
              productName={product.name}
              mainImage={product.image}
              images={product.images || [product.image]}
            />
          </div>

          {/* Right Column: Product Specs & Purchase Options */}
          <div className="lg:col-span-5">
            <ProductInfo
              product={{
                id: product.id,
                name: product.name,
                subtitle: product.subtitle,
                price: product.price,
                priceFormatted: formatNaira(product.price),
                description: product.description,
                sku: product.sku || 'SS001',
                category:
                  product.category.charAt(0).toUpperCase() +
                  product.category.slice(1),
                tags: product.tags || 'Furniture, Modern, Home',
                image: product.image,
                rating: product.rating,
                reviewsCount: product.reviewsCount,
              }}
            />
          </div>
        </div>
      </div>

      {/* 3. Product Tabbed Information Section */}
      <ProductTabs product={product} />

      {/* 4. "Related Products" Grid Section */}
      <RelatedProducts
        currentProductId={product.id}
        category={product.category}
      />
    </article>
  );
}

'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { 
  useStore, 
  Product, 
  INITIAL_PRODUCTS, 
  MORE_PRODUCTS,
  formatNaira
} from '@/context/StoreContext';

interface ProductGridProps {
  selectedCategory?: string;
  onClearCategory?: () => void;
}

export default function ProductGrid({
  selectedCategory,
  onClearCategory,
}: ProductGridProps) {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    showToast,
  } = useStore();

  const [expanded, setExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Sync category filter
  const currentFilter = selectedCategory || activeFilter;

  const allProducts = expanded 
    ? [...INITIAL_PRODUCTS, ...MORE_PRODUCTS] 
    : INITIAL_PRODUCTS;

  const filteredProducts = currentFilter === 'all'
    ? allProducts
    : allProducts.filter((p) => p.category === currentFilter);

  const handleShare = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(`Link to "${product.name}" copied to clipboard!`);
    } else {
      showToast(`Shared "${product.name}"!`);
    }
  };

  const handleCompare = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    showToast(`Added "${product.name}" to comparison table`);
  };

  const handleLike = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <section id="shop" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Centered Section Title */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight text-[#3A3A3A] font-['Poppins',sans-serif] mb-3">
            Our Products
          </h2>
          <p className="text-sm sm:text-base text-[#666666] font-['Poppins',sans-serif]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Optional Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All' },
              { id: 'chair', label: 'Chairs' },
              { id: 'sofa', label: 'Sofas' },
              { id: 'lamp', label: 'Lamps' },
              { id: 'table', label: 'Tables' },
              { id: 'bed', label: 'Bedroom' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  if (onClearCategory) onClearCategory();
                }}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  currentFilter === tab.id
                    ? 'bg-[#B88E2F] text-white shadow-xs'
                    : 'bg-[#F4F5F7] text-[#666666] hover:bg-neutral-200 hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4x2 Responsive Product Grid (8 products) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isLiked={isInWishlist(product.id)}
              onAddToCart={handleAddToCart}
              onShare={handleShare}
              onCompare={handleCompare}
              onLike={handleLike}
            />
          ))}
        </div>

        {/* Centered Outlined Button at bottom: "Show More" with gold border */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setExpanded(!expanded);
              showToast(expanded ? 'Showing standard 8 items' : 'Loaded full product catalog');
            }}
            className="px-16 py-3.5 border border-[#B88E2F] text-[#B88E2F] text-sm font-semibold tracking-wide hover:bg-[#B88E2F] hover:text-white transition-all duration-200 cursor-pointer rounded-xs"
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}

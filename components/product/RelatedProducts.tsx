'use client';

import React from 'react';
import ProductCard from '@/components/home/ProductCard';
import { useStore, INITIAL_PRODUCTS, Product } from '@/context/StoreContext';

export default function RelatedProducts() {
  const { addToCart, toggleWishlist, isInWishlist, showToast } = useStore();

  // 4 items: Syltherine, Leviosa, Lolito, Respira
  const relatedList = INITIAL_PRODUCTS.slice(0, 4);

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
    <section className="border-t border-[#D9D9D9] py-14 sm:py-18 bg-white font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Centered Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black font-['Montserrat',sans-serif] mb-10 tracking-tight">
          Related Products
        </h2>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {relatedList.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              isLiked={isInWishlist(item.id)}
              onAddToCart={handleAddToCart}
              onShare={handleShare}
              onCompare={handleCompare}
              onLike={handleLike}
            />
          ))}
        </div>

        {/* Centered Outlined Button: "Show More" with gold border */}
        <div className="mt-12 text-center">
          <button
            onClick={() => showToast('Browsing all related collections')}
            className="px-16 py-3.5 border border-[#B88E2F] text-[#B88E2F] text-sm font-semibold tracking-wide hover:bg-[#B88E2F] hover:text-white transition-all duration-200 cursor-pointer rounded-xs"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}

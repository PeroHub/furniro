'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Share2, ArrowLeftRight, Heart, Eye } from 'lucide-react';
import { Product, formatNaira, useStore } from '@/context/StoreContext';

export interface ProductCatalogGridProps {
  products?: Product[];
  viewMode?: 'grid' | 'list';
}

// 4 base items repeating across the 4x4 16-card grid
export const BASE_SHOP_ITEMS: Product[] = [
  {
    id: 'syltherine',
    name: 'Syltherine',
    subtitle: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    image: '/images/product_cafe_chair_1793965648211.jpg',
    badge: { type: 'discount', text: '-30%' },
    category: 'chair',
  },
  {
    id: 'leviosa',
    name: 'Leviosa',
    subtitle: 'Stylish cafe chair',
    price: 2500000,
    image: '/images/product_cafe_chair_1793965648211.jpg',
    category: 'chair',
  },
  {
    id: 'lolito',
    name: 'Lolito',
    subtitle: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    image: '/images/product_luxury_sofa_1793965649590.jpg',
    badge: { type: 'discount', text: '-50%' },
    category: 'sofa',
  },
  {
    id: 'respira',
    name: 'Respira',
    subtitle: 'Outdoor bar table and stool',
    price: 500000,
    image: '/images/category_dining_table_1793965623267.jpg',
    badge: { type: 'new', text: 'New' },
    category: 'table',
  },
];

// Build 16 products for page 1
export const DEFAULT_16_PRODUCTS: Product[] = Array.from({ length: 16 }).map((_, i) => {
  const base = BASE_SHOP_ITEMS[i % 4];
  return {
    ...base,
    id: `${base.id}-${i + 1}`,
  };
});

export default function ProductCatalogGrid({
  products = DEFAULT_16_PRODUCTS,
  viewMode = 'grid',
}: ProductCatalogGridProps) {
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist, showToast } = useStore();

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
    <section className="py-12 sm:py-16 bg-white font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {viewMode === 'grid' ? (
          /* 4x4 Responsive Grid (4 columns on lg, 2 on sm, 1 on xs) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product, index) => {
              const isLiked = isInWishlist(product.id);
              // Card index 1 (Leviosa row 1) demonstrates active hover overlay directly as seen in Shop_cb9a5dfb.png!
              const isDemoActiveOverlay = index === 1;
              const cleanId = product.id.replace(/-\d+$/, '');
              const productHref = `/product/${cleanId}`;

              return (
                <article
                  key={product.id}
                  className="group relative bg-[#F4F5F7] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
                >
                  {/* Image container with absolute circular badges */}
                  <Link
                    href={productHref}
                    className="block relative w-full aspect-square bg-[#EAECF0] overflow-hidden cursor-pointer"
                    aria-label={`View details of ${product.name}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Circular Badges: Red -30% / -50% or Green New */}
                    {product.badge && (
                      <div
                        className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-medium z-10 shadow-xs ${
                          product.badge.type === 'discount'
                            ? 'bg-[#E97171]'
                            : 'bg-[#2EC1AC]'
                        }`}
                      >
                        {product.badge.text}
                      </div>
                    )}
                  </Link>

                  {/* Light Gray Details Container Below (bg-[#F4F5F7]) */}
                  <div className="pt-3.5 sm:pt-4 px-3.5 sm:px-4 pb-5 sm:pb-[30px] flex-1 flex flex-col justify-between bg-[#F4F5F7]">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-semibold text-[#3A3A3A] tracking-tight mb-1 font-['Poppins',sans-serif]">
                        <Link href={productHref} className="hover:text-[#B88E2F] transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-[#898989] font-medium mb-2 font-['Poppins',sans-serif]">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Price Row + Mobile Actions */}
                    <div className="flex items-center justify-between gap-2 mt-2">
                      <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap font-['Poppins',sans-serif]">
                        <span className="text-sm sm:text-lg font-semibold text-[#3A3A3A] tabular-nums">
                          {formatNaira(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[11px] sm:text-sm text-[#B0B0B0] line-through tabular-nums">
                            {formatNaira(product.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Mobile Quick Action Buttons */}
                      <div className="flex items-center gap-1 sm:hidden shrink-0">
                        <Link
                          href={productHref}
                          className="p-1.5 rounded-full text-neutral-500 hover:text-[#B88E2F] transition-colors"
                          aria-label={`View ${product.name} details`}
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(product.id);
                          }}
                          className={`p-1.5 rounded-full transition-colors ${
                            isInWishlist(product.id) ? 'text-[#E97171]' : 'text-neutral-500 hover:text-[#B88E2F]'
                          }`}
                          aria-label="Wishlist"
                        >
                          <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product, 1);
                          }}
                          className="px-2.5 py-1 bg-[#B88E2F] hover:bg-[#9E7A26] text-white text-xs font-semibold rounded-xs shadow-xs transition-colors"
                          aria-label="Add to cart"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Mask Overlay (Permanent on index 1 matching Figma screenshot, hover-triggered on all others) */}
                  <div
                    onClick={() => router.push(productHref)}
                    className={`absolute inset-0 bg-[#3A3A3A]/72 transition-opacity duration-300 flex flex-col items-center justify-center p-6 z-20 cursor-pointer ${
                      isDemoActiveOverlay
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {/* Centered White "Add to cart" Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product, e);
                      }}
                      className="w-48 py-3.5 bg-white text-[#B88E2F] font-bold text-sm rounded-xs shadow-md hover:bg-[#B88E2F] hover:text-white transition-colors duration-200 uppercase tracking-wide cursor-pointer text-center"
                    >
                      Add to cart
                    </button>

                    {/* Prominent "View Details" Button */}
                    <Link
                      href={productHref}
                      onClick={(e) => e.stopPropagation()}
                      className="w-48 mt-3 py-2.5 bg-transparent border border-white text-white font-bold text-xs rounded-xs shadow-xs hover:bg-white hover:text-[#3A3A3A] transition-colors duration-200 uppercase tracking-wide text-center cursor-pointer inline-flex items-center justify-center"
                    >
                      View Details
                    </Link>

                    {/* Inline Action Links: "Share", "Compare", and "Like" */}
                    <div 
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-5 mt-5 text-white text-xs font-semibold cursor-default"
                    >
                      <button
                        onClick={(e) => handleShare(product, e)}
                        className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
                        title="Share"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>

                      <button
                        onClick={(e) => handleCompare(product, e)}
                        className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
                        title="Compare"
                      >
                        <ArrowLeftRight className="w-4 h-4" />
                        <span>Compare</span>
                      </button>

                      <button
                        onClick={(e) => handleLike(product, e)}
                        className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                          isLiked ? 'text-[#E97171]' : 'hover:text-[#B88E2F]'
                        }`}
                        title="Like"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        <span>Like</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* List View Mode */
          <div className="flex flex-col gap-6">
            {products.map((product) => {
              const isLiked = isInWishlist(product.id);
              const cleanId = product.id.replace(/-\d+$/, '');
              const productHref = `/product/${cleanId}`;

              return (
                <article
                  key={product.id}
                  className="group bg-[#F4F5F7] rounded-sm p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-5 w-full sm:w-auto">
                    <Link
                      href={productHref}
                      className="relative w-28 h-28 bg-[#EAECF0] rounded-sm overflow-hidden shrink-0 cursor-pointer block"
                      aria-label={`View details of ${product.name}`}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="112px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </Link>
                    <div>
                      <h3 className="text-xl font-semibold text-[#3A3A3A] font-['Poppins',sans-serif]">
                        <Link href={productHref} className="hover:text-[#B88E2F] transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-[#898989] mb-2 font-['Poppins',sans-serif]">
                        {product.subtitle}
                      </p>
                      <div className="flex items-baseline gap-3 font-['Poppins',sans-serif]">
                        <span className="text-lg font-semibold text-[#3A3A3A]">
                          {formatNaira(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-[#B0B0B0] line-through">
                            {formatNaira(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button
                      onClick={(e) => handleLike(product, e)}
                      className={`p-2 rounded-full border border-neutral-300 hover:border-[#B88E2F] transition-colors ${
                        isLiked ? 'text-red-500 border-red-300' : 'text-neutral-500'
                      }`}
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                    <Link
                      href={productHref}
                      className="px-5 py-2.5 border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold text-xs rounded uppercase transition-colors inline-flex items-center justify-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      className="px-6 py-2.5 bg-[#B88E2F] text-white font-semibold text-xs rounded uppercase hover:bg-[#9E7A26] transition-colors"
                    >
                      Add to cart
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

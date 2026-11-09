'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Share2, ArrowLeftRight, Heart, Eye } from 'lucide-react';
import { Product, formatNaira } from '@/context/StoreContext';

export interface ProductCardProps {
  product: Product;
  isLiked?: boolean;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onShare: (product: Product, e: React.MouseEvent) => void;
  onCompare: (product: Product, e: React.MouseEvent) => void;
  onLike: (product: Product, e: React.MouseEvent) => void;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({
  product,
  isLiked = false,
  onAddToCart,
  onShare,
  onCompare,
  onLike,
}: ProductCardProps) {
  const router = useRouter();
  const productHref = `/product/${product.id.replace(/-\d+$/, '')}`;

  return (
    <article className="group relative bg-[#F4F5F7] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
      {/* 1. Top Image Container with Absolute Circular Badges */}
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

        {/* Circular absolute-positioned badges on top-right of image */}
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

      {/* 2. Light Gray Details Container Below (bg-[#F4F5F7]) */}
      <div className="pt-3.5 sm:pt-4 px-3.5 sm:px-4 pb-5 sm:pb-[30px] flex-1 flex flex-col justify-between bg-[#F4F5F7]">
        <div>
          {/* Product Title */}
          <h3 className="text-lg sm:text-2xl font-semibold text-[#3A3A3A] tracking-tight mb-1 font-['Poppins',sans-serif]">
            <Link href={productHref} className="hover:text-[#B88E2F] transition-colors">
              {product.name}
            </Link>
          </h3>
          {/* Short Subtitle / Category */}
          <p className="text-xs sm:text-sm text-[#898989] font-medium mb-2 font-['Poppins',sans-serif]">
            {product.subtitle}
          </p>
        </div>

        {/* Price Row: Current price + Strikethrough original price + Mobile Touch Actions */}
        <div className="flex items-center justify-between gap-2 mt-2">
          <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
            <span className="text-sm sm:text-lg font-semibold text-[#3A3A3A] tabular-nums font-['Poppins',sans-serif]">
              {formatNaira(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] sm:text-sm text-[#B0B0B0] line-through tabular-nums font-['Poppins',sans-serif]">
                {formatNaira(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Mobile Quick Action Buttons (shown only on touch/mobile screens where hover is unavailable) */}
          <div className="flex items-center gap-1 sm:hidden shrink-0">
            <Link
              href={productHref}
              className="p-1.5 rounded-full text-neutral-500 hover:text-[#B88E2F] transition-colors"
              aria-label={`View ${product.name} details`}
            >
              <Eye className="w-4 h-4" />
            </Link>
            <button
              onClick={(e) => onLike(product, e)}
              className={`p-1.5 rounded-full transition-colors ${
                isLiked ? 'text-[#E97171]' : 'text-neutral-500 hover:text-[#B88E2F]'
              }`}
              aria-label="Wishlist"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => onAddToCart(product, e)}
              className="px-2.5 py-1 bg-[#B88E2F] hover:bg-[#9E7A26] text-white text-xs font-semibold rounded-xs shadow-xs transition-colors"
              aria-label="Add to cart"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* 3. Hover Mask Overlay (semi-transparent dark mask with action buttons) */}
      <div 
        onClick={() => router.push(productHref)}
        className="absolute inset-0 bg-[#3A3A3A]/72 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 z-20 cursor-pointer"
      >
        {/* Centered White "Add to cart" Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product, e);
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
          {/* Share */}
          <button
            onClick={(e) => onShare(product, e)}
            className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>

          {/* Compare */}
          <button
            onClick={(e) => onCompare(product, e)}
            className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
            title="Compare"
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Compare</span>
          </button>

          {/* Like */}
          <button
            onClick={(e) => onLike(product, e)}
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
}
